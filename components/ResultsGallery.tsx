'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import BeforeAfter from '@/components/BeforeAfter';
import Reveal from '@/components/Reveal';

type ModalState =
  | {
      type: 'comparison';
      title: string;
      before: string;
      after: string;
    }
  | {
      type: 'image';
      title: string;
      image: string;
    }
  | null;

const sideCases = [
  {
    title: 'Caso real 1',
    image: '/placeholders/result-1.jpg'
  },
  {
    title: 'Caso real 2',
    image: '/placeholders/result-2.jpg'
  }
];

export default function ResultsGallery() {
  const [modal, setModal] = useState<ModalState>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModal(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <Reveal>
          <BeforeAfter onOpen={setModal} />
        </Reveal>

        <div className="grid gap-6">
          {sideCases.map((item, index) => (
            <Reveal key={item.image} delay={index * 0.08}>
              <button
                type="button"
                onClick={() =>
                  setModal({
                    type: 'image',
                    title: item.title,
                    image: item.image
                  })
                }
                className="block w-full text-left"
              >
                <div className="card-premium card-hover overflow-hidden p-3">
                  <div className="relative overflow-hidden rounded-[24px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={900}
                      height={700}
                      className="h-[260px] w-full object-cover md:h-[320px]"
                    />
                    <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-black/65">
                      {item.title}
                    </div>
                    <div className="absolute bottom-4 right-4 rounded-full border border-white/40 bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/65">
                      Ver en grande
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/65 p-4 backdrop-blur-md md:p-8"
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/15 bg-[rgba(250,246,242,0.96)] p-4 shadow-2xl md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModal(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-xl text-black/70 transition hover:text-black"
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className="mb-5 pr-14">
              <p className="text-xs uppercase tracking-[0.25em] text-black/45">Casos reales</p>
              <h3 className="mt-2 font-serif text-2xl leading-tight md:text-4xl">{modal.title}</h3>
            </div>

            {modal.type === 'comparison' ? (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="mb-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/65 w-fit">
                    Antes
                  </div>
                  <div className="relative overflow-hidden rounded-[24px]">
                    <Image
                      src={modal.before}
                      alt="Antes del tratamiento"
                      width={1400}
                      height={1600}
                      className="max-h-[70vh] w-full object-contain bg-white"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-black/65 w-fit">
                    Después
                  </div>
                  <div className="relative overflow-hidden rounded-[24px]">
                    <Image
                      src={modal.after}
                      alt="Después del tratamiento"
                      width={1400}
                      height={1600}
                      className="max-h-[70vh] w-full object-contain bg-white"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src={modal.image}
                  alt={modal.title}
                  width={1600}
                  height={1400}
                  className="max-h-[78vh] w-full object-contain bg-white"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
