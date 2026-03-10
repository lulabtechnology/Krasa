import Image from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Droplets,
  HeartHandshake,
  Layers3,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import BeforeAfter from '@/components/BeforeAfter';
import FAQ from '@/components/FAQ';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import WhatsAppForm from '@/components/WhatsAppForm';

const benefits = [
  {
    title: 'Resultados visualmente armónicos',
    text: 'Enfoque orientado a mejorar la apariencia de la piel con integración natural y criterio profesional.'
  },
  {
    title: 'Tratamiento personalizado',
    text: 'Cada caso se analiza según tono, textura, tipo de marca y objetivo visual de la paciente.'
  },
  {
    title: 'Ciencia + técnica + estética',
    text: 'La valoración combina conocimiento clínico de la piel con ejecución artística avanzada.'
  },
  {
    title: 'Experiencia sobria y humana',
    text: 'Acompañamiento profesional con comunicación clara, realista y enfocada en confianza.'
  }
];

const services = [
  {
    title: 'Camuflaje de pexia mamaria',
    text: 'Mejora visual de marcas asociadas a procedimientos mamarios con un enfoque estético y armónico.',
    image: '/placeholders/service-pexia.jpg',
    icon: HeartHandshake
  },
  {
    title: 'Camuflaje de estrías',
    text: 'Abordaje profesional para disminuir el contraste visual de estrías localizadas.',
    image: '/placeholders/service-estrias.jpg',
    icon: Sparkles
  },
  {
    title: 'Camuflaje de cicatrices',
    text: 'Tratamiento pensado para mejorar visualmente cicatrices quirúrgicas o traumáticas.',
    image: '/placeholders/service-cicatrices.jpg',
    icon: Microscope
  },
  {
    title: 'Camuflaje de mamoplastia',
    text: 'Integración visual para zonas tratadas en procedimientos de mamoplastia, con atención al detalle.',
    image: '/placeholders/service-mamoplastia.jpg',
    icon: Layers3
  },
  {
    title: 'Camuflaje de manchas',
    text: 'Valoración especializada para casos seleccionados que requieren armonización cromática.',
    image: '/placeholders/service-manchas.jpg',
    icon: Droplets
  },
  {
    title: 'Reconstrucción areolar total / parcial',
    text: 'Reconstrucción óptica con criterio estético, precisión técnica y enfoque personalizado.',
    image: '/placeholders/service-areola.jpg',
    icon: Stethoscope
  }
];

const process = [
  {
    step: '01',
    title: 'Valoración especializada',
    text: 'Se analiza el caso, la zona, el tipo de piel y el objetivo visual esperado.'
  },
  {
    step: '02',
    title: 'Diseño del abordaje',
    text: 'Se define una estrategia personalizada según la condición y respuesta del tejido.'
  },
  {
    step: '03',
    title: 'Procedimiento y seguimiento',
    text: 'Se realiza el tratamiento con protocolos profesionales y control posterior.'
  }
];

const testimonials = [
  'Desde la valoración sentí profesionalismo, calma y mucha claridad sobre mi caso.',
  'Me gustó que todo fue explicado con realismo, sin exageraciones y con mucha empatía.',
  'La atención fue muy cuidada y el enfoque se sintió completamente personalizado.',
  'Buscaba un resultado natural y la orientación me dio muchísima confianza.',
  'El espacio, la imagen de la marca y el trato transmiten nivel y profesionalismo.'
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Krása Dermoestudio',
    image: 'https://krasadermoestudio.vercel.app/og-image.jpg',
    telephone: '+50768917500',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Panamá',
      addressCountry: 'PA'
    },
    sameAs: ['https://instagram.com/krasadermoestudio'],
    url: 'https://krasadermoestudio.vercel.app'
  };

  return (
    <main id="inicio" className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <FloatingWhatsApp />

      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <div className="section-shell relative">
          <div className="grid items-center gap-10 pb-16 pt-6 md:gap-14 md:pb-24 md:pt-10 lg:grid-cols-[1.02fr_0.98fr]">
            <Reveal>
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-black/55">
                  Dermopigmentación paramédica · estética avanzada
                </span>

                <h1 className="mt-6 font-serif text-5xl leading-[0.96] text-balance md:text-7xl xl:text-[5.3rem]">
                  Restaurar armonía visual también puede verse premium.
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-black/68 md:text-[1.12rem]">
                  Krása Dermoestudio ofrece valoración especializada y tratamientos de camuflaje
                  con una estética médica elegante, un enfoque humano y protocolos personalizados.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://wa.me/50768917500?text=Hola%20Kr%C3%A1sa%20Dermoestudio%2C%20quisiera%20agendar%20una%20valoraci%C3%B3n."
                    target="_blank"
                    className="btn-primary"
                  >
                    Agendar valoración por WhatsApp
                  </a>

                  <a href="#resultados" className="btn-secondary">
                    Ver antes y después
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    'Panamá',
                    'Con cita previa',
                    'Enfoque profesional y natural'
                  ].map((item) => (
                    <div key={item} className="glass-pill">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative">
                <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full bg-[rgba(202,154,136,0.15)] blur-3xl md:block" />
                <div className="absolute -right-8 bottom-8 hidden h-40 w-40 rounded-full bg-[rgba(196,189,194,0.24)] blur-3xl md:block" />

                <div className="hero-frame">
                  <div className="hero-image-wrap">
                    <Image
                      src="/placeholders/hero-main.jpg"
                      alt="Especialista Krása Dermoestudio"
                      width={1200}
                      height={1500}
                      priority
                      className="hero-image"
                    />
                  </div>

                  <div className="hero-badge hero-badge-top">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-black/45">
                      Imagen principal
                    </p>
                    <p className="mt-1 text-sm leading-6 text-black/70">
                      Reemplaza esta foto en:
                      <br />
                      <span className="font-medium">/public/placeholders/hero-main.jpg</span>
                    </p>
                  </div>

                  <div className="hero-badge hero-badge-bottom">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-black/45">
                      Brand feel
                    </p>
                    <p className="mt-1 text-sm leading-6 text-black/70">
                      Clínico, femenino, sofisticado y de alta confianza.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div className="section-shell">
          <Reveal>
            <div className="feature-band">
              <div>
                <p className="feature-band-kicker">Diferenciador</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                  Conocimiento clínico de la piel, técnica artística avanzada y protocolos personalizados.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="mini-card">
                  <ShieldCheck className="h-5 w-5 text-black/70" />
                  <p className="mt-3 text-sm leading-6 text-black/68">
                    Resultados visualmente naturales, sobrios y pensados para integrarse al tono de piel.
                  </p>
                </div>
                <div className="mini-card">
                  <BadgeCheck className="h-5 w-5 text-black/70" />
                  <p className="mt-3 text-sm leading-6 text-black/68">
                    Atención enfocada en confianza, criterio profesional y orientación realista.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="beneficios" className="py-14 md:py-24">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-kicker">Beneficios</p>
              <h2 className="section-title">
                Un lenguaje visual de lujo médico-estético, con fondo profesional real.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="card-premium card-hover h-full p-7">
                  <CheckCircle2 className="h-6 w-6 text-black/70" />
                  <h3 className="mt-5 font-serif text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/68">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="section-shell">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="section-kicker">Cómo funciona</p>
                <h2 className="section-title">
                  Un proceso claro, elegante y pensado para generar confianza desde el primer contacto.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {process.map((item, index) => (
                  <Reveal key={item.step} delay={index * 0.08}>
                    <div className="card-premium card-hover h-full p-7">
                      <p className="text-xs uppercase tracking-[0.28em] text-black/45">
                        Paso {item.step}
                      </p>
                      <h3 className="mt-4 font-serif text-2xl leading-tight">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-black/68">{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="servicios" className="py-14 md:py-24">
        <div className="section-shell">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="section-kicker">Servicios</p>
                <h2 className="section-title">
                  Servicios visualmente mejor presentados, con imagen premium y estructura más pro.
                </h2>
              </div>

              <p className="max-w-md text-black/65">
                Cada tarjeta deja espacio para imagen. Solo reemplaza los archivos dentro de
                <span className="font-medium"> /public/placeholders/</span>.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.06}>
                  <div className="service-card group h-full">
                    <div className="service-image-wrap">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={900}
                        height={650}
                        className="service-image"
                      />
                      <div className="service-overlay" />
                      <div className="service-chip">
                        <Icon className="h-4 w-4" />
                        <span>Servicio</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-[1.8rem] leading-tight">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-black/68">{service.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="resultados" className="py-14 md:py-24">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-kicker">Antes y después</p>
              <h2 className="section-title">
                Espacio pro para mostrar resultados con comparador visual.
              </h2>
              <p className="mt-5 text-black/65">
                Reemplaza estas imágenes en:
                <span className="font-medium"> /public/placeholders/before.jpg</span> y
                <span className="font-medium"> /public/placeholders/after.jpg</span>
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <Reveal>
              <BeforeAfter />
            </Reveal>

            <div className="grid gap-6">
              {['result-1.jpg', 'result-2.jpg'].map((file, index) => (
                <Reveal key={file} delay={index * 0.08}>
                  <div className="card-premium card-hover overflow-hidden p-3">
                    <div className="relative overflow-hidden rounded-[24px]">
                      <Image
                        src={`/placeholders/${file}`}
                        alt={`Resultado visual ${index + 1}`}
                        width={900}
                        height={700}
                        className="h-[260px] w-full object-cover md:h-[320px]"
                      />
                      <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/85 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-black/65">
                        Ejemplo visual
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-kicker">Testimonios</p>
              <h2 className="section-title">
                Una percepción de marca más elegante, humana y confiable.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="card-premium card-hover h-full p-7">
                  <ShieldCheck className="h-6 w-6 text-black/65" />
                  <p className="mt-5 leading-7 text-black/72">“{item}”</p>
                  <p className="mt-5 text-sm uppercase tracking-[0.2em] text-black/42">
                    Paciente · Panamá
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <p className="section-kicker">FAQ</p>
              <h2 className="section-title">Respuestas claras antes de tu valoración.</h2>
              <p className="mt-5 text-black/65">
                Información sobria, sin promesas irreales y con criterio profesional.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="py-14 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div>
              <p className="section-kicker">Agenda tu valoración</p>
              <h2 className="section-title">
                Un cierre más premium, limpio y orientado a convertir por WhatsApp.
              </h2>
              <p className="mt-5 text-black/65">
                Contacto principal: Luisana Concepción · Instagram: @krasadermoestudio · Panamá ·
                Con cita previa.
              </p>

              <div className="mt-8 card-premium p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-black/45">
                  Ideal para esta sección
                </p>
                <p className="mt-3 text-sm leading-7 text-black/68">
                  Si después quieres, aquí también podemos poner una segunda foto vertical,
                  una mini galería o una insignia de confianza.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <WhatsAppForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-16 pt-2 md:pb-20">
        <div className="section-shell">
          <Reveal>
            <div className="cta-banner">
              <div className="max-w-2xl">
                <p className="section-kicker">CTA final</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl">
                  Agenda tu valoración por WhatsApp y recibe orientación inicial sobre tu caso.
                </h2>
              </div>

              <a
                href="https://wa.me/50768917500?text=Hola%20Kr%C3%A1sa%20Dermoestudio%2C%20quisiera%20agendar%20una%20valoraci%C3%B3n."
                target="_blank"
                className="btn-primary inline-flex items-center gap-2"
              >
                Agendar valoración por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-black/5 py-10">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl">Krása Dermoestudio</p>
            <p className="mt-2 text-sm text-black/58">
              Panamá · Con cita previa · Instagram: @krasadermoestudio
            </p>
          </div>

          <p className="max-w-xl text-sm leading-6 text-black/52">
            Aviso legal: La información de este sitio es orientativa y no sustituye una valoración
            individual. Resultados pueden variar según cada caso.
          </p>
        </div>
      </footer>
    </main>
  );
}
