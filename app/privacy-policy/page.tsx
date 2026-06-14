'use client';

import { Shield, Lock, Eye, Share2, Bell, Trash2, CheckCircle, Users } from 'lucide-react';
import { useState } from 'react';

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    icon: Eye,
    subsections: [
      {
        title: 'Account Information',
        content: 'When you register or sign in to the App, we may collect: Name, Email Address, Profile Photo, Authentication Information, Google Account Information (when using Google Sign-In)'
      },
      {
        title: 'Location Information',
        content: 'The App collects precise location information only while the App is actively being used. Location data is used for: Live pilgrimage tracking, Route navigation and progress monitoring, Group walk coordination, Emergency assistance features, Pilgrimage-related services. The App does not collect or access background location data.'
      },
      {
        title: 'User Generated Content',
        content: 'When using community features, users may provide: Photos, Posts, Comments, Community updates, Pilgrimage activity content. Content submitted by users may be visible to other users according to the functionality of the App.'
      },
      {
        title: 'Device Information',
        content: 'We may automatically collect: Device type, Operating system version, App version, Device identifiers, Push notification token, Technical diagnostic information'
      }
    ]
  },
  {
    id: 'how-we-use',
    title: 'How We Use Information',
    icon: Lock,
    content: 'We use collected information to: Create and manage user accounts, Authenticate users, Provide live tracking functionality, Enable community interactions, Deliver devotional and spiritual content, Provide SOS and emergency support features, Send notifications and updates, Improve performance and reliability, Prevent abuse and maintain platform security, Respond to support requests'
  },
  {
    id: 'location-sharing',
    title: 'Location Sharing',
    icon: Share2,
    content: 'The App includes features that allow location sharing. Location information may be shared with: Members of groups voluntarily joined by the user, Authorized emergency responders when SOS or emergency services are activated. Location sharing is limited to functionality selected by the user.'
  },
  {
    id: 'media-content',
    title: 'Media Content',
    icon: CheckCircle,
    content: 'The App may display images, banners, devotional content, announcements, and informational media published by authorized administrators. Users may view and download media content made available by administrators. The App does not collect, upload, scan, access, or process photos, videos, or media files stored on a user\'s device unless explicitly required for a future feature and with the user\'s permission. The App does not allow users to upload personal photos, videos, or other media content to the platform. All media content available within the App is managed and published by authorized administrators.'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    content: 'The App may send notifications relating to: Pilgrimage updates, Community activities, Group events, Spiritual reminders, Safety alerts, Service announcements. Users may manage notification preferences through device settings.'
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    icon: Users,
    content: 'The App uses third-party service providers to operate certain features: Google Sign-In, Cloudinary (Image Storage), MongoDB Services, Expo Notifications. These providers may process information solely for providing services on our behalf.'
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing',
    icon: Share2,
    content: 'We do not sell, rent, or trade personal information. Information may be shared only: With group members through voluntary sharing features, With emergency responders when emergency assistance is requested, With trusted service providers supporting App functionality, When required by applicable law, To protect user safety, rights, or security'
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: Lock,
    content: 'We implement reasonable technical and organizational measures designed to protect information, including: Secure HTTPS communication, Authentication and authorization controls, Access restrictions, Secure cloud infrastructure, Security monitoring practices. However, no system can guarantee absolute security.'
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    icon: Trash2,
    content: 'We retain information only as long as necessary to: Provide App services, Maintain security and integrity, Resolve disputes, Comply with legal obligations. Information that is no longer required will be deleted or anonymized where reasonably possible.'
  },
  {
    id: 'account-deletion',
    title: 'Account Deletion',
    icon: Trash2,
    content: 'Users may delete their account through the App. Upon successful account deletion request: Profile information will be removed, Authentication records will be removed, Associated uploaded content may be removed, Location-related records may be removed, Notification tokens may be removed. Certain limited records may be retained where necessary for security, fraud prevention, legal compliance, or dispute resolution.'
  },
  {
    id: 'childrens-privacy',
    title: 'Children\'s Privacy',
    icon: Shield,
    content: 'The App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that such information has been collected, appropriate steps will be taken to remove it.'
  },
  {
    id: 'user-rights',
    title: 'User Rights',
    icon: CheckCircle,
    content: 'Users may have the right to: Access their information, Update profile information, Correct inaccurate information, Request deletion of personal information, Contact us regarding privacy concerns. Requests may be submitted using the contact information provided.'
  },
  {
    id: 'changes',
    title: 'Changes to This Privacy Policy',
    icon: Shield,
    content: 'We may update this Privacy Policy periodically. Updated versions will be published through our official channels and become effective upon publication. Continued use of the App after updates constitutes acceptance of the revised Privacy Policy.'
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

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('information-we-collect');

  const active = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header - Pro Design */}
        <div className="text-center mb-16">
          {/* Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-6">
           
            <h1 className="text-6xl tracking-tight">
              Privacy <span style={{ color: '#6A87FA' }}>Policy</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Palani Padayathirai is committed to protecting your privacy and transparency
          </p>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="inline-flex items-center justify-center w-5 h-5 rounded bg-primary/10">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 2C8.44772 2 8 2.44772 8 3V4H7C5.89543 4 5 4.89543 5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6C19 4.89543 18.1046 4 17 4H16V3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3V4H10V3C10 2.44772 9.55228 2 9 2Z" />
                </svg>
              </div>
              <span><span className="font-semibold text-foreground">Effective Date:</span> May 30, 2026</span>
            </div>
            
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-muted-foreground/30"></span>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="inline-flex items-center justify-center w-5 h-5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.6915026,16.4744748 L19.2655488,7.54762241 C19.3543079,7.45835783 19.3543079,7.31215139 19.2655488,7.22288681 L18.0151496,5.97248769 C17.9266155,5.88359521 17.7820699,5.88359521 17.6929945,5.97248769 L10.4744748,13.1906349 L6.37974049,9.09589705 C6.29085637,9.00700458 6.14621095,9.00700458 6.05731847,9.09589705 L4.80691935,10.3462962 C4.71802688,10.4351896 4.71802688,10.5814361 4.80691935,10.6703285 L9.58915026,15.4525594 C10.0152101,15.8786488 10.8654196,15.8786488 11.2914789,15.4525594 Z" />
                </svg>
              </div>
              <span><span className="font-semibold text-foreground">Last updated:</span> May 31, 2026</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-normal mb-4">Your Privacy Matters</h2>
          <p className="text-foreground/90 leading-relaxed">
            Palani Padayathirai (&quot;App&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, share, and protect information when you use the Palani Padayathirai mobile application and related services.
          </p>
          <p className="text-foreground/90 leading-relaxed mt-4">
            By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
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
                          <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                      {active.content}
                    </p>
                  )}
                </div>

                {/* Footer Note */}
                <div className="bg-muted/50 rounded-lg p-4 border border-muted">
                  <p className="text-sm text-muted-foreground">
                    💡 Need help? If you have questions about how we handle your data, please contact us at marinandhu659@gmail.com
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-muted/30 to-primary/5 rounded-xl border border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-normal mb-4">Questions About Your Privacy?</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            We're here to help. If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your information, please don't hesitate to reach out.
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
