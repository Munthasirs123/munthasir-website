import { getCanvasContent } from "@/lib/canvas";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card } from "@/components/ui/card";
import { Sparkles, BookOpen } from "lucide-react";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CanvasContent({ showBackLink = false }: { showBackLink?: boolean }) {
    const content = getCanvasContent();

    return (
        <div className="min-h-screen bg-cream dark:bg-blackish p-4 md:p-8 relative overflow-hidden">
            {/* Dot grid background pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                {/* HEADER */}
                <header className="text-center mb-8 relative pt-8 md:pt-0">
                    <div className="absolute right-0 top-0">
                        <ThemeToggle />
                    </div>
                    {showBackLink && (
                        <div className="absolute left-0 top-0">
                            <Link href="/" className="inline-flex items-center text-xs font-mono text-muted-foreground hover:text-blackish dark:hover:text-cream hover:underline transition-colors">
                                <ArrowLeft className="w-3 h-3 mr-1" />
                                back to home
                            </Link>
                        </div>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 dark:text-cream">
                        THE CANVAS
                    </h1>
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-sm text-muted-foreground dark:text-cream/60 italic">
                            A deep dive into my thoughts. Unstructured. Unfiltered. Unscripted
                        </p>
                        <span className="font-mono text-[10px] text-muted-foreground/60 dark:text-cream/40">
                            Published on Nov 28th, 2025
                        </span>
                    </div>
                </header>

                {/* CURRENT FOCUS - Full width, new color */}
                <Card className="bg-blue-100 dark:bg-blackish border-4 border-blackish dark:border-blue-200 shadow-[8px_8px_0px_#1A1A1A] dark:shadow-[8px_8px_0px_#93C5FD] p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-blackish text-cream hover:bg-blackish/80 dark:bg-blue-200 dark:text-blackish">
                            CURRENT FOCUS
                        </Badge>
                    </div>
                    <div className="flex items-start gap-3 mb-4">
                        <Sparkles className="h-6 w-6 flex-shrink-0 mt-1" />
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight dark:text-blue-200">
                            {content.focus}
                        </h2>
                    </div>
                    {content.focus_description && (
                        <p className="text-sm md:text-base mb-4 dark:text-cream/90">
                            {content.focus_description}
                        </p>
                    )}
                    {content.tags && content.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {content.tags.map((tag, i) => (
                                <Badge key={i} variant="default" className="bg-transparent border-2 border-blackish text-blackish hover:bg-blackish/5 dark:border-blue-200 dark:text-blue-200 dark:hover:bg-blue-200/10">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </Card>

                {/* FLOATING IDEAS & THOUGHTS - Full width container */}
                <section className="space-y-4">
                    <Card className="border-4 border-blackish dark:border-cream shadow-[8px_8px_0px_#1A1A1A] dark:shadow-[8px_8px_0px_#F0E7DB] p-8 bg-cream dark:bg-blackish border-t-8 border-t-teal dark:border-t-teal/80">
                        <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blackish dark:border-cream dark:text-cream">
                            FLOATING IDEAS & THOUGHTS
                        </h3>
                        {/* Text Rows Section */}
                        <div className="space-y-4 mb-8">
                            {content.thoughts
                                .filter(t => typeof t !== 'string' && t.type === 'text')
                                .map((thought, i) => (
                                    <div key={`text-${i}`} className="p-2">
                                        <p className="font-handwriting text-xl dark:text-cream/90 leading-relaxed">
                                            {(thought as { content: string }).content}
                                        </p>
                                    </div>
                                ))}
                        </div>

                        {/* Sticky Notes Section (Masonry) */}
                        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                            {content.thoughts
                                .filter(t => typeof t === 'string' || t.type === 'sticky')
                                .map((thought, i) => {
                                    const textContent = typeof thought === 'string' ? thought : thought.content;
                                    return (
                                        <div key={`sticky-${i}`} className="break-inside-avoid bg-yellow-100 dark:bg-blackish border-2 border-blackish dark:border-teal/50 p-4 shadow-[4px_4px_0px_#1A1A1A] dark:shadow-[4px_4px_0px_#00A0A0] rotate-1 hover:rotate-0 transition-transform mb-4">
                                            <p className="font-handwriting text-lg dark:text-cream/90">
                                                {textContent}
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>
                    </Card>
                </section>

                {/* MICRO ACHIEVEMENTS - Full width container */}
                <section className="space-y-4">
                    <Card className="border-4 border-blackish dark:border-cream shadow-[8px_8px_0px_#1A1A1A] dark:shadow-[8px_8px_0px_#F0E7DB] p-8 bg-cream dark:bg-blackish border-t-8 border-t-pink dark:border-t-pink/80">
                        <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blackish dark:border-cream dark:text-cream flex items-center gap-2">
                            <span>✓</span> MICRO ACHIEVEMENTS
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {content.micro_wins.map((win, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 border-b border-blackish/10 dark:border-cream/10">
                                    <span className={`w-5 h-5 rounded-sm border-2 border-blackish dark:border-cream flex-shrink-0 flex items-center justify-center ${i % 5 === 0 ? 'bg-pink' :
                                        i % 5 === 1 ? 'bg-teal' :
                                            i % 5 === 2 ? 'bg-mustard' :
                                                i % 5 === 3 ? 'bg-tangerine' : 'bg-pink/70'
                                        }`}>
                                        <span className="text-xs">✓</span>
                                    </span>
                                    <span className="font-mono text-sm md:text-base dark:text-cream/90">{win}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </section>

                {/* LATEST READS - Dashed border section */}
                {content.latest_reads && content.latest_reads.length > 0 && (
                    <div className="border-4 border-dashed border-pink dark:border-pink/70 p-8 bg-cream/50 dark:bg-blackish/50">
                        <h3 className="text-xl font-bold mb-4 dark:text-cream">LATEST READS</h3>
                        <ul className="space-y-2">
                            {content.latest_reads.map((read, i) => {
                                const isLinked = typeof read !== 'string';
                                const title = isLinked ? read.title : read;
                                const url = isLinked ? read.url : null;

                                return (
                                    <li key={i} className="flex items-start gap-2 text-sm md:text-base dark:text-cream/90">
                                        <BookOpen className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                        {url ? (
                                            <a
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline hover:text-pink dark:hover:text-pink transition-colors"
                                            >
                                                {title}
                                            </a>
                                        ) : (
                                            <span>{title}</span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}

                {/* MOODBOARD - 3x2 Grid */}
                {content.moodboard && content.moodboard.length > 0 && (
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded-full bg-pink border-2 border-blackish dark:border-cream flex items-center justify-center">
                                <span className="text-xs font-bold">📷</span>
                            </div>
                            <h3 className="text-xl font-bold dark:text-cream">Visual Inspiration</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            {content.moodboard.map((imageUrl, i) => (
                                <div key={i} className="aspect-square border-4 border-blackish dark:border-cream shadow-[6px_6px_0px_#1A1A1A] dark:shadow-[6px_6px_0px_#F0E7DB] overflow-hidden transition-transform hover:scale-105">
                                    <img
                                        src={imageUrl}
                                        alt={`Moodboard image ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-center text-muted-foreground dark:text-cream/60 italic">
                            Visual inspiration that guides my journey and creative process.
                        </p>
                    </div>
                )}

                {/* QUOTE OF THE DAY - Large pink card */}
                <Card className="bg-pink dark:bg-blackish border-4 border-blackish dark:border-pink shadow-[8px_8px_0px_#1A1A1A] dark:shadow-[8px_8px_0px_#F8B195] p-8 md:p-12">
                    <div className="flex items-start gap-3 mb-4">
                        <span className="text-3xl">💭</span>
                        <h3 className="text-xl font-bold dark:text-pink">QUOTE OF THE DAY</h3>
                    </div>
                    <blockquote className="text-xl md:text-2xl font-bold mb-4 dark:text-cream italic">
                        "{content.quote.text}"
                    </blockquote>
                    <p className="text-right text-sm md:text-base font-bold dark:text-cream/80">
                        — {content.quote.author}
                    </p>
                </Card>

                {/* Footer note */}
                {/* Footer note removed as requested */}
            </div>
        </div>
    );
}
