import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects/types";
import TiltedCard from "./TiltedCard";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className="project-image-link" aria-label={`Read ${project.title} case study`}>
        <TiltedCard
          imageSrc={project.media[0]?.src || "/dummy.jpeg"}
          altText={`Preview image for ${project.title}`}
          captionText={project.title}
          containerHeight="450px"
          imageHeight="450px"
          imageWidth="100%"
          scaleOnHover={1.025}
          rotateAmplitude={8}
          showMobileWarning={false}
          showTooltip={false}
        />
      </Link>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.domain}</span>
          <span>{project.status}</span>
          <span className="draft-badge">Draft · details pending</span>
        </div>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.tagline}</p>
        <div className="tag-row">
          {project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          View case study <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
