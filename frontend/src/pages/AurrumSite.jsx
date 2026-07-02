import React from "react";
import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import MarketTicker from "../components/site/MarketTicker";
import About from "../components/site/About";
import HowItWorks from "../components/site/HowItWorks";
import SampleBriefing from "../components/site/SampleBriefing";
import Pricing from "../components/site/Pricing";
import Contact from "../components/site/Contact";
import Footer from "../components/site/Footer";

export default function AurrumSite() {
  return (
    <div data-testid="aurrum-landing" className="relative">
      <Navbar />
      <main>
        <Hero />
        <MarketTicker />
        <About />
        <HowItWorks />
        <SampleBriefing />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
