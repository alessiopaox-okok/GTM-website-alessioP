import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatItIs from "@/components/WhatItIs";
import WhatIBuild from "@/components/WhatIBuild";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatItIs />
        <WhatIBuild />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
