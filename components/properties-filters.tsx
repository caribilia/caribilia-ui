import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function PropertiesFilters() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl">
            Filtros de Búsqueda
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Operation Type */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">
              Tipo de Operación
            </label>
            <div className="space-y-2">
              {[
                {
                  id: "rent",
                  label: "Alquiler",
                  color: "bg-blue-100 text-blue-800",
                },
                {
                  id: "sale",
                  label: "Compra",
                  color: "bg-green-100 text-green-800",
                },
                {
                  id: "vacation",
                  label: "Vacacional",
                  color: "bg-purple-100 text-purple-800",
                },
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

          {/* Province/Region */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">
              Provincia/Región
            </label>
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
            <label className="text-sm font-semibold text-slate-700 mb-3 block">
              Rango de Precio
            </label>
            <div className="space-y-3">
              <Slider
                defaultValue={[0, 5000]}
                max={10000}
                min={0}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-slate-600">
                <span>US$0</span>
                <span>US$5,000</span>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">
              Tipo de Propiedad
            </label>
            <div className="space-y-2">
              {[
                { id: "apartment", label: "Apartamento" },
                { id: "house", label: "Casa" },
                { id: "villa", label: "Villa" },
                { id: "penthouse", label: "Penthouse" },
                { id: "studio", label: "Estudio" },
                { id: "townhouse", label: "Townhouse" },
                { id: "condo", label: "Condominio" },
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
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                Habitaciones
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Cualquiera" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Cualquiera</SelectItem>
                  <SelectItem value="studio">Estudio</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5+">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                Baños
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Cualquiera" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Cualquiera</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="1.5">1.5</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="2.5">2.5</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Square Footage */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">
              Metros Cuadrados
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Mín" type="number" />
              <Input placeholder="Máx" type="number" />
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="text-sm font-semibold text-slate-700 mb-3 block">
              Amenities
            </label>
            <div className="space-y-2">
              {[
                { id: "pool", label: "Piscina" },
                { id: "parking", label: "Estacionamiento" },
                { id: "garden", label: "Jardín" },
                { id: "balcony", label: "Balcón" },
                { id: "elevator", label: "Ascensor" },
                { id: "security", label: "Seguridad 24/7" },
                { id: "gym", label: "Gimnasio" },
                { id: "beach", label: "Frente al mar" },
              ].map((amenity) => (
                <div key={amenity.id} className="flex items-center space-x-2">
                  <Checkbox id={amenity.id} />
                  <label
                    htmlFor={amenity.id}
                    className="text-sm text-slate-600"
                  >
                    {amenity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <Button variant="outline" className="w-full">
            Limpiar Filtros
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
