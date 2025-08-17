import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, FileText, Key, Shield } from "lucide-react"

export function RentalGuide() {
  const steps = [
    {
      icon: Search,
      title: "Search & Filter",
      description: "Browse available rentals and use filters to find properties that match your needs.",
      action: "Start Searching",
    },
    {
      icon: FileText,
      title: "Apply Online",
      description: "Submit rental applications with required documents and background checks.",
      action: "Learn About Applications",
    },
    {
      icon: Shield,
      title: "Get Approved",
      description: "Complete the approval process including credit checks and references.",
      action: "Check Requirements",
    },
    {
      icon: Key,
      title: "Move In",
      description: "Sign your lease, pay deposits, and get your keys to your new home.",
      action: "Moving Checklist",
    },
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Your Rental Journey</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From searching to signing, we make finding and securing your next rental simple and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-emerald-700" />
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

        <div className="text-center mt-12 space-y-4">
          <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 px-8 mr-4">
            Find Rentals Now
          </Button>
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Rental Resources
          </Button>
        </div>
      </div>
    </section>
  )
}
