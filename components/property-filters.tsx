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
          <CardTitle className="font-serif text-xl">Filtros</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Provincia/Región</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar provincia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="santo-domingo">Santo Domingo</SelectItem>
                <SelectItem value="punta-cana">Punta Cana</SelectItem>
                <SelectItem value="samana">Samaná</SelectItem>
                <SelectItem value="puerto-plata">Puerto Plata</SelectItem>
                <SelectItem value="la-romana">La Romana</SelectItem>
                <SelectItem value="santiago">Santiago</SelectItem>
                <SelectItem value="cap-cana">Cap Cana</SelectItem>
                <SelectItem value="bavaro">Bávaro</SelectItem>
                <SelectItem value="jarabacoa">Jarabacoa</SelectItem>
                <SelectItem value="constanza">Constanza</SelectItem>
                <SelectItem value="las-terrenas">Las Terrenas</SelectItem>
                <SelectItem value="cabarete">Cabarete</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Rango de Precio</label>
            <div className="space-y-3">
              <Slider defaultValue={[150000, 400000]} max={2000000} min={0} step={25000} className="w-full" />
              <div className="flex justify-between text-sm text-slate-600">
                <span>US$150K</span>
                <span>US$400K</span>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Tipo de Propiedad</label>
            <div className="space-y-2">
              {[
                { id: "apartamento", label: "Apartamento" },
                { id: "villa", label: "Villa" },
                { id: "casa", label: "Casa" },
                { id: "penthouse", label: "Penthouse" },
                { id: "terreno", label: "Terreno" },
                { id: "proyecto", label: "Proyecto en Construcción" },
                { id: "alquiler-vacacional", label: "Alquiler Vacacional" },
                { id: "comercial", label: "Comercial" },
              ].map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox id={type.id} />
                  <label htmlFor={type.id} className="text-sm text-slate-600">
                    {type.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Habitaciones</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Cualquiera" />
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
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">Baños</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Cualquiera" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Cualquiera</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Square Footage */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Metros Cuadrados</label>
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Mínimo" />
              <Input placeholder="Máximo" />
            </div>
          </div>

          {/* Features */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Características</label>
            <div className="space-y-2">
              {[
                { id: "piscina", label: "Piscina" },
                { id: "garaje", label: "Garaje" },
                { id: "aire-acondicionado", label: "Aire Acondicionado" },
                { id: "vista-al-mar", label: "Vista al Mar" },
                { id: "seguridad", label: "Seguridad 24/7" },
                { id: "amueblado", label: "Amueblado" },
                { id: "terraza", label: "Terraza" },
                { id: "jardin", label: "Jardín" },
              ].map((feature) => (
                <div key={feature.id} className="flex items-center space-x-2">
                  <Checkbox id={feature.id} />
                  <label htmlFor={feature.id} className="text-sm text-slate-600">
                    {feature.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full bg-cyan-800 hover:bg-cyan-900">Aplicar Filtros</Button>
        </CardContent>
      </Card>

      {/* Active Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg">Filtros Activos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
              US$150K - US$400K
              <button className="ml-1 text-cyan-600 hover:text-cyan-800">×</button>
            </Badge>
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
              3+ Habitaciones
              <button className="ml-1 text-cyan-600 hover:text-cyan-800">×</button>
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
