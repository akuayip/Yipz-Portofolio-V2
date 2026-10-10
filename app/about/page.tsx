import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import { profile, capabilities, toolbox } from "@/content/profile";

export const metadata: Metadata = { title: "About", description: "Background, capabilities, and working principles." };

export default function AboutPage() {
  return (
    <section className="page-shell shell">
      <div className="about-hero">
        <div><p className="eyebrow">ABOUT · PROFILE</p><h1>Engineering intelligence<br />with evidence and empathy.</h1></div>
        <p className="about-lead">{profile.bio[0]}</p>
      </div>
      <div className="about-detail-grid">
        <div className="portrait-card about-portrait">
          <Image className="about-portrait-image" src={profile.portraitPath} alt={`Portrait of ${profile.name}`} fill sizes="(max-width: 680px) 100vw, 40vw" priority />
          <div className="portrait-grid" />
          <div className="portrait-caption"><span>PROFILE PORTRAIT</span><span>DUMMY IMAGE</span></div>
        </div>
        <div className="about-narrative">
          {profile.bio.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="resume-placeholder"><Download size={22} /><div><strong>CV placeholder</strong><span>Add a real PDF to activate the download.</span></div></div>
        </div>
      </div>
      <div className="values-grid">
        {capabilities.map((item) => <article key={item.number}><span>{item.number}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}
      </div>
      <div className="toolbox about-toolbox">{toolbox.map((tool) => <span key={tool}>{tool}</span>)}</div>
    </section>
  );
}
