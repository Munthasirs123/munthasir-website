import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CSPostHogProvider } from "@/components/posthog-provider";
import { JsonLd } from "@/components/seo/JsonLd";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://munthasirshiraz.com"),
  title: {
    default: "Munthasir Shiraz",
    template: "%s | Munthasir Shiraz",
  },
  description: "Developer & Writer. Building digital experiences and exploring the creative process.",
  keywords: ["Munthasir Shiraz", "Developer", "Writer", "Software Engineer", "React", "Next.js"],
  authors: [{ name: "Munthasir Shiraz" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://munthasirshiraz.com",
    title: "Munthasir Shiraz",
    description: "Developer & Writer. Building digital experiences and exploring the creative process.",
    siteName: "Munthasir Shiraz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Munthasir Shiraz",
    description: "Developer & Writer. Building digital experiences and exploring the creative process.",
    creator: "@munthasirshiraz",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Munthasir Shiraz",
  url: "https://munthasirshiraz.com",
  jobTitle: "Developer & Writer",
  sameAs: [
    "https://github.com/munthasirshiraz",
    "https://twitter.com/munthasirshiraz",
    "https://linkedin.com/in/munthasirshiraz",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexMono.variable} h-full overflow-y-scroll`}
    >
      <body className="font-sans antialiased h-full" suppressHydrationWarning>
        <JsonLd data={jsonLdData} />
        <ThemeProvider>
          <CSPostHogProvider>
            {children}
          </CSPostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}