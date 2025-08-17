import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin } from "lucide-react"

export function BuyHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-50 to-slate-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Encuentra tu hogar perfecto</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Descubre miles de propiedades en venta. Desde casas para principiantes hasta villas de lujo, te ayudamos a
            encontrar el lugar perfecto para llamar hogar.
          </p>

          {/* Enhanced Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="md:col-span-2 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Ingresa ciudad, barrio o código postal"
                  className="pl-10 h-12 text-lg border-slate-200"
                />
              </div>
              <Select>
                <SelectTrigger className="h-12 text-lg">
                  <SelectValue placeholder="Rango de Precio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-150k">US$0 - US$150K</SelectItem>
                  <SelectItem value="150k-300k">US$150K - US$300K</SelectItem>
                  <SelectItem value="300k-500k">US$300K - US$500K</SelectItem>
                  <SelectItem value="500k-750k">US$500K - US$750K</SelectItem>
                  <SelectItem value="750k+">US$750K+</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-12 text-lg">
                  <SelectValue placeholder="Habitaciones" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Cualquiera</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full h-12 text-lg bg-cyan-800 hover:bg-cyan-900">
              <Search className="mr-2 h-5 w-5" />
              Buscar propiedades
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
