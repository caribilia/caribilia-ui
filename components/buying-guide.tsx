import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, FileText, Home, Users } from "lucide-react"

export function BuyingGuide() {
  const steps = [
    {
      icon: Calculator,
      title: "Get Pre-Approved",
      description: "Know your budget and show sellers you're serious with a mortgage pre-approval.",
      action: "Calculate Affordability",
    },
    {
      icon: Home,
      title: "Find Your Home",
      description: "Search properties, schedule tours, and work with our expert agents.",
      action: "Browse Properties",
    },
    {
      icon: FileText,
      title: "Make an Offer",
      description: "Submit competitive offers with guidance from experienced professionals.",
      action: "Learn About Offers",
    },
    {
      icon: Users,
      title: "Close the Deal",
      description: "Complete inspections, finalize financing, and get your keys.",
      action: "Find an Agent",
    },
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Your Home Buying Journey</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We'll guide you through every step of the home buying process, from pre-approval to closing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-cyan-800" />
                </div>
                <CardTitle className="font-serif text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{step.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  {step.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-cyan-800 hover:bg-cyan-900 px-8">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
