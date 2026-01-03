import React, { createContext, useContext, useState, useCallback } from 'react';
import { Region, REGIONS } from '@/types/product';

interface RegionContextType {
  currentRegion: Region;
  setRegion: (regionCode: string) => void;
  formatPrice: (priceAED: number) => string;
  regions: Region[];
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const RegionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRegion, setCurrentRegion] = useState<Region>(REGIONS[0]);

  const setRegion = useCallback((regionCode: string) => {
    const region = REGIONS.find(r => r.code === regionCode);
    if (region) {
      setCurrentRegion(region);
    }
  }, []);

  const formatPrice = useCallback((priceAED: number) => {
    const convertedPrice = priceAED * currentRegion.priceMultiplier;
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(convertedPrice);
    
    return `${currentRegion.currencySymbol} ${formatted}`;
  }, [currentRegion]);

  return (
    <RegionContext.Provider value={{
      currentRegion,
      setRegion,
      formatPrice,
      regions: REGIONS,
    }}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};