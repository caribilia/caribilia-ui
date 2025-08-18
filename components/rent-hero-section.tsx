import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";

export function RentHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-slate-100 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Encuentra tu próximo alquiler
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Descubre apartamentos, casas y condos en alquiler. Desde estudios
            hasta casas de lujo, encuentra el alquiler perfecto que se adapte a
            tu estilo de vida y presupuesto.
          </p>

          {/* Enhanced Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="md:col-span-2 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Ingresa ciudad, barrio o código postal"
                  className="pl-10 h-12 text-lg border-slate-200 bg-white"
                />
              </div>
              <Select>
                <SelectTrigger className="h-12 text-lg border-slate-200 bg-white">
                  <SelectValue placeholder="Alquiler Mensual" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-800">US$0 - US$800</SelectItem>
                  <SelectItem value="800-1500">US$800 - US$1,500</SelectItem>
                  <SelectItem value="1500-2500">US$1,500 - US$2,500</SelectItem>
                  <SelectItem value="2500-4000">US$2,500 - US$4,000</SelectItem>
                  <SelectItem value="4000+">US$4,000+</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-12 text-lg border-slate-200 bg-white">
                  <SelectValue placeholder="Fecha de Mudanza" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">Lo antes posible</SelectItem>
                  <SelectItem value="1month">En 1 mes</SelectItem>
                  <SelectItem value="2months">En 2 meses</SelectItem>
                  <SelectItem value="3months">En 3 meses</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full h-12 text-lg bg-emerald-700 hover:bg-emerald-800">
              <Search className="mr-2 h-5 w-5" />
              Buscar alquileres
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
