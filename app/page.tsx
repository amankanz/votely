import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import CategoriesSection from "@/components/CategoriesSection";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import TestimonialsSection from "@/components/TestimonialsSection";
import KeyFeatures from "@/components/KeyFeatures";
import CTASection from "@/components/CTASection";
import AwardsShowcase from "@/components/AwardsShowcase";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <Main>
      <Hero />
      <KeyFeatures />
      <FeaturedBusinesses />
      <CategoriesSection />
      <TestimonialsSection />
      <CTASection />
      <AwardsShowcase />
      <FAQSection />
    </Main>
  );
}
