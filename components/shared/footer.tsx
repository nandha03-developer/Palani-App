import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Icon } from "@iconify/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-zinc-900 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/palani-logo-Photoroom.png"
                alt="Palani Padayathirai"
                width={220}
                height={80}
                quality={100}
                className="object-contain"
              />
            </Link>
            <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
              The ultimate spiritual companion for your journey to Palani. Track your path, stay safe, and stay connected with the sacred community.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" }
              ].map((item, i) => (
                <Link 
                  key={i} 
                  href={item.href} 
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 dark:bg-zinc-900 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"
                >
                  <item.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-slate-400 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-500 dark:text-zinc-400 hover:text-primary transition-colors text-[13px] font-medium">Home</Link></li>
              <li><Link href="/about" className="text-slate-500 dark:text-zinc-400 hover:text-primary transition-colors text-[13px] font-medium">Our Mission</Link></li>
              <li><Link href="/faq" className="text-slate-500 dark:text-zinc-400 hover:text-primary transition-colors text-[13px] font-medium">FAQ</Link></li>
              <li><Link href="/contact" className="text-slate-500 dark:text-zinc-400 hover:text-primary transition-colors text-[13px] font-medium">Support</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-slate-400 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-slate-500 dark:text-zinc-400 hover:text-primary transition-colors text-[13px] font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 dark:text-zinc-400 hover:text-primary transition-colors text-[13px] font-medium">Terms of Service</Link></li>
              <li><Link href="/community-guidelines" className="text-slate-500 dark:text-zinc-400 hover:text-primary transition-colors text-[13px] font-medium">Guidelines</Link></li>
              {/* <li><Link href="/delete-account" className="text-red-500/70 hover:text-red-500 transition-colors text-[13px] font-medium">Delete Account</Link></li> */}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-slate-400 mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-slate-100 dark:border-zinc-800">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Email Support</span>
                <a href="mailto:marinandhu659@gmail.com" className="text-sm font-semibold text-slate-900 dark:text-zinc-100 hover:text-primary transition-colors">
                  marinandhu659@gmail.com
                </a>
              </div>
              <div className="bg-slate-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-slate-100 dark:border-zinc-800">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Phone</span>
                <a href="tel:+919876543210" className="text-sm font-semibold text-slate-900 dark:text-zinc-100 hover:text-primary transition-colors">
                  +91 87549 49307
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[12px] font-medium text-slate-400 italic">© {currentYear} Palani Padayathirai. Journey with devotion.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#" className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-primary/50 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all">
              <Icon icon="ic:baseline-apple" className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              <div className="text-left">
                <div className="text-[12px] font-semibold text-slate-700 dark:text-slate-300">App Store</div>
              </div>
            </Link>
            <Link href="#" className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-primary/50 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all">
              <Icon icon="material-symbols:android" className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              <div className="text-left">
                <div className="text-[12px] font-semibold text-slate-700 dark:text-slate-300">Google Play</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
