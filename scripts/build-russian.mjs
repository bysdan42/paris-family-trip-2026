import {readFileSync,writeFileSync} from 'node:fs';
import {days,documents,travelers} from '../dist/data.js';
const directory=new URL('../dist/',import.meta.url);
const read=path=>readFileSync(new URL(path,directory),'utf8');
const translations=JSON.parse(read('locales/ru.json'));
const interfaceTranslations=JSON.parse(read('locales/ui.ru.json'));
const containsHebrew=value=>/[\u0590-\u05ff]/u.test(value);
function translate(value){
 if(typeof value==='string'){
  if(!containsHebrew(value))return value;
  if(!Object.hasOwn(translations,value))throw new Error(`Missing Russian translation: ${value}`);
  return translations[value];
 }
 if(Array.isArray(value))return value.map(translate);
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,translate(item)]));
 return value;
}
function translateInterface(source){
 for(const [original,translation] of Object.entries(interfaceTranslations).sort((a,b)=>b[0].length-a[0].length))source=source.replaceAll(original,translation);
 if(containsHebrew(source))throw new Error(`Untranslated interface: ${source.match(/.{0,35}[\u0590-\u05ff].{0,130}/u)?.[0]}`);
 return source;
}
const helperFunctions=read('data.js').slice(read('data.js').indexOf('export function relevantForTraveler'));
const localizedData=Object.entries({travelers,documents,days}).map(([key,value])=>`export const ${key} = ${JSON.stringify(translate(value),null,2)};`).join('\n')+'\n'+helperFunctions;
const localizedApplication=translateInterface(read('app.js')).replace("from './data.js'","from './data.ru.js'");
const localizedPage=translateInterface(read('index.html'))
 .replace('<html lang="he" dir="rtl">','<html lang="ru" dir="ltr">')
 .replace('src="./app.js"','src="./app.ru.js"')
 .replace('href="./ru.html" lang="ru" hreflang="ru" aria-label="Переключить язык на русский">Русский','href="./index.html" lang="he" hreflang="he" aria-label="Switch to Hebrew">&#1506;&#1489;&#1512;&#1497;&#1514;');
for(const [path,content] of Object.entries({'data.ru.js':localizedData,'app.ru.js':localizedApplication,'ru.html':localizedPage})){
 if(process.argv.includes('--check')){if(read(path)!==content)throw new Error(`Run npm run build:ru to update ${path}`);}
 else writeFileSync(new URL(path,directory),content);
}
console.log('Russian pages, interface and all itinerary translations are complete and synchronized.');
