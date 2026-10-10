import Image from "next/image";

type Props = {
  index: string;
  title: string;
  accent: string;
  compact?: boolean;
  imageSrc?: string;
};

export function ProjectVisual({ index, title, accent, compact = false, imageSrc }: Props) {
  return (
    <div className={`project-visual visual-${accent}${compact ? " compact" : ""}`} aria-label={`Project preview for ${title}`}>
      {imageSrc && <Image className="project-visual-image" src={imageSrc} alt={`Dummy preview for ${title}`} fill sizes="(max-width: 900px) 100vw, 62vw" />}
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-orbit orbit-one" aria-hidden="true" />
      <div className="visual-orbit orbit-two" aria-hidden="true" />
      <span className="visual-index">{index}</span>
      <span className="visual-label">PROJECT PREVIEW · DUMMY IMAGE</span>
    </div>
  );
}
