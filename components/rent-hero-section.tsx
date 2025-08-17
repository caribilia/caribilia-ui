import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin } from "lucide-react"

export function RentHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-slate-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Find Your Next Rental</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Discover apartments, houses, and condos for rent. From studios to luxury homes, find the perfect rental that
            fits your lifestyle and budget.
          </p>

          {/* Enhanced Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="md:col-span-2 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Enter city, neighborhood, or ZIP code"
                  className="pl-10 h-12 text-lg border-slate-200"
                />
              </div>
              <Select>
                <SelectTrigger className="h-12 text-lg">
                  <SelectValue placeholder="Monthly Rent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1500">$0 - $1,500</SelectItem>
                  <SelectItem value="1500-2500">$1,500 - $2,500</SelectItem>
                  <SelectItem value="2500-3500">$2,500 - $3,500</SelectItem>
                  <SelectItem value="3500-5000">$3,500 - $5,000</SelectItem>
                  <SelectItem value="5000+">$5,000+</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-12 text-lg">
                  <SelectValue placeholder="Move-in Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1month">Within 1 month</SelectItem>
                  <SelectItem value="2months">Within 2 months</SelectItem>
                  <SelectItem value="3months">Within 3 months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full h-12 text-lg bg-emerald-700 hover:bg-emerald-800">
              <Search className="mr-2 h-5 w-5" />
              Search Rentals
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
