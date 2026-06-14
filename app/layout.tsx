// import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { Navbar } from "@/components/shared/navbar";
// import { Footer } from "@/components/shared/footer";
// import { Toaster } from "@/components/ui/sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 5,
// };

// export const metadata: Metadata = {
//   metadataBase: new URL("https://palaniPadayathirai.com"),
//   title: "Palani Padayathirai - Sacred Pilgrimage Companion App",
//   description: "Join 10,000+ devotees on their spiritual journey to Palani Murugan Temple. Live tracking, SOS emergency, weather alerts, community features, and hill step tracking. Download the official Palani Padayathirai app today.",
//   keywords: ["Palani", "Murugan Temple", "Pilgrimage", "Padayathirai", "Live Tracking", "Spiritual App", "Sacred Journey", "Temple Tracking", "SOS Emergency"],
//   authors: [{ name: "Palani Padayathirai Team", url: "https://palaniPadayathirai.com" }],
//   creator: "Palani Padayathirai",
//   publisher: "Palani Padayathirai",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   openGraph: {
//     title: "Palani Padayathirai - Sacred Pilgrimage Companion",
//     description: "Your ultimate spiritual companion for the Palani Murugan Temple journey. Live tracking, SOS alerts, and community features.",
//     url: "https://palaniPadayathirai.com",
//     siteName: "Palani Padayathirai",
//     images: [
//       {
//         url: "/opengraph-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Palani Padayathirai - Sacred Pilgrimage App",
//         type: "image/png",
//       },
//       {
//         url: "/palani-logo-Photoroom.png",
//         width: 400,
//         height: 400,
//         alt: "Palani Padayathirai Logo",
//         type: "image/png",
//       },
//     ],
//     type: "website",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Palani Padayathirai - Sacred Pilgrimage App",
//     description: "Join thousands of devotees on their spiritual journey to Palani Murugan Temple.",
//     images: ["/opengraph-image.png"],
//     creator: "@palaniPadayathirai",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   icons: {




//     icon: "/favicon-16x16.png",
//     shortcut: "/favicon-32x32.png",
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: "/site.webmanifest",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <meta name="theme-color" content="#E8473F" />
//         <meta name="mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
//         <meta name="apple-mobile-web-app-title" content="Palani Padayathirai" />
//         <link rel="canonical" href="https://palaniPadayathirai.com" />
//         <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
//         <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
//         <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
//         <link rel="manifest" href="/site.webmanifest" />
//       </head>
//       <body
//         suppressHydrationWarning
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         <main className="min-h-screen pt-16">
//           {children}
//         </main>
//         <Footer />
//         <Toaster position="top-right" />
//       </body>
//     </html>
//   );
// }
