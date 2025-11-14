import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,md}",
    "./src/components/**/*.{js,ts,jsx,tsx,md}",
    "./src/**/*.{js,ts,jsx,tsx,md}",
    "./content/**/*.{md}",
  ],
  theme: {
    extend: {
      // ADD THE FONTS HERE
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-lora)"],
      },
      // DEFINE OUR NEW COLOR PALETTE HERE
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      // --- ADD THIS ENTIRE TYPOGRAPHY SECTION ---
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.foreground"),
            "--tw-prose-headings": theme("colors.foreground"),
            "--tw-prose-lead": theme("colors.foreground"),
            "--tw-prose-links": theme("colors.accent.DEFAULT"),
            "--tw-prose-bold": theme("colors.foreground"),
            "--tw-prose-counters": theme("colors.foreground"),
            "--tw-prose-bullets": theme("colors.foreground"),
            "--tw-prose-hr": theme("colors.foreground / 0.1"),
            "--tw-prose-quotes": theme("colors.foreground"),
            "--tw-prose-quote-borders": theme("colors.foreground / 0.1"),
            "--tw-prose-captions": theme("colors.foreground / 0.7"),
            "--tw-prose-code": theme("colors.foreground"),
            "--tw-prose-pre-code": theme("colors.foreground"),
            "--tw-prose-pre-bg": theme("colors.foreground / 0.05"),
            // Invert styles for dark mode automatically
            "--tw-prose-invert-body": theme("colors.foreground"),
            "--tw-prose-invert-headings": theme("colors.foreground"),
            "--tw-prose-invert-lead": theme("colors.foreground"),
            "--tw-prose-invert-links": theme("colors.accent.DEFAULT"),
            "--tw-prose-invert-bold": theme("colors.foreground"),
            "--tw-prose-invert-counters": theme("colors.foreground"),
            "--tw-prose-invert-bullets": theme("colors.foreground"),
            "--tw-prose-invert-hr": theme("colors.foreground / 0.1"),
            "--tw-prose-invert-quotes": theme("colors.foreground"),
            "--tw-prose-invert-quote-borders": theme("colors.foreground / 0.1"),
            "--tw-prose-invert-captions": theme("colors.foreground / 0.7"),
            "--tw-prose-invert-code": theme("colors.foreground"),
            "--tw-prose-invert-pre-code": theme("colors.foreground"),
            "--tw-prose-invert-pre-bg": theme("colors.foreground / 0.05"),

            // Set the base font family for prose content
            "p, ul, ol, blockquote": {
              fontFamily: theme("fontFamily.serif"),
            },
            // Set the heading font family
            "h1, h2, h3, h4, h5, h6": {
              fontFamily: theme("fontFamily.sans"),
            },
            // Style links
            a: {
              fontWeight: "500",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;