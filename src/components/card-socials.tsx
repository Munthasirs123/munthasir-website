"use client";

import { Github, Twitter, Linkedin } from "lucide-react";

export function CardSocials() {
    return (
        <div className="flex items-center gap-4">
            <a
                href="https://github.com/Munthasirs123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground p-1 transition-colors"
                onClick={(e) => e.stopPropagation()}
            >
                <Github size={24} />
            </a>
            <a
                href="https://x.com/MunthasirShiraz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground p-1 transition-colors"
                onClick={(e) => e.stopPropagation()}
            >
                <Twitter size={24} />
            </a>
            <a
                href="https://www.linkedin.com/in/munthasirshiraz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground p-1 transition-colors"
                onClick={(e) => e.stopPropagation()}
            >
                <Linkedin size={24} />
            </a>
        </div>
    );
}
