export interface Property {
  id: string;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  lat: number;
  lng: number;
  type: "sale" | "rent" | "vacation";
}
