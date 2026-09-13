import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {days as hebrewDays,documents as hebrewDocuments,travelers as hebrewTravelers} from '../dist/data.js';
import {days as russianDays,documents as russianDocuments,travelers as russianTravelers,relevantForTraveler,getEvents,resolveDayIndex} from '../dist/data.ru.js';
const hebrewPattern=/[\u0590-\u05ff]/u;
function compareFacts(original,translated,key=''){
 assert.equal(typeof translated,typeof original,key);
 if(typeof original==='string'){
  if(!hebrewPattern.test(original))assert.equal(translated,original,key);
  else{assert.ok(translated.length>0,key);assert.ok(!hebrewPattern.test(translated),key);}
 }else if(Array.isArray(original)){
  assert.equal(translated.length,original.length,key);
  original.forEach((item,index)=>compareFacts(item,translated[index],`${key}[${index}]`));
 }else if(original&&typeof original==='object'){
  assert.deepEqual(Object.keys(translated),Object.keys(original),key);
  Object.entries(original).forEach(([field,value])=>compareFacts(value,translated[field],`${key}.${field}`));
 }else assert.equal(translated,original,key);
}
test('Russian translation covers the complete itinerary while preserving dates, flights, groups and links',()=>{
 compareFacts({days:hebrewDays,documents:hebrewDocuments,travelers:hebrewTravelers},{days:russianDays,documents:russianDocuments,travelers:russianTravelers});
});
test('Russian traveler filters, alternative route and deep links still work',()=>{
 russianDays.forEach((day,index)=>assert.equal(resolveDayIndex('#day='+day.id),index));
 const saturday=russianDays.find(day=>day.id==='2026-10-03');
 assert.deepEqual(saturday.events.filter(event=>event.split).flatMap(event=>event.group).sort(),Object.keys(russianTravelers).sort());
 assert.ok(relevantForTraveler(saturday.events,'miri').some(event=>event.split==='shopping'));
 assert.ok(!relevantForTraveler(saturday.events,'miri').some(event=>event.split==='science'));
 const friday=russianDays.find(day=>day.id==='2026-10-02');
 assert.ok(getEvents(friday,'nature').some(event=>event.title==='Parc des Félins'));
 assert.ok(!getEvents(friday,'disney').some(event=>event.title==='Parc des Félins'));
});
test('Russian entry point is LTR, has complete interface translation and resolves all local assets',()=>{
 const page=readFileSync(new URL('../dist/ru.html',import.meta.url),'utf8');
 assert.match(page,/<html lang="ru" dir="ltr">/);
 assert.match(page,/href="\.\/index.html" lang="he"/);
 assert.match(page,/Документы — на языке оригинала/);
 assert.ok(!hebrewPattern.test(page));
 const application=readFileSync(new URL('../dist/app.ru.js',import.meta.url),'utf8');
 assert.ok(!hebrewPattern.test(application));
 for(const [,path] of page.matchAll(/(?:src|href)="(\.\/[^"#]+)"/g))assert.ok(existsSync(new URL('../dist/'+path,import.meta.url)),path);
 Object.entries(russianDocuments).forEach(([key,document])=>assert.equal(document.path,hebrewDocuments[key].path));
});
