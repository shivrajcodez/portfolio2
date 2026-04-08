import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provder";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const nunito = localFont({
  src: "./fonts/Nunito/Nunito-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-nunito",
});

const thasadith = localFont({
  src: [
    {
      path: "./fonts/Thasadith/Thasadith-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Thasadith/Thasadith-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Thasadith/Thasadith-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Thasadith/Thasadith-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-thasadith",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivrajcodez.vercel.app"),
  title: "Shivraj Mohite",
  description: "Hey! I'm Shivraj Mohite, Backend & DevOps Engineer",
  keywords: [
    "Shivraj Mohite",
    "Backend Developer",
    "DevOps Engineer",
    "Java Developer",
    "Spring Boot",
    "Docker",
    "Kubernetes",
    "AWS",
    "MySQL",
    "REST API",
    "Computer Science Student",
    "Portfolio",
    "Internship",
    "Nashik",
    "Maharashtra",
  ],
  authors: [
    {
      name: "Shivraj Mohite",
      url: "https://github.com/shivrajcodez",
    },
  ],
  creator: "Shivraj Mohite",
  publisher: "Shivraj Mohite",

  openGraph: {
    title: "Shivraj Mohite Portfolio",
    description: "Shivraj Mohite - Backend & DevOps Engineer",
    url: "https://shivrajcodez.vercel.app",
    siteName: "Shivraj Mohite",
    images: [
      {
        url: "https://shivrajcodez.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivraj Mohite Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shivraj Mohite Portfolio",
    description: "Shivraj Mohite - Backend & DevOps Engineer",
    images: ["https://shivrajcodez.vercel.app/og-image.jpg"],
    creator: "@shivrajcodez",
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} ${thasadith.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
