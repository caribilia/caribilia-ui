"use client";

import { ReactNode } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export function AuthLayout({
  children,
  title,
  subtitle,
  backgroundImage,
  backgroundAlt,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Auth Form */}
      <div className="w-full lg:w-1/3 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-sm space-y-8">
          {/* Logo */}
          <div className="text-center">
            <Image
              src="/caribilia-logo-full.jpg"
              alt="Caribilia"
              width={180}
              height={60}
              className="mx-auto mb-8"
              priority
            />
          </div>

          {/* Form Content */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
              <p className="text-gray-600">{subtitle}</p>
            </div>

            {children}
          </div>
        </div>
      </div>

      {/* Right Panel - Background Image */}
      <div className="hidden lg:block lg:w-2/3 relative overflow-hidden">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover object-center"
          priority
          quality={95}
          sizes="(max-width: 1024px) 100vw, 66vw"
        />

        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black/30 flex items-end">
          <div className="p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Encuentra tu hogar ideal
            </h2>
            <p className="text-xl text-white/90 max-w-md">
              Descubre propiedades únicas en los mejores lugares de República
              Dominicana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
