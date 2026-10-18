"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/content/projects/types";
import { ProjectCard } from "./project-card";

const filters = ["All", "AI / ML", "Computer Vision", "Data", "Mobile", "Web", "Games"] as const;

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.categories.includes(filter));
  }, [filter, projects]);

  return (
    <>
      <div className="filter-row" aria-label="Filter projects">
        {filters.map((item) => (
          <button key={item} type="button" className={filter === item ? "selected" : ""} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="project-list">
        {visible.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </>
  );
}
