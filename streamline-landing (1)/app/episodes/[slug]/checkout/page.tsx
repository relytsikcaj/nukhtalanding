"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Check, Clock, Users, Shield, CreditCard, Lock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"

const episodeData = {
  "from-crusades-to-colonization": {
    title: "From Crusades to Colonization",
    subtitle: "The Origins of Empire Thinking",
    instructor: "Shaykh Mustafa Briggs",
    duration: "60 minutes",
    students: "1,247",
    price: 59.99,
    image: "/images/british-empire-map.jpeg",
    features: [
      "60-minute live session with Q&A",
      "Lifetime access to recording",
      "Direct engagement with scholar",
      "Private group Q&A access",
      "Downloadable resources",
      "Certificate of completion",
    ],
  },
}

export default function CheckoutPage() {
  const params = useParams()
  const slug = params.slug as string
  const episode = episodeData[slug as keyof typeof episodeData]
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")

  if (!episode) {
    return (
      <div className="min-h-screen bg-[#f5f4f2] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-stone-900">Episode not found</h1>
          <Link href="/episodes">
            <Button variant="outline">Browse Episodes</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page
      window.location.href = `/episodes/${slug}/success`
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#f5f4f2]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#f5f4f2]/95 backdrop-blur-md border-b border-stone-200/50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link
            href={`/episodes/${slug}`}
            className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Episode</span>
          </Link>
          <Image src="/images/nukhta-logo.png" alt="Nukhta" width={160} height={64} className="h-14 w-auto" />
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <Shield className="h-4 w-4 text-emerald-600" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-stone-900 font-serif mb-2">Complete Your Enrollment</h1>
              <p className="text-stone-600">Join thousands of thoughtful learners worldwide</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required className="mt-1" />
                    <p className="text-xs text-stone-500 mt-1">You'll receive access details here</p>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`flex-1 p-4 border rounded-lg flex items-center gap-3 transition-colors ${
                        paymentMethod === "card" ? "border-amber-700 bg-amber-50" : "border-stone-200"
                      }`}
                    >
                      <CreditCard className="h-5 w-5" />
                      <span>Credit Card</span>
                    </button>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required className="mt-1" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" required className="mt-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full min-h-[56px] bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-full"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-5 w-5" />
                    Complete Enrollment - ${episode.price}
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-stone-500">
                <Shield className="h-3 w-3" />
                <span>Secured by 256-bit SSL encryption</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Episode Preview */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={episode.image || "/placeholder.svg"}
                      width={80}
                      height={80}
                      alt={episode.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-900 leading-tight">{episode.title}</h3>
                    <p className="text-sm text-stone-600">{episode.subtitle}</p>
                    <p className="text-sm text-amber-700 font-medium">{episode.instructor}</p>
                  </div>
                </div>

                <Separator />

                {/* Episode Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-stone-400" />
                    <span>{episode.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-stone-400" />
                    <span>{episode.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-400" />
                    <span>5.0 rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Lifetime access</span>
                  </div>
                </div>

                <Separator />

                {/* What's Included */}
                <div>
                  <h4 className="font-semibold text-stone-900 mb-3">What's Included</h4>
                  <div className="space-y-2">
                    {episode.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-stone-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Episode Price</span>
                    <span>${episode.price}</span>
                  </div>
                  <div className="flex justify-between text-sm text-stone-600">
                    <span>Processing Fee</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${episode.price}</span>
                  </div>
                </div>

                {/* Money Back Guarantee */}
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-center gap-2 text-emerald-800 font-medium mb-1">
                    <Shield className="h-4 w-4" />
                    <span>30-Day Money Back Guarantee</span>
                  </div>
                  <p className="text-sm text-emerald-700">
                    Not satisfied? Get a full refund within 30 days, no questions asked.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
