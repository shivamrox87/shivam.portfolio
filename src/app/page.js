import ConsoleHero from "@/components/ConsoleComponent/ConsoleHero";
import StatusBoard from "@/components/ConsoleComponent/StatusBoard";
import MetricsStrip from "@/components/ConsoleComponent/MetricsStrip";
import Runbooks from "@/components/ConsoleComponent/Runbooks";
import InvariantList from "@/components/ConsoleComponent/InvariantList";
import Changelog from "@/components/ConsoleComponent/Changelog";
import OpenTicket from "@/components/ConsoleComponent/OpenTicket";

/**
 * The home page is the operations console for a service: what is running, what
 * was stopped and why, the numbers, the runbooks, the invariants, the
 * changelog, and one door.
 */
export default function Home() {
  return (
    <main id="main-content">
      <ConsoleHero />
      <StatusBoard />
      <MetricsStrip />
      <Runbooks />
      <InvariantList />
      <Changelog />
      <OpenTicket />
    </main>
  );
}
