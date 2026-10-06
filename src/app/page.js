import HomeHero from "@/components/HomeComponent/HomeHero";
import SystemLayer from "@/components/HomeComponent/SystemLayer";
import ProductRecord from "@/components/HomeComponent/ProductRecord";
import ArgumentLadder from "@/components/HomeComponent/ArgumentLadder";
import StartConversation from "@/components/HomeComponent/StartConversation";

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <SystemLayer />
      <ProductRecord />
      <ArgumentLadder />
      <StartConversation />
    </main>
  );
}
