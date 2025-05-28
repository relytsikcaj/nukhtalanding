"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HamburgerButton } from "@/components/ui/hamburger-button"
import { MobileMenu } from "@/components/ui/mobile-menu"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="transition-transform duration-200 hover:scale-105">
            <Image src="/images/nukhta-logo.png" alt="Nukhta" width={140} height={56} className="h-9 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className={`text-stone-600 hover:text-amber-600 transition-all duration-200 font-medium relative group px-2 py-1 ${
                pathname === "/about" ? "text-amber-600" : ""
              }`}
            >
              About
              <span
                className={`absolute -bottom-1 left-2 h-0.5 bg-amber-600 transition-all duration-200 ${
                  pathname === "/about" ? "w-[calc(100%-16px)]" : "w-0 group-hover:w-[calc(100%-16px)]"
                }`}
              ></span>
            </Link>
            <Link
              href="/episodes"
              className={`text-stone-600 hover:text-amber-600 transition-all duration-200 font-medium relative group px-2 py-1 ${
                pathname === "/episodes" ? "text-amber-600" : ""
              }`}
            >
              Episodes
              <span
                className={`absolute -bottom-1 left-2 h-0.5 bg-amber-600 transition-all duration-200 ${
                  pathname === "/episodes" ? "w-[calc(100%-16px)]" : "w-0 group-hover:w-[calc(100%-16px)]"
                }`}
              ></span>
            </Link>
            <Link href="/enroll">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <HamburgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden" />
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} currentPath={pathname} />
    </>
  )
}
