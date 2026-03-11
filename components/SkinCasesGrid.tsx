'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Reveal from '@/components/Reveal';

const skinCases = [
  {
    title: 'Cicatrices quirúrgicas',
    before: '/placeholders/case-cicatrices-before.jpg',
    after: '/placeholders/case-cicatrices-after.jpg'
  },
  {
    title: 'Estrías',
    before: '/placeholders/case-estrias-before.jpg',
    after: '/placeholders/case-estrias-after.jpg'
  },
  {
    title: 'Vitiligo estable',
    before: '/placeholders/case-vitiligo-before.jpg',
    after: '/placeholders/case-vitiligo-after.jpg'
  },
  {
    title: 'Reconstrucción areolar',
    before: '/placeholders/case-areolar-before.jpg',
    after: '/placeholders/case-areolar-after.jpg'
  }
];

type SelectedCase =
  | {
      title: string;
      before: string;
      after: string;
    }
  | null;

export default function SkinCasesGrid() {
  const [selectedCase, setSelectedCase] = useState<SelectedCase>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCase(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {skinCases.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <button
              type="button"
              onClick={() => setSelectedCase(item)}
              className="block w-full text-left"
            >
              <div className="card-premium card-hover overflow-hidden p-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { label: 'Antes', src: item.before },
                    { label: 'Después', src: item.after }
                  ].map((image) => (
                    <div key={image.label} className="relative overflow-hidden rounded-[24px]">
                      <Image
                        src={image.src}
                        alt={`${item.title} ${image.label.toLowerCase()}`}
                        width={900}
                        height={1100}
                        className="h-[220px] w-full object-cover md:h-[250px]"
                      />
                      <div className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/88 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-black/65 backdrop-blur-xl">
                        {image.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-3 pb-3 pt-5">
                  <CheckCircle2 className="h-6 w-6 text-black/70" />
                  <p className="mt-4 font-serif text-2xl leading-tight">{item.title}</p>
                  <p className="mt-3 text-sm text-black/55">Presiona para ver en grande</p>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {selectedCase && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/65 p-4 backdrop-blur-md md:p-8"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/15 bg-[rgba(250,246,242,0.96)] p-4 shadow-2xl md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCase(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-xl text-black/70 transition hover:text-black"
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className="mb-5 pr-14">
              <p className="text-xs uppercase tracking-[0.25em] text-black/45">Caso real</p>
              <h3 className="mt-2 font-serif text-2xl leading-tight md:text-4xl">
                {selectedCase.title}
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="mb-3 w-fit rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/65">
                  Antes
                </div>
                <div className="relative overflow-hidden rounded-[24px]">
                  <Image
                    src={selectedCase.before}
                    alt={`${selectedCase.title} antes`}
                    width={1400}
                    height={1800}
                    className="max-h-[72vh] w-full object-contain bg-white"
                  />
                </div>
              </div>

              <div>
                <div className="mb-3 w-fit rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/65">
                  Después
                </div>
                <div className="relative overflow-hidden rounded-[24px]">
                  <Image
                    src={selectedCase.after}
                    alt={`${selectedCase.title} después`}
                    width={1400}
                    height={1800}
                    className="max-h-[72vh] w-full object-contain bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
