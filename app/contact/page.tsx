  import type { Metadata } from "next";
  import Link from "next/link";
  import { CodeXml, Mail, Network } from "lucide-react";
  import { profile } from "@/content/profile";

  export const metadata: Metadata = { title: "Contact", description: "Contact details for AI/ML work and collaboration." };

  export default function ContactPage() {
    return (
      <section className="contact-page shell">
        <p className="eyebrow">CONTACT · LET&apos;S CONNECT</p>
        <h1>Let&apos;s make the next<br />question worth answering.</h1>
        <p className="contact-lead">I&apos;m open to thoughtful conversations about AI/ML research, product work, and useful experiments.</p>
        <div className="contact-grid">
          <Link href={`mailto:${profile.email}`}><Mail size={21} /><span>EMAIL</span><strong>{profile.email}</strong><small>Send an email ↗</small></Link>
          <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer"><CodeXml size={21} /><span>GITHUB</span><strong>github.com/{profile.github}</strong><small>Open profile ↗</small></a>
          <a href={`https://www.linkedin.com/in/${profile.linkedin}/`} target="_blank" rel="noreferrer"><Network size={21} /><span>LINKEDIN</span><strong>linkedin.com/in/{profile.linkedin}/</strong><small>Open profile ↗</small></a>
        </div>
      </section>
    );
  }
