"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { 
  MapPin, AlertCircle, TrendingUp, Music, BookOpen, Utensils, 
  Home, Landmark, Users, Footprints, Quote, Calendar, CheckSquare,
  ChevronLeft, ChevronRight
} from "lucide-react";

const features = [
  {
    title: "Live Tracking",
    description: "Share your real-time location with your group and family for a safe journey.",
    icon: MapPin,
    color: "bg-blue-500",
  },
  {
    title: "SOS Emergency",
    description: "Instant emergency alerts to nearby responders and your emergency contacts.",
    icon: AlertCircle,
    color: "bg-red-500",
  },
  {
    title: "Hill Step Tracker",
    description: "Track your progress as you climb the sacred steps of Palani Hill.",
    icon: TrendingUp,
    color: "bg-green-500",
  },
  {
    title: "Spiritual Music",
    description: "Immerse yourself in a curated collection of Murugan devotional songs.",
    icon: Music,
    color: "bg-purple-500",
  },
  {
    title: "Sacred Stories",
    description: "Read and listen to the divine history and legends of Palani Murugan.",
    icon: BookOpen,
    color: "bg-amber-500",
  },
  {
    title: "Annadhanam Directory",
    description: "Find nearby places providing free food and water along your path.",
    icon: Utensils,
    color: "bg-orange-500",
  },
  {
    title: "Madangal Search",
    description: "Locate and book stays at various Madangal and accommodation centers.",
    icon: Home,
    color: "bg-indigo-500",
  },
  {
    title: "Temple Guide",
    description: "Complete guide to rituals, timings, and history of the Palani Murugan Temple.",
    icon: Landmark,
    color: "bg-stone-500",
  },
  {
    title: "Community Feed",
    description: "Connect with other pilgrims, share experiences, and stay updated.",
    icon: Users,
    color: "bg-sky-500",
  },
  {
    title: "Group Walks",
    description: "Join or create walking groups to journey together with fellow devotees.",
    icon: Footprints,
    color: "bg-emerald-500",
  },
  {
    title: "Daily Quotes",
    description: "Begin your day with spiritual wisdom and motivational quotes.",
    icon: Quote,
    color: "bg-yellow-500",
  },
  {
    title: "Auspicious Dates",
    description: "Stay informed about temple festivals and auspicious pilgrimage dates.",
    icon: Calendar,
    color: "bg-rose-500",
  },
  {
    title: "Travel Checklist",
    description: "A customized checklist to ensure you have everything for your journey.",
    icon: CheckSquare,
    color: "bg-cyan-500",
  },
];

export function Features() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    containScroll: "trimSnaps",
    loop: true 
  }, [Autoplay({ delay: 3000, stopOnInteraction: false })])

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100 italic">
              Essential Divine Tools
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 text-base font-normal leading-relaxed max-w-xl">
              Empowering your pilgrimage with cutting-edge technology and spiritual essence.
            </p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-zinc-800 text-slate-400 hover:text-primary hover:border-primary/50 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-zinc-800 text-slate-400 hover:text-primary hover:border-primary/50 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {features.map((feature, index) => (
              <div key={index} className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_24%] pl-6 min-w-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group h-full p-6 rounded-2xl border border-slate-100 dark:border-zinc-900 bg-slate-50/30 dark:bg-zinc-900/10 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-premium transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center mb-5 shadow-sm transform group-hover:scale-105 transition-all`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[17px] font-semibold mb-2 text-slate-800 dark:text-zinc-200 tracking-tight transition-colors group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 dark:text-zinc-500 text-xs leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
