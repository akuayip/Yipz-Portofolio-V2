import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile, capabilities, toolbox } from "@/content/profile";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { HeroScene } from "@/components/hero-scene";
import { CinematicIntro } from "@/components/cinematic-intro";
import { LanyardPortrait } from "@/components/lanyard-portrait";

export default function Home() {
  return (
    <>
      <CinematicIntro />
      <section className="hero shell">
        <HeroScene />
        <div className="hero-copy">
          <p className="eyebrow">AI / MACHINE LEARNING ENGINEER</p>
          <h1>{profile.headline}</h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">Explore projects</Link>
            <Link href="/about" className="button button-secondary">About me</Link>
          </div>
        </div>
        <LanyardPortrait
          name={profile.name}
          initials={profile.initials}
          title={profile.title}
          portraitPath={profile.portraitPath}
        />
        <a className="scroll-cue" href="#work"><ArrowDown size={17} /> Selected work</a>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED WORK · DRAFT PORTFOLIO</p><h2>Four problems.<br />Four different lenses.</h2></div>
          <p>Each case study is structured to show why the work mattered, how decisions were made, and what evidence supports the outcome.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
        <div className="center-action"><Link className="button button-secondary" href="/projects">View all projects</Link></div>
      </section>

      <section className="section capabilities-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <div><p className="eyebrow">HOW I APPROACH THE WORK</p><h2>From a useful question<br />to a usable system.</h2></div>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.number} className="capability-card">
                <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell about-preview">
        <div className="about-statement">
          <p className="eyebrow">ABOUT · SAMPLE CONTENT</p>
          <h2>Curious about models.<br />Serious about context.</h2>
        </div>
        <div className="about-copy">
          <p>{profile.bio[0]}</p><p>{profile.bio[1]}</p>
          <Link href="/about" className="text-link">More about me <ArrowUpRight size={16} /></Link>
        </div>
        <div className="toolbox" aria-label="Technical toolbox">
          {toolbox.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </section>
    </>
  );
}
