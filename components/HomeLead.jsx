import Link from 'next/link';

export function HomeHero(){return <section className="hero hero-compact"><div className="hero-image"/><div className="hero-scrim"/><div className="hero-copy"><p className="eyebrow">Telangana, poured with fire</p><h1><em>Spice</em> with<br/>a point of view.</h1><p className="hero-text">A kitchen where charcoal meets curry leaves, local evenings stretch longer, and every plate asks you to lean in.</p></div><div className="hero-orbit"><span>Telangana • Spice • Kitchen • Bar •</span></div><div className="hero-meta"><span>EST. 2026</span><span>Dining · Bar · Takeout</span><span>Milton, GA</span></div></section>}

export function BojanamFeature(){return <section className="bojanam-feature">
  <div className="bojanam-backdrop"/>
  <div className="bojanam-content">
    <div className="bojanam-heading"><p className="eyebrow">Tuesday–Sunday · Lunch special</p><h2><em>Banana leaf</em><br/>Bojanam.</h2><p>A traditional South Indian feast, generous by design and made for the full experience.</p><div className="hero-actions bojanam-actions"><Link className="button gold" href="/menu">Explore the menu <span>↘</span></Link><Link className="text-link" href="/contact">Find a table <span>↓</span></Link></div></div>
    <div className="bojanam-offers">
      <article><div><span>Vegetarian feast</span><b>$14.99</b></div><p>Choose any 2</p><ul><li>Guthivankaya Curry</li><li>Baby Corn Kaju Pakodi</li><li>Gobi 65</li><li>Paneer Pepper Fry</li></ul></article>
      <article><div><span>Non-vegetarian feast</span><b>$16.99</b></div><p>Choose any 2</p><ul><li>Chicken Fry</li><li>Goat Curry</li><li>Prawn Iguru</li><li>Chicken Korma</li></ul></article>
    </div>
    <div className="bojanam-includes"><span>Served with</span><p>Unlimited pulav · Dal / sambar · Veg fry · Podi · Pickle · Ghee · Rasam · Majjiga pulusu · Curd · Papad · Sweet</p></div>
    <div className="bojanam-time"><span>Lunch</span><b>11:00 AM — 3:00 PM</b><small>Tuesday to Sunday</small></div>
  </div>
  <div className="bojanam-stamp" aria-hidden="true"><span>TRADITIONAL</span><b>✦</b><span>SOUTH INDIAN FEAST</span></div>
</section>}
