"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the live tracking feature work?",
    answer: "Live tracking uses your smartphone's GPS to share your precise location with authorized group members. It works in the foreground and background to ensure your safety throughout the walk."
  },
  {
    question: "Is my location data private?",
    answer: "Yes, your privacy is our priority. Your location is only shared within your specific walking group and with emergency responders when you trigger an SOS. You can turn off tracking at any time."
  },
  {
    question: "How does the SOS emergency system work?",
    answer: "When you press the SOS button, the app sends your current location and profile details to nearby users, your group members, and pre-configured emergency contacts immediately."
  },
  {
    question: "Can I use the app offline?",
    answer: "Core features like the temple guide, checklist, and devotional stories are available offline once downloaded. However, live tracking, community feed, and SOS require an active internet connection."
  },
  {
    question: "How do I request account deletion?",
    answer: "You can request account deletion through the 'Delete Account' page on this website or within the app settings. All your personal data will be permanently removed within 30 days."
  },
  {
    question: "What devices are supported?",
    answer: "The Palani Padayathirai app is available for Android (7.0 and above) and iOS (13.0 and above) devices."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We&apos;ve got answers. Everything you need to know about Palani Padayathirai.
          </p>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass px-6 rounded-2xl border border-white/20 shadow-sm overflow-hidden transition-all duration-300"
            >
              <AccordionTrigger className="text-left py-6 hover:no-underline font-semibold text-lg hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
