'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
const items = [
  { q: '¿La dermopigmentación paramédica elimina las cicatrices?', a: 'No elimina la cicatriz, pero mejora significativamente su apariencia integrándola visualmente con el tono natural de la piel.' },
  { q: '¿Es un procedimiento seguro?', a: 'Sí, se realiza con pigmentos especializados y protocolos profesionales adaptados a cada paciente.' },
  { q: '¿Cuántas sesiones se necesitan?', a: 'Depende del tipo de piel, cicatriz y respuesta del tejido. En muchos casos se requieren entre 1 y 3 sesiones.' },
  { q: '¿Es doloroso el procedimiento?', a: 'La mayoría de los pacientes reporta molestias mínimas y tolerables.' },
  { q: '¿Los resultados son permanentes?', a: 'Los resultados son duraderos, aunque con el tiempo pueden requerir retoques.' }
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="space-y-4">{items.map((item, index) => { const isOpen = open === index; return <div key={item.q} className="card-premium overflow-hidden"><button className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setOpen(isOpen ? null : index)}><span className="text-base font-medium md:text-lg">{item.q}</span><ChevronDown className={`h-5 w-5 transition ${isOpen ? 'rotate-180' : ''}`} /></button>{isOpen && <div className="border-t border-black/5 px-6 py-5 text-black/72">{item.a}</div>}</div>; })}</div>;
}
