import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import sharp from 'sharp';

const root=process.cwd();
const source=fs.readFileSync(path.join(root,'public/scripts/app.js'),'utf8');
const expression=source.slice(source.indexOf('['),source.indexOf('\n];')+2);
let menu=vm.runInNewContext(`(${expression})`);
const replace=(label,items)=>{const i=menu.findIndex(x=>x[0]===label);if(i>=0)menu.splice(i,1,...items)};
replace('Shrimp / Egg Biryani', [['Shrimp Biryani','15.99','Biryani & Pulav','biryaniimages/Shrimp Biryani.jpeg'],['Egg Biryani','12.99','Biryani & Pulav','biryaniimages/Egg-biryani.jpg']]);
replace('Butter Chicken / Chicken Tikka Masala',[['Butter Chicken','16.99','Classic Curries','Classic Curries/butter-chicken.jpg'],['Chicken Tikka Masala','16.99','Classic Curries','Classic Curries/Chicken-Tikka-Masala .jpg']]);
replace('Paneer Butter Masala / Paneer Tikka Masala',[['Paneer Butter Masala','16.99','Classic Curries','Classic Curries/Paneer Butter Masala.jpg'],['Paneer Tikka Masala','16.99','Classic Curries','Classic Curries/Paneer-Tikka-Masala.webp']]);
replace('Dal Tadka / Dal Fry',[['Dal Tadka','13.99','Classic Curries','Classic Curries/dal-tadka.jpg'],['Dal Fry','13.99','Classic Curries','Classic Curries/Dal fry.jpeg']]);
replace('Kaju Paneer / Tomato Curry',[['Kaju Paneer','16.99','Vegetarian Curries','Vegetarian Curries/Kaju Paneer.jpeg'],['Tomato Curry','16.99','Vegetarian Curries','Vegetarian Curries/Tomato Curry.webp']]);
const maps={
  'Chicken Dum Biryani':'biryaniimages/Chicken-Dum-Biryani.webp','Nalli Biryani / Pulav':'biryaniimages/Nalli Biryani : Pulav.jpeg','Fry Piece Biryani — Chicken':'biryaniimages/Fry Piece Biryani — Chicken.jpeg','Fry Piece Biryani — Mutton':'biryaniimages/Fry Piece Biryani — Mutton.jpeg',
  'Gutti Vankaya':'Vegetarian Curries/Gutti Vankaya.avif','Moong Dal Tadka':'Vegetarian Curries/moong-dal-recipe.jpg','Pachi Pulusu':'Vegetarian Curries/Pachi Pulusu.jpeg','Dum Aloo':'Vegetarian Curries/Dum Aloo.jpeg','Aloo Gobi':'Vegetarian Curries/Aloo Gobi.webp','Palak Paneer':'Vegetarian Curries/Palak Paneer.jpg','Chana Masala':'Vegetarian Curries/Chana Masala.jpg','Mix Veg Curry':'Vegetarian Curries/Mix Veg Curry.jpg',
  'Chicken Tikka':'kababs/Chicken Tikka.JPG','Malai Chicken':'kababs/Malai Chicken.JPG','Haryali Chicken':'kababs/Haryali Chicken.jpg','Paneer Tikka':'kababs/Paneer Tikka.webp','Malai Paneer Kebab':'kababs/Malai Paneer Kebab .jpeg','Hara Bhara Kebab':'kababs/Hara Bhara Kebab.webp','Telangana Mixed Grill':'kababs/Telangana Mixed Grill.jpeg',
  'Pachi Karam Gobi':'pachi karam gobi .jpeg','Pachi Karam Baby Corn':'pachi karam babycorn.png','Pachi Karam Paneer':'pachi karam paneer.jpeg','Pachi Karam Chicken':'Pachi Karam chicken.webp','Pachi Karam Fish':'Pachi Karam fish.webp','Pachi Karam Shrimp':'Pachi Karam shrimp.jpg','Chicken 555':'555 chicken.png',
  'Veg Momos — Big Boss':'bigg boss momo.avif','Veg Momos — Pachi Karam':'Pachi Karam momo.avif','Big Boss Chicken':'bigboss chicken.jpg',
  'Paneer Tikka Masala':'Classic Curries/Paneer-Tikka-Masala.webp',
  'Fried Rice — Veg':'fried-rice/veg-fried-rice.jpg','Fried Rice — Egg':'fried-rice/Fried Rice — Egg.jpeg','Fried Rice — Chicken':'fried-rice/Fried Rice — Chicken.jpg','Fried Rice — Shrimp':'fried-rice/Fried Rice — Shrimp.jpeg','Noodles — Veg':'fried-rice/Noodles — Veg.jpeg','Noodles — Egg':'fried-rice/Noodles — Egg.webp','Noodles — Chicken':'fried-rice/Noodles — Chicken.jpg','Noodles — Shrimp':'fried-rice/Noodles — Shrimp.jpg',
  'Plain Naan':'breads/Plain Naan.jpg','Butter Naan':'breads/butter-naan.jpg','Garlic Naan':'breads/Garlic Naan.jpg','Tandoori Roti':'breads/Tandoori Roti.jpeg','Aloo Paratha':'breads/Aloo Paratha.cms','Lachha Paratha':'breads/Lachha Paratha.jpg','Peshawari Naan':'breads/Peshawari Naan.jpeg','Afghani Naan':'breads/Afghani Naan.jpeg','Cheese Naan':'breads/Cheese Naan.jpeg',
  'Apricot Delight':'desserts/Apricot Delight.webp','Mango Delight':'desserts/mango delight.png','Gulab Jamun with Ice Cream':'desserts/Gulab Jamun with Ice Cream .jpeg','Rasmalai':'desserts/rasmalai.webp'
};
for(const item of menu){if(item[0].startsWith('Chicken Mandi'))item[3]='mandi/chicken mandi.webp';else if(item[0].startsWith('Goat Mandi'))item[3]='mandi/mutton Mandi .jpeg';else if(item[0].startsWith('Seafood Mandi'))item[3]='mandi/Seafood Mandi .jpeg';else if(item[0].startsWith('Mixed Mandi'))item[3]='mandi/mixed mandi.png';else if(maps[item[0]])item[3]=maps[item[0]]}
const output=path.join(root,'public/menu-optimized');fs.mkdirSync(output,{recursive:true});
const cache=new Map();
for(let i=0;i<menu.length;i++){
  const [name,price,category,image]=menu[i];
  if(!cache.has(image)){
    const target=`dish-${cache.size+1}.webp`;
    const input=path.join(root,'public/menu',image);
    try{await sharp(input).rotate().resize(900,700,{fit:'cover',position:'centre'}).webp({quality:78}).toFile(path.join(output,target));cache.set(image,target)}catch{cache.set(image,null)}
  }
  menu[i]={id:`dish-${i+1}`,name,price:Number(price),category,image:cache.get(image)?`/menu-optimized/${cache.get(image)}`:`/menu/${image}`};
}
fs.mkdirSync(path.join(root,'data'),{recursive:true});
fs.writeFileSync(path.join(root,'data/menu.json'),JSON.stringify(menu,null,2));
console.log(`Built ${menu.length} dishes and ${[...cache.values()].filter(Boolean).length} optimized images.`);
