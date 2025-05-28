"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, Star, Calendar, Search, Play, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/ui/navigation"

export default function EpisodesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Episodes" },
    { id: "history", label: "History" },
    { id: "philosophy", label: "Philosophy" },
    { id: "spirituality", label: "Spirituality" },
  ]

  const upcomingEpisodes = [
    {
      id: "maristans-and-meaning",
      title: "Maristans & Meaning",
      subtitle: "Navigating Modern Nihilism",
      instructor: "Ustadh Mohammed Isaaq",
      category: "philosophy",
      status: "Coming Soon",
      date: "April 2024",
      image: "traditional Islamic healing and spiritual wellness",
    },
    {
      id: "science-and-spirituality",
      title: "Science & Spirituality",
      subtitle: "Bridging Ancient Wisdom and Modern Discovery",
      instructor: "Dr. Yasmin Al-Rashid",
      category: "spirituality",
      status: "Coming Soon",
      date: "May 2024",
      image: "islamic science and astronomy",
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
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border-amber-200 px-4 py-2">
                Current Season
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
                Season 1:
                <span className="block text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                  Historical Perspectives
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Explore how historical events shaped our understanding of Islam and the modern world.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
                <Input
                  placeholder="Search episodes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 rounded-full border-stone-200 focus:border-amber-600"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedFilter === filter.id
                        ? "bg-amber-600 text-white shadow-lg"
                        : "bg-white text-stone-600 hover:bg-stone-50 border border-stone-200"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Episode */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-4">Featured Episode</Badge>
              <h2 className="text-2xl font-semibold text-stone-900 mb-2">Most Popular Learning Experience</h2>
              <p className="text-stone-600">Join 1,247+ students in this transformative journey</p>
            </div>

            <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-br from-white to-stone-50">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Episode Image */}
                <div className="aspect-video md:aspect-square relative group">
                  <Image
                    src="/images/british-empire-map.jpeg"
                    alt="From Crusades to Colonization"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <Badge className="bg-emerald-600 text-white">Live Cohort</Badge>
                    <Badge className="bg-red-500 text-white animate-pulse">12 Spots Left</Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm opacity-90 mb-1">Season 1 • Episode 1</div>
                    <div className="text-3xl font-bold">$59.99</div>
                    <div className="text-sm opacity-90">One-time payment</div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Episode Content */}
                <CardContent className="p-8 md:p-12 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif font-bold text-stone-900 leading-tight">
                      From Crusades to Colonization
                    </h3>
                    <p className="text-xl text-stone-600 font-medium">The Origins of Empire Thinking</p>
                    <p className="text-stone-700 leading-relaxed">
                      A comprehensive exploration of how historical events shaped modern imperial mindsets and their
                      lasting impact on Muslim-Western relations.
                    </p>
                  </div>

                  {/* Enhanced Instructor Card */}
                  <Card className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src="/images/shaykh-mustafa-profile.jpeg"
                          alt="Shaykh Mustafa Briggs"
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-stone-900">Shaykh Mustafa Briggs</div>
                        <div className="text-sm text-amber-700 font-medium">Best Selling Author & Scholar</div>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-xs text-stone-600 ml-1">5.0 • 34k+ students</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Enhanced Episode Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-stone-600">
                    <div className="flex items-center gap-2 bg-white rounded-lg p-3 border border-stone-100">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>60 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded-lg p-3 border border-stone-100">
                      <Users className="w-4 h-4 text-amber-600" />
                      <span>1,247 students</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded-lg p-3 border border-stone-100">
                      <Calendar className="w-4 h-4 text-amber-600" />
                      <span>Next: March 15</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded-lg p-3 border border-stone-100">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>5.0 rating</span>
                    </div>
                  </div>

                  {/* Enhanced CTA */}
                  <div className="space-y-4">
                    <Link href="/episodes/from-crusades-to-colonization">
                      <Button className="w-full h-12 bg-gradient-to-r from-stone-900 to-stone-800 hover:from-stone-800 hover:to-stone-700 text-white rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        View Full Details
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/enroll">
                      <Button
                        variant="outline"
                        className="w-full h-12 border-2 border-amber-600 text-amber-700 hover:bg-amber-50 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                      >
                        Join Live Cohort - $59.99
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Coming Soon Episodes */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-stone-100 text-stone-700 border-stone-200 mb-4">Coming Soon</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
                More Episodes in Development
              </h2>
              <p className="text-xl text-stone-600">
                We're crafting additional episodes with the same depth and quality you expect from Nukhta.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEpisodes.map((episode, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-gradient-to-br from-white to-stone-50"
                >
                  <div className="aspect-video relative overflow-hidden rounded-t-xl">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&query=${episode.image}`}
                      width={500}
                      height={300}
                      alt={episode.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-600 text-white">{episode.status}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm opacity-90">{episode.date}</div>
                    </div>
                  </div>

                  <CardContent className="p-8 space-y-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-stone-300 text-stone-600 text-xs">
                        Season 1 • Episode {index + 2}
                      </Badge>
                      <h3 className="text-xl font-semibold text-stone-900">{episode.title}</h3>
                      <p className="text-stone-600 font-medium">{episode.subtitle}</p>
                      <p className="text-sm text-amber-700 font-medium">{episode.instructor}</p>
                    </div>

                    <div className="pt-4">
                      <Button
                        variant="outline"
                        className="w-full border-stone-300 text-stone-700 hover:bg-stone-50 rounded-full transition-all duration-300 group-hover:scale-105"
                      >
                        Join Waitlist
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/enroll">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Join Waitlist for All Episodes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <Badge className="bg-white text-stone-700 border-stone-200">Learning Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Your Islamic Learning Path</h2>
              <p className="text-xl text-stone-600">
                Each episode builds upon the last, creating a comprehensive understanding of Islamic history and
                thought.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  episode: "Episode 1",
                  title: "From Crusades to Colonization",
                  focus: "Historical Foundations",
                  status: "available",
                },
                {
                  episode: "Episode 2",
                  title: "Maristans & Meaning",
                  focus: "Philosophical Depth",
                  status: "coming",
                },
                {
                  episode: "Episode 3",
                  title: "Science & Spirituality",
                  focus: "Contemporary Relevance",
                  status: "coming",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-sm border border-stone-100"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      item.status === "available"
                        ? "bg-gradient-to-r from-emerald-600 to-emerald-700"
                        : "bg-gradient-to-r from-stone-400 to-stone-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm text-stone-500 font-medium">{item.episode}</div>
                    <div className="text-lg font-semibold text-stone-900">{item.title}</div>
                    <div className="text-sm text-stone-600">{item.focus}</div>
                  </div>
                  <Badge
                    className={
                      item.status === "available" ? "bg-emerald-50 text-emerald-700" : "bg-stone-100 text-stone-600"
                    }
                  >
                    {item.status === "available" ? "Available Now" : "Coming Soon"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
