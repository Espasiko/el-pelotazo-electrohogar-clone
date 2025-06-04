import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import CookieModal from "@/components/CookieModal"
import Header from "@/components/Header"
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Cookie Consent Modal */}
      <CookieModal />
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4">
                El Pelotazo<br />
                Electrohogar
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-8 italic">
                Tu tienda de confianza para electrodomésticos y soluciones
                completas para tu hogar.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full">
                Conócenos
              </Button>
            </div>
            <div className="relative order-first md:order-last">
              <Image
                src="https://ext.same-assets.com/1936736741/3446611442.webp"
                alt="Couple shopping for appliances"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center">
          <Image 
            src="https://ext.same-assets.com/1936736741/411388117.svg" 
            alt="ES" 
            width={20} 
            height={15}
            style={{ width: 'auto', height: 'auto' }}
          />
          <span className="ml-2 text-sm">ES</span>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 text-center mb-8 md:mb-12">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Variedad y calidad
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Contamos con una amplia gama de electrodomésticos de marcas
                reconocidas, desde frigoríficos, lavadoras y hornos hasta
                pequeños electrodomésticos, siempre con las mejores ofertas del
                mercado.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Asesoramiento personalizado
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Nuestro equipo de expertos está listo para ayudarte a elegir los
                productos que mejor se adapten a tus necesidades, presupuesto y
                espacio.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Instalación profesional
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                No solo vendemos, sino que también ofrecemos el servicio de
                instalación para que tu electrodoméstico quede perfectamente
                instalado, sin complicaciones.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Atención al cliente
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                En El Pelotazo Electrohogar nos importa tu satisfacción. Si
                tienes alguna duda o necesitas asistencia, estamos aquí para
                ayudarte en todo momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Visit Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Image
                src="https://ext.same-assets.com/1936736741/2609142132.webp"
                alt="Couple looking at stove"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
              <Image
                src="https://ext.same-assets.com/1936736741/3517030211.webp"
                alt="Woman shopping"
                width={200}
                height={200}
                className="rounded-lg"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-6">
                Visítanos en nuestra tienda física
              </h2>
              <p className="text-gray-600 mb-8">
                Lavadoras, secadoras, lavavajillas, frigoríficos, congeladores,
                termos, aires acondicionados, hornos, microondas, placas
                inducción, vitrocerámica y gas. Además tenemos todo lo que
                necesitas de pequeños electrodomésticos.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full">
                Dónde Estamos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-12">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
                Nuestros productos
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                En <em>El Pelotazo Electrohogar</em> tenemos todo lo que
                necesitas para equipar tu hogar con electrodomésticos de alta
                calidad
              </p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full self-start md:self-auto">
              Ver Todos
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            <div className="text-center">
              <Image
                src="https://ext.same-assets.com/1936736741/3241774837.webp"
                alt="Refrigeración"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
              <h3 className="text-lg md:text-xl font-semibold">Refrigeración</h3>
            </div>
            <div className="text-center">
              <Image
                src="https://ext.same-assets.com/1936736741/514908440.webp"
                alt="Cocina"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
              <h3 className="text-lg md:text-xl font-semibold">Cocina</h3>
            </div>
            <div className="text-center">
              <Image
                src="https://ext.same-assets.com/1936736741/3513624967.webp"
                alt="Lavado"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
              <h3 className="text-lg md:text-xl font-semibold">Lavado</h3>
            </div>
            <div className="text-center">
              <Image
                src="https://ext.same-assets.com/1936736741/3814333067.webp"
                alt="Climatización"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
              <h3 className="text-lg md:text-xl font-semibold">Climatización</h3>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <Image
                src="https://ext.same-assets.com/1936736741/262253983.webp"
                alt="Pequeños electrodomésticos"
                width={300}
                height={200}
                className="rounded-lg mb-4 w-full h-auto"
                style={{ width: 'auto', height: 'auto' }}
              />
              <h3 className="text-lg md:text-xl font-semibold">
                Pequeños electrodomésticos
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 text-center mb-8 md:mb-12">
            Nuestros clientes dicen de nosotros
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Image
                  src="https://ext.same-assets.com/1936736741/4196904068.png"
                  alt="Bogdan Valentin Nimigean"
                  width={40}
                  height={40}
                  className="rounded-full"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-sm">
                    Bogdan Valentin Nimigean
                  </h4>
                  <p className="text-xs text-gray-500">2025-02-08</p>
                </div>
              </div>
              <div className="flex mb-3">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-sm text-gray-600">
                Compré una batidora de mano a buen precio. Incluso mejor que en
                grandes cadenas de electrodomésticos. Además de ofrecerte una
                garantía de más tiempo que dichas tiendas...
              </p>
              <button className="text-blue-600 text-xs mt-2">Leer más</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Image
                  src="https://ext.same-assets.com/1936736741/3831059478.png"
                  alt="Ivan BB"
                  width={40}
                  height={40}
                  className="rounded-full"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-sm">Ivan BB</h4>
                  <p className="text-xs text-gray-500">2024-12-26</p>
                </div>
              </div>
              <div className="flex mb-3">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-sm text-gray-600">
                Gran variedad de electrodomésticos a un precio muy competitivo,
                incluso mejor que en las grandes superficies...
              </p>
              <button className="text-blue-600 text-xs mt-2">Leer más</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Image
                  src="https://ext.same-assets.com/1936736741/475734663.png"
                  alt="Lourdes Torres Ruiz"
                  width={40}
                  height={40}
                  className="rounded-full"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-sm">Lourdes Torres Ruiz</h4>
                  <p className="text-xs text-gray-500">2024-09-08</p>
                </div>
              </div>
              <div className="flex mb-3">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-sm text-gray-600">
                No somos de Roquetas y necesitábamos comprar unos
                electrodomésticos. Encontramos esta tienda de casualidad y fue
                todo un acierto...
              </p>
              <button className="text-blue-600 text-xs mt-2">Leer más</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Image
                  src="https://ext.same-assets.com/1936736741/995397261.png"
                  alt="Miguel Angel Avendaño"
                  width={40}
                  height={40}
                  className="rounded-full"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-sm">
                    Miguel Angel Avendaño
                  </h4>
                  <p className="text-xs text-gray-500">2024-02-03</p>
                </div>
              </div>
              <div className="flex mb-3">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-sm text-gray-600">
                Negocio familiar con precios imbatibles. Además, el trato
                personal, el asesoramiento y la facilidad que ponen es
                inmejorable...
              </p>
              <button className="text-blue-600 text-xs mt-2">Leer más</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="https://ext.same-assets.com/1936736741/1553001568.webp"
                alt="El Pelotazo Electrohogar"
                width={150}
                height={50}
                className="mb-4"
                style={{ width: 'auto', height: 'auto' }}
              />
              <p className="text-gray-600 text-sm mb-4">
                Tu tienda de confianza para electrodomésticos y soluciones
                completas para tu hogar.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-red-600 hover:text-red-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-red-600 hover:text-red-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.004 0C5.39 0 0 5.391 0 12.006c0 3.331 1.346 6.346 3.524 8.517l-2.319 2.319A.999.999 0 0 0 2 24h10.004c6.614 0 12.006-5.391 12.006-12.006C24.01 5.39 18.618.001 12.004.001z"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-4">Políticas</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-600">
                    Aviso legal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-600">
                    Accesibilidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-600">
                    Política de cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-red-600">
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-4">Menú</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-red-600">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="text-gray-600 hover:text-red-600">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="text-gray-600 hover:text-red-600">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-600 hover:text-red-600">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">Email: elpelotazo23@gmail.com</li>
                <li className="text-gray-600">Teléfono: 622609477</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-red-600 text-white text-center py-4">
        <p className="text-sm">© Todos los derechos reservados</p>
      </div>
    </div>
  )
}