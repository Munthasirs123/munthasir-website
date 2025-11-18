import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Twitter, Linkedin } from "lucide-react";

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
      className={`${plexMono.variable} h-full`}
    >
      <body className="font-sans antialiased h-full">
        <ThemeProvider>
          <div className="max-w-7xl mx-auto">
            <div className="flex min-h-screen">
              {/* --- SIDEBAR --- */}
              <aside className="hidden lg:flex flex-col w-72 border-r border-blackish p-8">
                <div className="flex flex-col">
                  <Link href="/" className="font-bold text-lg tracking-tighter">
                    Munthasir Shiraz
                  </Link>
                  <p className="text-sm text-muted-foreground mt-2">
                    Building digital experiences, writing about tech, and exploring the creative process.
                  </p>
                </div>
                <nav className="mt-12 flex flex-col gap-3">
                  <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
                  <Link href="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">Brain</Link>
                </nav>

                <div className="flex-1" />

                <div className="flex items-center gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Github size={20} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Twitter size={20} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Linkedin size={20} />
                  </a>
                </div>
                <div className="mt-4">
                  <ThemeToggle />
                </div>
              </aside>

              {/* --- MAIN CONTENT AREA --- */}
              <main className="flex-1 overflow-y-auto">
                {/* --- HEADER --- */}
                <header className="sticky top-0 z-50 bg-background">
                  <div className="container flex h-14 items-center justify-between px-4 md:px-6">
                    {/* Mobile menu button and logo */}
                    <div className="flex items-center gap-4 lg:hidden">
                      <Link href="/" className="font-bold text-lg tracking-tighter">
                        Munthasir Shiraz
                      </Link>
                    </div>

                    {/* Desktop navigation (optional, can be empty since sidebar handles nav) */}
                    <nav className="hidden lg:flex items-center gap-6 ml-auto">
                      {/* You can add additional header items here if needed */}
                    </nav>

                    {/* Mobile theme toggle */}
                    <div className="lg:hidden">
                      <ThemeToggle />
                    </div>
                  </div>
                </header>

                {children}
              </main>
            </div>
          </div>  
        </ThemeProvider>
      </body>
    </html>
  );
}