"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Globe, Award, Star, CheckCircle, Play, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FloatingNotification } from "@/components/ui/floating-notification"
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel"
import { Navigation } from "@/components/ui/navigation"

export default function HomePage() {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Show enrollment notification every 30 seconds
    const interval = setInterval(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 4000)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      text: "This cohort completely changed how I understand Islamic history. Shaykh Mustafa's insights are profound.",
      author: "Amira Hassan",
      role: "Software Engineer",
      location: "London, UK",
      avatar: "/images/learner-1.jpeg",
    },
    {
      text: "The live Q&A sessions are incredible. Direct access to such knowledgeable scholars is invaluable.",
      author: "Omar Abdullah",
      role: "Medical Student",
      location: "Toronto, Canada",
      avatar: "/images/learner-2.jpeg",
    },
    {
      text: "Perfect for busy professionals. One hour of deep learning that I can actually fit into my schedule.",
      author: "Fatima Al-Zahra",
      role: "Marketing Director",
      location: "Dubai, UAE",
      avatar: "/images/learner-3.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-50">
      {/* Navigation */}
      <Navigation />

      {/* Floating Notifications */}
      <FloatingNotification show={showNotification} message="Sarah from New York just enrolled!" type="enrollment" />

      {/* Enhanced Hero Section */}
      <main className="pt-20">
        <section className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-20 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
            {/* Enhanced Social Proof */}
            <div className="flex justify-center items-center gap-4 text-sm text-stone-600 animate-fade-in-up">
              <div className="flex -space-x-3">
                {[
                  "/images/learner-1.jpeg",
                  "/images/learner-2.jpeg",
                  "/images/learner-3.jpeg",
                  "/images/learner-4.jpeg",
                ].map((src, i) => (
                  <div key={i} className="relative">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Learner ${i + 1}`}
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full border-3 border-white object-cover shadow-lg hover:scale-110 transition-transform duration-200"
                    />
                    {i === 0 && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span>Join</span>
                <AnimatedCounter end={2847} duration={2000} className="font-semibold text-amber-600" />
                <span>thoughtful learners</span>
                <div className="flex items-center gap-1 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs ml-1">5.0</span>
                </div>
              </div>
            </div>

            {/* Enhanced Main Headline */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-6 py-3 text-sm font-medium text-amber-800">
                <TrendingUp className="w-4 h-4" />
                Next cohort starts March 15th • Only 12 spots left
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-stone-900 tracking-tight leading-[0.9] bg-gradient-to-br from-stone-900 to-stone-700 bg-clip-text">
                Learn with the best
                <span className="block text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                  Islamic scholars
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
                  Join live cohorts for deep, meaningful learning experiences that fit your schedule.
                </p>
                <p className="text-lg text-amber-700 font-medium">One hour. One focus. Life-changing insights.</p>
              </div>
            </div>

            {/* Enhanced Trust Indicators */}
            <div
              className="flex flex-wrap justify-center items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { icon: Award, label: "Expert Scholars" },
                { icon: Users, label: "Live Cohorts" },
                { icon: Globe, label: "47 Countries" },
                { icon: Shield, label: "30-Day Guarantee" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-sm border border-stone-100 text-sm"
                >
                  <item.icon className="w-4 h-4 text-emerald-600" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Link href="/enroll">
                <Button
                  size="lg"
                  className="h-16 px-10 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  Join Next Cohort - $59.99
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Link href="/episodes">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 px-10 border-2 border-stone-300 text-stone-700 hover:bg-stone-50 hover:border-stone-400 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  Watch Preview
                </Button>
              </Link>
            </div>

            {/* Urgency Indicator */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-6 py-3 text-sm text-red-700 animate-pulse">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              <span className="font-medium">Limited spots: Only 12 remaining for March cohort</span>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonial Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge className="bg-amber-50 text-amber-700 border-amber-200 px-4 py-2">Student Success Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">What our students are saying</h2>
              <p className="text-xl text-stone-600">Real experiences from thoughtful learners worldwide</p>
            </div>

            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Why Choose Nukhta?</h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Experience authentic Islamic learning designed for the modern Muslim.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Live Interactive Cohorts",
                  description:
                    "Learn alongside peers in structured, interactive sessions with direct access to renowned scholars.",
                  stats: "98% completion rate",
                },
                {
                  icon: Award,
                  title: "World-Class Scholars",
                  description:
                    "Learn from renowned Islamic scholars with decades of experience and authentic knowledge.",
                  stats: "15+ years average experience",
                },
                {
                  icon: Globe,
                  title: "Global Learning Community",
                  description:
                    "Connect with thoughtful Muslims from around the world in our supportive learning environment.",
                  stats: "47 countries represented",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-stone-900">{feature.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      {feature.stats}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: 2847, label: "Active Learners", suffix: "+" },
                { number: 47, label: "Countries", suffix: "" },
                { number: 98, label: "Completion Rate", suffix: "%" },
                { number: 5.0, label: "Average Rating", suffix: "/5" },
              ].map((stat, index) => (
                <div key={index} className="space-y-3 group">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={stat.number} duration={2000} />
                    {stat.suffix}
                  </div>
                  <div className="text-stone-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-stone-900 to-stone-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&query=islamic geometric pattern')] opacity-5"></div>
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <Badge className="bg-amber-600 text-white border-none px-4 py-2">Limited Time</Badge>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Ready to begin your learning journey?</h2>
              <p className="text-xl text-stone-200">Join our next cohort and experience authentic Islamic learning.</p>
            </div>

            {/* Countdown Timer */}
            <div className="flex justify-center items-center gap-4 my-8">
              {[
                { value: "15", label: "DAYS" },
                { value: "07", label: "HOURS" },
                { value: "23", label: "MINS" },
              ].map((time, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">{time.value}</div>
                  <div className="text-xs text-stone-300">{time.label}</div>
                </div>
              ))}
            </div>

            <Link href="/enroll">
              <Button
                size="lg"
                className="h-16 px-12 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Secure Your Spot Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>

            <p className="text-sm text-stone-300 px-4">
              🔒 Secure enrollment • 30-day money-back guarantee • Only 12 spots remaining
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
