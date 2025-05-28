"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Check,
  Clock,
  Users,
  Calendar,
  Globe,
  Shield,
  Star,
  TrendingUp,
  AlertCircle,
  BookOpen,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Navigation } from "@/components/ui/navigation"

export default function EnrollPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    motivation: "",
    experience: "",
    hearAbout: "",
    timezone: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [spotsLeft, setSpotsLeft] = useState(12)
  const [recentEnrollments, setRecentEnrollments] = useState([
    { name: "Sarah M.", location: "New York", time: "2 minutes ago" },
    { name: "Ahmed K.", location: "London", time: "5 minutes ago" },
    { name: "Fatima A.", location: "Dubai", time: "8 minutes ago" },
  ])

  useEffect(() => {
    // Simulate decreasing spots
    const interval = setInterval(() => {
      if (Math.random() > 0.7 && spotsLeft > 5) {
        setSpotsLeft((prev) => prev - 1)
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [spotsLeft])

  const validateStep = (step: number) => {
    const errors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.firstName.trim()) errors.firstName = "First name is required"
      if (!formData.lastName.trim()) errors.lastName = "Last name is required"
      if (!formData.email.trim()) errors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    }

    if (step === 2) {
      if (!formData.motivation.trim()) errors.motivation = "Please share your motivation"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3))
    }
  }

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(currentStep)) {
      // Handle form submission - redirect to external payment
      console.log("Form submitted:", formData)
      alert("Thank you for your enrollment! You will be redirected to complete payment.")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const steps = [
    { number: 1, title: "Personal Info", description: "Basic details" },
    { number: 2, title: "Learning Goals", description: "Your motivation" },
    { number: 3, title: "Confirmation", description: "Review & submit" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-50">
      {/* Navigation */}
      <Navigation />

      {/* Progress Bar */}
      <div className="fixed top-16 w-full z-40 bg-white/80 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    currentStep >= step.number ? "bg-amber-600 text-white" : "bg-stone-200 text-stone-600"
                  }`}
                >
                  {currentStep > step.number ? <Check className="w-4 h-4" /> : step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                      currentStep > step.number ? "bg-amber-600" : "bg-stone-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-stone-900">{steps[currentStep - 1].title}</div>
            <div className="text-xs text-stone-600">{steps[currentStep - 1].description}</div>
          </div>
        </div>
      </div>

      <main className="pt-32">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Enrollment Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border-amber-200">
                  Step {currentStep} of 3
                </Badge>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                  {currentStep === 1 && "Join the Next Cohort"}
                  {currentStep === 2 && "Tell Us About Yourself"}
                  {currentStep === 3 && "Confirm Your Enrollment"}
                </h1>
                <p className="text-xl text-stone-600">
                  {currentStep === 1 && "Secure your spot in our upcoming live learning experience."}
                  {currentStep === 2 && "Help us personalize your learning journey."}
                  {currentStep === 3 && "Review your information and complete enrollment."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="w-5 h-5 text-amber-600" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`mt-1 transition-all duration-200 ${formErrors.firstName ? "border-red-500 focus:border-red-500" : "focus:border-amber-600"}`}
                            placeholder="Enter your first name"
                          />
                          {formErrors.firstName && (
                            <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.firstName}
                            </div>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`mt-1 transition-all duration-200 ${formErrors.lastName ? "border-red-500 focus:border-red-500" : "focus:border-amber-600"}`}
                            placeholder="Enter your last name"
                          />
                          {formErrors.lastName && (
                            <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.lastName}
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`mt-1 transition-all duration-200 ${formErrors.email ? "border-red-500 focus:border-red-500" : "focus:border-amber-600"}`}
                          placeholder="your.email@example.com"
                        />
                        {formErrors.email && (
                          <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.email}
                          </div>
                        )}
                        <p className="text-xs text-stone-500 mt-1">
                          You'll receive cohort details and access information here
                        </p>
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1 focus:border-amber-600"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Learning Background */}
                {currentStep === 2 && (
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-amber-600" />
                        Learning Background
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="motivation">What motivates you to join this cohort? *</Label>
                        <Textarea
                          id="motivation"
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleInputChange}
                          rows={4}
                          className={`mt-1 transition-all duration-200 ${formErrors.motivation ? "border-red-500 focus:border-red-500" : "focus:border-amber-600"}`}
                          placeholder="Share what draws you to this learning experience..."
                        />
                        {formErrors.motivation && (
                          <div className="flex items-center gap-1 mt-1 text-sm text-red-600">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.motivation}
                          </div>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="experience">Previous Islamic learning experience (Optional)</Label>
                        <Textarea
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          rows={3}
                          className="mt-1 focus:border-amber-600"
                          placeholder="Tell us about your background in Islamic studies..."
                        />
                      </div>
                      <div>
                        <Label htmlFor="hearAbout">How did you hear about Nukhta? (Optional)</Label>
                        <select
                          id="hearAbout"
                          name="hearAbout"
                          value={formData.hearAbout}
                          onChange={handleInputChange}
                          className="mt-1 w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                        >
                          <option value="">Select an option</option>
                          <option value="social-media">Social Media</option>
                          <option value="friend">Friend/Family</option>
                          <option value="search">Search Engine</option>
                          <option value="podcast">Podcast</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 3: Confirmation */}
                {currentStep === 3 && (
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        Confirm Your Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-stone-50 rounded-lg p-4 space-y-2">
                        <div>
                          <strong>Name:</strong> {formData.firstName} {formData.lastName}
                        </div>
                        <div>
                          <strong>Email:</strong> {formData.email}
                        </div>
                        {formData.phone && (
                          <div>
                            <strong>Phone:</strong> {formData.phone}
                          </div>
                        )}
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <div className="font-medium text-amber-800 mb-2">Your Motivation:</div>
                        <div className="text-amber-700 text-sm italic">"{formData.motivation}"</div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrev}
                      className="flex-1 h-12 border-stone-300 text-stone-700 hover:bg-stone-50 rounded-full transition-all duration-300"
                    >
                      Previous
                    </Button>
                  )}

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 h-12 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="flex-1 h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Complete Enrollment - $59.99
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-stone-500">
                  <Shield className="w-3 h-3" />
                  <span>Payment processed securely via our trusted partner</span>
                </div>
              </form>
            </div>

            {/* Enhanced Cohort Summary */}
            <div className="space-y-6">
              {/* Live Activity Feed */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    Live Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentEnrollments.map((enrollment, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">{enrollment.name}</span>
                      <span className="text-stone-600">from {enrollment.location}</span>
                      <span className="text-stone-500 text-xs ml-auto">{enrollment.time}</span>
                    </div>
                  ))}
                  <div className="text-center pt-2 border-t border-emerald-200">
                    <span className="text-emerald-700 font-medium">
                      <AnimatedCounter end={spotsLeft} duration={1000} /> spots remaining
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Cohort Summary */}
              <Card className="sticky top-32 border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Cohort Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Episode Preview */}
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/british-empire-map.jpeg"
                        width={80}
                        height={80}
                        alt="From Crusades to Colonization"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-stone-900 leading-tight">From Crusades to Colonization</h3>
                      <p className="text-sm text-stone-600">The Origins of Empire Thinking</p>
                      <p className="text-sm text-amber-600 font-medium">Shaykh Mustafa Briggs</p>
                    </div>
                  </div>

                  {/* Cohort Details */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-stone-900">Next Cohort Details</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 bg-stone-50 rounded-lg p-3">
                        <Calendar className="w-4 h-4 text-amber-600" />
                        <span>Starts March 15</span>
                      </div>
                      <div className="flex items-center gap-2 bg-stone-50 rounded-lg p-3">
                        <Clock className="w-4 h-4 text-amber-600" />
                        <span>60 minutes</span>
                      </div>
                      <div className="flex items-center gap-2 bg-stone-50 rounded-lg p-3">
                        <Users className="w-4 h-4 text-amber-600" />
                        <span>Max 50 students</span>
                      </div>
                      <div className="flex items-center gap-2 bg-stone-50 rounded-lg p-3">
                        <Globe className="w-4 h-4 text-amber-600" />
                        <span>Live online</span>
                      </div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-stone-900">What's Included</h4>
                    <div className="space-y-2">
                      {[
                        "Live 60-minute session with Q&A",
                        "Lifetime access to recording",
                        "Direct engagement with scholar",
                        "Private cohort discussion group",
                        "Downloadable resources & materials",
                        "Certificate of completion",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-stone-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-2xl text-amber-600">$59.99</span>
                    </div>
                    <p className="text-xs text-stone-500">One-time payment • No recurring charges</p>
                  </div>

                  {/* Guarantee */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-2 text-emerald-800 font-medium mb-1">
                      <Shield className="w-4 h-4" />
                      <span>30-Day Satisfaction Guarantee</span>
                    </div>
                    <p className="text-sm text-emerald-700">
                      Not satisfied? Get a full refund within 30 days, no questions asked.
                    </p>
                  </div>

                  {/* Social Proof */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-sm text-stone-600 ml-2">5.0 from 1,247+ students</span>
                    </div>
                    <p className="text-xs text-stone-500">Join thousands of satisfied learners</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
