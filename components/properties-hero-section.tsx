import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Home } from "lucide-react";

export function PropertiesHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-slate-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Encuentra tu próxima propiedad
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Descubre apartamentos, casas, villas y más. Desde alquileres hasta
            compras, encuentra la propiedad perfecta que se adapte a tus
            necesidades y presupuesto.
          </p>

          {/* Enhanced Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 items-center">
              <div className="md:col-span-2 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Ingresa ciudad, barrio o código postal"
                  className="pl-10 h-12 text-lg border-slate-200 bg-white w-full"
                />
              </div>
              <div className="w-full">
                <Select>
                  <SelectTrigger className="h-12 text-lg border-slate-200 bg-white w-full">
                    <SelectValue placeholder="Tipo de Operación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rent">Alquiler</SelectItem>
                    <SelectItem value="sale">Compra</SelectItem>
                    <SelectItem value="vacation">Vacacional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Select>
                  <SelectTrigger className="h-12 text-lg border-slate-200 bg-white w-full">
                    <SelectValue placeholder="Precio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500">US$0 - US$500</SelectItem>
                    <SelectItem value="500-1000">US$500 - US$1,000</SelectItem>
                    <SelectItem value="1000-2000">
                      US$1,000 - US$2,000
                    </SelectItem>
                    <SelectItem value="2000-5000">
                      US$2,000 - US$5,000
                    </SelectItem>
                    <SelectItem value="5000+">US$5,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Select>
                  <SelectTrigger className="h-12 text-lg border-slate-200 bg-white w-full">
                    <SelectValue placeholder="Tipo de Propiedad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartamento</SelectItem>
                    <SelectItem value="house">Casa</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="studio">Estudio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full h-12 text-lg bg-emerald-700 hover:bg-emerald-800">
              <Search className="mr-2 h-5 w-5" />
              Buscar propiedades
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
