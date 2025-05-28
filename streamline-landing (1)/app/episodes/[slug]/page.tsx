"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Users, Star, Check, Play, Calendar, Globe, BookOpen, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"

const episodeData = {
  "from-crusades-to-colonization": {
    title: "From Crusades to Colonization",
    subtitle: "The Origins of Empire Thinking",
    instructor: {
      name: "Shaykh Mustafa Briggs",
      credentials: "Best Selling Author of Beyond Bilal & Scholar",
      bio: "Shaykh Mustafa Briggs brings deep scholarship in Islamic history and thoughtful analysis of how religious and political narratives intersect. His approach emphasizes understanding over judgment, seeking wisdom from historical patterns.",
      avatar: "/images/shaykh-mustafa-profile.jpeg",
      students: "34,000",
      rating: 5,
    },
    description: "How historical events shaped imperial mindsets",
    longDescription:
      "A thoughtful exploration of how historical events shaped modern thinking patterns. This episode examines the deep connections between the Crusades and later imperial expansion, offering insights into the mindset that enabled colonization.",
    duration: "60 minutes",
    students: "1,247",
    price: 59.99,
    status: "Coming Soon",
    releaseDate: "July 2025",
    image: "/images/british-empire-map.jpeg",
    learningObjectives: [
      "Clear historical connections between the Crusades and imperial expansion",
      "Understanding how religious narratives justified political actions",
      "Insights into the mindset that enabled colonization",
      "A framework for analyzing power dynamics between Islam and the West",
      "Direct engagement with Shaykh Mustafa through guided discussion",
    ],
    syllabus: [
      {
        title: "Historical Context",
        duration: "15 min",
        description: "Setting the stage: Europe before and during the Crusades",
      },
      {
        title: "Religious Justification",
        duration: "20 min",
        description: "How religious narratives were used to justify political expansion",
      },
      {
        title: "Imperial Mindset Formation",
        duration: "15 min",
        description: "The psychological and cultural shifts that enabled later colonization",
      },
      {
        title: "Live Q&A Discussion",
        duration: "10 min",
        description: "Direct engagement with Shaykh Mustafa and community",
      },
    ],
  },
  "maristans-and-meaning": {
    title: "Maristans & Meaning",
    subtitle: "Navigating Modern Nihilism",
    instructor: {
      name: "Ustadh Mohammed Isaaq",
      credentials: "MA in Islamic Philosophy • Mental Health Advocate",
      bio: "Ustadh Mohammed Isaaq combines traditional Islamic scholarship with modern understanding of mental health and meaning-making. His work focuses on how Islamic wisdom can address contemporary existential challenges.",
      avatar: "Muslim teacher in modern setting",
      students: "28,500",
      rating: 5,
    },
    description: "Navigating modern nihilism through Islamic wisdom",
    longDescription:
      "In an age of increasing nihilism and meaninglessness, this episode explores how the Islamic tradition of Maristans (healing centers) offers a framework for understanding mental and spiritual wellness in the modern world.",
    duration: "60 minutes",
    students: "892",
    price: 59.99,
    status: "Coming Soon",
    releaseDate: "April 2024",
    image: "traditional Islamic healing and spiritual wellness",
    learningObjectives: [
      "Understanding the historical role of Maristans in Islamic civilization",
      "Connecting traditional healing wisdom to modern mental health challenges",
      "Practical frameworks for finding meaning in a nihilistic age",
      "Islamic approaches to existential questions and purpose",
      "Community discussion on implementing these insights",
    ],
    syllabus: [
      {
        title: "The Maristan Tradition",
        duration: "15 min",
        description: "Historical overview of Islamic healing centers and their holistic approach",
      },
      {
        title: "Modern Nihilism Diagnosis",
        duration: "15 min",
        description: "Understanding the roots and manifestations of contemporary meaninglessness",
      },
      {
        title: "Islamic Frameworks for Meaning",
        duration: "20 min",
        description: "Traditional wisdom for addressing existential challenges",
      },
      {
        title: "Live Q&A Discussion",
        duration: "10 min",
        description: "Practical application and community engagement",
      },
    ],
  },
}

export default function EpisodePage() {
  const params = useParams()
  const slug = params.slug as string
  const episode = episodeData[slug as keyof typeof episodeData]
  const [joinedWaitlist, setJoinedWaitlist] = useState(false)

  if (!episode) {
    return (
      <div className="min-h-screen bg-[#f5f4f2] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-stone-900">Episode not found</h1>
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleJoinWaitlist = () => {
    setJoinedWaitlist(true)
    setTimeout(() => setJoinedWaitlist(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#f5f4f2]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#f5f4f2]/95 backdrop-blur-md border-b border-stone-200/50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Episodes</span>
          </Link>
          <Image src="/images/nukhta-logo.png" alt="Nukhta" width={120} height={48} className="h-10 w-auto" />
          <Button
            onClick={handleJoinWaitlist}
            className={`
              min-h-[48px] px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium
              transition-all duration-200 rounded-full
              ${joinedWaitlist ? "bg-emerald-600 scale-95" : "hover:scale-105"}
            `}
          >
            {joinedWaitlist ? "Enrolled!" : "Enroll Now"}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 space-y-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Episode Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900">
              <Image
                src={episode.image || "/placeholder.svg"}
                width={600}
                height={400}
                alt={episode.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-amber-700 text-white">Season 1 • Episode 1</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-orange-500 text-white">
                  {episode.status}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-3xl font-bold">${episode.price}</div>
                <div className="text-sm opacity-90">Season 1, Episode 1</div>
              </div>
            </div>
          </div>

          {/* Episode Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-amber-700 font-medium">
                <Play className="h-4 w-4" />
                <span>Season 1 • Episode 1</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-stone-900 font-serif leading-tight tracking-tight">
                {episode.title}
              </h1>
              <p className="text-xl text-stone-700 font-medium">{episode.subtitle}</p>
              <p className="text-lg text-stone-600 leading-relaxed">{episode.longDescription}</p>
            </div>

            {/* Episode Stats */}
            <div className="flex flex-wrap items-center gap-6 text-stone-600">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{episode.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{episode.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{episode.releaseDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>Live + Recording</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleJoinWaitlist}
                size="lg"
                className={`
                  flex-1 min-h-[56px] px-8 py-4 text-lg font-semibold rounded-full
                  bg-emerald-600 hover:bg-emerald-700 text-white
                  transition-all duration-200 shadow-lg hover:shadow-xl
                  ${joinedWaitlist ? "bg-emerald-600 scale-95" : "hover:scale-105"}
                `}
              >
                {joinedWaitlist ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Enrolled!
                  </>
                ) : (
                  <>Enroll Now - ${episode.price}</>
                )}
              </Button>
              <Button variant="outline" size="lg" className="min-h-[56px] px-8 py-4 rounded-full">
                <Share2 className="mr-2 h-5 w-5" />
                Share
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>Lifetime access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span>Private group Q&A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Instructor Section */}
        <Card className="bg-white border-stone-200">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-stone-900 tracking-tight">Meet Your Instructor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={episode.instructor.avatar || "/placeholder.svg"}
                  width={120}
                  height={120}
                  alt={episode.instructor.name}
                  className="rounded-full border-4 border-amber-100"
                />
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900">{episode.instructor.name}</h3>
                  <p className="text-amber-700 font-medium">{episode.instructor.credentials}</p>
                </div>
                <p className="text-stone-600 leading-relaxed">{episode.instructor.bio}</p>
                <div className="flex items-center gap-6 text-sm text-stone-500">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{episode.instructor.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>60 minutes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1">{episode.instructor.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Objectives */}
        <Card className="bg-white border-stone-200">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-stone-900 tracking-tight">What You'll Learn</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {episode.learningObjectives.map((objective, index) => (
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

        {/* Episode Breakdown */}
        <Card className="bg-white border-stone-200">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-stone-900 tracking-tight">Episode Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {episode.syllabus.map((section, index) => (
                <div key={index} className="flex gap-4 p-4 bg-stone-50 rounded-lg">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-stone-900">{section.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {section.duration}
                      </Badge>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <Card className="bg-gradient-to-br from-stone-900 to-stone-800 text-white border-0">
          <CardContent className="p-8 text-center space-y-6">
            <h3 className="text-3xl font-bold font-serif tracking-tight">Ready to begin this journey?</h3>
            <p className="text-xl text-stone-200 max-w-2xl mx-auto">
              Join {episode.students} thoughtful learners exploring {episode.title.toLowerCase()}.
            </p>
            <Button
              onClick={handleJoinWaitlist}
              size="lg"
              className={`
                min-h-[56px] px-12 py-4 text-lg font-semibold rounded-full
                bg-emerald-600 hover:bg-emerald-700 text-white
                transition-all duration-200 shadow-lg hover:shadow-xl
                ${joinedWaitlist ? "bg-emerald-600 scale-95" : "hover:scale-105"}
              `}
            >
              {joinedWaitlist ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Enrolled!
                </>
              ) : (
                <>Enroll Now - ${episode.price}</>
              )}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
