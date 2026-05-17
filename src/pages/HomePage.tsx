import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import ScanDemo from "../components/ScanDemo";
import WordExperience from "../components/WordExperience";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import DownloadCTA from "../components/DownloadCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <ScanDemo />
      <WordExperience />
      <Reviews />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
