import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteArtwork from "@/components/RouteArtwork";

export default function SiteFrame({ children }) {
  return <div className="portfolio-site">
    <Header />
    <RouteArtwork />
    {children}<Footer />
  </div>;
}
