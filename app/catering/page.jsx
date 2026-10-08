import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Catering | Telangana Spice Kitchen & Bar',
  description: 'Live catering, tray menus and Telangana celebrations for Milton and beyond.',
};

const tray = '$S / $M / $L tray';
const cateringSections = [
  { title: 'Veg appetizers', note: 'Fresh, crisp and made for the first pass', items: [
    ['Bobbatlu (30 pcs)', '$45'], ['Poornalu (30 pcs)', '$45'], ['Mirchi Bajji (30 pcs)', '$30'], ['Stuffed Mirchi Bajji (30 pcs)', '$45'], ['Paneer Bajji (30 pcs)', '$90'], ['Banana Bajji (30 pcs)', '$30'], ['Potato Bajji (30 pcs)', '$30'], ['Veg Frankie (30 pcs)', '$120'], ['Mysore Bonda (30 pcs)', '$60'], ['Punugulu', tray.replace('$S / $M / $L', '$30 / $60 / $120')], ['Onion Spinach Pakoda', '$30 / $60 / $120'], ['Cut Mirchi', '$30 / $60 / $120'], ['Medhu Vada (30 pcs)', '$60'], ['Masala Vada (30 pcs)', '$45'], ['Dahi Vada (30 pcs)', '$90'], ['Gobi Manchuria', '$40 / $70 / $140'], ['Gobi 65', '$40 / $60 / $120'], ['Chilli Gobi', '$40 / $60 / $120'], ['Veg Manchuria', '$40 / $70 / $140'], ['Paneer Manchuria', '$40 / $80 / $160'], ['Chilli Paneer', '$40 / $80 / $160'], ['Paneer Pepper Fry', '$40 / $80 / $160'], ['Hot N Happening Paneer', '$40 / $80 / $160'], ['Thread Paneer', '$50 / $100 / $200'], ['Paneer Bullets', '$50 / $100 / $200'], ['Veg Cutlet (30 pcs)', '$60'], ['Masala French Fries', '$40 / $60 / $120'], ['Cheese Fries', '$40 / $70 / $140'], ['Onion / Aloo Samosa (30 pcs)', '$30'],
  ]},
  { title: 'Non-veg appetizers', note: 'Charcoal, spice and the crowd favorites', items: [
    ['Chicken 65', '$40 / $60 / $120'], ['Bandi Kodi Pakodi', '$40 / $60 / $120'], ['Chilli Chicken', '$40 / $60 / $120'], ['Dhaba Chilli Chicken', '$50 / $80 / $140'], ['Chicken Manchuria', '$40 / $60 / $120'], ['Chicken Majestic', '$50 / $80 / $140'], ['Chicken Lollipop', '$50 / $80 / $140'], ['Hot N Happening Chicken', '$40 / $70 / $140'], ['Chicken 555', '$40 / $70 / $140'], ['RR Chicken', '$40 / $70 / $140'], ['Dhaba Kodi Vepudu', '$40 / $80 / $160'], ['Raju Gari Kodi Vepudu', '$40 / $80 / $160'], ['Dragon Chicken', '$40 / $70 / $140'], ['Karam Podi Chicken', '$40 / $70 / $140'], ['Curry Leaf Chicken', '$40 / $70 / $140'], ['Pepper Chicken', '$40 / $70 / $140'], ['Chicken Ghee Roast', '$40 / $70 / $140'], ['Chicken Roast', '$40 / $70 / $140'], ['Chettinadu Chicken Fry', '$40 / $70 / $140'], ['Monagadu Chicken', '$40 / $70 / $140'], ['Pachi Karam Chicken', '$40 / $70 / $140'], ['Pandu Mirchi Chicken', '$40 / $70 / $140'], ['Anti Depression Chicken', '$40 / $70 / $140'], ['Chicken Mandakini', '$40 / $70 / $140'], ['Koorg Chicken', '$40 / $70 / $140'], ['Tandoori Chicken', '$40 / $70 / $140'], ['Chicken Tikka Kabob', '$40 / $70 / $140'], ['Gongura Chicken Kabob', '$40 / $70 / $140'], ['Avakai Chicken Kabob', '$40 / $70 / $140'], ['Kaju Chicken Fry', '$40 / $70 / $140'], ['Tandoori Legs', '$40 / $70 / $140'], ['Tandoori Wings', '$40 / $70 / $140'], ['Kurnool Chicken', '$50 / $80 / $160'], ['Sheek Kabob Chicken', '$40 / $70 / $140'], ['Shrimp Kabobs', '$60 / $120 / $240'], ['Pomfret Fish Kabob (whole)', '$15 each'], ['Goat Chops (50 pcs)', '$200'], ['Goat Fry', '$60 / $120 / $240'], ['Goat Pepper Fry', '$60 / $120 / $240'], ['Mutton Ghee Roast', '$60 / $120 / $240'], ['Nalgonda Mutton Fry', '$60 / $120 / $240'], ['Chettinadu Mutton Fry', '$60 / $120 / $240'], ['Karampodi Mutton', '$60 / $120 / $240'], ['Kaju Mutton Fry', '$60 / $120 / $240'], ['Fish Fry', '$50 / $80 / $160'], ['Korameenu Fish Fry', '$70 / $120 / $240'], ['Apollo Fish', '$50 / $80 / $160'], ['Chilli Fish', '$50 / $80 / $160'], ['Fish Ghee Roast', '$50 / $80 / $160'], ['Shrimp Fry', '$70 / $120 / $240'], ['Aakuveedu Shrimp Fry', '$70 / $120 / $240'], ['Chilli Shrimp', '$70 / $120 / $240'], ['Prawn Pepper Fry', '$70 / $120 / $240'], ['Curry Leaf Shrimp', '$70 / $120 / $240'], ['Shrimp Dynamite', '$70 / $120 / $240'], ['Quail Fry', '$70 / $120 / $240'], ['Rabbit Roast', '$90 / $180 / $360'], ['Natukodi Chicken Fry', '$60 / $100 / $200'],
  ]},
  { title: 'Veg curries', note: 'Slow-simmered trays with Telangana soul', items: [
    ['Dal Fry', '$30 / $50 / $100'], ['Tomato Dal', '$40 / $60 / $120'], ['Mango Dal', '$40 / $60 / $120'], ['Spinach Dal', '$40 / $60 / $120'], ['Methi Dal', '$40 / $60 / $120'], ['Mix Veg Curry / Kurma', '$40 / $60 / $120'], ['Guthivankaya Curry', '$45 / $65 / $130'], ['Brinjal Curry', '$40 / $60 / $120'], ['Meal Maker Curry', '$40 / $60 / $120'], ['Drumstick Tomato Curry', '$40 / $70 / $140'], ['Pachi Jedipappu Tomato Curry', '$50 / $80 / $160'], ['Aloo Masala', '$40 / $60 / $120'], ['Aloo Kurma', '$40 / $60 / $120'], ['Aloo Tomato Curry', '$40 / $60 / $120'], ['Bendi Curry', '$40 / $70 / $140'], ['Paneer Butter Masala', '$40 / $80 / $160'], ['Paneer Curry', '$40 / $80 / $160'], ['Phool Makhani', '$40 / $80 / $160'], ['Methi Chaman', '$40 / $80 / $160'], ['Chikkudukaya Tomato Curry', '$40 / $70 / $140'], ['Punugu Curry', '$40 / $80 / $160'], ['Sorakaya Majjiga Pulusu', '$40 / $70 / $140'], ['Dondakaya (Tindora) Fry', '$40 / $70 / $140'], ['Bendi Fry', '$40 / $70 / $140'], ['Aloo Fry', '$40 / $60 / $120'], ['Beans Fry / Poriyal', '$40 / $60 / $120'], ['Cabbage Fry / Poriyal', '$40 / $60 / $120'], ['Cabbage 65', '$40 / $60 / $120'], ['Kakarakaya Fry', '$40 / $60 / $120'], ['Kakarakaya Karam', '$40 / $60 / $120'], ['Brinjal Fry', '$40 / $60 / $120'],
  ]},
  { title: 'Non-veg curries', note: 'Rich gravies built for generous servings', items: [
    ['Chicken Curry', '$40 / $60 / $120'], ['Chicken Chettinadu Curry', '$40 / $70 / $140'], ['Gongura Chicken Curry', '$40 / $70 / $140'], ['Kaju Chicken Curry', '$40 / $70 / $140'], ['Kadai Chicken', '$40 / $70 / $140'], ['Andhra Chicken Curry', '$40 / $70 / $140'], ['Pepper Chicken Curry', '$40 / $80 / $160'], ['Chicken Kurma', '$40 / $80 / $160'], ['Methi Chicken', '$40 / $80 / $160'], ['Chintha Chiguru Chicken Curry', '$40 / $80 / $160'], ['Butter Chicken', '$40 / $80 / $160'], ['Chicken Tikka Masala', '$40 / $80 / $160'], ['Chicken Vindaloo', '$40 / $70 / $140'], ['Goat Curry', '$70 / $120 / $240'], ['Gongura Goat Curry', '$70 / $120 / $240'], ['Drumstick Mutton Curry', '$70 / $120 / $240'], ['Goat Vindaloo', '$70 / $120 / $240'], ['Goat Pepper Curry', '$70 / $120 / $240'], ['Kadai Goat', '$70 / $120 / $240'], ['Korameenu Fish Pulusu', '$70 / $120 / $240'], ['Fish Pulusu', '$40 / $80 / $160'], ['Fish Iguru', '$40 / $80 / $160'], ['Shrimp Iguru', '$40 / $80 / $160'], ['Shrimp Bendi Iguru', '$40 / $80 / $160'], ['Hilsa Fish Pulusu', '$90 / $180 / $360'],
  ]},
  { title: 'Special rice', note: 'Comforting rice dishes for the center of the table', items: [
    ['Lemon Rice', '$30 / $50 / $100'], ['Tamarind Rice', '$30 / $50 / $100'], ['Vangee Bath', '$40 / $60 / $120'], ['Avakai Annam', '$30 / $50 / $100'], ['Curd Rice', '$30 / $50 / $100'], ['Plain Rice', '$15 / $30 / $60'],
  ]},
  { title: 'Veg biryani / pulao', note: 'Fragrant, layered and made to share', items: [
    ['Veg Biryani', '$40 / $70 / $140'], ['Brinjal Biryani', '$40 / $70 / $140'], ['Paneer Biryani', '$50 / $80 / $160'], ['Gobi 65 Biryani', '$40 / $70 / $140'], ['Jackfruit Biryani', '$40 / $70 / $140'], ['Soya Chunk Biryani', '$40 / $70 / $140'], ['Vijay Paneer Biryani', '$50 / $80 / $160'], ['Drumstick Biryani', '$40 / $70 / $140'], ['Avakai Paneer Biryani', '$50 / $80 / $160'], ['Gongura Paneer Biryani', '$50 / $80 / $160'],
  ]},
  { title: 'Non-veg biryani / pulao', note: 'The grand centerpieces of the feast', items: [
    ['Chicken Biryani', '$40 / $70 / $140'], ['Boneless Chicken Biryani', '$50 / $80 / $160'], ['Chicken Fry Biryani', '$50 / $80 / $160'], ['Chilli Chicken Biryani', '$50 / $80 / $160'], ['Natukodi Chicken Biryani', '$180 L tray'], ['Talapakattu Chicken Biryani', '$180 L tray'], ['Tray Goat Biryani', '$70 / $120 / $220'], ['Goat Fry Biryani', '$70 / $120 / $220'], ['Shrimp Biryani', '$60 / $100 / $200'], ['Fish Biryani', '$50 / $80 / $160'], ['Egg Biryani', '$40 / $70 / $140'], ['Gongura Egg Biryani', '$40 / $70 / $140'], ['Potlam Chicken Biryani', '$50 / $80 / $160'], ['Nalli Biryani', '$70 / $120 / $220'],
  ]},
  { title: 'Bread & desserts', note: 'Finish with something warm and sweet', items: [
    ['Roti', '$1 each'], ['Naan', '$2 each'], ['Chapati', '$1.50 each'], ['Gulab Jamoon with ice cream', 'Ask us'], ['Carrot Halwa', 'Ask us'], ['Bread Halwa', 'Ask us'], ['Sagubiyam Payasam', 'Ask us'], ['Double ka Mita', 'Ask us'],
  ]},
];

const packages = [
  ['25 people', '$450', 'A generous spread for intimate celebrations.'],
  ['50 people', '$800', 'Our most-loved gathering size.'],
  ['100 people', '$1,500', 'A full table for a full house.'],
];

export default function Catering() {
  return <>
    <div className="noise" />
    <Header />
    <main className="catering-page">
      <section className="catering-hero">
        <div className="catering-hero-copy">
          <p className="eyebrow">Weddings · housewarmings · celebrations</p>
          <h1>Bring the <em>heat</em><br />to the table.</h1>
          <p>From a ten-person gathering to a room full of hungry friends, we bring Telangana flavor, warm service and live stations to your occasion.</p>
          <div className="hero-actions"><Link className="button gold" href="tel:+16783004943">Call to plan <span>↗</span></Link><Link className="text-link" href="mailto:harinatredy@gmail.com">Email catering <span>↗</span></Link></div>
        </div>
        <div className="catering-hero-note"><span>Special</span><b>Live<br />Catering</b><small>Dosa · Chat · Kabobs<br />and more</small></div>
      </section>

      <section className="catering-intro section-pad">
        <div><p className="eyebrow">The catering table</p><h2>Big flavor.<br /><em>Beautifully shared.</em></h2></div>
        <p>Choose from tray-sized favorites, biryani and pulav, curries, breads, desserts and live counters. Every menu is built around your people, your moment and the amount of spice you want in the room.</p>
      </section>

      <section className="catering-menu section-pad">
        <div className="catering-section-heading"><div><p className="eyebrow">Catering menu</p><h2>Made for<br /><em>passing around.</em></h2></div><p>Browse every category below with S · M · L tray pricing. Ask us to build a custom spread for your gathering.</p></div>
        <div className="catering-menu-layout">
          <div className="catering-menu-image"><img src="/catering-menu.webp" alt="Telangana Spice Kitchen live catering menu with appetizers, curries, biryani, live stations and desserts" /></div>
          <div className="catering-menu-lists">
            {cateringSections.map(section => <article className="catering-menu-list" key={section.title}>
              <div className="catering-menu-list-head">
                <div><span>✦</span><h3>{section.title}</h3></div>
                <p>{section.note}</p>
              </div>
              <ul>
                {section.items.map(([name, price]) => <li key={`${section.title}-${name}`}><span>{name}</span><b>{price}</b></li>)}
              </ul>
            </article>)}
          </div>
        </div>
      </section>

      <section className="catering-packages section-pad">
        <div className="catering-section-heading"><div><p className="eyebrow">Gathering guide</p><h2>Pick your<br /><em>people.</em></h2></div><p>Simple starting points for your celebration. We can add live dosa, custom cakes and more to any package.</p></div>
        <div className="package-grid">{packages.map(([people, price, note], index) => <article key={people}><span>0{index + 1}</span><p>{people}</p><b>{price}</b><small>{note}</small></article>)}</div>
        <div className="catering-live-banner"><div><p className="eyebrow">Make it a memory</p><h3>Live dosa, mirchi bajji, punugulu, kabobs, pani poori, chat, gobi manchuria, fried rice, noodles & more.</h3></div><Link className="button gold" href="tel:+16783004943">Build my menu <span>↗</span></Link></div>
      </section>

      <section className="catering-contact section-pad"><p className="eyebrow">Ready when you are</p><h2>Tell us what<br /><em>you’re celebrating.</em></h2><p>Call <a href="tel:+16783004943">+1 (678) 300-4943</a> or email <a href="mailto:harinatredy@gmail.com">harinatredy@gmail.com</a>. We’ll shape the menu, timing and service around your day.</p><Link className="button outline" href="/contact">Plan your visit <span>↗</span></Link></section>
    </main>
    <Footer />
  </>;
}
