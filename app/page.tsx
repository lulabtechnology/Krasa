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
import ResultsGallery from '@/components/ResultsGallery';
import FAQ from '@/components/FAQ';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import WhatsAppForm from '@/components/WhatsAppForm';
import SkinCasesGrid from '@/components/SkinCasesGrid';

const reasons = [
  {
    title: 'Protocolos profesionales personalizados',
    text: 'Cada caso se analiza según tipo de piel, tono, textura, extensión del área y objetivo visual.'
  },
  {
    title: 'Pigmentos de alta calidad',
    text: 'Se trabaja con materiales especializados y un enfoque técnico orientado a naturalidad y armonía.'
  },
  {
    title: 'Técnicas paramédicas especializadas',
    text: 'La valoración combina conocimiento de la piel, precisión técnica y sensibilidad estética.'
  },
  {
    title: 'Evaluación previa antes de cada tratamiento',
    text: 'Se revisa el caso de forma individual para definir un abordaje responsable y realista.'
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
    text: 'Mejoramos visualmente la apariencia de estrías localizadas integrándolas al tono natural de la piel.',
    image: '/placeholders/service-estrias.jpg',
    icon: Sparkles
  },
  {
    title: 'Camuflaje de cicatrices',
    text: 'Tratamiento orientado a mejorar la apariencia visual de cicatrices quirúrgicas, traumáticas o estéticas.',
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
    title: 'Valoración profesional',
    text: 'Evaluamos tu piel, historial, zona a tratar y expectativas visuales.'
  },
  {
    step: '02',
    title: 'Protocolo personalizado',
    text: 'Definimos el tratamiento adecuado según tu caso y la respuesta esperada del tejido.'
  },
  {
    step: '03',
    title: 'Procedimiento',
    text: 'Aplicación técnica con pigmentos especializados, enfoque estético y criterios profesionales.'
  },
  {
    step: '04',
    title: 'Seguimiento',
    text: 'Se controla la evolución y se valoran ajustes o sesiones adicionales si son necesarias.'
  }
];

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
                  Dermopigmentación paramédica · Panamá
                </span>

                <h1 className="mt-6 font-serif text-5xl leading-[0.96] text-balance md:text-7xl xl:text-[5.2rem]">
                  Recupera la apariencia natural de tu piel
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-black/68 md:text-[1.12rem]">
                  Especialistas en dermopigmentación paramédica en Panamá para mejorar visualmente
                  cicatrices, estrías, vitiligo y secuelas cutáneas con un enfoque profesional,
                  natural y personalizado.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://wa.me/50768917500?text=Hola%20Kr%C3%A1sa%20Dermoestudio%2C%20quisiera%20agendar%20una%20valoraci%C3%B3n."
                    target="_blank"
                    className="btn-primary"
                  >
                    Reservar valoración
                  </a>

                  <a href="#resultados" className="btn-secondary">
                    Ver casos reales
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {['Panamá', 'Con cita previa', 'Atención profesional personalizada'].map((item) => (
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
    Krása Dermoestudio
  </p>
  <p className="mt-1 text-sm leading-6 text-black/70">
    Dermopigmentación paramédica con enfoque profesional, natural y personalizado.
  </p>
</div>

<div className="hero-badge hero-badge-bottom">
  <p className="text-[11px] uppercase tracking-[0.22em] text-black/45">
    Panamá
  </p>
  <p className="mt-1 text-sm leading-6 text-black/70">
    Atención especializada con cita previa.
  </p>
</div>

                  <div className="hero-badge hero-badge-bottom">
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
                <p className="feature-band-kicker">El problema</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                  Muchas personas viven con marcas en la piel que afectan su seguridad y percepción personal.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="mini-card">
                  <ShieldCheck className="h-5 w-5 text-black/70" />
                  <p className="mt-3 text-sm leading-6 text-black/68">
                    Cicatrices quirúrgicas, estrías visibles, vitiligo y secuelas de procedimientos
                    estéticos pueden impactar la confianza.
                  </p>
                </div>
                <div className="mini-card">
                  <BadgeCheck className="h-5 w-5 text-black/70" />
                  <p className="mt-3 text-sm leading-6 text-black/68">
                    En Krása Dermoestudio se trabaja con técnicas avanzadas de camuflaje paramédico
                    para mejorar visualmente estas condiciones.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="dermopigmentacion" className="py-14 md:py-24">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="card-premium card-hover p-8 md:p-10">
                <p className="section-kicker">Qué es la dermopigmentación paramédica</p>
                <h2 className="section-title">
                  Una técnica especializada orientada a naturalidad, armonía y discreción.
                </h2>
                <p className="mt-5 leading-8 text-black/68">
                  La dermopigmentación paramédica consiste en implantar pigmentos biocompatibles en la
                  piel para armonizar el color y mejorar visualmente irregularidades cutáneas.
                </p>
                <p className="mt-5 leading-8 text-black/68">
                  Se utiliza en cicatrices quirúrgicas, estrías, vitiligo estable, reconstrucción
                  areolar y otros casos seleccionados que requieren integración cromática y criterio técnico.
                </p>
              </div>
            </Reveal>

                      <div className="grid gap-5 sm:grid-cols-2">
              {skinCases.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
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
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-14 md:py-24">
        <div className="section-shell">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="section-kicker">Tratamientos que ofrecemos</p>
                <h2 className="section-title">
                  Servicios presentados con una estética premium y una estructura más estratégica.
                </h2>
              </div>

           <p className="max-w-md text-black/65">
  Tratamientos diseñados con un enfoque técnico, estético y personalizado para cada caso.
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
                        <span>Tratamiento</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-[1.8rem] leading-tight">{service.title}</h3>
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
              <p className="section-kicker">Casos reales</p>
              <h2 className="section-title">
                Antes y después presentados con un enfoque visual elegante y creíble.
              </h2>
              <p className="mt-5 text-black/65">
                Resultados reales obtenidos con protocolos personalizados en Krása Dermoestudio.
                Cada piel responde de forma distinta, por lo que los resultados pueden variar.
              </p>
            </div>
          </Reveal>

                  <ResultsGallery />
        </div>
      </section>

      <section id="especialista" className="py-14 md:py-24">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="card-premium overflow-hidden p-3">
                <Image
                  src="/placeholders/specialist.jpg"
                  alt="Luisana Concepción"
                  width={1000}
                  height={1200}
                  className="rounded-[24px] object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-premium card-hover p-8 md:p-10">
                <p className="section-kicker">Sobre la especialista</p>
                <h2 className="section-title">Luisana Concepción</h2>
                <p className="mt-3 text-lg text-black/70">
                  Especialista en dermopigmentación paramédica
                </p>
                <p className="mt-6 leading-8 text-black/68">
                  Fundadora de Krása Dermoestudio, con formación especializada en técnicas de
                  camuflaje paramédico y estética avanzada.
                </p>
                <p className="mt-5 leading-8 text-black/68">
                  Su enfoque combina precisión técnica, conocimiento de la piel y sensibilidad
                  estética, con el objetivo de ofrecer resultados naturales, armónicos y visualmente discretos.
                </p>
              <p className="mt-6 text-sm text-black/55">
  Atención profesional con enfoque humano, estético y clínico.
</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="porque-elegir" className="py-14 md:py-24">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-kicker">Por qué elegir Krása</p>
              <h2 className="section-title">
                El mismo look premium, pero con argumentos más sólidos para convertir.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((item, index) => (
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
                <p className="section-kicker">Proceso de atención</p>
                <h2 className="section-title">
                  Un recorrido claro, profesional y pensado para dar seguridad desde el primer contacto.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
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

      <section className="py-14 md:py-24">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-kicker">Testimonios</p>
              <h2 className="section-title">
                Prueba social sobria, humana y coherente con la estética premium.
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
              <p className="section-kicker">Preguntas frecuentes</p>
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
                Recupera la confianza en tu piel con una valoración personalizada.
              </h2>
              <p className="mt-5 text-black/65">
                WhatsApp: +507 6891 7500 · Instagram: @krasadermoestudio · Panamá · Con cita previa.
              </p>

            <div className="mt-8 card-premium p-6">
  <p className="text-xs uppercase tracking-[0.24em] text-black/45">
    Valoración especializada
  </p>
  <p className="mt-3 text-sm leading-7 text-black/68">
    Cada caso se evalúa de forma individual para definir un abordaje visualmente armónico y realista.
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
                <p className="section-kicker">Llamado a la acción</p>
                <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl">
                  Agenda tu valoración personalizada en Krása Dermoestudio.
                </h2>
              </div>

              <a
                href="https://wa.me/50768917500?text=Hola%20Kr%C3%A1sa%20Dermoestudio%2C%20quisiera%20agendar%20una%20valoraci%C3%B3n."
                target="_blank"
                className="btn-primary inline-flex items-center gap-2"
              >
                Agendar valoración
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

                 <div className="max-w-xl text-sm leading-6 text-black/52">
            <p>
              Aviso legal: La información de este sitio es orientativa y no sustituye una valoración individual.
              Resultados pueden variar según cada caso.
            </p>
            <p className="mt-3">
              Desarrollado por{' '}
              <a
                href="https://lulabtech.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-black"
              >
                lulabtech.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
