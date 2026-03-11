'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const items = [
  {
    q: '¿La dermopigmentación elimina las estrías o cicatrices?',
    a: 'No. La dermopigmentación no elimina la marca, pero puede mejorar visualmente su apariencia integrando el color con el tono de la piel.'
  },
  {
    q: '¿Es permanente?',
    a: 'Los pigmentos se degradan gradualmente con el tiempo, por lo que en algunos casos puede requerirse mantenimiento o retoques.'
  },
  {
    q: '¿Cuántas sesiones necesito?',
    a: 'Depende del tipo de piel, extensión del área, características de la marca y respuesta del tejido.'
  },
  {
    q: '¿Es un procedimiento seguro?',
    a: 'Sí, se realiza con pigmentos especializados y protocolos profesionales adaptados a cada paciente.'
  },
  {
    q: '¿Es doloroso el procedimiento?',
    a: 'La mayoría de las personas reporta molestias mínimas y tolerables durante el tratamiento.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div key={item.q} className="card-premium overflow-hidden">
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="text-base font-medium md:text-lg">{item.q}</span>
              <ChevronDown className={`h-5 w-5 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="border-t border-black/5 px-6 py-5 text-black/72">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
