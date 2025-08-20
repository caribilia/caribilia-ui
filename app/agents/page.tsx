"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AgentsHeroSection } from "@/components/agents-hero-section";
import { AgentsGrid } from "@/components/agents-grid";
import { AgentsStats } from "@/components/agents-stats";
import { AgentsFilters } from "@/components/agents-filters";

export default function AgentesPage() {
  const [filters, setFilters] = useState({});

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    console.log("Filters changed:", newFilters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AgentsHeroSection />
        <AgentsStats />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AgentsFilters onFiltersChange={handleFiltersChange} />
        </div>
        <AgentsGrid />
      </main>
      <Footer />
    </div>
  );
}
