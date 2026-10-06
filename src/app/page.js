import Hero from "@/components/HomeComponent/Hero";
import Services from "@/components/HomeComponent/Services";
import Layer from "@/components/HomeComponent/Layer";
import Readouts from "@/components/HomeComponent/Readouts";
import History from "@/components/HomeComponent/History";
import Runbooks from "@/components/HomeComponent/Runbooks";
import Invariants from "@/components/HomeComponent/Invariants";
import Contact from "@/components/HomeComponent/Contact";

/**
 * The page opens with what was killed, because that decision is the most
 * differentiating thing on it, and everything after is the evidence.
 */
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <Layer />
      <Readouts />
      <History />
      <Runbooks />
      <Invariants />
      <Contact />
    </main>
  );
}
