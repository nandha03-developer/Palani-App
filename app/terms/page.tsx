'use client';

import { Scale, Lock, User, AlertCircle, Zap, Briefcase, Shield, Trash2, FileText, Globe } from 'lucide-react';
import { useState } from 'react';

const sections = [
  {
    id: 'about',
    title: 'About the Service',
    icon: Briefcase,
    content: 'Palani Padayathirai is a spiritual pilgrimage companion application designed to assist devotees traveling to Palani Murugan Temple. The App provides pilgrimage tracking, devotional content, community features, temple information, emergency assistance tools, and related services.'
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    icon: User,
    content: 'You must be at least 13 years old to use the App. By using the App, you represent and warrant that: You have the legal capacity to enter into these Terms, Information you provide is accurate and current, You will comply with all applicable laws and regulations.'
  },
  {
    id: 'accounts',
    title: 'User Accounts',
    icon: Lock,
    content: 'Certain features require account registration. You are responsible for: Maintaining the confidentiality of your account credentials, All activities occurring under your account, Providing accurate account information, Promptly updating any inaccurate information. You must not share your account credentials with others.'
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    icon: AlertCircle,
    content: 'You agree to use the App only for lawful purposes. You shall not: Violate any applicable law or regulation, Attempt unauthorized access to systems or accounts, Interfere with App security or functionality, Upload malicious software or harmful code, Impersonate another person or entity, Engage in fraudulent or deceptive conduct, Use the App in a manner that harms other users.'
  },
  {
    id: 'community',
    title: 'Community Conduct',
    icon: Shield,
    content: 'Users must maintain respectful behavior while interacting within the App. The following activities are prohibited: Harassment or abuse, Hate speech, Threatening behavior, Obscene or offensive content, False or misleading information, Spam or promotional abuse, Illegal activities. We reserve the right to remove content or restrict access for violations.'
  },
  {
    id: 'location',
    title: 'Location Services',
    icon: Globe,
    content: 'Certain features depend on location information. By enabling location services, you acknowledge that: The App may collect precise location data while actively in use, Location information may be shared with group members when using group-based features, Location information may be shared with emergency responders when emergency assistance features are activated. Location services can be disabled through device settings, although some features may not function properly.'
  },
  {
    id: 'devotional',
    title: 'Devotional Content and Information',
    icon: FileText,
    content: 'The App may provide devotional content, stories, quotes, temple information, pilgrimage guidance, and related materials. Such content is provided for informational and spiritual purposes only. We do not guarantee the completeness, accuracy, or availability of all content at all times.'
  },
  {
    id: 'intellectual',
    title: 'Intellectual Property',
    icon: Briefcase,
    content: 'All App content, including but not limited to: Logos, Branding, Design elements, Text, Graphics, Software, Audio content, Images published by administrators are owned by or licensed to Palani Padayathirai and are protected by applicable intellectual property laws. You may not copy, distribute, modify, reproduce, or commercially exploit App content without permission.'
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    icon: Zap,
    content: 'The App may use third-party services including: Google Sign-In, Cloudinary, MongoDB Services, Expo Notification Services. Your use of such services may also be governed by their respective terms and policies. We are not responsible for third-party services or their practices.'
  },
  {
    id: 'availability',
    title: 'Availability of Service',
    icon: AlertCircle,
    content: 'We strive to provide reliable services but do not guarantee uninterrupted availability. The App may be temporarily unavailable due to: Maintenance, Technical issues, Network failures, System upgrades, Circumstances beyond our control. We reserve the right to modify, suspend, or discontinue features at any time.'
  },
  {
    id: 'suspension',
    title: 'Account Suspension and Termination',
    icon: Shield,
    content: 'We reserve the right to suspend or terminate accounts that: Violate these Terms, Engage in abuse or harmful conduct, Attempt unauthorized access, Threaten platform security, Violate applicable laws. Termination may occur without prior notice where necessary to protect users or the platform.'
  },
  {
    id: 'deletion',
    title: 'Account Deletion',
    icon: Trash2,
    content: 'Users may request deletion of their account through the App. Upon deletion: Access to the App account will be removed, Associated profile information may be deleted, Certain records may be retained where required for security, fraud prevention, legal compliance, or dispute resolution. Account deletion may be irreversible.'
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    icon: AlertCircle,
    content: 'The App is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we make no warranties regarding: Availability, Reliability, Accuracy, Fitness for a particular purpose, Error-free operation. Use of the App is at your own risk.'
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    icon: Scale,
    content: 'To the maximum extent permitted by applicable law, Palani Padayathirai shall not be liable for: Indirect damages, Incidental damages, Consequential damages, Loss of data, Loss of profits, Service interruptions, User-generated actions, Events beyond our reasonable control.'
  },
  {
    id: 'privacy',
    title: 'Privacy',
    icon: Lock,
    content: 'Your use of the App is also governed by our Privacy Policy. We encourage all users to review the Privacy Policy to understand how information is collected, used, and protected.'
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    icon: FileText,
    content: 'We may update these Terms and Conditions from time to time. Updated versions will become effective upon publication within the App or on our official website. Continued use of the App after changes indicates acceptance of the revised Terms.'
  },
  {
    id: 'governing',
    title: 'Governing Law',
    icon: Scale,
    content: 'These Terms shall be governed by and interpreted in accordance with the laws applicable in India, without regard to conflict of law principles.'
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

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('about');

  const active = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header - Pro Design */}
        <div className="text-center mb-16">
          {/* Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-6">
            
            <h1 className="text-6xl font-normal tracking-tight">
              Terms & <span style={{ color: '#6A87FA' }}>Conditions</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Please read these Terms and Conditions carefully before using our service
          </p>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="inline-flex items-center justify-center w-5 h-5 rounded bg-primary/10">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 2C8.44772 2 8 2.44772 8 3V4H7C5.89543 4 5 4.89543 5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6C19 4.89543 18.1046 4 17 4H16V3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3V4H10V3C10 2.44772 9.55228 2 9 2Z" />
                </svg>
              </div>
              <span>Effective Date: May 30, 2026</span>
            </div>
            
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-muted-foreground/30"></span>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="inline-flex items-center justify-center w-5 h-5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.6915026,16.4744748 L19.2655488,7.54762241 C19.3543079,7.45835783 19.3543079,7.31215139 19.2655488,7.22288681 L18.0151496,5.97248769 C17.9266155,5.88359521 17.7820699,5.88359521 17.6929945,5.97248769 L10.4744748,13.1906349 L6.37974049,9.09589705 C6.29085637,9.00700458 6.14621095,9.00700458 6.05731847,9.09589705 L4.80691935,10.3462962 C4.71802688,10.4351896 4.71802688,10.5814361 4.80691935,10.6703285 L9.58915026,15.4525594 C10.0152101,15.8786488 10.8654196,15.8786488 11.2914789,15.4525594 Z" />
                </svg>
              </div>
              <span>Last updated: May 31, 2026</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-normal mb-4">Welcome to Palani Padayathirai</h2>
          <p className="text-foreground/90 leading-relaxed">
            These Terms and Conditions govern your access to and use of the Palani Padayathirai mobile application and related services. By accessing or using the App, you agree to be bound by these Terms and Conditions.
          </p>
          <p className="text-foreground/90 leading-relaxed mt-4">
            If you do not agree with these Terms, please do not use the App.
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
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap font-normal">
                    {active.content}
                  </p>
                </div>

                {/* Footer Note */}
                <div className="bg-muted/50 rounded-lg p-4 border border-muted">
                  <p className="text-sm text-muted-foreground">
                    💡 Need help? If you have questions about these Terms, please contact us at marinandhu659@gmail.com
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-muted/30 to-primary/5 rounded-xl border border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-normal mb-4">Questions About Our Terms?</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            By using Palani Padayathirai, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you have any questions, please contact us.
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
