# Portafolio de Leonardo Vera

Sitio estatico hecho con Astro y TypeScript estricto. Los componentes `.astro` generan el contenido durante el build; la cabecera, las entradas de secciones y las vistas ampliadas usan JavaScript en el navegador.

## Desarrollo

Requiere Node.js **22.23.4 o superior**.

```sh
npm ci
npm run dev
npm run check
npm test
npm run preview
```

`npm run build` comprueba tipos y genera `dist/`. `npm test` compila y verifica HTML, SEO y recursos. El lockfile permite instalaciones reproducibles. `npm run lint` es un alias de `astro check`.

## Contenido y SEO

- Edita proyectos, experiencia y tecnologias en `src/components/MainContent.astro`.
- Edita titulo, descripcion, metadatos sociales y datos estructurados Person en `src/layouts/Layout.astro`.
- La URL publica se define en `astro.config.mjs`: `https://leonardovera.dev`. Si cambia el dominio, actualizala antes de compilar; canonical, sitemap y robots.txt se generan a partir de ella.
- El contenido y los enlaces estan presentes en el HTML sin ejecutar JavaScript. Las imagenes de proyectos pueden abrirse tambien sin JavaScript.

## Netlify e indexacion

`netlify.toml` configura Node, el build y `dist/` como carpeta de publicacion. No requiere servidor ni adaptador de Netlify.

Despues del despliegue, verifica `https://leonardovera.dev/` en Google Search Console, envia `https://leonardovera.dev/sitemap-index.xml` e inspecciona la pagina de inicio para solicitar indexacion. La indexacion depende de Google y no queda garantizada por la migracion. Si el panel de Netlify conserva una regla SPA `/* /index.html 200`, eliminala: las rutas inexistentes deben responder con 404.
