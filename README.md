# ♡ Carrd React Starter

Un starter sencillo para hacer tu propio sitio personal estilo Carrd, pero construido con React.

## Qué tiene

- React + Vite
- React Router
- Navegación SPA: las páginas cambian sin recargar todo el sitio
- Home / About / OCs / Socials
- Diseño responsive
- Estética rosa + verde inspirada en la referencia
- Todo el contenido está separado en archivos para que puedas editarlo

## Cómo arrancarlo

```bash
npm install
npm run dev
```

Después abrí la dirección que te muestra Vite, normalmente:

`http://localhost:5173`

## Dónde editar

### Textos
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Ocs.jsx`
- `src/pages/Socials.jsx`

### Colores y diseño
- `src/styles.css`

Al principio del CSS están las variables:

```css
--pink
--pink-dark
--pink-soft
--green
--green-dark
```

Podés cambiar esos valores y modificar prácticamente toda la paleta desde ahí.

### Menú
- `src/components/SiteLayout.jsx`

Ahí están los links del menú y el layout general.

### Imágenes
Por ahora hay URLs de ejemplo. Podés reemplazarlas por:
- imágenes locales dentro de `src/assets`
- URLs de imágenes
- imágenes que subas a tu hosting

## Importante

No hay un HTML diferente para cada página.

React Router se encarga de mostrar cada componente:

`/` → Home  
`/about` → About  
`/ocs` → OCs  
`/socials` → Socials

Cuando hacés clic en el menú, React cambia la vista sin hacer una recarga completa de la página.