import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, PenSquare, BookOpen, User, BrainCircuit, FileText, Mail, Download } from "lucide-react";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex min-h-screen">
                {/* --- SIDEBAR --- */}
                <aside className="hidden lg:flex flex-col w-72 border-r border-blackish p-8">
                    <div className="flex flex-col">
                        <div className="flex justify-between items-start">
                            <Link href="/" className="font-bold text-lg tracking-tighter">
                                Munthasir Shiraz
                            </Link>
                            <ThemeToggle />
                        </div>

                        <hr className="border-blackish my-4" />

                        <p className="text-sm text-muted-foreground mb-4">
                            I'm Shiraz, product lead passionate about making technology human. I build, blog & brainstorm in here!
                        </p>

                        <hr className="border-blackish my-4" />
                    </div>

                    <nav className="flex flex-col gap-3">
                        <Link href="/blog" className="flex items-center text-muted-foreground hover:text-foreground">
                            <PenSquare className="h-4 w-4 mr-2" />
                            Blog
                        </Link>
                        <Link href="/projects" className="flex items-center text-muted-foreground hover:text-foreground">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Projects
                        </Link>
                        <Link href="/canvas" className="flex items-center text-muted-foreground hover:text-foreground">
                            <BrainCircuit className="h-4 w-4 mr-2" />
                            The Canvas
                        </Link>
                        <Link href="/about" className="flex items-center text-muted-foreground hover:text-foreground">
                            <User className="h-4 w-4 mr-2" />
                            About Me
                        </Link>
                        <Link href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                            <FileText className="h-4 w-4 mr-2" />
                            Resume
                        </Link>
                    </nav>

                    <hr className="border-blackish my-4" />

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Munthasirs123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Github size={20} />
                        </a>
                        <a href="https://x.com/MunthasirShiraz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Twitter size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/munthasirshiraz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:munthasirshiraz@gmail.com" className="text-muted-foreground hover:text-foreground">
                            <Mail size={20} />
                        </a>
                    </div>
                </aside>

                {/* --- MAIN CONTENT AREA --- */}
                <main className="flex-1">
                    {/* --- HEADER (MOBILE) --- */}
                    <header className="sticky top-0 z-50 bg-background lg:hidden">
                        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
                            <Link href="/" className="font-bold text-lg tracking-tighter">
                                Munthasir Shiraz
                            </Link>
                            <div className="flex items-center gap-2">
                                <a href="/resume.pdf" download>
                                    <Button variant="outline" size="sm" className="h-8 border-2 border-blackish shadow-[2px_2px_0px_#1A1A1A] active:shadow-none transition-all">
                                        <Download className="mr-2 h-3 w-3" />
                                        Resume
                                    </Button>
                                </a>
                                <ThemeToggle />
                            </div>
                        </div>
                    </header>

                    {children}
                </main>
            </div>
        </div>
    );
}
