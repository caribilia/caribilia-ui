import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, TrendingUp, DollarSign, Clock } from "lucide-react"

export function SellHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-slate-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                Sell Your Home with Confidence
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Get your home's current market value instantly and connect with top-rated agents to maximize your sale
                price.
              </p>

              {/* Quick Home Value Form */}
              <Card className="bg-white shadow-xl">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Get Your Home's Value</h3>
                  <div className="space-y-4">
                    <Input placeholder="Enter your home address" className="h-12 text-lg" />
                    <Button className="w-full h-12 text-lg bg-orange-600 hover:bg-orange-700">
                      <Search className="mr-2 h-5 w-5" />
                      Get Free Home Value
                    </Button>
                  </div>
                  <p className="text-sm text-slate-500 mt-3 text-center">No obligation • Updated daily • 100% free</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Key Benefits */}
              <div className="grid grid-cols-1 gap-4">
                <Card className="bg-white/80 backdrop-blur">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Maximize Your Sale Price</h4>
                      <p className="text-slate-600 text-sm">Our agents sell homes for 2% more on average</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Sell Faster</h4>
                      <p className="text-slate-600 text-sm">Average time on market: 18 days vs 28 days</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Save on Fees</h4>
                      <p className="text-slate-600 text-sm">Competitive commission rates and transparent pricing</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
