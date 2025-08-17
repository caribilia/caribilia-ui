import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Bed, Bath, Square, MapPin, Calendar, DollarSign, PawPrint } from "lucide-react"

const rentals = [
  {
    id: 1,
    image: "/modern-apartment.png",
    rent: "$2,800/month",
    deposit: "$2,800",
    address: "1234 Market Street, San Francisco, CA",
    beds: 2,
    baths: 2,
    sqft: "1,100",
    available: "Available Now",
    leaseTerms: "12 months",
    petFriendly: true,
    type: "Apartment",
  },
  {
    id: 2,
    image: "/rental-townhouse.png",
    rent: "$3,200/month",
    deposit: "$3,200",
    address: "5678 Oak Avenue, Palo Alto, CA",
    beds: 3,
    baths: 2.5,
    sqft: "1,650",
    available: "Dec 1st",
    leaseTerms: "12 months",
    petFriendly: false,
    type: "Townhouse",
  },
  {
    id: 3,
    image: "/studio-apartment.png",
    rent: "$1,950/month",
    deposit: "$1,950",
    address: "9012 Pine Street, Mountain View, CA",
    beds: 0,
    baths: 1,
    sqft: "650",
    available: "Available Now",
    leaseTerms: "Month-to-Month",
    petFriendly: true,
    type: "Studio",
  },
  {
    id: 4,
    image: "/luxury-rental.png",
    rent: "$4,500/month",
    deposit: "$4,500",
    address: "3456 Elm Drive, Los Altos, CA",
    beds: 3,
    baths: 3,
    sqft: "2,100",
    available: "Jan 15th",
    leaseTerms: "12 months",
    petFriendly: true,
    type: "House",
  },
  {
    id: 5,
    image: "/modern-condo.png",
    rent: "$2,400/month",
    deposit: "$2,400",
    address: "7890 Cedar Lane, Sunnyvale, CA",
    beds: 1,
    baths: 1,
    sqft: "850",
    available: "Available Now",
    leaseTerms: "6-12 months",
    petFriendly: false,
    type: "Condo",
  },
  {
    id: 6,
    image: "/family-rental.png",
    rent: "$3,800/month",
    deposit: "$3,800",
    address: "2468 Birch Street, Cupertino, CA",
    beds: 4,
    baths: 3,
    sqft: "2,200",
    available: "Feb 1st",
    leaseTerms: "12 months",
    petFriendly: true,
    type: "House",
  },
]

export function RentPropertyGrid() {
  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-serif text-2xl font-bold text-slate-900">Rentals Available</h2>
          <p className="text-slate-600">892 rental properties in your area</p>
        </div>
        <select className="border border-slate-200 rounded-lg px-4 py-2 text-sm">
          <option>Sort: Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Available Date</option>
          <option>Square Feet</option>
        </select>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {rentals.map((rental) => (
          <Card key={rental.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={rental.image || "/placeholder.svg"}
                alt={rental.address}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
                <Heart className="h-5 w-5 text-slate-600 hover:text-red-500" />
              </button>
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge
                  variant="default"
                  className={rental.available === "Available Now" ? "bg-green-600" : "bg-blue-600"}
                >
                  {rental.available}
                </Badge>
                {rental.petFriendly && (
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    <PawPrint className="h-3 w-3 mr-1" />
                    Pet OK
                  </Badge>
                )}
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">{rental.rent}</h3>
                  <div className="flex items-center text-slate-600 mt-1">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="text-sm">{rental.deposit} deposit</span>
                  </div>
                  <div className="flex items-center text-slate-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{rental.address}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="text-sm">{rental.beds === 0 ? "Studio" : `${rental.beds} beds`}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{rental.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span className="text-sm">{rental.sqft} sqft</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{rental.leaseTerms}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {rental.type}
                  </Badge>
                </div>

                <Button className="w-full bg-emerald-700 hover:bg-emerald-800">Contact Property</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="px-8 bg-transparent">
          Load More Rentals
        </Button>
      </div>
    </div>
  )
}
