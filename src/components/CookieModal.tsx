'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookieModal() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">Gestionar consentimiento</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies para
          almacenar y/o acceder a la información del dispositivo. El consentimiento de estas
          tecnologías nos permitirá procesar datos como el comportamiento de navegación o las
          identificaciones únicas en este sitio. No consentir o retirar el consentimiento,
          puede afectar negativamente a ciertas características y funciones.
        </p>
        <div className="flex gap-3 mb-4">
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsVisible(false)}
          >
            Aceptar
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsVisible(false)}
          >
            Denegar
          </Button>
          <Button variant="outline">Ver preferencias</Button>
        </div>
        <div className="flex gap-4 text-xs text-blue-600">
          <Link href="#" className="underline">Política de cookies</Link>
          <Link href="#" className="underline">Declaración de privacidad</Link>
          <Link href="#" className="underline">Aviso Legal / Imprint</Link>
        </div>
      </div>
    </div>
  )
}
