'use client';

import { Heart, Shield, Users, Landmark, MapPin, Zap, Compass, Target } from 'lucide-react';
import { useState } from 'react';

const sections = [
  {
    id: 'welcome',
    title: 'Welcome to Palani Padayathirai',
    icon: Heart,
    content: 'Palani Padayathirai is a dedicated spiritual pilgrimage companion created to support devotees undertaking the sacred journey to Arulmigu Dhandayuthapani Swamy Temple, Palani. Our mission is to combine devotion, safety, community, and technology into a single platform that helps pilgrims experience a more connected, informed, and spiritually enriching Padayathirai journey.'
  },
  {
    id: 'vision',
    title: 'Our Vision',
    icon: Compass,
    content: 'We believe that spirituality and technology can work together to improve the pilgrimage experience for devotees. Our vision is to build a trusted digital companion that assists pilgrims before, during, and throughout their sacred journey by providing reliable information, real-time support, devotional resources, and community connectivity.'
  },
  {
    id: 'purpose',
    title: 'Our Purpose',
    icon: Target,
    content: 'Every year, thousands of devotees participate in the Palani Padayathirai with deep faith and devotion. During this journey, pilgrims often face challenges such as: Route guidance, Group coordination, Safety concerns, Access to Annadhanam centers, Accommodation information, Emergency assistance, Spiritual resources during travel. Palani Padayathirai was created to help address these needs through a modern, easy-to-use mobile platform designed specifically for pilgrims.'
  },
  {
    id: 'features',
    title: 'What We Offer',
    icon: Zap,
    subsections: [
      {
        title: 'Live Pilgrimage Tracking',
        content: 'Track pilgrimage progress with real-time location support and route-based tracking features.'
      },
      {
        title: 'Community Connection',
        content: 'Stay connected with fellow devotees and group members throughout the journey.'
      },
      {
        title: 'Emergency Support Features',
        content: 'Quick-access safety tools and location-based assistance during emergencies.'
      },
      {
        title: 'Annadhanam & Madangal Information',
        content: 'Access information about food service centers, resting locations, and pilgrimage support facilities.'
      },
      {
        title: 'Spiritual Content',
        content: 'Listen to devotional music, explore spiritual stories, read inspirational quotes, and stay connected with religious traditions.'
      },
      {
        title: 'Temple Information',
        content: 'Access important temple-related information and pilgrimage guidance in one place.'
      }
    ]
  },
  {
    id: 'commitment',
    title: 'Our Commitment',
    icon: Shield,
    content: 'We are committed to: Supporting devotees with reliable tools and information, Promoting safe pilgrimage experiences, Respecting cultural and spiritual values, Protecting user privacy and data, Continuously improving the platform for the community.'
  },
  {
    id: 'community',
    title: 'Community First',
    icon: Users,
    content: 'Palani Padayathirai is built with a community-first approach. Our goal is not only to provide digital services but also to strengthen the connection between devotees, volunteers, support teams, and the wider pilgrimage community. We believe that every pilgrim deserves access to accurate information, helpful resources, and a supportive network throughout their spiritual journey.'
  },
  {
    id: 'future',
    title: 'Moving Forward Together',
    icon: MapPin,
    content: 'As technology evolves, we remain committed to enhancing the pilgrimage experience while preserving the spiritual essence and traditions of Padayathirai. Through innovation, devotion, and community support, Palani Padayathirai aims to become a trusted companion for devotees on their sacred journey to Palani.'
  }
];

function SectionCard({ section, isActive, onClick }: any) {
  const Icon = section.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-all border-2 ${
        isActive
          ? 'border-primary bg-primary/10'
          : 'border-muted hover:border-primary/50 hover:bg-muted'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 text-primary" />
        <span className="font-normal line-clamp-2">{section.title}</span>
      </div>
    </button>
  );
}

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('welcome');

  const active = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header - Pro Design */}
        <div className="text-center mb-16">
          {/* Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-6">
           
            <h1 className="text-6xl font-normal tracking-tight">
              About <span style={{ color: '#6A87FA' }}>Us</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Supporting devotees with safe, connected, and spiritually enriching pilgrimage experiences
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-normal mb-4">Our Sacred Mission</h2>
          <p className="text-foreground/90 leading-relaxed">
            Palani Padayathirai is a dedicated spiritual pilgrimage companion created to support devotees undertaking the sacred journey to Arulmigu Dhandayuthapani Swamy Temple, Palani. We combine devotion, safety, community, and technology into a single platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2 bg-muted/50 rounded-xl p-4 border border-muted">
              <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-4">
                Sections
              </h3>
              <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                {sections.map((section) => (
                  <SectionCard
                    key={section.id}
                    section={section}
                    isActive={activeSection === section.id}
                    onClick={() => setActiveSection(section.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            {active && (
              <div className="space-y-6">
                {/* Section Header */}
                <div className="flex items-start gap-4">
                  {active.icon && (
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {<active.icon className="w-6 h-6 text-primary" />}
                    </div>
                  )}
                  <div>
                    <h2 className="text-4xl font-normal">{active.title}</h2>
                  </div>
                </div>

                {/* Main Content */}
                <div className="bg-card rounded-xl border border-border p-8">
                  {active.subsections ? (
                    <div className="space-y-6">
                      {active.subsections.map((sub, idx) => (
                        <div key={idx} className="pb-6 last:pb-0 last:border-b-0 border-b border-muted">
                          <h3 className="text-xl font-normal mb-3 text-foreground">
                            {sub.title}
                          </h3>
                          <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap font-normal">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap font-normal">
                      {active.content}
                    </p>
                  )}
                </div>

                {/* Footer Note */}
                <div className="bg-muted/50 rounded-lg p-4 border border-muted">
                  <p className="text-sm text-muted-foreground">
                    💡 Have questions? Contact us at marinandhu659@gmail.com for support and inquiries.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-muted/30 to-primary/5 rounded-xl border border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-normal mb-4">Join Our Community</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Be part of the spiritual journey. Experience the Palani Padayathirai with thousands of devotees using modern technology to enhance their sacred pilgrimage while preserving tradition and devotion.
          </p>
         <a
  href="/contact"
  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
>
  Contact Us
</a>
        </div>
      </div>
    </div>
  );
}
