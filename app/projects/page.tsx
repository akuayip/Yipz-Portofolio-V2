import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectFilter } from "@/components/project-filter";

export const metadata: Metadata = { title: "Projects", description: "AI and machine learning research, prototypes, and product work." };

export default function ProjectsPage() {
  return (
    <section className="page-shell shell">
      <div className="page-intro">
        <p className="eyebrow">PROJECT ARCHIVE · DRAFT CONTENT</p>
        <h1>Work shaped by the problem,<br />not by the tool.</h1>
        <p>Browse research explorations, prototypes, and product concepts. Details are placeholders until verified with the portfolio owner.</p>
      </div>
      <ProjectFilter projects={projects} />
    </section>
  );
}
