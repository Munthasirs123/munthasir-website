import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Twitter, Linkedin, PenSquare, BookOpen, User, BrainCircuit, FileText } from "lucide-react";

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

                        <hr className="border-blackish my-6" />

                        <p className="text-sm text-muted-foreground mb-6">
                            Building digital experiences, writing about tech, and exploring the creative process.
                        </p>
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

                    <hr className="border-blackish my-6" />

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
                </aside>

                {/* --- MAIN CONTENT AREA --- */}
                <main className="flex-1">
                    {/* --- HEADER (MOBILE) --- */}
                    <header className="sticky top-0 z-50 bg-background lg:hidden">
                        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
                            <Link href="/" className="font-bold text-lg tracking-tighter">
                                Munthasir Shiraz
                            </Link>
                            <div className="flex items-center gap-4">
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
