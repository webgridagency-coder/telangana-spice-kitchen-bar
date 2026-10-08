import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function About(){return <><div className="noise"/><Header/><main>
  <section className="route-hero about-hero"><p className="eyebrow">Our table</p><h1>Telangana’s <em>fire</em><br/>at the centre.</h1><p>Our kitchen is a celebration of Southern spice traditions—made for gathering, talking and staying a little longer.</p></section>
  <section className="story section-pad" data-animate><div className="story-photo"><img src="/Nalgonda Mamsam Vepudu.jpeg" alt="Nalgonda mamsam vepudu"/></div><div className="story-copy"><p className="eyebrow">Rooted in regional food</p><h2>Big flavor,<br/><em>no shortcuts.</em></h2><p>From slow-cooked curries to dishes that crackle with fresh curry leaves, our menu honours the flavours of Telangana with a modern table in mind.</p><Link className="button gold" href="/menu">Discover the menu <span>↗</span></Link></div></section>
  <section className="manifesto section-pad" data-animate><p className="eyebrow">What guides us</p><div><h2>Regional soul.<br/><em>Modern hospitality.</em></h2><p>We respect where the food comes from and care deeply about where it is going. That means honest recipes, carefully sourced ingredients and a room that feels generous from the moment you enter.</p></div></section>
  <section className="about-gallery" data-animate><img src="/Karivepaku Chicken.avif" alt="Karivepaku chicken"/><img src="/Bhimavaram Kaju Pakodi chicken .jpg" alt="Bhimavaram kaju pakodi"/><img src="/Chicken Momos.avif" alt="Chicken momos"/></section>
  <section className="quote-section section-pad" data-animate><p className="eyebrow">Our promise</p><blockquote>Every plate should carry a place, a memory and a reason to pass it around.</blockquote><Link className="button outline" href="/contact">Join us for dinner <span>↗</span></Link></section>
</main><Footer/></>}
