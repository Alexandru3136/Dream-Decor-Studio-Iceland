"use client";

import { useState } from "react";
import Image from "next/image";

export function BeforeAfter({
  before,
  after,
  beforeLabel,
  afterLabel
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div className="before-after">
      {/* After image is the full base layer. */}
      <Image
        className="before-after-img"
        src={after}
        alt=""
        fill
        sizes="(max-width: 720px) 100vw, 45vw"
        aria-hidden="true"
      />
      <span className="ba-tag ba-tag-after">{afterLabel}</span>

      {/* Before image stays full-size and full-framed; only its visibility is clipped. */}
      <div
        className="before-after-clip"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          className="before-after-img"
          src={before}
          alt=""
          fill
          sizes="(max-width: 720px) 100vw, 45vw"
          aria-hidden="true"
        />
        <span className="ba-tag ba-tag-before">{beforeLabel}</span>
      </div>

      <div className="before-after-handle" style={{ left: `${position}%` }} aria-hidden="true">
        <span>‹ ›</span>
      </div>

      <input
        className="before-after-range"
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`${beforeLabel} / ${afterLabel}`}
      />
    </div>
  );
}
