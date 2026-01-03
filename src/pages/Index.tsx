import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import BestsellersSection from '@/components/home/BestsellersSection';
import ShopByConceptSection from '@/components/home/ShopByConceptSection';
import BundlesSection from '@/components/home/BundlesSection';
import SubscriptionCTA from '@/components/home/SubscriptionCTA';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TrustSection from '@/components/home/TrustSection';
import GiftingSection from '@/components/home/GiftingSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <BestsellersSection />
      <ShopByConceptSection />
      <BundlesSection />
      <SubscriptionCTA />
      <TestimonialsSection />
      <GiftingSection />
    </Layout>
  );
};

export default Index;