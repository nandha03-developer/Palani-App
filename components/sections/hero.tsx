"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadDialog } from "@/components/shared/download-dialog";
import { ChevronRight, Play, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background with spiritual imagery - Very Subtle */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/palani_temple_hero.png"
          alt="Palani Temple"
          fill
          className="object-cover scale-105 opacity-30 dark:opacity-10 blur-[1px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-[1]" />
      </div>

      <div className="container max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-saffron/5 border border-saffron/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <Star className="w-3 h-3 text-saffron fill-saffron" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-saffron/80">Pilgrimage Companion</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.2] text-slate-900 dark:text-zinc-100">
                Your Sacred Journey, <br />
                <span className="text-primary italic font-medium">Digitally Guided.</span>
              </h1>

              <p className="text-base md:text-lg text-slate-500 dark:text-zinc-400 leading-relaxed max-w-xl font-normal">
                The ultimate companion for devotees traveling to Palani. Experience safety and devotion with a professional digital assistant.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <DownloadDialog>
                <Button size="lg" className="rounded-full px-8 h-12 text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 group">
                  Download Now
                  <ChevronRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DownloadDialog>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-sm font-semibold border-slate-200 dark:border-zinc-800"
                onClick={() => {
                  const el = document.getElementById("how-it-works");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Play className="mr-2 w-4 h-4 fill-current" />
                How it Works
              </Button>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 transform lg:translate-x-10">
              <div className="absolute -inset-20 bg-primary/5 rounded-full blur-[100px] opacity-50" />
              <Image
                src="/redit.png"
                alt="App Interface"
                width={400}
                height={800}
                className="drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)] rounded-[3rem] relative z-20 border-4 border-slate-950/5 dark:border-white/5 mx-auto lg:mx-0"
              />
            </div>
            
            {/* Minimal Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 right-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-premium z-30 border border-slate-100 dark:border-zinc-800"
            >
              <div className="flex items-center gap-2.5">
                <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse" />
                <span className="text-[11px] font-semibold text-slate-700 dark:text-zinc-300 uppercase tracking-wider">Live Tracking</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-4 py-3 rounded-2xl shadow-premium z-30 border border-slate-100 dark:border-zinc-800"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Play className="w-3.5 h-3.5 text-primary fill-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Devotional</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Kanda Sashti</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
