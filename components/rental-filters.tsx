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
          <CardTitle className="font-serif text-xl">Filtros de Alquiler</CardTitle>
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

          {/* Monthly Rent */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Alquiler Mensual</label>
            <div className="space-y-3">
              <Slider defaultValue={[800, 2000]} max={5000} min={300} step={100} className="w-full" />
              <div className="flex justify-between text-sm text-slate-600">
                <span>US$800</span>
                <span>US$2,000</span>
              </div>
            </div>
          </div>

          {/* Move-in Date */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-2 block">Fecha de Mudanza</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar fecha" />
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

          {/* Property Type */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Tipo de Propiedad</label>
            <div className="space-y-2">
              {[
                { id: "apartamento", label: "Apartamento" },
                { id: "casa", label: "Casa" },
                { id: "villa", label: "Villa" },
                { id: "penthouse", label: "Penthouse" },
                { id: "estudio", label: "Estudio" },
                { id: "alquiler-vacacional", label: "Alquiler Vacacional" },
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
                  <SelectItem value="studio">Estudio</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
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

          {/* Lease Terms */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Términos de Alquiler</label>
            <div className="space-y-2">
              {[
                { id: "mes-a-mes", label: "Mes a Mes" },
                { id: "6-meses", label: "6 Meses" },
                { id: "12-meses", label: "12 Meses" },
                { id: "24-meses", label: "24+ Meses" },
              ].map((term) => (
                <div key={term.id} className="flex items-center space-x-2">
                  <Checkbox id={term.id} />
                  <label htmlFor={term.id} className="text-sm text-slate-600">
                    {term.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">Comodidades</label>
            <div className="space-y-2">
              {[
                { id: "mascotas", label: "Acepta Mascotas" },
                { id: "estacionamiento", label: "Estacionamiento" },
                { id: "lavanderia", label: "Lavandería" },
                { id: "piscina", label: "Piscina" },
                { id: "gimnasio", label: "Gimnasio" },
                { id: "aire-acondicionado", label: "Aire Acondicionado" },
                { id: "seguridad", label: "Seguridad 24/7" },
                { id: "amueblado", label: "Amueblado" },
              ].map((amenity) => (
                <div key={amenity.id} className="flex items-center space-x-2">
                  <Checkbox id={amenity.id} />
                  <label htmlFor={amenity.id} className="text-sm text-slate-600">
                    {amenity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full bg-emerald-700 hover:bg-emerald-800">Aplicar Filtros</Button>
        </CardContent>
      </Card>

      {/* Active Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-lg">Filtros Activos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              US$800 - US$2,000
              <button className="ml-1 text-emerald-600 hover:text-emerald-800">×</button>
            </Badge>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
              Acepta Mascotas
              <button className="ml-1 text-emerald-600 hover:text-emerald-800">×</button>
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
