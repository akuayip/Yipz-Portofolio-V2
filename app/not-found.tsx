import Link from "next/link";

export default function NotFound() {
  return <section className="not-found shell"><span>404</span><h1>This path hasn&apos;t been mapped.</h1><p>The page may have moved, or the project is still being documented.</p><Link className="button button-primary" href="/">Return home</Link></section>;
}
