"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

interface PropertyMapProps {
  lat: number;
  lng: number;
  title: string;
  address: string;
}

export function PropertyMap({ lat, lng, title, address }: PropertyMapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-80 w-full rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
        <div className="text-center text-slate-500">
          <div className="w-12 h-12 mx-auto mb-3 bg-slate-300 rounded-full flex items-center justify-center">
            <span className="text-slate-400 text-lg">📍</span>
          </div>
          <p>Cargando mapa...</p>
        </div>
      </div>
    );
  }

  const MapComponent = dynamic(() => import("./map-component"), {
    ssr: false,
    loading: () => (
      <div className="h-80 w-full rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
        <div className="text-center text-slate-500">
          <div className="w-12 h-12 mx-auto mb-3 bg-slate-300 rounded-full flex items-center justify-center">
            <span className="text-slate-400 text-lg">📍</span>
          </div>
          <p>Cargando mapa...</p>
        </div>
      </div>
    ),
  });

  return <MapComponent lat={lat} lng={lng} title={title} address={address} />;
}
