import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FlaskConical } from "lucide-react";
import { getProject, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export const metadata: Metadata = { title: "Model Demo" };

export default async function DemoPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <section className="demo-page shell">
      <Link className="back-link" href={`/projects/${project.slug}`}><ArrowLeft size={16} /> Back to case study</Link>
      <div className="demo-panel">
        <div className="demo-icon"><FlaskConical size={28} /></div>
        <p className="eyebrow">LIVE MODEL PLAYGROUND</p>
        <h1>Demo coming soon.</h1>
        <p>No inference endpoint is configured for <strong>{project.title}</strong>. This state is intentional: the portfolio will never simulate a model response.</p>
        <div className="demo-state"><span /> NOT CONFIGURED</div>
        <p className="demo-note">Connect a real Hugging Face Space or FastAPI endpoint to enable uploads and predictions.</p>
      </div>
    </section>
  );
}
