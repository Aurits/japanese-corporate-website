"use client"
import { Menu, Phone, X } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const navigation = ["会社情報", "事業内容", "実績", "技術・DX", "お問い合わせ"]
  const navigationLinks = [
    { href: "/about", key: 0 },
    { href: "/services", key: 1 },
    { href: "/projects", key: 2 },
    { href: "/technology", key: 3 },
    { href: "/contact", key: 4 },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min((scrollTop / docHeight) * 100, 100)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div
        className="absolute bottom-0 left-0 h-1 bg-teal-600 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-white text-slate-800 flex items-center justify-center font-bold text-2xl shadow-lg">
              A
            </div>
            <div>
              <div className="text-2xl font-bold tracking-wide">AEGIS LLP</div>
              <div className="text-sm opacity-80">有限責任事業組合</div>
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-10">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={navigationLinks[index].href}
                className="hover:text-teal-400 transition-colors duration-200 font-medium text-lg py-2 border-b-2 border-transparent hover:border-teal-400"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-3 text-lg bg-slate-700 px-6 py-3">
              <Phone className="w-6 h-6 text-teal-400" />
              <span className="font-mono font-semibold text-xl">03-1234-5678</span>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-3 hover:bg-slate-700">
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-700 py-6">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={navigationLinks[index].href}
                  className="hover:text-teal-400 transition-colors duration-200 font-medium py-3 text-lg border-b border-slate-700 hover:border-teal-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
