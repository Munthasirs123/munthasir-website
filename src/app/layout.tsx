import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Munthasir Shiraz",
  description: "Personal site of Munthasir Shiraz.",
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
      className={`${inter.variable} ${lora.variable}`}
    >
      {/* --- CHANGES START HERE --- */}
      <body className="font-serif antialiased">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            {/* Header: Simplified and using new colors/fonts */}
            <header className="border-b border-foreground/10 bg-background">
              <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
                <Link
                  href="/"
                  className="font-sans font-semibold tracking-tight"
                >
                  Munthasir Shiraz
                </Link>
                <div className="flex items-center gap-4">
                  <nav className="font-sans flex items-center gap-4 text-sm text-foreground/80">
                    <Link href="/blog" className="hover:text-accent">
                      Blog
                    </Link>
                    <Link href="/projects" className="hover:text-accent">
                      Projects
                    </Link>
                    <Link href="/about" className="hover:text-accent">
                      About
                    </Link>
                  </nav>
                  {/* We can revisit the theme toggle's styling later if needed */}
                  <ThemeToggle />
                </div>
              </div>
            </header>

            {/* Main content area remains the same, but will inherit the new styles */}
            <main className="flex-1">
              <div className="max-w-3xl mx-auto px-4 py-10">{children}</div>
            </main>

            {/* Footer: Simplified and using new colors/fonts */}
            <footer className="border-t border-foreground/10 bg-background">
              <div className="font-sans max-w-3xl mx-auto px-4 py-6 text-xs text-foreground/60 flex items-center justify-between">
                <span>© {new Date().getFullYear()} Munthasir Shiraz</span>
                <span>Built with Next.js &amp; deployed on Vercel</span>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
      {/* --- CHANGES END HERE --- */}
    </html>
  );
}