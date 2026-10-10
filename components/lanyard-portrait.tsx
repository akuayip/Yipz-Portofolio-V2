"use client";

import Lanyard from "./Lanyard";

type LanyardPortraitProps = {
  name: string;
  initials: string;
  title: string;
  portraitPath?: string;
};

export function LanyardPortrait({ name, portraitPath }: LanyardPortraitProps) {
  return (
    <div className="lanyard-stage" aria-label={`Interactive identity card for ${name}. Drag it in any direction.`}>
      <Lanyard
        frontImage={portraitPath}
        imageFit="cover"
        cardColor="#f1e9e2"
        orientation="portrait"
        finish="holographic"
        cornerRadius={0.2}
        size={0.54}
        anchor="right"
        strapLength={0.5}
        strapColor="#9a3f1f"
        strapWidth={0.7}
        metal="silver"
        gravity={0.95}
        damping={0.5}
        elasticity={0.5}
        breeze={0.5}
        interactive
        intro
      />
    </div>
  );
}
