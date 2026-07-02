import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustCounters } from "@/components/landing/TrustCounters";
import { Benefits } from "@/components/landing/Benefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { Referral } from "@/components/landing/Referral";
import { FooterCTA } from "@/components/landing/FooterCTA";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { LiveActivity } from "@/components/landing/LiveActivity";
import { ExitIntent } from "@/components/landing/ExitIntent";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustCounters />
      <Benefits />
      <Testimonials />
      <Referral />
      <FooterCTA />
      <StickyCTA />
      <LiveActivity />
      <ExitIntent />
    </main>
  );
}
