'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import menu from '../data/menu.json';

const categories=['All',...new Set(menu.map(item=>item.category))];
export function MenuExperience(){
  const[active,setActive]=useState('All');const[visible,setVisible]=useState(12);const[cart,setCart]=useState([]);const[open,setOpen]=useState(false);const queryHandled=useRef(false);
  useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem('tsk-cart-v2')||'[]'))}catch{}if(queryHandled.current)return;queryHandled.current=true;const add=new URLSearchParams(location.search).get('add');if(add){const item=menu.find(x=>x.name===add);if(item)setTimeout(()=>addItem(item),100)}},[]);
  useEffect(()=>{localStorage.setItem('tsk-cart-v2',JSON.stringify(cart));const count=document.querySelector('#cart-count');if(count)count.textContent=cart.reduce((sum,item)=>sum+item.qty,0)},[cart]);
  const dishes=useMemo(()=>active==='All'?menu:menu.filter(item=>item.category===active),[active]);const shown=dishes.slice(0,visible);const total=cart.reduce((sum,item)=>sum+item.price*item.qty,0);
  function addItem(item){setCart(current=>{const match=current.find(x=>x.id===item.id);return match?current.map(x=>x.id===item.id?{...x,qty:x.qty+1}:x):[...current,{...item,qty:1}]});setOpen(true)}
  function quantity(id,delta){setCart(current=>current.map(x=>x.id===id?{...x,qty:x.qty+delta}:x).filter(x=>x.qty>0))}
  function choose(category){setActive(category);setVisible(12)}
  function checkout(){if(!cart.length)return;const lines=cart.map(x=>`${x.qty}× ${x.name} — $${(x.qty*x.price).toFixed(2)}`).join('\n');window.open(`https://wa.me/16783004943?text=${encodeURIComponent(`Hello Telangana Spice Kitchen & Bar! I would like to order:\n\n${lines}\n\nTotal: $${total.toFixed(2)}\n\nPlease confirm availability and pickup time.`)}`,'_blank')}
  return <>
    <div className="filter-bar" role="tablist" aria-label="Menu categories">{categories.map(category=><button key={category} className={category===active?'active':''} onClick={()=>choose(category)}>{category}</button>)}</div>
    <p className="menu-results"><b>{dishes.length}</b> dishes · {active}</p>
    <div className="menu-grid">{shown.map(item=><article className="dish" key={item.id}><div className="dish-img"><img src={item.image} alt={item.name} loading="lazy" decoding="async"/></div><div className="dish-info"><span className="dish-cat">{item.category}</span><h3>{item.name}</h3><span className="price">${item.price.toFixed(2)}</span></div><div className="dish-actions"><small>Made to order</small><button className="add-to-cart" onClick={()=>addItem(item)}>Add to cart <span>+</span></button></div></article>)}</div>
    {visible<dishes.length&&<button className="button outline menu-more" onClick={()=>setVisible(value=>value+12)}>Show more dishes <span>↓</span></button>}
    <aside className={`cart ${open?'open':''}`} aria-hidden={!open}><div className="cart-head"><div><p className="eyebrow">Your selected plates</p><h2>Your order</h2></div><button onClick={()=>setOpen(false)} aria-label="Close cart">×</button></div><div className="cart-list">{cart.length?cart.map(item=><div className="cart-item" key={item.id}><img src={item.image} alt=""/><div><h4>{item.name}</h4><p>${item.price.toFixed(2)}</p><div className="quantity"><button onClick={()=>quantity(item.id,-1)}>−</button><span>{item.qty}</span><button onClick={()=>quantity(item.id,1)}>+</button></div></div><button className="remove" onClick={()=>setCart(current=>current.filter(x=>x.id!==item.id))}>Remove</button></div>):<div className="cart-empty"><span>✦</span><p>Your order is waiting for its first dish.</p></div>}</div><div className="cart-footer"><div><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div><button className="button gold" onClick={checkout} disabled={!cart.length}>Order on WhatsApp <span>↗</span></button><small>Availability and pickup time will be confirmed by the restaurant.</small></div></aside>
    <button className="floating-cart" onClick={()=>setOpen(true)} aria-label="Open cart"><span>Cart</span><b>{cart.reduce((sum,item)=>sum+item.qty,0)}</b></button><div className={`overlay ${open?'open':''}`} onClick={()=>setOpen(false)}/>
  </>
}
