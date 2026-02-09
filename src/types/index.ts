/**
 * Core TypeScript interfaces for Frame Portfolio
 * Based on SPECIFICATION.md data model requirements
 */

export type ProjectCategory = 'portraits' | 'landscapes' | 'editorial' | 'architecture' | 'documentary';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  camera?: string;
  location?: string;
  slug: string;
}

export interface AboutMe {
  name: string;
  tagline: string;
  title?: string;

  biography: string;

  email: string;
  socialLinks: {
    linkedin: string;
    github: string;
    x: string;
  };
  socialHandles: {
    linkedin: string;
    github: string;
    x: string;
  };
}


