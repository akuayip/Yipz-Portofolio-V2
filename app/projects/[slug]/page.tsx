import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { ProjectMediaCarousel } from "@/components/project-media-carousel";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const sections = Object.entries(project.sections).filter((entry): entry is [string, NonNullable<typeof entry[1]>] => Boolean(entry[1]));

  return (
    <article className="case-study">
      <header className="case-hero shell">
        <Link href="/projects" className="back-link"><ArrowLeft size={16} /> All projects</Link>
        <div className="case-title-row">
          <div>
            <div className="project-meta"><span>{project.domain}</span><span>{project.status}</span><span className="draft-badge">Draft · details pending</span></div>
            <h1>{project.title}</h1><p>{project.tagline}</p>
          </div>
          <span className="case-index">{project.index}</span>
        </div>
        <ProjectMediaCarousel
          projectTitle={project.title}
          projectIndex={project.index}
          accent={project.accent}
          items={project.media}
        />
        <div className="case-facts">
          <div><span>STATUS</span><strong>{project.status}</strong></div>
          <div><span>TYPE</span><strong>{project.projectType}</strong></div>
          <div><span>ROLE</span><strong>{project.role}</strong></div>
          <div><span>YEAR</span><strong>{project.year}</strong></div>
        </div>
      </header>

      <div className="case-layout shell">
        <aside className="case-toc">
          <p>DEEP DIVE</p>
          <nav aria-label="Case study sections">
            {sections.map(([key, section], index) => <a key={key} href={`#${key}`}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>)}
          </nav>
          <Link href={`/projects/${project.slug}/demo`} className="text-link">Open demo page <ArrowUpRight size={15} /></Link>
        </aside>
        <div className="case-content">
          <section className="quick-read">
            <p className="eyebrow">QUICK READ</p><h2>{project.summary}</h2>
            <div className="contribution-box"><span>PERSONAL CONTRIBUTION</span>{project.contributions.map((item) => <p key={item}>{item}</p>)}</div>
          </section>
          {sections.map(([key, section], index) => (
            <section className="case-section" id={key} key={key}>
              <span className="section-number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
