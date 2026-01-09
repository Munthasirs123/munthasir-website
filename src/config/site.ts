export const siteConfig = {
    name: "Munthasir Shiraz",
    url: "https://munthasirshiraz.com",
    ogImage: "/og-default.png",
    description: "Product strategist, indie developer, and AI enthusiast building digital tools and sharing ideas.",
    tagline: "Product Lead & Indie Developer",

    author: {
        name: "Munthasir Shiraz",
        givenName: "Munthasir",
        familyName: "Shiraz",
        email: "munthasirshiraz@gmail.com",
        jobTitle: "Product Lead & Indie Developer",
        location: "Worcester, MA",
        bio: "Originally from Sri Lanka, now based in Worcester, MA. Product strategist at CVS Health, building AI-powered tools and digital products.",
    },

    links: {
        github: "https://github.com/Munthasirs123",
        twitter: "https://x.com/MunthasirShiraz",
        linkedin: "https://www.linkedin.com/in/munthasirshiraz/",
        email: "mailto:munthasirshiraz@gmail.com",
    },

    socials: {
        github: {
            name: "GitHub",
            url: "https://github.com/Munthasirs123",
            handle: "@Munthasirs123",
        },
        twitter: {
            name: "Twitter",
            url: "https://x.com/MunthasirShiraz",
            handle: "@MunthasirShiraz",
        },
        linkedin: {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/munthasirshiraz/",
            handle: "munthasirshiraz",
        },
    },
} as const;

export type SiteConfig = typeof siteConfig;
