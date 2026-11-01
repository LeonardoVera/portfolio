import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import test from 'node:test';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const origin = 'https://leonardovera.netlify.app';

test('content is present without running JavaScript', () => {
  assert.match(html, /<html lang="es"/);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  for (const text of ['Leonardo Vera', 'Linux ACL Manager', 'Patitas Sanas', 'Gestor de Gastos', 'IEEE Computer Society']) {
    assert.ok(html.includes(text), `Missing static content: ${text}`);
  }
  assert.match(html, /<main\b/);
  assert.equal([...html.matchAll(/<dialog\b/g)].length, 4);
  assert.doesNotMatch(html, /astro-island|\/src\/main|<div id="root"/);
});

test('SEO metadata and structured data use the production domain', () => {
  assert.match(html, /<title>Leonardo Vera[^<]+<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]{50,}"/);
  assert.ok(html.includes(`rel="canonical" href="${origin}/"`));
  assert.ok(html.includes(`property="og:url" content="${origin}/"`));
  assert.doesNotMatch(html, /noindex|localhost|127\.0\.0\.1/);
  const image = html.match(/property="og:image" content="([^"]+)"/)?.[1];
  assert.ok(image?.startsWith(`${origin}/`), 'Social image must be a public absolute URL');
  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  const person = JSON.parse(json);
  assert.equal(person['@type'], 'Person');
  assert.equal(person.name, 'Leonardo Vera');
  assert.equal(person.url, `${origin}/`);
});

test('navigation anchors and local assets resolve', async () => {
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(html.includes(`id="${id}"`), `Missing anchor: ${id}`);
  }
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/[^"#?]*)"/g)) {
    await access(resolve('dist', asset.slice(1)));
  }
  assert.match(html, /download="CV Leonardo Vera.pdf"/);
  for (const [, attributes] of html.matchAll(/<img\b([^>]+)>/g)) {
    assert.match(attributes, /\balt="[^"]*"/, 'Every image needs an alt attribute');
  }
});

test('robots and sitemap allow discovery of the canonical page', async () => {
  const robots = await readFile('dist/robots.txt', 'utf8');
  assert.ok(robots.includes('User-agent: *\nAllow: /'));
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap-index.xml`));
  const index = await readFile('dist/sitemap-index.xml', 'utf8');
  assert.ok(index.includes(`${origin}/sitemap-0.xml`));
  const sitemap = await readFile('dist/sitemap-0.xml', 'utf8');
  assert.ok(sitemap.includes(`<loc>${origin}/</loc>`));
});
