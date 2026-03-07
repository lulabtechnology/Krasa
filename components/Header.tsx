'use client';
import { motion } from 'framer-motion';
const nav = [
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' }
];
export default function Header() {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl"><div className="section-shell flex h-20 items-center justify-between gap-6"><a href="#inicio" className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-cream text-sm font-semibold">K</div><div><p className="font-serif text-xl tracking-wide">Krása</p><p className="text-xs uppercase tracking-[0.24em] text-black/55">Dermoestudio</p></div></a><nav className="hidden items-center gap-7 md:flex">{nav.map((item)=><a key={item.href} href={item.href} className="text-sm text-black/70 transition hover:text-black">{item.label}</a>)}</nav><motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="https://wa.me/50768917500?text=Hola%20Kr%C3%A1sa%20Dermoestudio%2C%20quisiera%20agendar%20una%20valoraci%C3%B3n." target="_blank" className="rounded-full border border-black/10 bg-ink px-5 py-3 text-sm font-medium text-white transition hover:opacity-95">Agendar por WhatsApp</motion.a></div></header>;
}
