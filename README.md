# La Igualitària — Cooperativa de Consum

Plataforma web para la cooperativa de consum autogestionada y participativa **La Igualitària**, ubicada en el Poble-sec de Barcelona. Ofrece productos de proximidad, de temporada y agroecológicos.

## 🚀 Características

- **Blog dinámico** — Entradas desde WordPress con búsqueda y filtrado.
- **Catálogo de Proveïdors** — Listado de proveedores locales con campos ACF (ubicación, tipo, contacto).
- **Catálogo de Productes** — Productos relacionados con sus proveedores.
- **Integración WordPress REST API** — Datos en tiempo real desde WordPress.
- **Responsive Design** — Diseño mobile-first con Tailwind CSS.
- **TypeScript** — Código tipado para mayor seguridad.

## 📋 Requisitos

- Node.js ≥ 16
- npm o yarn
- WordPress 5.9+ (con REST API habilitada)
- ACF (Advanced Custom Fields) para campos personalizados



## 📁 Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Layout.tsx
│   ├── ScrollToTop.tsx
│   └── ...
├── hooks/           # Custom hooks (React)
│   ├── useLatestPosts.tsx
│   ├── useProviders.tsx
│   ├── useProducts.tsx
│   └── usePost.tsx
├── lib/
│   └── wp.ts        # Funciones REST API (WordPress)
├── pages/           # Páginas principales
│   ├── Home.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   ├── Proveidors.tsx
│   ├── Proveidor.tsx
│   └── ...
├── types/
│   └── wordpress.ts  # Tipos TypeScript para WordPress
└── App.tsx          # Enrutamiento principal
```




## 📦 Dependencias Principales

- **React 18** — Framework UI
- **Vite** — Bundler y dev server
- **React Router v6** — Enrutamiento
- **Tailwind CSS** — Estilos
- **TypeScript** — Tipado estático
- **Lucide React** — Iconos

## 📄 Licencia

Proyecto de la Cooperativa La Igualitària. Derechos reservados.





**Última actualización**: Noviembre 2025




