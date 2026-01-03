import React, { createContext, useContext, useState, useCallback } from 'react';
import { CartItem, Product, Bundle } from '@/types/product';
import { toast } from 'sonner';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (item: Product | Bundle, quantity: number, isSubscription: boolean, type: 'product' | 'bundle') => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  toggleSubscription: (itemId: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const subtotal = items.reduce((sum, item) => {
    const price = item.isSubscription 
      ? (item.type === 'bundle' ? (item.product as Bundle).subscriptionPrice : (item.product as Product).subscriptionPrice)
      : (item.type === 'bundle' ? (item.product as Bundle).bundlePrice : (item.product as Product).price);
    return sum + (price * item.quantity);
  }, 0);

  const addItem = useCallback((
    product: Product | Bundle, 
    quantity: number, 
    isSubscription: boolean, 
    type: 'product' | 'bundle'
  ) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.isSubscription === isSubscription
      );
      
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      
      return [...prev, { product, quantity, isSubscription, type }];
    });
    
    toast.success(`${product.name} added to cart`, {
      description: isSubscription ? 'Subscribe & save applied' : undefined,
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== itemId));
    toast.success('Item removed from cart');
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(prev => prev.map(item => 
      item.product.id === itemId ? { ...item, quantity } : item
    ));
  }, []);

  const toggleSubscription = useCallback((itemId: string) => {
    setItems(prev => prev.map(item => 
      item.product.id === itemId ? { ...item, isSubscription: !item.isSubscription } : item
    ));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      toggleSubscription,
      clearCart,
      openCart,
      closeCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};