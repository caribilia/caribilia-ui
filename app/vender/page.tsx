"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SellHeroSection } from "@/components/sell-hero-section"
import { HomeValuation } from "@/components/home-valuation"
import { SellingProcess } from "@/components/selling-process"
import { MarketInsights } from "@/components/market-insights"
import { AgentConnection } from "@/components/agent-connection"

export default function SellPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SellHeroSection />
      <HomeValuation />
      <SellingProcess />
      <MarketInsights />
      <AgentConnection />
      <Footer />
    </main>
  )
}
