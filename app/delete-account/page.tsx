"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Trash2, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";
import { deletionSchema, type DeletionFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function DeleteAccountPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeletionFormData>({
    resolver: zodResolver(deletionSchema),
  });

  const onSubmit = async (data: DeletionFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/delete-account", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit request");

      setIsSuccess(true);
      toast.success("Deletion request submitted successfully.");
    } catch {
      toast.error("Failed to submit request. Please contact support@palaniPadayathirai.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="py-32 flex items-center justify-center container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-12 rounded-[3rem] text-center space-y-6 max-w-2xl border border-white/50 shadow-2xl"
        >
          <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold">Request Received</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your request for account deletion has been successfully submitted. We will process your request and permanently delete your personal data within 30 days. You will receive a confirmation email once the process is complete.
          </p>
          <Button onClick={() => window.location.href = "/"} variant="outline" className="rounded-xl px-8">
            Return Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background Warning Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <Trash2 className="w-[600px] h-[600px]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-red-500 font-bold text-sm">
            <AlertTriangle className="w-4 h-4" />
            Permanent Action
          </div>
          <h1 className="text-5xl font-bold tracking-tight">Delete Your <span className="text-red-500">Account</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We&apos;re sorry to see you go. Please complete this form to request the permanent deletion of your Palani Padayathirai account and associated data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-6 rounded-2xl border border-white/20">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                What happens next?
              </h4>
              <ul className="text-sm space-y-3 text-muted-foreground leading-relaxed list-disc ml-4">
                <li>Your profile will be deactivated immediately.</li>
                <li>All your personal data, including location history, rewards, and group memberships, will be <strong>permanently deleted</strong>.</li>
                <li>You will lose access to all premium features and your community feed posts.</li>
                <li>This action <strong>cannot be undone</strong>.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/50 shadow-2xl"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Full Name</label>
                  <Input
                    {...register("fullName")}
                    placeholder="Enter your full name"
                    className="rounded-xl py-6 bg-white/50 border-white/20 focus:bg-white transition-all"
                  />
                  {errors.fullName && <p className="text-xs text-red-500 ml-1">{errors.fullName.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Contact Email</label>
                    <Input
                      {...register("email")}
                      placeholder="your@email.com"
                      className="rounded-xl py-6 bg-white/50 border-white/20 focus:bg-white transition-all"
                    />
                    {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Registered App Email</label>
                    <Input
                      {...register("accountEmail")}
                      placeholder="registered@app.com"
                      className="rounded-xl py-6 bg-white/50 border-white/20 focus:bg-white transition-all border-primary/20"
                    />
                    {errors.accountEmail && <p className="text-xs text-red-500 ml-1">{errors.accountEmail.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Reason for Deletion</label>
                  <Textarea
                    {...register("reason")}
                    placeholder="Please tell us why you're leaving (optional, but helpful for improvement)..."
                    className="rounded-2xl bg-white/50 border-white/20 focus:bg-white transition-all resize-none p-4"
                    rows={4}
                  />
                  {errors.reason && <p className="text-xs text-red-500 ml-1">{errors.reason.message}</p>}
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100 dark:bg-red-900/10 dark:border-red-900/20">
                  <input
                    type="checkbox"
                    id="confirmation"
                    {...register("confirmation")}
                    className="mt-1 w-4 h-4 rounded border-red-300 text-red-600 focus:ring-red-500 cursor-pointer"
                  />
                  <label htmlFor="confirmation" className="text-sm text-red-800 dark:text-red-400 font-medium cursor-pointer">
                    I understand that my personal data will be permanently deleted and this action cannot be undone.
                  </label>
                </div>
                {errors.confirmation && <p className="text-xs text-red-500 ml-1">{errors.confirmation.message}</p>}

                <Button
                  disabled={isSubmitting}
                  variant="destructive"
                  className="w-full rounded-2xl py-8 text-lg font-bold shadow-xl shadow-red-500/20 transition-all active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      <Trash2 className="mr-3 h-5 w-5" />
                      Confirm Data Deletion
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
