"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const screenshots = [
  { src: "/App Show/Screen  (1).jpg", title: "Onboarding", desc: "Begin your pilgrimage with guided setup and personal preferences" },
  { src: "/App Show/Screen  (2).jpg", title: "Login", desc: "Secure access for pilgrims and account protection" },
  { src: "/App Show/Screen  (3).jpg", title: "Home Screen", desc: "View your live itinerary, rituals, and journey summary" },
  { src: "/App Show/Screen  (4).jpg", title: "Temple Guide", desc: "Discover nearby temples, timings, and darshan routes" },
  { src: "/App Show/Screen  (5).jpg", title: "Spiritual Music", desc: "Play devotional chants and calming bhajans for your journey" },
  { src: "/App Show/Screen  (6).jpg", title: "Live Tracking", desc: "Track your pilgrimage route and progress in real time" },
  { src: "/App Show/Screen  (7).jpg", title: "SOS Alerts", desc: "Send emergency alerts and stay connected with safety services" },
  { src: "/App Show/Screen  (8).jpg", title: "Spiritual Assistant", desc: "Receive prayer reminders, ritual guidance, and daily support" },
  { src: "/App Show/Screen  (9).jpg", title: "Annadhanam", desc: "Plan temple meal donations and charity events with ease" },
  { src: "/App Show/Screen  (10).jpg", title: "Community", desc: "Connect with devotees, share experiences, and join groups" },
  { src: "/App Show/Screen  (11).jpg", title: "Hill Step Tracking", desc: "Monitor your hill climb and step milestones on the route" },
  { src: "/App Show/Screen  (12).jpg", title: "Spiritual Stories", desc: "Explore sacred stories, legends, and temple lore" },
  { src: "/App Show/Screen  (13).jpg", title: "Daily Quotes", desc: "Get daily uplifting quotes and spiritual inspiration" },
]


export function ShowcaseCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    containScroll: "trimSnaps",
    loop: true 
  }, [Autoplay({ delay: 3000, stopOnInteraction: false })])

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="relative group w-full overflow-hidden">
      <div className="px-0 py-12" ref={emblaRef}>
        <div className="flex">
          {screenshots.map((item, index) => (
            <div 
              key={index} 
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_20%] px-4 sm:px-2 min-w-0"
            >
              <motion.div 
                whileHover={{ y: -8 }}
                className="flex h-full flex-col bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md p-2 rounded-[2rem] border border-white/20 shadow-premium"
              >
                <div className="relative aspect-[9/18.5] rounded-[1.6rem] overflow-hidden bg-slate-100 shadow-inner">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 px-2 pb-2 text-center flex-1">
                  <h4 className="text-[12px] font-bold text-slate-800 dark:text-zinc-200 tracking-tight">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate whitespace-nowrap">{item.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full glass border border-white/50 text-slate-600 hover:text-primary transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full glass border border-white/50 text-slate-600 hover:text-primary transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {screenshots.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-zinc-800" />
        ))}
      </div>
    </div>
  )
}
