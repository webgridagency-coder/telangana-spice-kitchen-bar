'use client';

import { useEffect, useRef, useState } from 'react';

const OFFERS = [
  { short: '$5 OFF', title: '$5 off your order', detail: 'No minimum required.', tone: 'orange' },
  { short: '10% OFF', title: '10% off your order', detail: 'A little more spice for your table.', tone: 'cream' },
  { short: '$100 CATERING', title: '$100 off catering', detail: 'Valid on catering orders of $500 or more.', tone: 'green' },
  { short: 'LIVE DOSA', title: 'Live dosa counter', detail: 'Chance to win it with catering orders of $2,000 or more.', tone: 'gold' },
  { short: '5% OFF', title: '5% off your order', detail: 'A lucky little extra.', tone: 'cream' },
  { short: '7% OFF', title: '7% off your order', detail: 'Your table just got warmer.', tone: 'orange' },
  { short: '20% OFF', title: '20% off your order', detail: 'A generous Telangana welcome.', tone: 'cream' },
  { short: '50% BANANA', title: '50% off Banana Leaf Bojanam', detail: 'One member per table. Tuesday–Sunday lunch special.', tone: 'green' },
  { short: '$100 CATERING', title: '$100 off catering', detail: 'Valid on catering orders of $500 or more.', tone: 'gold' },
  { short: 'LIVE DOSA', title: 'Live dosa counter', detail: 'Chance to win it with catering orders of $2,000 or more.', tone: 'orange' },
  { short: '50% BANANA', title: '50% off Banana Leaf Bojanam', detail: 'One member per table. Tuesday–Sunday lunch special.', tone: 'gold' },
  { short: '$100 CATERING', title: '$100 off catering', detail: 'Valid on catering orders of $500 or more.', tone: 'green' },
  { short: 'LIVE DOSA', title: 'Live dosa counter', detail: 'Chance to win it with catering orders of $2,000 or more.', tone: 'gold' },
  { short: '50% BANANA', title: '50% off Banana Leaf Bojanam', detail: 'One member per table. Tuesday–Sunday lunch special.', tone: 'orange' },
];

const cleanPhone = value => value.replace(/\D/g, '');

export function SpinWheel() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const [error, setError] = useState('');
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const promptKey = 'telangana-spin-prompts';
    const showPrompt = () => {
      if (openRef.current) return;
      const shown = Number(window.sessionStorage.getItem(promptKey) || '0');
      if (shown >= 3) return;
      window.sessionStorage.setItem(promptKey, String(shown + 1));
      setOpen(true);
    };

    const firstPrompt = window.setTimeout(showPrompt, 1200);
    const repeatPrompt = window.setInterval(showPrompt, 30000);
    return () => {
      window.clearTimeout(firstPrompt);
      window.clearInterval(repeatPrompt);
    };
  }, []);

  const close = () => {
    setOpen(false);
  };

  const spin = event => {
    event.preventDefault();
    const digits = cleanPhone(phone);
    if (name.trim().length < 2) {
      setError('Please enter your name first.');
      return;
    }
    if (digits.length < 7) {
      setError('Please enter a valid mobile number.');
      return;
    }
    const storageKey = `telangana-spin-used:${digits}`;
    if (window.localStorage.getItem(storageKey)) {
      setError('This mobile number has already used its spin.');
      return;
    }

    setError('');
    setWinner(null);
    setSpinning(true);
    const index = Math.floor(Math.random() * OFFERS.length);
    const segment = 360 / OFFERS.length;
    const target = 360 * 7 + (360 - (index * segment + segment / 2));
    setRotation(rotation + target);
    window.localStorage.setItem(storageKey, JSON.stringify({ name: name.trim(), offer: OFFERS[index].title, at: new Date().toISOString() }));

    window.setTimeout(() => {
      setWinner(OFFERS[index]);
      setSpinning(false);
    }, 3200);
  };

  if (!open) return null;

  return <div className="spin-overlay" role="presentation">
    <div className="spin-dialog" role="dialog" aria-modal="true" aria-labelledby="spin-title">
      <button className="spin-close" type="button" onClick={close} aria-label="Close offer wheel">×</button>
      <div className="spin-kicker">A little welcome from our kitchen</div>
      <h2 id="spin-title">Spin for the <em>heat.</em></h2>
      <p className="spin-intro">One spin per mobile number. Enter your details, then let the table decide.</p>
      <div className="spin-highlights" aria-label="Featured offers">
        <span>50% Banana Leaf · one member</span>
        <span>$100 catering · $500 minimum</span>
        <span>Live dosa · $2,000+ catering</span>
      </div>
      <div className="spin-layout">
        <div className="spin-wheel-wrap" aria-hidden="true">
          <div className="spin-pointer">▼</div>
          <div className={`spin-wheel ${spinning ? 'is-spinning' : ''}`} style={{ '--wheel-rotation': `${rotation}deg` }}>
            {OFFERS.map((offer, index) => <span className={`spin-label spin-label-${offer.tone}`} style={{ '--segment-angle': `${index * (360 / OFFERS.length) + 18}deg` }} key={`${offer.short}-${index}`}>{offer.short}</span>)}
            <div className="spin-wheel-center">✦</div>
          </div>
        </div>

        <div className="spin-form-area">
          {winner ? <div className="spin-success" aria-live="polite">
            <div className="spin-burst" aria-hidden="true">{Array.from({ length: 24 }, (_, index) => <i key={index} style={{ '--blast-angle': `${index * 15}deg`, '--blast-delay': `${(index % 6) * 45}ms` }} />)}</div>
            <div className="spin-confetti">{Array.from({ length: 18 }, (_, index) => <i key={index} style={{ '--confetti-angle': `${index * 20}deg`, '--confetti-delay': `${(index % 6) * 80}ms` }} />)}</div>
            <p className="spin-kicker">It’s your lucky table, {name.trim()}.</p>
            <h3>{winner.title}</h3>
            <p>{winner.detail}</p>
            <p className="spin-after-note">Featured offers appear more often on the wheel · one spin per mobile number</p>
            <button className="button gold" type="button" onClick={close}>Save my offer <span>↗</span></button>
          </div> : <form className="spin-form" onSubmit={spin}>
            <label><span>Your name</span><input value={name} onChange={event => setName(event.target.value)} placeholder="Enter your name" autoComplete="name" required /></label>
            <label><span>Mobile number</span><input value={phone} onChange={event => setPhone(event.target.value)} placeholder="(678) 000-0000" inputMode="tel" autoComplete="tel" required /></label>
            {error && <p className="spin-error" role="alert">{error}</p>}
            <button className="button gold spin-submit" type="submit" disabled={spinning}>{spinning ? 'Spinning…' : 'Spin the wheel'} <span>↗</span></button>
            <small>We only use your mobile number to protect the one-spin offer.</small>
          </form>}
        </div>
      </div>
    </div>
  </div>;
}
