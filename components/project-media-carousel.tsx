"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { ProjectMedia } from "@/content/projects/types";
import FlexCarousel from "./FlexCarousel";

type Props = { projectTitle: string; projectIndex: string; accent: string; items: ProjectMedia[] };

export function ProjectMediaCarousel({ projectTitle, accent, items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((current) => current === null ? null : (current + 1) % items.length);
      if (event.key === "ArrowLeft") setLightboxIndex((current) => current === null ? null : (current - 1 + items.length) % items.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [items.length, lightboxIndex]);

  const carouselItems = items.map((item, index) => ({
    src: item.src || "/dummy.jpeg", alt: item.alt || item.title,
    title: `${String(index + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")} · ${item.title}`,
    subtitle: item.caption,
  }));
  const openImage = (index: number) => { setActiveIndex(index); if (items[index]?.src) setLightboxIndex(index); };
  const moveCarousel = (key: "ArrowLeft" | "ArrowRight") => {
    const carousel = carouselRef.current?.querySelector<HTMLElement>(".project-flex-carousel-canvas");
    carousel?.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }));
  };
  const stopOverlayClose = (event: MouseEvent<HTMLDivElement>) => event.stopPropagation();

  if (items.length === 1) {
    const item = items[0];
    return (
      <section className={`project-media-carousel visual-${accent}`} aria-label={`${projectTitle} media gallery`}>
        <button className="project-media-single" type="button" onClick={() => setLightboxIndex(0)} aria-label={`Open ${item.title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.src || "/dummy.jpeg"} alt={item.alt || item.title} />
        </button>
        <div className="project-media-controls"><p>PROJECT MEDIA</p><div><span>01 / 01</span></div></div>
        {lightboxIndex === 0 && item.src ? createPortal(
          <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${projectTitle}: ${item.title}`} onClick={() => setLightboxIndex(null)}>
            <div className="image-lightbox-panel" onClick={stopOverlayClose}>
              <div className="image-lightbox-toolbar"><div><span>{projectTitle} · 01/01</span><strong>{item.title}</strong></div><button type="button" onClick={() => setLightboxIndex(null)} aria-label="Close image viewer"><X size={20} /><span>Close</span></button></div>
              <div className="image-lightbox-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt || item.title} />
              </div>
              <div className="image-lightbox-footer"><p>{item.caption}</p></div>
            </div>
          </div>, document.body,
        ) : null}
      </section>
    );
  }

  return (
    <section className={`project-media-carousel visual-${accent}`} aria-label={`${projectTitle} media gallery`}>
      <div className="project-flex-carousel" ref={carouselRef}>
        <FlexCarousel items={carouselItems} preset="liquid" intro="rise" cardHeight={0.72} gap={0.055} radius={0.08} fit="landscape" squeeze={0.18} focusOnClick={false} captions captureWheel={false} onChange={setActiveIndex} onSelect={openImage} className="project-flex-carousel-canvas" />
      </div>
      <div className="project-media-controls"><p>PROJECT MEDIA</p><div><span>{String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span><button type="button" onClick={() => moveCarousel("ArrowLeft")} aria-label="Previous project image"><ArrowLeft size={17} /></button><button type="button" onClick={() => moveCarousel("ArrowRight")} aria-label="Next project image"><ArrowRight size={17} /></button></div></div>
      {lightboxIndex !== null && items[lightboxIndex]?.src ? createPortal(
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${projectTitle}: ${items[lightboxIndex].title}`} onClick={() => setLightboxIndex(null)}>
          <div className="image-lightbox-panel" onClick={stopOverlayClose}><div className="image-lightbox-toolbar"><div><span>{projectTitle} · {String(lightboxIndex + 1).padStart(2, "0")}/{String(items.length).padStart(2, "0")}</span><strong>{items[lightboxIndex].title}</strong></div><button type="button" onClick={() => setLightboxIndex(null)} aria-label="Close image viewer"><X size={20} /><span>Close</span></button></div><div className="image-lightbox-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={items[lightboxIndex].src} alt={items[lightboxIndex].alt || items[lightboxIndex].title} />
          </div><div className="image-lightbox-footer"><p>{items[lightboxIndex].caption}</p>{items.length > 1 ? <div><button type="button" onClick={() => setLightboxIndex((lightboxIndex - 1 + items.length) % items.length)} aria-label="Previous image"><ArrowLeft size={18} /></button><button type="button" onClick={() => setLightboxIndex((lightboxIndex + 1) % items.length)} aria-label="Next image"><ArrowRight size={18} /></button></div> : null}</div></div>
        </div>, document.body,
      ) : null}
    </section>
  );
}
