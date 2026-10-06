import ConsoleHero from "@/components/ConsoleComponent/ConsoleHero";
import StatusBoard from "@/components/ConsoleComponent/StatusBoard";
import LayerSchematic from "@/components/ConsoleComponent/LayerSchematic";
import MetricsStrip from "@/components/ConsoleComponent/MetricsStrip";
import Timeline from "@/components/ConsoleComponent/Timeline";
import Runbooks from "@/components/ConsoleComponent/Runbooks";
import InvariantList from "@/components/ConsoleComponent/InvariantList";
import OpenTicket from "@/components/ConsoleComponent/OpenTicket";

/**
 * The home page is an instrument panel for a service: an inverted status band,
 * then what is running and what was stopped, the request path, the readouts,
 * the service history, the runbooks, the invariants, and one door.
 */
export default function Home() {
  return (
    <main id="main-content">
      <ConsoleHero />
      <StatusBoard />
      <LayerSchematic />
      <MetricsStrip />
      <Timeline />
      <Runbooks />
      <InvariantList />
      <OpenTicket />
    </main>
  );
}
