import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { MenuExperience } from '../../components/MenuExperience';
export default function Menu(){return <><div className="noise"/><Header/><main className="menu-page"><section className="menu-hero"><p className="eyebrow">The entire spice trail</p><h1>Taste the <em>kitchen.</em></h1><p>Appetizers, biryani, tandoor, curries and shared plates—prepared to order.</p></section><section className="menu-section section-pad" id="order"><div className="section-head"><div><p className="eyebrow">Our menu</p><h2>Pick your <em>heat.</em></h2></div><p className="menu-note">Choose your favourites,<br/>then complete the order on WhatsApp.</p></div><MenuExperience/></section></main><Footer/></>}
