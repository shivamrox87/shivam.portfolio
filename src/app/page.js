import HomeHero from "@/components/HomeComponent/HomeHero";
import SystemLayer from "@/components/HomeComponent/SystemLayer";
import ProductRecord from "@/components/HomeComponent/ProductRecord";

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <SystemLayer />
      <ProductRecord />
    </main>
  );
}
