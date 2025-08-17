"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Calendar, DollarSign, MapIcon, BarChart3 } from "lucide-react"
import { MapLayout } from "./map-layout"

// Mock recent sales data for the map
const recentSales = [
  {
    id: "sale1",
    title: "Recently Sold",
    price: "$780,000",
    address: "456 Elm Street, Santa Clara, CA 95050",
    beds: 3,
    baths: 2,
    sqft: "1,800 sqft",
    image: "/placeholder.svg?height=300&width=400&text=Recently+Sold+Home",
    lat: 37.3541,
    lng: -121.9552,
    type: "sale" as const,
  },
  {
    id: "sale2",
    title: "Recently Sold",
    price: "$850,000",
    address: "789 Oak Avenue, Santa Clara, CA 95051",
    beds: 4,
    baths: 3,
    sqft: "2,200 sqft",
    image: "/placeholder.svg?height=300&width=400&text=Recently+Sold+Home",
    lat: 37.3641,
    lng: -121.9452,
    type: "sale" as const,
  },
  {
    id: "sale3",
    title: "Recently Sold",
    price: "$920,000",
    address: "321 Pine Street, Santa Clara, CA 95054",
    beds: 4,
    baths: 2.5,
    sqft: "2,400 sqft",
    image: "/placeholder.svg?height=300&width=400&text=Recently+Sold+Home",
    lat: 37.3441,
    lng: -121.9652,
    type: "sale" as const,
  },
]

export function MarketInsights() {
  const [showMap, setShowMap] = useState(false)

  const marketData = [
    {
      metric: "Median Sale Price",
      value: "$825,000",
      change: "+8.2%",
      trend: "up",
      period: "vs last year",
    },
    {
      metric: "Days on Market",
      value: "18 days",
      change: "-5 days",
      trend: "down",
      period: "vs last year",
    },
    {
      metric: "Sale-to-List Ratio",
      value: "102.1%",
      change: "+1.8%",
      trend: "up",
      period: "vs last year",
    },
    {
      metric: "Inventory Level",
      value: "1.2 months",
      change: "-0.3 months",
      trend: "down",
      period: "vs last year",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Market Insights</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Stay informed with the latest market trends and data for your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketData.map((data, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-slate-700">{data.metric}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-3xl font-bold text-slate-900">{data.value}</div>
                  <div className="flex items-center justify-center space-x-2">
                    {data.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    )}
                    <Badge
                      variant="secondary"
                      className={data.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                    >
                      {data.change}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500">{data.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-serif text-2xl text-slate-900">Recent Sales in Your Area</CardTitle>
                  <p className="text-slate-600 mt-2">See what homes have sold recently to understand market trends</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={!showMap ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowMap(false)}
                    className="flex items-center gap-2"
                  >
                    <BarChart3 className="h-4 w-4" />
                    Stats
                  </Button>
                  <Button
                    variant={showMap ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowMap(true)}
                    className="flex items-center gap-2"
                  >
                    <MapIcon className="h-4 w-4" />
                    Map
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {showMap ? (
                <div className="h-[400px] rounded-lg border overflow-hidden">
                  <MapLayout properties={recentSales} />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentSales.map((sale) => (
                    <Card key={sale.id} className="hover:shadow-md transition-shadow">
                      <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Recently Sold</span>
                      </div>
                      <CardContent className="p-4">
                        <div className="font-bold text-lg text-slate-900 mb-1">{sale.price}</div>
                        <div className="text-sm text-slate-600 mb-2">
                          {sale.beds} beds • {sale.baths} baths • {sale.sqft}
                        </div>
                        <div className="text-sm text-slate-500">{sale.address}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Market Summary */}
          <Card className="bg-gradient-to-r from-orange-50 to-slate-50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                    It's a Great Time to Sell in Santa Clara
                  </h3>
                  <div className="space-y-3 text-slate-600">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-orange-600 mr-2" />
                      <span>Home values have increased 8.2% year-over-year</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                      <span>Homes are selling 5 days faster than last year</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-orange-600 mr-2" />
                      <span>Sellers are getting 102% of their asking price on average</span>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-slate-600">of homes sell within 30 days</div>
                  <div className="text-2xl font-bold text-slate-900 mt-4">$825K</div>
                  <div className="text-slate-600">median sale price</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
