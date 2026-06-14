// import { Hero } from "@/components/sections/hero";
// import { Features } from "@/components/sections/features";
// import { FAQSection } from "@/components/sections/faq";
// import { ShowcaseCarousel } from "@/components/sections/showcase-carousel";
// import { DownloadDialog } from "@/components/shared/download-dialog";
// import { Button } from "@/components/ui/button";
// import { Smartphone, Download, ShieldCheck, Zap, ArrowRight } from "lucide-react";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col gap-0 overflow-x-hidden bg-white dark:bg-zinc-950">
//       <Hero />
      
//       {/* Why Choose Us Section */}
//       <section className="py-24 border-b border-slate-50 dark:border-zinc-900">
//         <div className="container max-w-6xl mx-auto px-8">
//           <div className="flex flex-col lg:flex-row gap-20 items-center">
//             <div className="flex-1 space-y-10">
//               <div className="space-y-4">
//                 <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100 italic">Why Palani Padayathirai?</h2>
//                 <p className="text-slate-500 dark:text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
//                   We&apos;ve combined spiritual tradition with modern safety technology to create an experience that honors your devotion.
//                 </p>
//               </div>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                 {[
//                   { icon: ShieldCheck, title: "Safety First", text: "Enterprise-grade SOS for peace of mind." },
//                   { icon: Zap, title: "Pro-Active Alerts", text: "Weather and crowd level notifications." },
//                   { icon: Smartphone, title: "User Friendly", text: "Designed for all ages (Tamil/English)." },
//                   { icon: Download, title: "Free Access", text: "No charges for spiritual features." }
//                 ].map((item, i) => (
//                   <div key={i} className="space-y-3 group">
//                     <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-900 flex items-center justify-center border border-slate-100 dark:border-zinc-800 transition-all group-hover:bg-primary group-hover:text-white">
//                       <item.icon className="w-5 h-5 transition-colors" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-[15px] tracking-tight">{item.title}</h4>
//                       <p className="text-slate-400 text-xs leading-relaxed mt-1">{item.text}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="flex-1 relative lg:pl-10">
//               <div className="relative aspect-square max-w-[450px] mx-auto">
//                 <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] opacity-40 md:opacity-0" />
//                 <div className="relative z-10 glass p-3 rounded-[2.5rem] border border-white/50 shadow-premium">
//                   <Image
//                     src="/palani_temple_hero.png"
//                     alt="Temple"
//                     width={450}
//                     height={450}
//                     className="rounded-[2rem] shadow-2xl object-cover h-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Features />

//       {/* How it Works Section */}
//       <section id="how-it-works" className="py-24 bg-slate-50/30 dark:bg-zinc-900/10">
//         <div className="container max-w-6xl mx-auto px-8">
//           <div className="text-center mb-20 space-y-3">
//             <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">Simple Onboarding</h2>
//             <p className="text-slate-400 text-base font-normal italic">Sacred walk in 3 simple steps.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {[
//               { step: "01", title: "Registration", text: "Download and create your devotee profile." },
//               { step: "02", title: "Join Groups", text: "Connect with fellow pilgrims walking to Palani." },
//               { step: "03", title: "Begin Walk", text: "Start tracking and enjoy spiritual content." }
//             ].map((item, i) => (
//               <div key={i} className="relative group text-center space-y-6">
//                 <div className="text-[6rem] font-bold text-slate-100 dark:text-zinc-900 absolute -top-16 left-1/2 -translate-x-1/2 z-0 select-none">
//                   {item.step}
//                 </div>
//                 <div className="relative z-10 space-y-2">
//                   <h3 className="text-lg font-semibold tracking-tight text-slate-800 dark:text-zinc-200">{item.title}</h3>
//                   <p className="text-slate-400 text-[13px] leading-relaxed max-w-[200px] mx-auto">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* App Showcase Carousel */}
//       <section className="py-24 bg-white dark:bg-zinc-950 overflow-hidden">
//         <div className="w-full">
//           <div className="text-center mb-16 space-y-3 px-8">
//             <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">App Showcase</h2>
//             <p className="text-slate-400 text-base font-normal">Explore the interface designed for devotees.</p>
//           </div>
          
//           <ShowcaseCarousel />
//         </div>
//       </section>

//       <FAQSection />

//       {/* CTA Download Section - Neat Light Mode */}
//       <section className="py-32 relative bg-slate-50/50 dark:bg-transparent">
//         <div className="container max-w-6xl mx-auto px-8 relative z-10">
//           <div className="relative group p-1 rounded-[3.5rem] bg-gradient-to-br from-saffron/20 via-primary/5 to-maroon/20 transition-all duration-500 hover:scale-[1.01]">
//             <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-3xl py-20 px-10 rounded-[3.4rem] text-center space-y-12 shadow-premium border border-white/60">
//               <div className="space-y-6">
//                 <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-1.5 rounded-full">
//                   <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">Official Mobile App</span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100 max-w-3xl mx-auto leading-tight italic text-balance">
//                   Join the Sacred Walk with <br className="hidden md:block" />
//                   <span className="text-primary not-italic font-bold">Palani Padayathirai</span>
//                 </h2>
//                 <p className="text-slate-500 dark:text-zinc-400 text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
//                   Join 10,000+ devotees who have made their pilgrimage safer, more connected, and more spiritual.
//                 </p>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20">
//                 <DownloadDialog>
//                   <Button size="lg" className="rounded-full px-10 h-16 text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 group transition-all active:scale-95">
//                     <Download className="mr-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
//                     Download App
//                     <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
//                   </Button>
//                 </DownloadDialog>
                
//                 <Button variant="link" className="text-slate-400 hover:text-primary font-semibold text-sm transition-colors group">
//                   View Setup Guide
//                   <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
