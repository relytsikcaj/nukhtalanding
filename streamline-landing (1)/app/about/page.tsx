"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Clock, Heart, BookOpen, Play, Star, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { useState } from "react"
import { Navigation } from "@/components/ui/navigation"

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Join a Cohort",
      description: "Enroll in our next live cohort and connect with fellow learners from around the world.",
      icon: Users,
    },
    {
      title: "Learn Together",
      description: "Participate in live sessions with expert scholars and engage in meaningful discussions.",
      icon: BookOpen,
    },
    {
      title: "Apply & Grow",
      description: "Take your learning beyond the classroom and apply insights to your daily life.",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-50">
      {/* Navigation */}
      <Navigation />

      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-20 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border-amber-200 px-4 py-2">
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
                Authentic Islamic learning for the
                <span className="block text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                  modern world
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                We believe sacred knowledge should be accessible without being diluted, and meaningful without being
                overwhelming.
              </p>
            </div>

            {/* Enhanced Learner Avatars */}
            <div className="flex justify-center items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "/images/learner-1.jpeg",
                  "/images/learner-2.jpeg",
                  "/images/learner-3.jpeg",
                  "/images/learner-4.jpeg",
                  "/images/learner-5.jpeg",
                  "/images/learner-6.jpeg",
                ].map((src, i) => (
                  <div key={i} className="relative group">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Learner ${i + 1}`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-lg group-hover:scale-110 transition-transform duration-200"
                    />
                    {i < 3 && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-stone-900 flex items-center gap-2">
                  <AnimatedCounter end={2847} duration={2000} className="font-semibold text-amber-600" />
                  <span>+ thoughtful learners</span>
                </div>
                <div className="text-xs text-stone-600 flex items-center gap-1">
                  <span>From</span>
                  <AnimatedCounter end={47} duration={1500} className="font-medium" />
                  <span>countries worldwide</span>
                  <div className="flex items-center gap-1 ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Philosophy Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-amber-50 text-amber-700 border-amber-200 px-4 py-2">Our Philosophy</Badge>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                    Most platforms overcomplicate the simple
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                  <p>
                    Long courses, overwhelming content, rigid schedules. It works for some—but for busy working
                    professionals, or parents juggling real life, it's just not realistic.
                  </p>
                  <p>
                    At Nukhta, we take a different approach. We focus on depth over breadth, quality over quantity, and
                    meaningful engagement over passive consumption.
                  </p>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
                    <p className="text-xl font-semibold text-stone-900 italic">
                      "One cohort. One focus. Deep learning."
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Heart, title: "Meaningful", desc: "Every session designed for deep reflection" },
                  { icon: Users, title: "Interactive", desc: "Live cohorts with direct scholar access" },
                  { icon: Clock, title: "Focused", desc: "Structured sessions that respect your time" },
                  { icon: BookOpen, title: "Authentic", desc: "Traditional scholarship, contemporary relevance" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-white to-stone-50"
                  >
                    <CardContent className="p-6 space-y-4 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                        <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive How It Works */}
        <section className="py-24 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <Badge className="bg-white text-stone-700 border-stone-200 px-4 py-2">How It Works</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                A simple, focused approach to Islamic learning
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Three steps to transformative learning that fits your life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activeStep === index ? "scale-105" : "hover:scale-102"
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <Card
                    className={`border-none transition-all duration-300 ${
                      activeStep === index
                        ? "bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-xl"
                        : "bg-white hover:shadow-lg"
                    }`}
                  >
                    <CardContent className="p-8 space-y-6 text-center">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 ${
                          activeStep === index
                            ? "bg-white/20 backdrop-blur-sm"
                            : "bg-gradient-to-br from-amber-600 to-amber-700"
                        }`}
                      >
                        <step.icon className={`w-8 h-8 ${activeStep === index ? "text-white" : "text-white"}`} />
                      </div>
                      <div className="space-y-3">
                        <div
                          className={`text-sm font-medium ${activeStep === index ? "text-white/80" : "text-amber-600"}`}
                        >
                          Step {index + 1}
                        </div>
                        <h3
                          className={`text-xl font-semibold ${activeStep === index ? "text-white" : "text-stone-900"}`}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className={`leading-relaxed ${activeStep === index ? "text-white/90" : "text-stone-600"}`}>
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-stone-300 z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                Trusted by thousands worldwide
              </h2>
              <p className="text-xl text-stone-600">Real numbers from our growing community</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: 2847, label: "Thoughtful learners", suffix: "+", color: "from-amber-600 to-orange-600" },
                { number: 47, label: "Countries represented", suffix: "", color: "from-emerald-600 to-teal-600" },
                { number: 98, label: "Completion rate", suffix: "%", color: "from-blue-600 to-indigo-600" },
                { number: 5.0, label: "Average rating", suffix: "/5", color: "from-purple-600 to-pink-600" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div
                      className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                    >
                      <AnimatedCounter end={stat.number} duration={2000} />
                      {stat.suffix}
                    </div>
                    <div className="text-stone-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonial Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <Badge className="bg-white text-stone-700 border-stone-200 px-4 py-2">Student Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Hear from our community</h2>
            </div>

            <div className="relative group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=400&width=700&query=diverse muslim students learning together"
                  width={700}
                  height={400}
                  alt="Student testimonial"
                  className="object-cover w-full h-full opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm opacity-90 mb-1">Student Testimonial</div>
                  <div className="text-xl font-semibold">Why I chose Nukhta</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-stone-900 to-stone-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&query=islamic geometric pattern')] opacity-5"></div>
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <Badge className="bg-amber-600 text-white border-none px-4 py-2">Ready to Start?</Badge>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Ready to explore our episodes?</h2>
              <p className="text-xl text-stone-200">Discover the depth and quality of our learning experience.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/episodes">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Explore Episodes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/enroll">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 border-2 border-white/30 text-white hover:bg-white/10 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Join Next Cohort
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
