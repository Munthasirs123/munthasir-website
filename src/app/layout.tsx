import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CSPostHogProvider } from "@/components/posthog-provider";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Munthasir Shiraz",
  description: "Developer & Writer. Building digital experiences and exploring the creative process.",
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
        <ThemeProvider>
          <CSPostHogProvider>
            {children}
          </CSPostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}