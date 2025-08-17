import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export function PropertyFilters() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Price Range</label>
            <div className="space-y-3">
              <Slider defaultValue={[300000, 800000]} max={2000000} min={0} step={25000} className="w-full" />
              <div className="flex justify-between text-sm text-slate-600">
                <span>$300K</span>
                <span>$800K</span>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Property Type</label>
            <div className="space-y-2">
              {["Single Family", "Condo", "Townhouse", "Multi-Family"].map((type) => (
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
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
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

          {/* Square Footage */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Square Footage</label>
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Min" />
              <Input placeholder="Max" />
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Features</label>
            <div className="space-y-2">
              {["Pool", "Garage", "Fireplace", "Hardwood Floors", "Updated Kitchen"].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox id={feature} />
                  <label htmlFor={feature} className="text-sm text-slate-600">
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full bg-cyan-800 hover:bg-cyan-900">Apply Filters</Button>
        </CardContent>
      </Card>

      {/* Active Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg">Active Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
              $300K - $800K
              <button className="ml-1 text-cyan-600 hover:text-cyan-800">×</button>
            </Badge>
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
              3+ Bedrooms
              <button className="ml-1 text-cyan-600 hover:text-cyan-800">×</button>
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
