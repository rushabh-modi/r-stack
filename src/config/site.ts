export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "R stack",
  url: "https://r-stack.vercel.app/",
  ogImage: "https://r-stack.vercel.app/ogImage.png",
  description: "My stack for building side projects",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Admin",
      href: "/admin",
    },
  ],
  links: {
    twitter: "https://twitter.com/rushabh2552",
    github: "https://github.com/rushabh-modi",
    repository: "https://github.com/rushabh-modi/r-stack",
    email: "mailto:rushabhmodi2552@gmail.com",
  },
};
