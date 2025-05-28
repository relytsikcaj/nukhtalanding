"use client"

import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  currentPath: string
}

export function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/episodes", label: "Episodes" },
    { href: "/enroll", label: "Enroll" },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 flex flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-100">
              <span className="text-lg font-semibold text-stone-900">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full hover:bg-stone-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-auto py-6">
              <ul className="space-y-1 px-3">
                {menuItems.map((item) => (
                  <motion.li key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        currentPath === item.href ? "bg-amber-50 text-amber-700" : "text-stone-700 hover:bg-stone-50",
                      )}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="p-6 border-t border-stone-100">
              <motion.div variants={itemVariants}>
                <Link href="/enroll" onClick={onClose}>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                    Enroll Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
