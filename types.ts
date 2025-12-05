export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange?: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export enum PageRoutes {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  PORTFOLIO = '/portfolio',
  TESTIMONIALS = '/testimonials',
  BLOG = '/blog',
  CONTACT = '/contact',
}
