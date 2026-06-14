'use client';

import { Shield, Heart, AlertCircle, Zap, Users, Lock } from 'lucide-react';
import { useState } from 'react';

const guidelines = [
  {
    id: 'respect',
    title: 'Respect & Devotion',
    icon: Heart,
    content: 'Palani Padayathirai is a spiritual platform. All user-generated content must respect the spiritual nature of the pilgrimage and the Palani Murugan Temple traditions. Treat this space as a sacred community dedicated to devotion and spiritual growth.'
  },
  {
    id: 'hate-speech',
    title: 'No Hate Speech or Abuse',
    icon: Shield,
    content: 'We have a zero-tolerance policy for hate speech, harassment, or bullying. Any content that attacks individuals or groups based on religion, race, gender, or any other characteristic will be removed immediately. Respect and inclusivity are fundamental to our community.'
  },
  {
    id: 'misinformation',
    title: 'No Misinformation',
    icon: AlertCircle,
    content: 'Do not share false information regarding temple timings, rituals, or safety procedures. Misleading other pilgrims can have serious consequences. Always verify information before sharing and cite reliable sources when possible.'
  },
  {
    id: 'spam',
    title: 'Spam & Advertising',
    icon: Zap,
    content: 'Do not use the community feed or group chats for commercial advertising or spam. Keep the focus on the spiritual journey. Promotional content unrelated to the pilgrimage experience is not permitted.'
  },
  {
    id: 'reporting',
    title: 'Reporting & Moderation',
    icon: Users,
    content: 'Users can report any content or user that violates these guidelines. Our moderation team reviews reports 24/7 and takes action including content removal and account suspension. We are committed to maintaining a safe and respectful community.'
  },
  {
    id: 'safe-sharing',
    title: 'Safe Sharing',
    icon: Lock,
    content: 'While sharing your journey is encouraged, please be mindful of your privacy and the privacy of others. Do not post sensitive personal information of yourself or fellow pilgrims. Protect personal data and respect boundaries.'
  }
];

function GuidelineCard({ guideline, isActive, onClick }: any) {
  const Icon = guideline.icon;
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
        <span className="font-normal line-clamp-2">{guideline.title}</span>
      </div>
    </button>
  );
}

export default function CommunityGuidelinesPage() {
  const [activeGuideline, setActiveGuideline] = useState('respect');

  const active = guidelines.find(g => g.id === activeGuideline);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header - Pro Design */}
        <div className="text-center mb-16">
          {/* Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-6">
          
            <h1 className="text-6xl font-normal tracking-tight">
              Community <span style={{ color: '#6A87FA' }}>Guidelines</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Help us maintain the sanctity and safety of the Palani pilgrimage community
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-normal mb-4">Our Community Values</h2>
          <p className="text-foreground/90 leading-relaxed">
            Palani Padayathirai is built on principles of respect, devotion, and community support. These guidelines help us maintain a safe, inclusive, and spiritually enriching environment for all pilgrims. By participating in our community, you agree to uphold these values.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2 bg-muted/50 rounded-xl p-4 border border-muted">
              <h3 className="text-sm font-normal text-muted-foreground uppercase tracking-wide mb-4">
                Guidelines
              </h3>
              <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                {guidelines.map((guideline) => (
                  <GuidelineCard
                    key={guideline.id}
                    guideline={guideline}
                    isActive={activeGuideline === guideline.id}
                    onClick={() => setActiveGuideline(guideline.id)}
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
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap font-normal">
                    {active.content}
                  </p>
                </div>

                {/* Footer Note */}
                <div className="bg-muted/50 rounded-lg p-4 border border-muted">
                  <p className="text-sm text-muted-foreground">
                    💡 Have concerns? Report violations to marinandhu659@gmail.com or use the in-app reporting feature.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-muted/30 to-primary/5 rounded-xl border border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-normal mb-4">Building a Respectful Community Together</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Together, we can maintain a vibrant, safe, and spiritually meaningful community for all pilgrims. Thank you for helping us keep Palani Padayathirai a sacred space.
          </p>
          <a
            href="mailto:marinandhu659@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-normal hover:bg-primary/90 transition-colors"
          >
            Report an Issue
          </a>
        </div>
      </div>
    </div>
  );
}
