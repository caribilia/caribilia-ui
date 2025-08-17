import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Phone } from "lucide-react"

export function AgentConnection() {
  const agents = [
    {
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      image: "/agent-sarah.png",
      rating: 4.9,
      reviews: 127,
      sales: 45,
      avgDays: 16,
      specialties: ["Luxury Homes", "First-Time Sellers"],
      phone: "(555) 123-4567",
    },
    {
      name: "Michael Chen",
      title: "Real Estate Specialist",
      image: "/agent-michael.png",
      rating: 4.8,
      reviews: 89,
      sales: 38,
      avgDays: 19,
      specialties: ["Investment Properties", "Condos"],
      phone: "(555) 234-5678",
    },
    {
      name: "Emily Rodriguez",
      title: "Top Performing Agent",
      image: "/agent-emily.png",
      rating: 5.0,
      reviews: 156,
      sales: 52,
      avgDays: 14,
      specialties: ["Family Homes", "Quick Sales"],
      phone: "(555) 345-6789",
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Connect with Top-Rated Agents
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Work with experienced professionals who know your local market and will help you get the best price for
              your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {agents.map((agent, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-20 h-20 bg-slate-200 rounded-full mb-4 overflow-hidden">
                    <img
                      src={agent.image || "/placeholder.svg?height=80&width=80&query=professional headshot"}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-serif text-xl">{agent.name}</CardTitle>
                  <p className="text-slate-600 text-sm">{agent.title}</p>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{agent.rating}</span>
                    <span className="text-slate-500 text-sm">({agent.reviews} reviews)</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{agent.sales}</div>
                      <div className="text-xs text-slate-600">Homes Sold</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{agent.avgDays}</div>
                      <div className="text-xs text-slate-600">Avg Days</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-700">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {agent.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Agent
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent text-sm">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="font-serif text-2xl font-bold mb-4">Ready to Sell Your Home?</h3>
                <p className="text-orange-100 mb-6">
                  Get started with a free home valuation and connect with a top-rated agent in your area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                    Get Free Home Value
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    Find an Agent
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
