import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PropertyListings } from "@/components/property-listings"
import { BuyabilitySection } from "@/components/buyability-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertyListings />
      <BuyabilitySection />
      <Footer />
    </main>
  )
}
