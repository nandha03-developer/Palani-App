'use client';

import { HelpCircle, Phone } from 'lucide-react';
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
  },
  {
    question: "How do I join or create a walking group?",
    answer: "You can create a new group or join existing groups within the app. Simply invite friends or community members via their phone number or user ID to collaborate during your pilgrimage."
  },
  {
    question: "Is there a cost to use the app?",
    answer: "Palani Padayathirai is completely free to download and use. All core features including live tracking, SOS, and community connection are available at no charge."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header - Pro Design */}
        <div className="text-center mb-16">
          {/* Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-6">
       
            <h1 className="text-6xl font-normal tracking-tight">
              Frequently Asked <span style={{ color: '#6A87FA' }}>Questions</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Everything you need to know about Palani Padayathirai
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-normal mb-4">Have Questions?</h2>
          <p className="text-foreground/90 leading-relaxed">
            We've compiled the most frequently asked questions about Palani Padayathirai to help you get started quickly. If you don't find what you're looking for, please reach out to our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="text-left py-6 px-8 hover:no-underline font-normal text-lg hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-6 px-8 leading-relaxed font-normal">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-muted/30 to-primary/5 rounded-xl border border-primary/20 p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Phone className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-normal">Still Have Questions?</h3>
          </div>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Our support team is here to help! If you can't find the answer you're looking for, please don't hesitate to get in touch with us. We're happy to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:marinandhu659@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-normal hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-muted text-foreground font-normal hover:bg-muted/80 transition-colors border border-border"
            >
              Go to Contact Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
