'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Image
            src="https://ext.same-assets.com/1936736741/1560813194.webp"
            alt="El Pelotazo Electrohogar"
            width={120}
            height={40}
            className="h-10 w-auto"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-red-600">Inicio</Link>
            <Link href="/nosotros" className="text-red-600 hover:text-red-700">Nosotros</Link>
            <Link href="/productos" className="text-gray-600 hover:text-red-600">Productos</Link>
            <Link href="/contacto" className="text-gray-600 hover:text-red-600">Contacto</Link>
          </nav>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 hover:text-red-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-gray-600 hover:text-red-600 py-2">Inicio</Link>
              <Link href="/nosotros" className="block text-red-600 hover:text-red-700 py-2">Nosotros</Link>
              <Link href="/productos" className="block text-gray-600 hover:text-red-600 py-2">Productos</Link>
              <Link href="/contacto" className="block text-gray-600 hover:text-red-600 py-2">Contacto</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
