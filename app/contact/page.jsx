import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
const maps='https://share.google/nSylMVy4kg7tvtrGt';
const mapEmbed='https://www.google.com/maps?q=12890%20GA-9%20%23160%2C%20Milton%2C%20GA%2030004&output=embed';
export default function Contact(){return <><div className="noise"/><Header/><main>
  <section className="route-hero contact-hero"><p className="eyebrow">Find the kitchen</p><h1>Come for the <em>heat.</em><br/>Stay for the night.</h1><p>Reservations, group dinners, celebrations and catering—we would love to host you.</p></section>
  <section className="address-spotlight" data-animate>
    <div className="address-marker" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.75"/></svg></div>
    <div className="address-copy"><p className="eyebrow">Find us in Milton</p><h2>12890 GA-9 <em>#160</em></h2><p>Milton, Georgia 30004</p><a className="address-directions" href={maps} target="_blank" rel="noreferrer"><span>Open exact location</span><b>↗</b></a></div>
    <div className="address-map"><iframe src={mapEmbed} title="Telangana Spice Kitchen & Bar location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
  </section>
  <section className="contact-grid section-pad" data-animate>
    <div><p className="eyebrow">Visit</p><h2>Telangana<br/><em>Spice Kitchen</em></h2><p>12890 GA-9 #160<br/>Milton, GA 30004</p><a className="text-link" href={maps} target="_blank" rel="noreferrer">Get directions <span>↗</span></a></div>
    <div><p className="eyebrow">Call & email</p><p><a href="tel:+16783004943">+1 (678) 300-4943</a><br/><a href="mailto:harinatredy@gmail.com">harinatredy@gmail.com</a></p><a className="button gold" href="tel:+16783004943">Call the restaurant <span>↗</span></a></div>
    <div><p className="eyebrow">Groups & catering</p><p>For gatherings and events, message us with your date, party size and preferred time.</p><a className="button outline" href="https://wa.me/16783004943">Message on WhatsApp <span>↗</span></a></div>
  </section>
  <section className="contact-visual" data-animate><div><p className="eyebrow">Your next gathering</p><h2>Made for<br/><em>passing around.</em></h2><p>Private dinners, birthdays, corporate evenings and celebrations with a little more spice.</p><a className="button gold" href="mailto:harinatredy@gmail.com?subject=Event%20Inquiry">Plan an event <span>↗</span></a></div></section>
</main><Footer/></>}
