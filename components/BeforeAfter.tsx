'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <div className="card-premium overflow-hidden p-4 md:p-5">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-black/45">Comparador visual</p>
          <h3 className="mt-2 font-serif text-3xl leading-tight md:text-4xl">
            Antes y después
          </h3>
        </div>

        <p className="max-w-sm text-sm leading-6 text-black/62">
          Reemplaza en:
          <span className="font-medium"> /public/placeholders/before.jpg</span> y
          <span className="font-medium"> /public/placeholders/after.jpg</span>
        </p>
      </div>

      <div className="relative h-[400px] overflow-hidden rounded-[28px] md:h-[560px]">
        <Image
          src="/placeholders/before.jpg"
          alt="Antes"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full w-[900px] max-w-none md:w-full">
            <Image
              src="/placeholders/after.jpg"
              alt="Después"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>

        <div
          className="absolute inset-y-0 z-10"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="relative h-full w-[2px] bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/92 text-xs font-semibold text-black shadow-lg">
            ↔
          </div>
        </div>

        <div className="absolute left-4 top-4 rounded-full border border-white/35 bg-white/85 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/70 backdrop-blur-xl">
          Ejemplo visual
        </div>

        <div className="absolute bottom-4 left-4 rounded-full border border-white/35 bg-white/85 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/70 backdrop-blur-xl">
          Antes
        </div>

        <div className="absolute bottom-4 right-4 rounded-full border border-white/35 bg-white/85 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/70 backdrop-blur-xl">
          Después
        </div>
      </div>

      <div className="px-2 pb-2 pt-6">
        <input
          aria-label="Comparador antes y después"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="w-full accent-[rgb(202,154,136)]"
        />
      </div>
    </div>
  );
}
