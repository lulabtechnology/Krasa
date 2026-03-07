import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  metadataBase: new URL('https://krasadermoestudio.vercel.app'),
  title: 'Krása Dermoestudio | Dermopigmentación paramédica y estética avanzada en Panamá',
  description: 'Landing premium para Krása Dermoestudio. Valoración especializada en dermopigmentación paramédica y estética avanzada en Panamá.',
  openGraph: {
    title: 'Krása Dermoestudio',
    description: 'Valoración especializada para cicatrices, estrías, vitiligo localizado, areola post mastectomía y camuflaje.',
    url: 'https://krasadermoestudio.vercel.app',
    siteName: 'Krása Dermoestudio',
    locale: 'es_PA',
    type: 'website',
    images: ['/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krása Dermoestudio',
    description: 'Dermopigmentación paramédica y estética avanzada en Panamá. Agenda tu valoración por WhatsApp.',
    images: ['/og-image.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
