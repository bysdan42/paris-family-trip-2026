import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {documents} from '../dist/data.js';

test('assets and travel documents resolve under the repository Pages URL',()=>{
 const base=new URL('https://bysdan42.github.io/paris-family-trip-2026/');
 const html=readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
 const references=[...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(match=>match[1]).filter(path=>!path.startsWith('https://'));
 references.push(...Object.values(documents).map(document=>document.path));
 for(const reference of references){
  assert.ok(reference.startsWith('./'),`Relative project asset: ${reference}`);
  const url=new URL(reference,base);
  assert.ok(url.pathname.startsWith('/paris-family-trip-2026/'));
  assert.ok(existsSync(new URL('../dist/'+reference,import.meta.url)),reference);
 }
 for(const filename of ['app.js','data.js']){
  const source=readFileSync(new URL('../dist/'+filename,import.meta.url),'utf8');
  assert.doesNotMatch(source,/["']\/(documents|assets)\//);
 }
});

test('Pages workflow uploads the static directory only and requires manual dispatch',()=>{
 const workflow=readFileSync(new URL('../.github/workflows/pages.yml',import.meta.url),'utf8');
 assert.match(workflow,/workflow_dispatch:/);
 assert.match(workflow,/path: dist/);
 assert.match(workflow,/needs: validate/);
 assert.doesNotMatch(workflow,/\bpush:/);
 assert.ok(existsSync(new URL('../dist/.nojekyll',import.meta.url)));
});
