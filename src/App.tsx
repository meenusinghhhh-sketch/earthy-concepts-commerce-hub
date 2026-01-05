import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { RegionProvider } from "@/contexts/RegionContext";

import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Bundles from "./pages/Bundles";
import Concepts from "./pages/Concepts";
import ConceptDetail from "./pages/ConceptDetail";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import Learn from "./pages/Learn";
import Subscriptions from "./pages/Subscriptions";
import Gifts from "./pages/Gifts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RegionProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:slug" element={<ProductDetail />} />
              <Route path="/bundles" element={<Bundles />} />
              <Route path="/concepts" element={<Concepts />} />
              <Route path="/concepts/:id" element={<ConceptDetail />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/gifts" element={<Gifts />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </RegionProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;