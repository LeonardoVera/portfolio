# Ajustes de UI/UX según la revisión del usuario

Rama: `feature/ui-ux-improvements`. Fecha: 1 de noviembre de 2026.

Esta revisión reemplaza el planteamiento de la primera pasada. El objetivo es pulir la disposición original del portafolio, respetando las preferencias concretas del usuario. Se aplicaron `design-taste-frontend`, `emil-design-eng`, `animate` y `ponytail`, sin dependencias nuevas.

## Cambios

| Before | After | Why |
| --- | --- | --- |
| Presentación dividida con imagen rectangular | Avatar circular, cargo, nombre, descripción y acciones centrados | Recuperar la composición original |
| Proyectos en exposiciones de ancho completo | Cuadrícula de dos columnas; una en móvil | Conservar la disposición familiar y evitar columnas estrechas |
| Tecnologías después de proyectos | Tecnologías antes de proyectos, conservando el diseño de lista aprobado | Mantener la secuencia original |
| Texto de apoyo separado a la derecha del título de proyectos | Texto retirado | Eliminar el elemento que señaló el usuario |
| Cabecera opaca | Transparente al inicio, glass tras el primer desplazamiento | Recuperar el efecto solicitado |
| Enlaces secundarios subrayados | Botones con borde en CV, sitios y código | Dar una forma clara y consistente a las acciones |
| Experiencia con esquinas cuadradas | Radio de 24 px, borde discreto y contraste al pasar el cursor | Pulir el apartado aprobado |
| Footer amplio con firma grande | Footer compacto con redes y correos, siguiendo el original | Restaurar la composición solicitada |
| Entradas que empezaban sobre contenido ya visible | Elementos bajo el primer pantallazo preparados y revelados al entrar en la pantalla | Hacer perceptible el scroll trigger |

## Movimiento

La finalidad es explicar la entrada del contenido durante una visita ocasional al portafolio. Se usa IntersectionObserver con CSS transitions; no se instaló GSAP ni otra biblioteca. Se animan opacidad y desplazamiento vertical de 24 px durante 650 ms, con la curva existente `cubic-bezier(0.23, 1, 0.32, 1)` y un desfase de 70 ms entre elementos contiguos.

Cada entrada ocurre una vez. El primer pantallazo permanece visible desde el comienzo; sin JavaScript, todo el contenido está disponible. El contenido con foco se muestra inmediatamente. La preferencia de movimiento reducido elimina las entradas, incluso si se activa durante la visita. El hover está limitado a dispositivos con cursor.

La cabecera usa un fondo oscuro al 76% y blur de 14 px al hacer scroll. Se corrigió el orden de las declaraciones prefijada y estándar de `backdrop-filter`: el minificador conservaba únicamente la prefijada cuando iba al final. Un test verifica que la propiedad estándar sobreviva en el CSS de producción.

## Dirección y recursos

Se conserva como referencia la paleta oscura existente y la ficha anterior **The dark room**, seed **1755290694**. No hubo nuevo sorteo: esta tarea corrige componentes y recupera una disposición ya establecida.

Idea: las interfaces de los cuatro proyectos de Leonardo son la prueba de su trabajo dentro de su composición original. Interacción principal: ampliar sus capturas y acceder al sitio o repositorio correspondiente.

Solo se usan la ilustración y las cuatro capturas originales. No se añadieron imágenes externas, vídeos de stock, nuevos dibujos ni contenido ficticio. No hay nuevos créditos ni datos de muestra que sustituir.

## Excepciones explícitas del usuario

Se conservaron glass, bordes, botones redondeados y cuadrícula de tarjetas aunque las reglas generales de la skill los desaconsejan. El inspector se ejecutó con:

```text
--allow hairline,outlined-box,glass,card-rows,focal-point,eyebrow,off-centre
```

Los cuatro primeros corresponden a las preferencias expresas. `focal-point` conserva el hero centrado y su escala cercana al original. `eyebrow` es un falso positivo sobre el botón real “Ver proyectos”, situado antes de Tecnologías en móvil. `off-centre` corresponde a la distribución interna del contenido: una comprobación independiente del navegador midió márgenes de 80/80 px en main y experiencia, y 200/200 px en proyectos a 1440 px. No se cambió la composición aprobada de Tecnologías para satisfacer esa heurística.

El lint de diseño sin excepciones informa dos fallos de separadores y seis advertencias de bordes y glass, todos correspondientes a esas decisiones solicitadas. Son hallazgos de estilo; no errores del compilador.

## Crítica final

ROUND 1 — Revisión del usuario

Seen in one second: avatar circular y cargo, con el nombre inmediatamente debajo.

Idea (one sentence): el trabajo real de Leonardo se presenta en su composición original, con tecnologías y experiencia legibles.

Live thing: ampliar las cuatro capturas con teclado o cursor y volver al elemento que abrió la imagen.

Layout words by section: hero=centrado / tecnologías=lista / proyectos=cuadrícula / experiencia=paneles / contacto=compacto.

Scores: design 7 · usability 8.5 · creativity 6 · content 8 → overall 7.4.

Caps applied: creatividad limitada por una composición conocida de portafolio; las preferencias expresas prevalecen sobre las restricciones estilísticas generales.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. `revision-after/desktop-page-01.jpg`: las capturas tienen densidades y proporciones diferentes. Renovarlas desde sus aplicaciones con una ventana común sería una mejora de contenido posterior.
2. `revision-after/mobile-page-01.jpg`: las descripciones explican funciones, pero aún no detallan la contribución individual en proyectos de equipo. Esa información debe proporcionarla el autor.
3. `revision-after/desktop-fold.jpg`: el hero vuelve intencionalmente al patrón original; no busca una nueva identidad visual. Cualquier rediseño de composición requiere un encargo distinto.

## Verificación

- Astro check: cero errores, advertencias e indicaciones.
- Build de producción correcto.
- Cinco tests correctos: contenido estático, SEO, recursos/anclas/CV, propiedad estándar del glass en el build, robots y sitemap.
- Pruebas de navegador en 320, 390, 768 y 1440 px: sin desbordamiento horizontal; destinos de navegación visibles; cuatro diálogos; cierre con Escape, botón y fondo; retorno de foco y restauración del scroll; sin excepciones de JavaScript.
- Prueba específica de entradas: opacidad inicial cero en contenido bajo el primer pantallazo, estado intermedio durante la transición y opacidad final uno.
- Prueba de glass: cabecera transparente al inicio y `blur(14px) saturate(1.3)` calculado después del scroll.
- Prueba de contraste de experiencia: fondo de `rgb(33, 31, 27)` a `rgb(45, 41, 34)` al pasar el cursor.
- Movimiento reducido: contenido visible y sin animaciones; cambio de preferencia durante la visita también comprobado.
- Sin JavaScript: contenido y enlaces directos a las imágenes disponibles.
- Inspector final sobre producción en 1440, 768 y 390 px: cero fallos con las excepciones documentadas; dos advertencias (sin vídeo propio y 15 elementos con movimiento detectado, frente al objetivo sugerido de 16). Se conserva inmóvil el primer pantallazo y no se añade movimiento decorativo para alcanzar un contador. Todas las capturas finales fueron revisadas, incluyendo glass, hover, 320 px, movimiento reducido y ausencia de JavaScript.

Las capturas e informes están en `.taste-skill/revision-before/` y `.taste-skill/revision-after/`, excluidos de Git. No se desplegó ni se creó un commit. No se comprobaron dispositivos físicos ni la disponibilidad de sitios externos.

## Ajuste posterior: centrado y controles glass

A petición del usuario, Tecnologías ahora dispone el título, la descripción y la lista sobre un mismo eje central. La lista conserva sus dos columnas y los diez elementos originales. Se comprobó el centro exacto en 320, 390, 768 y 1440 px, sin desbordamiento.

“Ampliar imagen” usa un fondo translúcido con blur de 12 px, borde y forma de píldora. El hover cambia fondo y borde durante 220 ms; una prueba del navegador verificó un valor intermedio diferente al valor final. El marco del diálogo usa blur de 20 px y radio de 24 px; “Cerrar” usa glass, borde y forma de píldora. Los filtros estándar se comprobaron en el build de producción. Se mantiene el foco visible, el cierre con Escape, el retorno del foco y el soporte de movimiento reducido.

Validación: Astro check sin errores ni advertencias, build correcto y cinco tests aprobados. Pruebas específicas en cuatro anchos y revisión de las nueve capturas de tecnologías, hover y modal en `.taste-skill/details-after/`. Inspector final: cero fallos con las excepciones visuales ya documentadas y una advertencia por ausencia de vídeo. Se revisaron sus seis capturas en `.taste-skill/details-inspect/`. No se añadieron recursos ni dependencias.

## Cuadrícula de tecnologías según la referencia

Se sustituyó la lista por una cuadrícula centrada de cinco columnas y dos filas en escritorio y tablet. Los diez iconos originales aumentan de 28 a 56 px, con el nombre a 16 px debajo de cada uno. Hasta 600 px se usan tres columnas e iconos de 48 px; el último elemento queda centrado. Se conservan las entradas al hacer scroll.

Build correcto y cinco tests aprobados. El navegador verificó las columnas, filas, tamaño de iconos, nombres debajo, centrado y ausencia de desbordamiento en 320, 390, 768 y 1440 px. Se revisaron las cuatro capturas en `.taste-skill/tech-grid/` y las seis del inspector en `.taste-skill/tech-grid-inspect/`. Inspector: cero fallos con las excepciones previas y una advertencia por ausencia de vídeo. No se añadieron recursos ni dependencias.

## Educación

Actualización de estado: “En curso” usa el amarillo de la página (#f9c441), con fondo translúcido y borde a juego. El verde queda reservado para estudios culminados. Se mantiene la etiqueta sin hover ni interacción.

Se añadió Educación después de Experiencia siguiendo la referencia proporcionada: Ingeniería de Software, grado universitario, Universidad Nacional Mayor de San Marcos y periodo 2023–2027. “En curso” es una etiqueta verde a la izquierda, con forma de botón, sin hover, acción ni parada de teclado. La fila incluye las fechas a la derecha en escritorio; en móvil se apila manteniendo la etiqueta a la izquierda. Se reutiliza la entrada al hacer scroll y la alternativa de movimiento reducido.

Verificación: Astro check sin errores ni advertencias, build correcto y cinco tests aprobados. El navegador verificó los datos, posición de la etiqueta, ausencia de foco e invariancia al hover en 320, 390, 768 y 1440 px. Se revisaron las cuatro capturas de `.taste-skill/education/` y las siete del inspector en `.taste-skill/education-inspect/`. Inspector: cero fallos con las excepciones visuales previas; advertencias por ausencia de vídeo y separación amplia entre información académica y fechas. Esa separación sigue deliberadamente la fila de la referencia. No se añadieron recursos externos ni datos de muestra.

## Publicaciones

Se añadió una publicación después de Educación, con la portada proporcionada por el usuario presentada como un libro: lomo verde tomado de la propia portada, canto de páginas y perspectiva discreta. El diseño conserva tipografía, acciones y animaciones de la página. La portada enlaza al artículo; la autoría completa puede abrirse con teclado mediante un details nativo. En móvil, portada y ficha se apilan. El título académico se mantiene completo aunque ocupe más de dos líneas, excepción documentada en el inspector mediante `--allow headline-lines`.

Fuente primaria: https://revistaveritas.org/index.php/veritas/article/view/1883, consultada el 1 de noviembre de 2026. Título: “Madurez Tecnológica Organizacional en Aplicaciones Móviles para Atención Médica de Emergencia”. Leonardo Vera figura como uno de los seis autores. Fecha del campo visible Publicado: 26 de octubre de 2026; volumen 7, número 3, páginas 586–595; DOI 10.61616/rvdc.v7i3.1883. El resumen mostrado es una síntesis del enfoque del artículo, sin atribuir resultados cuantitativos. La ficha original declara licencia CC BY 4.0 para el artículo. La portada adjunta por el usuario se atribuye en su pie a Revista Veritas y enlaza a la publicación; no se generan imágenes ni se inventa una portada.

El original se conserva en `src/assets/publications/veritas-v7n3.png`. Astro genera una versión WebP de 560 px, de aproximadamente 38 KB frente a los 3,3 MB originales. Se añadieron enlaces a la ficha, al DOI y al PDF indicado por los metadatos editoriales.

Astro check sin errores ni advertencias, build correcto y cinco tests aprobados. Pruebas específicas en 320, 390, 768 y 1440 px: portada cargada, datos completos, enlaces etiquetados, ausencia de desbordamiento y desplegable de autores operable con Enter. Se revisaron las cuatro capturas en `.taste-skill/publications/` y las siete del inspector en `.taste-skill/publications-inspect/`. Inspector final: cero fallos con las excepciones documentadas; persisten las advertencias previas por ausencia de vídeo y separación de la fila académica. No hubo nuevas dependencias, commit ni despliegue.

## Navegación de las nuevas secciones

La topbar incluye Proyectos, Experiencia, Educación, Publicaciones y Contacto, con enlaces a las anclas existentes y desplazamiento suave. Hasta 700 px, los cinco enlaces quedan visibles en dos filas bajo el logo. Se ajustaron el espacio superior de la página y el desplazamiento de las anclas para evitar que la cabecera fija tape los títulos. Se conserva el glass y la preferencia de movimiento reducido.

Build y cinco tests correctos; Astro check sin errores ni advertencias. El navegador comprobó los cinco destinos en 320, 390, 768 y 1440 px: hash correcto, destino visible por debajo de la cabecera y sin desbordamiento. Capturas revisadas en `.taste-skill/navigation/`.

