import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import LandownerForm from "@/components/LandownerForm";
import InvestorForm from "@/components/InvestorForm";
import DemandForm from "@/components/DemandForm";
import CPOForm from "@/components/CPOForm";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <LandownerForm />
        <InvestorForm />
        <DemandForm />
        <CPOForm />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
