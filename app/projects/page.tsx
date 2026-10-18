import type { Metadata } from "next";
import { portfolioProjects } from "@/content/projects";
import { ProjectFilter } from "@/components/project-filter";

export const metadata: Metadata = { title: "Projects", description: "AI and machine learning research, prototypes, and product work." };

export default function ProjectsPage() {
  return (
    <section className="page-shell shell">
      <div className="page-intro">
        <p className="eyebrow">SELECTED PROJECTS · 2025–2026</p>
        <h1>A record of learning,<br />building, and research.</h1>
        <p>Six selected projects across AI/ML research, iOS product development, web systems, and data visualization.</p>
      </div>
      <ProjectFilter projects={portfolioProjects} />
    </section>
  );
}
