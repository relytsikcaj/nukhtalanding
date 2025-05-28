"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "./button"

interface Testimonial {
  text: string
  author: string
  role: string
  location: string
  avatar: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-stone-100">
        <div className="flex items-center justify-center mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <blockquote className="text-xl md:text-2xl text-stone-700 text-center leading-relaxed mb-8 font-light">
          "{testimonials[current].text}"
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <Image
            src={testimonials[current].avatar || "/placeholder.svg"}
            alt={testimonials[current].author}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div className="text-center">
            <div className="font-semibold text-stone-900">{testimonials[current].author}</div>
            <div className="text-sm text-stone-600">{testimonials[current].role}</div>
            <div className="text-xs text-stone-500">{testimonials[current].location}</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button variant="outline" size="sm" onClick={prev} className="rounded-full w-10 h-10 p-0">
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === current ? "bg-amber-600 w-8" : "bg-stone-300 w-2"
              }`}
            />
          ))}
        </div>

        <Button variant="outline" size="sm" onClick={next} className="rounded-full w-10 h-10 p-0">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
