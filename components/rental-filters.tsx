import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export function RentalFilters() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">Rental Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Monthly Rent */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Monthly Rent</label>
            <div className="space-y-3">
              <Slider defaultValue={[1500, 3500]} max={8000} min={500} step={100} className="w-full" />
              <div className="flex justify-between text-sm text-slate-600">
                <span>$1,500</span>
                <span>$3,500</span>
              </div>
            </div>
          </div>

          {/* Move-in Date */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Move-in Date</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1month">Within 1 month</SelectItem>
                <SelectItem value="2months">Within 2 months</SelectItem>
                <SelectItem value="3months">Within 3 months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Property Type */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Property Type</label>
            <div className="space-y-2">
              {["Apartment", "House", "Condo", "Townhouse", "Studio"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <label htmlFor={type} className="text-sm text-slate-600">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Bedrooms</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Bathrooms</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Lease Terms */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Lease Terms</label>
            <div className="space-y-2">
              {["Month-to-Month", "6 Months", "12 Months", "24+ Months"].map((term) => (
                <div key={term} className="flex items-center space-x-2">
                  <Checkbox id={term} />
                  <label htmlFor={term} className="text-sm text-slate-600">
                    {term}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Amenities</label>
            <div className="space-y-2">
              {["Pet Friendly", "Parking", "Laundry", "Pool", "Gym", "Air Conditioning"].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox id={amenity} />
                  <label htmlFor={amenity} className="text-sm text-slate-600">
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full bg-emerald-700 hover:bg-emerald-800">Apply Filters</Button>
        </CardContent>
      </Card>

      {/* Active Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg">Active Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              $1,500 - $3,500
              <button className="ml-1 text-emerald-600 hover:text-emerald-800">×</button>
            </Badge>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              Pet Friendly
              <button className="ml-1 text-emerald-600 hover:text-emerald-800">×</button>
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
