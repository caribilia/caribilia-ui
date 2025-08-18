"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/caribilia-isotipo.jpg"
                alt="Caribilia"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="text-2xl font-serif font-bold text-primary">
                Caribilia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/alquilar"
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Alquilar
              </Link>
              <Link
                href="/vender"
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Vender
              </Link>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Agentes
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Iniciar Sesión
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Comenzar
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={toggleMobileMenu}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Panel */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Side Panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out md:hidden">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-lg font-semibold">Menú</span>
                <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-4">
                <div className="space-y-4">
                  <Link
                    href="/alquilar"
                    className="block text-lg text-muted-foreground hover:text-primary font-medium transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    Alquilar
                  </Link>
                  <Link
                    href="/vender"
                    className="block text-lg text-muted-foreground hover:text-primary font-medium transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    Vender
                  </Link>
                  <a
                    href="#"
                    className="block text-lg text-muted-foreground hover:text-primary font-medium transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    Agentes
                  </a>
                </div>
              </nav>

              {/* Actions */}
              <div className="p-4 border-t border-border space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  Iniciar Sesión
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Comenzar
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
