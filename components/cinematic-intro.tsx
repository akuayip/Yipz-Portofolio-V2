"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function CinematicIntro() {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = window.sessionStorage.getItem("portfolio-intro-seen");
    if (reduced || seen) return;
    const frame = window.requestAnimationFrame(() => {
      setVisible(true);
      document.documentElement.classList.add("intro-running");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!visible || !root.current) return;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ onComplete: finish });
      timeline
        .to(".intro-progress-fill", { scaleX: 1, duration: 2.7, ease: "power2.inOut" })
        .fromTo(".intro-node", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, stagger: 0.06, duration: 0.5 }, 0.65)
        .to(".intro-network", { scale: 1.45, rotation: 12, duration: 1.2, ease: "power2.inOut" }, 1.45)
        .to(".intro-title span", { y: 0, duration: 0.7, stagger: 0.06, ease: "power3.out" }, 2.2)
        .to(root.current, { autoAlpha: 0, duration: 0.55, ease: "power2.inOut" }, 3.2);
      return () => timeline.kill();
    }, root);
    return () => context.revert();
  }, [visible]);

  function finish() {
    window.sessionStorage.setItem("portfolio-intro-seen", "true");
    document.documentElement.classList.remove("intro-running");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cinematic-intro" ref={root} role="dialog" aria-label="Portfolio introduction">
      <button type="button" className="skip-intro" onClick={finish}>Skip intro</button>
      <div className="intro-status">
        <span>INITIALIZING PORTFOLIO</span>
        <span>VISUAL SEQUENCE</span>
      </div>
      <div className="intro-progress"><div className="intro-progress-fill" /></div>
      <div className="intro-network" aria-hidden="true">
        {[...Array(12)].map((_, index) => <i className="intro-node" key={index} />)}
      </div>
      <h2 className="intro-title" aria-hidden="true"><span>RESEARCH.</span><span>BUILD.</span><span>SHIP.</span></h2>
    </div>
  );
}
