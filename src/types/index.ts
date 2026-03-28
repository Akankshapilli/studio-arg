export type ProjectCategory =
  | "All"
  | "Residential"
  | "Commercial"
  | "Hospitality"
  | "Architecture";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  year: string;
  location: string;
  area?: string;
  shortDesc: string;
  fullDesc: string;
  role: string;
  services: string[];
  coverImage: string;
  images: string[];
  featured?: boolean;
}
