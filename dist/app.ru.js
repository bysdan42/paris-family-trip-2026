import { days, documents, travelers, relevantForTraveler, getEvents, resolveDayIndex } from './data.ru.js';
const parameters = new URLSearchParams(location.search);
const initialTraveler = parameters.get('traveler');
const state = {dayIndex:resolveDayIndex(location.hash),traveler:Object.hasOwn(travelers,initialTraveler)?initialTraveler:'all',tab:parameters.get('tab')==='options'?'options':'schedule',view:parameters.get('view')==='documents'?'documents':'itinerary',octoberSecondPlan:parameters.get('plan')==='disney'?'disney':'nature'};
function updateLanguageLink(){
 const link=document.getElementById('language-switch');
 const destination=new URL(document.documentElement.lang==='ru'?'./index.html':'./ru.html',location.href);
 destination.hash='day='+days[state.dayIndex].id;
 for(const [key,value] of Object.entries({traveler:state.traveler,tab:state.tab,view:state.view,plan:state.octoberSecondPlan}))destination.searchParams.set(key,value);
 link.href=destination.href;
}
const element = id => document.getElementById(id);
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const externalLink = (url,label,className='event-link') => `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ↗</a>`;
const groupLabel = group => group.length===7?'Вся семья · 7':group.map(id=>travelers[id]).join(', ');
function renderDayNavigation(){
 element('day-navigation').innerHTML=days.map((day,index)=>`<button class="day-button ${index===state.dayIndex?'active':''}" data-day="${index}" ${index===state.dayIndex?'aria-current="date"':''} aria-label="${day.weekday}, ${day.date}, ${day.label}"><small>${day.short}</small><strong>${day.date}</strong><span class="day-name">${day.label}</span></button>`).join('');
}
function renderFlight(flight){return `<div class="flight-ticket"><div class="flight-route"><div class="airport"><b>${flight.from}</b><span>${flight.departure}</span></div><span class="flight-line" aria-hidden="true">✈</span><div class="airport"><b>${flight.to}</b><span>${flight.arrival}</span></div></div><div class="flight-footer"><span>Transavia · <b dir="ltr">${flight.number}</b></span><span>Бронирование <b dir="ltr">RCUP3Z</b></span></div></div>`;}
function renderEvent(event){
 const status=event.status==='В планах'?'':`<span class="status ${event.status.includes('Требуется')?'pending':''}">${escapeHtml(event.status)}</span>`;
 return `<article class="event"><div class="event-time">${escapeHtml(event.time)}</div><div class="event-body ${event.split?'split-'+event.split:''}"><div class="event-heading"><h3>${escapeHtml(event.title)}</h3>${status}</div><p>${escapeHtml(event.description)}</p>${event.flight?renderFlight(event.flight):''}<div class="event-meta"><span class="group-tag">${escapeHtml(groupLabel(event.group))}</span>${event.map?externalLink('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(event.map),'На карте'):''}${event.url?externalLink(event.url,'Официальный сайт'):''}</div></div></article>`;
}
function documentLink(id){const doc=documents[id];return `<a class="doc-link" href="${doc.path}" ${id==='planning'?'download':'target="_blank" rel="noopener noreferrer"'}><span class="doc-icon" aria-hidden="true">▤</span><span><strong>${doc.title}</strong><small>${doc.type}</small></span><span class="doc-arrow" aria-hidden="true">↗</span></a>`;}
function renderDetails(day){
 const uniqueSources=[...new Set(day.events.map(event=>event.url).filter(Boolean))];
 const sourceNames={'www.ihp.fr':'Maison Poincaré','www.arts-et-metiers.net':'Arts et Métiers','museedelamagie.com':'Музей магии','www.museeairespace.fr':'Музей авиации','laboutiqueaux2balais.com':'Aux 2 Balais','www.disneylandparis.com':'Диснейленд','news.disneylandparis.com':'Disney Adventure World'};
 element('day-details').innerHTML=`<section class="detail-card"><h3>Коротко о дне</h3><div class="detail-row"><small>Где будем</small><p>${day.area}</p></div><div class="detail-row"><small>Как добираемся</small><p>${day.id==='2026-10-02'&&state.octoberSecondPlan==='disney'?'Ещё день Disney · трансфер в Париж нужно согласовать':day.transport}</p></div><div class="detail-row"><small>Где ночуем</small><p>${day.hotel}</p></div></section><section class="detail-card documents-card"><h3>Документы на сегодня <span aria-hidden="true">↙</span></h3>${day.documents.map(documentLink).join('')}</section><section class="detail-card notes-card"><h3>Стоит помнить</h3>${day.notes.map(note=>`<p>${escapeHtml(note)}</p>`).join('')}${uniqueSources.length?`<div class="source-links">${uniqueSources.map(url=>externalLink(url,sourceNames[new URL(url).hostname]||'Официальный источник','')).join('')}</div>`:''}</section>${day.missing.length?`<section class="detail-card"><h3>Ещё нужно организовать</h3><ul class="missing-list">${day.missing.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul><p class="missing-note">В предоставленных файлах нет подтверждения.</p></section>`:''}`;
}
function renderSchedule(day){
 const events=relevantForTraveler(getEvents(day,state.octoberSecondPlan),state.traveler);
 const planBanner=day.id==='2026-10-02'?`<div class="plan-banner">Выбранный маршрут: <strong>${state.octoberSecondPlan==='nature'?'Парк кошачьих и переезд в Париж':'Четвёртый день Disney и переезд в Париж'}</strong> · Можно изменить во вкладке «Другие варианты».</div>`:'';
 return `${planBanner}<p class="schedule-notice">${state.traveler==='all'?'Семейная программа':`Программа: ${travelers[state.traveler]} · включая общие занятия`} · Время занятий ориентировочное, кроме данных из подтверждений.</p>${events.length?`<div class="timeline">${events.map(renderEvent).join('')}</div>`:'<p class="empty">Для этого состава отдельных занятий нет. Выберите «Все», чтобы увидеть весь день.</p>'}`;
}
function renderOptions(day){
 const options=relevantForTraveler(day.options,state.traveler);
 return `<div class="option-list">${options.length?options.map((option,index)=>`<article class="option-card"><span class="option-number">Вариант ${String(index+1).padStart(2,'0')}</span><h3>${escapeHtml(option.title)}</h3><p>${escapeHtml(option.description)}</p><span class="group-tag">${escapeHtml(groupLabel(option.group))}</span>${option.url?externalLink(option.url,'Официальный сайт'):''}${option.plan?`<button class="choose-plan ${state.octoberSecondPlan===option.plan?'selected':''}" data-plan="${option.plan}" aria-pressed="${state.octoberSecondPlan===option.plan}">${state.octoberSecondPlan===option.plan?'✓ В программе':'Выбрать этот маршрут'}</button>`:''}</article>`).join(''):'<p class="empty">На этот день отдельного варианта для выбранного участника нет. Можно выбрать «Все».</p>'}</div>`;
}
function renderDailyContent(){
 updateLanguageLink();
 const day=days[state.dayIndex];
 element('day-counter').textContent=`День ${String(state.dayIndex+1).padStart(2,'0')} из 10 · ${day.weekday}, ${day.date}.2026`;
 element('day-title').textContent=day.title;
 element('day-subtitle').textContent=day.subtitle;
 element('option-count').textContent=relevantForTraveler(day.options,state.traveler).length;
 document.querySelectorAll('[data-tab]').forEach(button=>{const selected=button.dataset.tab===state.tab;button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;});
 element('daily-content').setAttribute('aria-labelledby',state.tab+'-tab');
 element('daily-content').innerHTML=state.tab==='schedule'?renderSchedule(day):renderOptions(day);
 renderDetails(day);
 element('previous-day').disabled=state.dayIndex===0;
 element('next-day').disabled=state.dayIndex===days.length-1;
 element('pagination-label').textContent=`${state.dayIndex+1} / ${days.length}`;
 document.title=`${day.date} · ${day.label} — Париж, вместе`;
}
function selectDay(index){
 if(index<0||index>=days.length)return;
 state.dayIndex=index;state.tab='schedule';
 const nextHash='#day='+days[index].id;
 if(location.hash!==nextHash)history.pushState(null,'',nextHash);
 renderDayNavigation();renderDailyContent();
 element('day-navigation').querySelector('.active').scrollIntoView({block:'nearest',inline:'nearest',behavior:'instant'});
}
function renderLibrary(){
 element('document-library').innerHTML=`<div class="library-grid">${Object.entries(documents).map(([id,doc])=>`<article class="library-card"><span class="status">${doc.status}</span><h3>${doc.title}</h3><p>${doc.description}</p>${doc.reference?`<p class="reference">Номер бронирования: <b dir="ltr">${doc.reference}</b></p>`:''}<div class="doc-actions">${id==='planning'?`<a class="action-link" href="${doc.path}" download>Скачать исходный план</a>`:`<a class="action-link" href="${doc.path}" target="_blank" rel="noopener noreferrer">Открыть документ ↗</a><a class="secondary-link" href="${doc.path}" download>Скачать на устройство ↓</a>`}</div></article>`).join('')}</div><div class="library-notice"><strong>Обратите внимание · остаток оплаты Disney по письму</strong><p>В письме от 7.7.2026 указан остаток <b dir="ltr">$3,915.33</b> к оплате до <b dir="ltr">18.9.2026</b>. Это состояние бронирования на дату письма; сведений о последующей оплате нет. <a href="./documents/disney-confirmation.pdf#page=4" target="_blank" rel="noopener noreferrer">Открыть страницу оплаты ↗</a></p></div><section class="detail-card"><h3>Документы, которых пока нет</h3><p>Подтверждение парковки Edgar, аренда машины, трансферы из Орли и обратно, билеты на Эйфелеву башню, прогулку по Сене и в музеи. Они отмечены в соответствующих днях.</p></section>`;
}
function setView(view){state.view=view;updateLanguageLink();element('itinerary-view').hidden=view!=='itinerary';element('documents-view').hidden=view!=='documents';document.querySelectorAll('[data-view]').forEach(button=>{button.classList.toggle('active',button.dataset.view===view);if(button.dataset.view===view)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});if(view==='documents')document.title='Документы — Париж, вместе';else renderDailyContent();}
element('day-navigation').addEventListener('click',event=>{const button=event.target.closest('[data-day]');if(button)selectDay(Number(button.dataset.day));});
element('traveler-filter').addEventListener('change',event=>{state.traveler=event.target.value;renderDailyContent();});
document.querySelector('.content-tabs').addEventListener('click',event=>{const button=event.target.closest('[data-tab]');if(button){state.tab=button.dataset.tab;renderDailyContent();}});
document.querySelector('.content-tabs').addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();state.tab=event.key==='Home'?'schedule':event.key==='End'?'options':state.tab==='schedule'?'options':'schedule';renderDailyContent();element(state.tab+'-tab').focus();}});
element('daily-content').addEventListener('click',event=>{const button=event.target.closest('[data-plan]');if(button){state.octoberSecondPlan=button.dataset.plan;state.tab='schedule';renderDailyContent();element('schedule-tab').focus();}});
element('primary-navigation').addEventListener('click',event=>{const button=event.target.closest('[data-view]');if(button)setView(button.dataset.view);});
element('previous-day').addEventListener('click',()=>selectDay(state.dayIndex-1));
element('next-day').addEventListener('click',()=>selectDay(state.dayIndex+1));
window.addEventListener('hashchange',()=>{state.dayIndex=resolveDayIndex(location.hash);state.tab='schedule';setView('itinerary');renderDayNavigation();renderDailyContent();});
document.querySelector('.brand').addEventListener('click',()=>{setView('itinerary');selectDay(0);});
element('traveler-filter').value=state.traveler;
renderDayNavigation();renderDailyContent();renderLibrary();setView(state.view);
