"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Clock,
  Users,
  Star,
  Check,
  Calendar,
  Globe,
  BookOpen,
  Award,
  Play,
  Share2,
  Heart,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Navigation } from "@/components/ui/navigation"

export default function EpisodeDetailPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [liked, setLiked] = useState(false)

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "instructor", label: "Instructor" },
    { id: "reviews", label: "Reviews" },
  ]

  const reviews = [
    {
      name: "Amira Hassan",
      rating: 5,
      comment:
        "This episode completely transformed my understanding of Islamic history. Shaykh Mustafa's insights are profound and accessible.",
      date: "2 weeks ago",
      avatar: "/images/learner-1.jpeg",
    },
    {
      name: "Omar Abdullah",
      rating: 5,
      comment:
        "The live Q&A session was incredible. Being able to ask questions directly to such a knowledgeable scholar is invaluable.",
      date: "1 month ago",
      avatar: "/images/learner-2.jpeg",
    },
    {
      name: "Fatima Al-Zahra",
      rating: 5,
      comment: "Perfect for busy professionals. One hour of deep learning that I can actually fit into my schedule.",
      date: "1 month ago",
      avatar: "/images/learner-3.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-50">
      {/* Navigation */}
      <Navigation />

      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section className="py-12 px-6 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Enhanced Episode Image */}
              <div className="relative group">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/british-empire-map.jpeg"
                    width={600}
                    height={400}
                    alt="From Crusades to Colonization"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Enhanced Badges */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <Badge className="bg-emerald-600 text-white shadow-lg">Live Cohort Available</Badge>
                    <Badge className="bg-red-500 text-white animate-pulse">12 Spots Left</Badge>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm opacity-90 mb-1">Season 1 • Episode 1</div>
                    <div className="text-4xl font-bold">$59.99</div>
                    <div className="text-sm opacity-90">One-time payment</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLiked(!liked)}
                    className={`rounded-full ${liked ? "text-red-600 border-red-600" : ""}`}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${liked ? "fill-red-600" : ""}`} />
                    {liked ? "Liked" : "Like"}
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Enhanced Episode Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="border-amber-300 text-amber-700 bg-amber-50">
                    Season 1 • Episode 1
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
                    From Crusades to Colonization
                  </h1>
                  <p className="text-xl text-stone-600 font-medium">The Origins of Empire Thinking</p>
                  <p className="text-lg text-stone-700 leading-relaxed">
                    A comprehensive exploration of how historical events shaped modern imperial mindsets and their
                    lasting impact on Muslim-Western relations.
                  </p>
                </div>

                {/* Enhanced Episode Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Clock, label: "Duration", value: "60 minutes" },
                    { icon: Users, label: "Students", value: "1,247" },
                    { icon: Calendar, label: "Next Cohort", value: "March 15" },
                    { icon: Globe, label: "Format", value: "Live + Recording" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-sm text-stone-600">{stat.label}</div>
                          <div className="font-semibold text-stone-900">{stat.value}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="space-y-4">
                  <Link href="/enroll">
                    <Button
                      size="lg"
                      className="w-full h-16 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      Join Live Cohort - $59.99
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                  </Link>

                  {/* Enhanced Trust Indicators */}
                  <div className="grid grid-cols-3 gap-4 text-sm text-stone-600">
                    <div className="flex items-center gap-2 bg-emerald-50 rounded-lg p-3 text-emerald-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="font-medium">Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3 text-blue-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="font-medium">Live Q&A</span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-50 rounded-lg p-3 text-purple-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="font-medium">30-day guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Tabbed Content */}
        <section className="py-6 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8 bg-stone-100 rounded-full p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? tab.id === "overview"
                        ? "bg-white text-amber-600 shadow-sm"
                        : "bg-white text-stone-700 shadow-sm"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        "Clear historical connections between the Crusades and imperial expansion",
                        "Understanding how religious narratives justified political actions",
                        "Insights into the mindset that enabled colonization",
                        "Framework for analyzing power dynamics between Islam and the West",
                        "Direct engagement with Shaykh Mustafa through guided discussion",
                        "Practical applications for understanding contemporary geopolitics",
                      ].map((objective, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-emerald-600" />
                          </div>
                          <span className="text-stone-700 leading-relaxed">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Curriculum Tab */}
              {activeTab === "curriculum" && (
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Live Session Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Historical Context Setting",
                          duration: "15 min",
                          description: "Establishing the European mindset before and during the Crusades",
                          topics: ["Pre-Crusade Europe", "Religious fervor", "Political motivations"],
                        },
                        {
                          title: "Religious Justification Mechanisms",
                          duration: "20 min",
                          description: "How religious narratives enabled political expansion",
                          topics: ["Papal authority", "Holy war concept", "Divine mandate"],
                        },
                        {
                          title: "Imperial Psychology Formation",
                          duration: "15 min",
                          description: "The mental shifts that made colonization possible",
                          topics: ["Superiority complex", "Civilizing mission", "Economic justification"],
                        },
                        {
                          title: "Live Q&A Discussion",
                          duration: "10 min",
                          description: "Direct engagement with the scholar and community",
                          topics: ["Open questions", "Contemporary parallels", "Personal reflections"],
                        },
                      ].map((section, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-white to-stone-50 rounded-xl p-6 border border-stone-100"
                        >
                          <div className="flex gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0">
                              <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-stone-900 text-lg">{section.title}</h4>
                                <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                                  {section.duration}
                                </Badge>
                              </div>
                              <p className="text-stone-600 mb-3 leading-relaxed">{section.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {section.topics.map((topic, topicIndex) => (
                                  <span
                                    key={topicIndex}
                                    className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Instructor Tab */}
              {activeTab === "instructor" && (
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Meet Your Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0 text-center">
                        <div className="relative inline-block">
                          <Image
                            src="/images/shaykh-mustafa-profile.jpeg"
                            width={150}
                            height={150}
                            alt="Shaykh Mustafa Briggs"
                            className="rounded-full border-4 border-amber-100 shadow-lg"
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center">
                            <Award className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6 flex-1">
                        <div>
                          <h3 className="text-3xl font-bold text-stone-900">Shaykh Mustafa Briggs</h3>
                          <p className="text-xl text-amber-600 font-medium">
                            Best Selling Author of Beyond Bilal & Scholar
                          </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 text-center">
                          <div className="bg-stone-50 rounded-lg p-4">
                            <div className="text-2xl font-bold text-amber-600">
                              <AnimatedCounter end={34} duration={1500} />
                              k+
                            </div>
                            <div className="text-sm text-stone-600">Students Taught</div>
                          </div>
                          <div className="bg-stone-50 rounded-lg p-4">
                            <div className="text-2xl font-bold text-amber-600">15+</div>
                            <div className="text-sm text-stone-600">Years Experience</div>
                          </div>
                          <div className="bg-stone-50 rounded-lg p-4">
                            <div className="text-2xl font-bold text-amber-600 flex items-center justify-center gap-1">
                              5.0 <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            </div>
                            <div className="text-sm text-stone-600">Average Rating</div>
                          </div>
                        </div>

                        <p className="text-stone-600 leading-relaxed text-lg">
                          Shaykh Mustafa Briggs brings deep scholarship in Islamic history and thoughtful analysis of
                          how religious and political narratives intersect. His approach emphasizes understanding over
                          judgment, seeking wisdom from historical patterns that can inform our contemporary challenges.
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-stone-900">Credentials & Achievements</h4>
                          <div className="space-y-2">
                            {[
                              "PhD in Islamic History, Al-Azhar University",
                              "Best-selling author of 'Beyond Bilal'",
                              "Featured speaker at international conferences",
                              "15+ years teaching experience",
                            ].map((credential, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-600" />
                                <span className="text-stone-700">{credential}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Reviews Tab */}
              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-serif flex items-center gap-3">
                        Student Reviews
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-lg font-semibold">5.0</span>
                          <span className="text-stone-600">({reviews.length} reviews)</span>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {reviews.map((review, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-white to-stone-50 rounded-xl p-6 border border-stone-100"
                        >
                          <div className="flex gap-4">
                            <Image
                              src={review.avatar || "/placeholder.svg"}
                              width={50}
                              height={50}
                              alt={review.name}
                              className="rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <div className="font-semibold text-stone-900">{review.name}</div>
                                  <div className="text-sm text-stone-500">{review.date}</div>
                                </div>
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                  ))}
                                </div>
                              </div>
                              <p className="text-stone-700 leading-relaxed italic">"{review.comment}"</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA */}
        <section className="py-24 px-6 bg-gradient-to-br from-stone-900 to-stone-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200&query=islamic geometric pattern')] opacity-5"></div>
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <Badge className="bg-amber-600 text-white border-none">Limited Time</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Ready to join this learning journey?</h2>
            <p className="text-xl text-stone-200">Secure your spot in the next live cohort starting March 15th.</p>

            {/* Countdown and Urgency */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="text-sm text-stone-300 mb-2">Next cohort starts in:</div>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-xs text-stone-300">DAYS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">07</div>
                  <div className="text-xs text-stone-300">HOURS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-xs text-stone-300">MINS</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-5xl font-bold text-white">$59.99</div>
              <p className="text-stone-300">One-time payment • Lifetime access • 30-day guarantee</p>
            </div>

            <Link href="/enroll">
              <Button
                size="lg"
                className="h-16 px-12 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Join Live Cohort Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>

            <div className="flex items-center justify-center gap-4 text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>12 spots remaining</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>1,247+ enrolled</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
