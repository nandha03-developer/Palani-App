"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import { Smartphone, CheckCircle2 } from "lucide-react"

interface DownloadDialogProps {
  children: React.ReactNode
}

export function DownloadDialog({ children }: DownloadDialogProps) {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.palani.Padayathirai"
  const APP_STORE_URL = "https://apps.apple.com/app/id000000000"
  return (
    <Dialog>
      <DialogTrigger render={children as React.ReactElement} />
      <DialogContent className="sm:max-w-md rounded-[2.5rem] p-0 overflow-hidden border-none shadow-2xl">
        <div className="bg-white p-8 sm:p-10">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-premium flex items-center justify-center border border-slate-100 mb-2">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-semibold tracking-tight text-slate-900">
              Get the App
            </DialogTitle>
            <DialogDescription className="text-slate-500 text-base">
              Download Palani Padayathirai and start your divine journey today.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 mt-10">
            <Button 
              className="w-full h-16 rounded-[1.25rem] bg-slate-950 hover:bg-slate-900 text-white flex items-center justify-between px-6 group transition-all"
              onClick={() => window.open(PLAY_STORE_URL, "_blank", "noopener,noreferrer")}
            >
              <div className="flex items-center gap-4">
                <Icon icon="mdi:google-play" width="24" height="24" className="text-saffron" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-widest font-bold opacity-60">Get it on</span>
                  <span className="block text-lg font-bold">Google Play</span>
                </div>
              </div>
              <Icon icon="mdi:chevron-right" width="20" height="20" className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
            </Button>

            <Button 
              variant="outline"
              className="w-full h-16 rounded-[1.25rem] bg-white border-slate-200 hover:bg-slate-50 text-slate-900 flex items-center justify-between px-6 group transition-all"
              onClick={() => window.open(APP_STORE_URL, "_blank", "noopener,noreferrer")}
            >
              <div className="flex items-center gap-4">
                <Icon icon="mdi:apple" width="24" height="24" className="text-slate-900" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">Download on the</span>
                  <span className="block text-lg font-bold">App Store</span>
                </div>
              </div>
              <Icon icon="mdi:chevron-right" width="20" height="20" className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-center gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                Latest v2.4
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                Safe & Secure
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
