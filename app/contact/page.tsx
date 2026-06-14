"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.message || "Failed to send message");
      }

      toast.success("Message sent successfully! We will get back to you soon.");
      reset();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      toast.error(message || "Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div suppressHydrationWarning className="min-h-screen bg-white dark:bg-zinc-950 py-32">
      <div className="container max-w-6xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-1.5 rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">Get Support</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-lg italic max-w-2xl mx-auto font-normal leading-relaxed">
            &quot;Anbe Sivam - Love is God. We are here to support your divine journey.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 pr-4"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">Contact Information</h2>
              <p className="text-slate-500 dark:text-zinc-400 text-base leading-relaxed">
                Have a question about the app, need technical support, or want to share your pilgrimage feedback? Our team is available to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group">
                <div className="p-3.5 rounded-xl bg-primary/10 text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-zinc-100 text-base">Email Support</h4>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm mt-1">marinandhu659@gmail.com</p>
                  <p className="text-slate-400 dark:text-zinc-500 text-xs mt-2">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800 hover:border-saffron/30 hover:bg-saffron/5 transition-all duration-300 group">
                <div className="p-3.5 rounded-xl bg-saffron/10 text-saffron flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-zinc-100 text-base">Emergency Contact</h4>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm mt-1">Available 24/7 for SOS support</p>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm mt-1">Call: +91 87549 49307</p>
                  <p className="text-slate-400 dark:text-zinc-500 text-xs mt-2">Immediate assistance for pilgrims</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800 hover:border-maroon/30 hover:bg-maroon/5 transition-all duration-300 group">
                <div className="p-3.5 rounded-xl bg-maroon/10 text-maroon flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-zinc-100 text-base">Headquarters</h4>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm mt-1">Madurai, Tamil Nadu, India</p>
                  <p className="text-slate-400 dark:text-zinc-500 text-xs mt-2">Located in the spiritual heart</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-zinc-800 shadow-premium hover:shadow-2xl transition-shadow duration-300"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-sm font-semibold text-slate-900 dark:text-zinc-100 ml-1 block">Full Name</label>
                    <Input
                      {...register("fullName")}
                      placeholder="Ravi Kumar"
                      className="rounded-xl py-6 px-4 bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 focus:bg-white dark:focus:bg-zinc-700 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 focus:border-primary transition-all"
                    />
                    {errors.fullName && <p className="text-xs text-red-500 ml-1 font-medium">{errors.fullName.message}</p>}
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-sm font-semibold text-slate-900 dark:text-zinc-100 ml-1 block">Email Address</label>
                    <Input
                      {...register("email")}
                      placeholder="ravi@example.com"
                      className="rounded-xl py-6 px-4 bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 focus:bg-white dark:focus:bg-zinc-700 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 focus:border-primary transition-all"
                    />
                    {errors.email && <p className="text-xs text-red-500 ml-1 font-medium">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-sm font-semibold text-slate-900 dark:text-zinc-100 ml-1 block">Phone Number</label>
                    <Input
                      {...register("phone")}
                      placeholder="+91 98765 43210"
                      className="rounded-xl py-6 px-4 bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 focus:bg-white dark:focus:bg-zinc-700 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 focus:border-primary transition-all"
                    />
                    {errors.phone && <p className="text-xs text-red-500 ml-1 font-medium">{errors.phone.message}</p>}
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-sm font-semibold text-slate-900 dark:text-zinc-100 ml-1 block">Subject</label>
                    <Input
                      {...register("subject")}
                      placeholder="Support needed"
                      className="rounded-xl py-6 px-4 bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 focus:bg-white dark:focus:bg-zinc-700 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 focus:border-primary transition-all"
                    />
                    {errors.subject && <p className="text-xs text-red-500 ml-1 font-medium">{errors.subject.message}</p>}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-sm font-semibold text-slate-900 dark:text-zinc-100 ml-1 block">Your Message</label>
                  <Textarea
                    {...register("message")}
                    placeholder="Write your message here..."
                    rows={5}
                    className="rounded-2xl px-4 py-4 bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700 focus:bg-white dark:focus:bg-zinc-700 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 focus:border-primary resize-none transition-all"
                  />
                  {errors.message && <p className="text-xs text-red-500 ml-1 font-medium">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl py-6 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 bg-primary hover:bg-primary/90 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
