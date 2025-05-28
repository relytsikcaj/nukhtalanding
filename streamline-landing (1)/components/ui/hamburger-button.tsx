"use client"

import { cn } from "@/lib/utils"

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function HamburgerButton({ isOpen, onClick, className }: HamburgerButtonProps) {
  return (
    <button
      className={cn(
        "p-3 rounded-lg hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2",
        className,
      )}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 h-6 flex flex-col justify-center space-y-1.5 relative">
        <span
          className={cn(
            "w-full h-0.5 bg-stone-600 transition-all duration-300 ease-in-out",
            isOpen && "absolute rotate-45",
          )}
        />
        <span
          className={cn("w-full h-0.5 bg-stone-600 transition-all duration-300 ease-in-out", isOpen && "opacity-0")}
        />
        <span
          className={cn(
            "w-full h-0.5 bg-stone-600 transition-all duration-300 ease-in-out",
            isOpen && "absolute -rotate-45",
          )}
        />
      </div>
    </button>
  )
}
