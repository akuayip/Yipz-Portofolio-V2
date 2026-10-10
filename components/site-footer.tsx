import Link from "next/link";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</p>
          <p className="footer-title">Have a thoughtful AI problem?</p>
        </div>
        <div className="footer-links">
          <Link href="/contact">Start a conversation</Link>
          <Link href="/projects">Explore the work</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with care. Sample content is clearly marked.</span>
      </div>
    </footer>
  );
}
