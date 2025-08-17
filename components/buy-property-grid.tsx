import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Bed, Bath, Square, MapPin, Calendar } from "lucide-react"

const properties = [
  {
    id: 1,
    image: "/modern-single-family-home.png",
    price: "$749,000",
    address: "1234 Oak Street, Santa Clara, CA",
    beds: 4,
    baths: 3,
    sqft: "2,150",
    status: "New",
    daysOnMarket: 5,
    type: "Single Family",
  },
  {
    id: 2,
    image: "/modern-suburban-homes.png",
    price: "$895,000",
    address: "5678 Pine Avenue, Palo Alto, CA",
    beds: 3,
    baths: 2.5,
    sqft: "1,890",
    status: "Price Reduced",
    daysOnMarket: 12,
    type: "Townhouse",
  },
  {
    id: 3,
    image: "/placeholder-7jzr5.png",
    price: "$625,000",
    address: "9012 Elm Court, Mountain View, CA",
    beds: 2,
    baths: 2,
    sqft: "1,200",
    status: "Open House",
    daysOnMarket: 3,
    type: "Condo",
  },
  {
    id: 4,
    image: "/luxury-home-with-pool.png",
    price: "$1,250,000",
    address: "3456 Maple Drive, Los Altos, CA",
    beds: 5,
    baths: 4,
    sqft: "3,200",
    status: "New",
    daysOnMarket: 1,
    type: "Single Family",
  },
  {
    id: 5,
    image: "/modern-townhouse.png",
    price: "$780,000",
    address: "7890 Cedar Lane, Sunnyvale, CA",
    beds: 3,
    baths: 2.5,
    sqft: "1,650",
    status: "For Sale",
    daysOnMarket: 8,
    type: "Townhouse",
  },
  {
    id: 6,
    image: "/contemporary-home.png",
    price: "$950,000",
    address: "2468 Birch Street, Cupertino, CA",
    beds: 4,
    baths: 3,
    sqft: "2,400",
    status: "For Sale",
    daysOnMarket: 15,
    type: "Single Family",
  },
]

export function BuyPropertyGrid() {
  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-serif text-2xl font-bold text-slate-900">Properties for Sale</h2>
          <p className="text-slate-600">1,247 homes available in your area</p>
        </div>
        <select className="border border-slate-200 rounded-lg px-4 py-2 text-sm">
          <option>Sort: Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Square Feet</option>
          <option>Days on Market</option>
        </select>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={property.image || "/placeholder.svg"}
                alt={property.address}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
                <Heart className="h-5 w-5 text-slate-600 hover:text-red-500" />
              </button>
              <div className="absolute top-4 left-4">
                <Badge
                  variant={property.status === "New" ? "default" : "secondary"}
                  className={
                    property.status === "New"
                      ? "bg-green-600"
                      : property.status === "Price Reduced"
                        ? "bg-orange-600"
                        : "bg-blue-600"
                  }
                >
                  {property.status}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">{property.price}</h3>
                  <div className="flex items-center text-slate-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.address}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{property.daysOnMarket} days on market</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {property.type}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="px-8 bg-transparent">
          Load More Properties
        </Button>
      </div>
    </div>
  )
}
