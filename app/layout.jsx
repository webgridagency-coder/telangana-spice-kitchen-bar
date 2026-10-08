import '../styles.css';
import './routes.css';
import './polish.css';
import './experience.css';
import './requests.css';
import './final-tweaks.css';
import './contact-details.css';
import './ui-overhaul.css';
import './address-images.css';
import './bojanam.css';
import './spin.css';
import './catering.css';
import { Motion } from '../components/Motion';
import { DM_Mono, DM_Sans, Playfair_Display } from 'next/font/google';

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });
const mono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });
const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

export const metadata = { title: 'Telangana Spice Kitchen & Bar', description: 'Bold Telangana food, dining and bar.' };

export default function RootLayout({ children }) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${mono.variable} ${display.variable}`}><body>{children}<Motion /></body></html>;
}
