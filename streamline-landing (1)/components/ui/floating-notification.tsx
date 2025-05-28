"use client"

import { CheckCircle, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingNotificationProps {
  show: boolean
  message: string
  type: "enrollment" | "success" | "info"
}

export function FloatingNotification({ show, message, type }: FloatingNotificationProps) {
  const icons = {
    enrollment: Users,
    success: CheckCircle,
    info: CheckCircle,
  }

  const Icon = icons[type]

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 bg-white border border-stone-200 rounded-lg shadow-lg p-4 flex items-center gap-3 transition-all duration-300 max-w-sm",
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      )}
    >
      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-emerald-600" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-stone-900 truncate">{message}</p>
        <p className="text-xs text-stone-500">Just now</p>
      </div>
    </div>
  )
}
