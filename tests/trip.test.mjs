import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {days,documents,travelers,relevantForTraveler,getEvents,resolveDayIndex} from '../dist/data.js';

test('all ten travel dates are continuous and have documents and activities',()=>{
 assert.equal(days.length,10);
 const start=Date.UTC(2026,8,28);
 for(const [index,day] of days.entries()){
  assert.equal(day.id,new Date(start+index*86400000).toISOString().slice(0,10));
  assert.ok(day.events.length>0);
  assert.ok(day.options.length>0);
  assert.ok(day.documents.length>0);
  for(const document of day.documents)assert.ok(documents[document]);
  for(const event of [...day.events,...day.options,...day.alternateEvents??[]]){
   assert.ok(event.group.length>0);
   assert.equal(new Set(event.group).size,event.group.length);
   event.group.forEach(id=>assert.ok(travelers[id]));
   if(event.url)assert.equal(new URL(event.url).protocol,'https:');
  }
 }
});
test('Saturday split assigns everyone once and traveler filtering retains shared events',()=>{
 const day=days.find(day=>day.id==='2026-10-03');
 const split=day.events.filter(event=>event.split);
 assert.deepEqual(split.flatMap(event=>event.group).sort(),Object.keys(travelers).sort());
 const miri=relevantForTraveler(day.events,'miri');
 assert.ok(miri.some(event=>event.split==='shopping'));
 assert.ok(!miri.some(event=>event.split==='science'));
 assert.ok(miri.some(event=>event.time==='ערב'));
 const dan=relevantForTraveler(day.events,'dan');
 assert.ok(dan.some(event=>event.split==='science'));
 assert.ok(!dan.some(event=>event.split==='shopping'));
});
test('October 2 alternate replaces the zoo with fourth Disney day',()=>{
 const day=days.find(day=>day.id==='2026-10-02');
 assert.ok(getEvents(day,'nature').some(event=>event.title==='Parc des Félins'));
 assert.ok(!getEvents(day,'disney').some(event=>event.title==='Parc des Félins'));
 assert.ok(getEvents(day,'disney').some(event=>event.title==='יום דיסני רביעי'));
 assert.equal(getEvents(days[0],'disney'),days[0].events);
});
test('deep links resolve all days and malformed ones safely default',()=>{
 days.forEach((day,index)=>assert.equal(resolveDayIndex('#day='+day.id),index));
 for(const hash of ['','#day=2030-01-01','#anything','%invalid'])assert.equal(resolveDayIndex(hash),0);
});
test('both flights match supplied screenshots',()=>{
 assert.deepEqual(days[0].events[0].flight,{from:'TLV',to:'ORY',departure:'18:35',arrival:'22:40',number:'TO3459'});
 assert.deepEqual(days[9].events[1].flight,{from:'ORY',to:'TLV',departure:'10:30',arrival:'16:05',number:'TO3454'});
});
test('all local assets and original documents exist and have valid signatures',()=>{
 for(const document of Object.values(documents))assert.ok(existsSync(new URL('../dist/'+document.path,import.meta.url)));
 const pdf=readFileSync(new URL('../dist/documents/disney-confirmation.pdf',import.meta.url));
 assert.equal(pdf.subarray(0,5).toString(),'%PDF-');
 const html=readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
 for(const [,path] of html.matchAll(/(?:src|href)="(\.\/[^"#]+)"/g))assert.ok(existsSync(new URL('../dist/'+path,import.meta.url)),path);
 assert.match(html,/<html lang="he" dir="rtl">/);
});
