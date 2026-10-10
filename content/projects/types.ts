export type ProjectStatus = "concept" | "research" | "prototype" | "deployed";
export type ContentStatus = "sample" | "draft" | "verified";

export type ProjectMetric = {
  label: string;
  value: string;
  context: string;
  verified: boolean;
};

export type ProjectSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type ProjectMedia = {
  title: string;
  caption: string;
  src?: string;
  alt?: string;
};

export type Project = {
  slug: string;
  title: string;
  index: string;
  tagline: string;
  summary: string;
  year?: string;
  duration?: string;
  status: ProjectStatus;
  contentStatus: ContentStatus;
  projectType: "personal" | "academic" | "professional" | "group";
  role: string;
  contributions: string[];
  teamSize?: number;
  technologies: string[];
  domain: string;
  metrics: ProjectMetric[];
  sections: Record<string, ProjectSection | undefined>;
  accent: string;
  media: ProjectMedia[];
  demo?: {
    mode: "unconfigured" | "external" | "embed" | "api";
    url?: string;
  };
  published: boolean;
};
