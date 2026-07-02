import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import WhatIBuild from "@/components/WhatIBuild";
import WhyOnePerson from "@/components/WhyOnePerson";
import CaseStudySection from "@/components/CaseStudySection";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainSection />
        <WhatIBuild />
        <WhyOnePerson />
        <CaseStudySection />
        <AboutSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
