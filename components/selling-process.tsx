import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, PresentationIcon as PresentationChart, Users, Key } from "lucide-react"

export function SellingProcess() {
  const steps = [
    {
      icon: Camera,
      title: "Prepare Your Home",
      description: "Professional photography, staging advice, and home improvements to maximize appeal.",
      timeline: "Week 1-2",
      tasks: ["Professional photos", "Home staging", "Minor repairs", "Curb appeal"],
    },
    {
      icon: PresentationChart,
      title: "Price & Market",
      description: "Set the right price based on market analysis and create compelling listing materials.",
      timeline: "Week 2-3",
      tasks: ["Market analysis", "Pricing strategy", "MLS listing", "Marketing plan"],
    },
    {
      icon: Users,
      title: "Show & Negotiate",
      description: "Host showings, review offers, and negotiate the best terms for your sale.",
      timeline: "Week 3-6",
      tasks: ["Schedule showings", "Review offers", "Negotiate terms", "Accept offer"],
    },
    {
      icon: Key,
      title: "Close the Sale",
      description: "Handle inspections, appraisals, and final paperwork to complete your sale.",
      timeline: "Week 6-10",
      tasks: ["Home inspection", "Appraisal", "Final walkthrough", "Closing day"],
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Your Selling Journey, Step by Step
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We'll guide you through every stage of selling your home, from preparation to closing day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="font-serif text-xl">{step.title}</CardTitle>
                  <div className="text-sm text-orange-600 font-semibold">{step.timeline}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm">{step.description}</p>
                  <div className="space-y-2">
                    {step.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center text-xs text-slate-500">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                        {task}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8 mr-4">
              Start Selling Process
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              Download Selling Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
