'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const nav = [
  { label: 'Beneficios', href: '#servicios' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' }
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <div className="rounded-full border border-black/5 bg-white/78 px-4 py-3 shadow-soft backdrop-blur-xl md:px-5">
          <div className="flex items-center justify-between gap-4">
            <a href="#inicio" className="flex min-w-0 items-center">
              <div className="relative h-12 w-[132px] shrink-0 md:h-14 md:w-[156px]">
                <Image
                  src="/logo.png"
                  alt="Krása Dermoestudio"
                  fill
                  priority
                  sizes="(max-width: 768px) 132px, 156px"
                  className="object-contain object-left"
                />
              </div>
            </a>

            <nav className="hidden items-center gap-7 lg:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-black/70 transition hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/50768917500?text=Hola%20Kr%C3%A1sa%20Dermoestudio%2C%20quisiera%20agendar%20una%20valoraci%C3%B3n."
              target="_blank"
              className="rounded-full bg-ink px-4 py-3 text-sm font-medium text-white md:px-6"
            >
              <span className="hidden sm:inline">Agendar por WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}
