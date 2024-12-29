import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import CategoriesSection from "@/components/CategoriesSection";
import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <Main>
      <Hero />
      <FeaturedBusinesses />
      <CategoriesSection />
    </Main>
  );
}
