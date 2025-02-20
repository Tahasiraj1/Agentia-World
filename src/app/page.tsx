import React from "react";
import PricingSectionCards from "@/components/Pricing";
import Hero from "@/components/Hero";
import PoweredBy from "@/components/PoweredBy";
import NeuralCapabilities from "@/components/NeuralCapabilities";
import Solutions from "@/components/Solutions";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
    <Hero />
    <PoweredBy />
    <NeuralCapabilities />
    <Solutions />
    <PricingSectionCards />
    <Contact />
    </>
  );
}
