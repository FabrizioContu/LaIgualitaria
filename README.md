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

## 🛠️ Instalación

### Frontend (React + Vite)

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/La-Igualitaria.git
cd La-Igualitaria

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local y añadir VITE_WP_DOMAIN=https://tu-wordpress.com

# Ejecutar servidor de desarrollo
npm run dev
```

### WordPress (Backend)

1. **Instalar plugin personalizado** (si no está instalado):
   ```bash
   cp -r plugins/la-igualitaria-cpts wp-content/plugins/
   ```
   - Ir a WordPress Admin → Plugins → Activar "La Igualitària - CPTs"

2. **Instalar ACF** (si no está):
   - WordPress Admin → Plugins → Buscar "Advanced Custom Fields Pro"
   - Instalar y activar

3. **Importar campos ACF**:
   - WordPress Admin → Custom Fields → Tools → Import JSON
   - Seleccionar `acf-la-igualitaria.json`
   - Click "Import"

4. **Configurar permisos REST**:
   - Los CPTs (proveidor, producto) ya están expuestos via REST API.
   - Verificar: `https://tu-wordpress.com/wp-json/wp/v2/proveidors`

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

## 🔧 Variables de Entorno

Crea `.env.local` en la raíz:

```env
# URL del sitio WordPress
VITE_WP_DOMAIN=https://tu-wordpress.com

# (Opcional) API keys, etc.
```

## 📚 Endpoints REST Disponibles

### Posts (Blog)
- `GET /wp-json/wp/v2/posts?per_page=10&_embed` — Listar entradas
- `GET /wp-json/wp/v2/posts?slug=entrada-slug&_embed` — Obtener por slug

### Proveïdors
- `GET /wp-json/wp/v2/proveidors?per_page=100&_embed` — Listar proveedores
- `GET /wp-json/wp/v2/proveidors?slug=can-perol&_embed` — Obtener por slug
- Campos ACF: `ubicacio`, `tipus`, `telefon`, `email`, `web`, `productes_relacionats`

### Productos
- `GET /wp-json/wp/v2/productos?per_page=100&_embed` — Listar productos
- `GET /wp-json/wp/v2/productos?slug=pa-integral&_embed` — Obtener por slug
- Campos ACF: `preu`, `unitat`, `proveidor`

## 🎯 Hooks Disponibles

### useLatestPosts
```tsx
const { posts, loading, error, refresh } = useLatestPosts(perPage = 3);
```

### useProviders / useProvider
```tsx
const { providers, loading, error, refresh } = useProviders(perPage = 100);
const { provider, loading, error } = useProvider(slug);
```

### useProducts / useProduct / useProductsByProvider
```tsx
const { products, loading, error, refresh } = useProducts(perPage = 100);
const { product, loading, error } = useProduct(slug);
const { products, loading, error } = useProductsByProvider(providerId);
```

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting (si está configurado)
npm run lint
```

## 🔐 Seguridad

- **dangerouslySetInnerHTML** — Se usa para renderizar HTML de WordPress; considerar sanitizar con DOMPurify.
- **CORS** — Configurar en WordPress si está en host diferente.
- **API Keys** — Guardar en variables de entorno, nunca en el código.

## 📝 Estructura de Commits

Los cambios se organizan en commits temáticos:

```bash
feat:     Nueva funcionalidad
fix:      Corrección de bugs
refactor: Limpieza de código
docs:     Documentación
style:    Formato/estilos
```

Ejemplo:
```bash
git commit -m "feat: add REST endpoints for providers and products"
```

## 🐛 Troubleshooting

### Error: VITE_WP_DOMAIN no definida
- Crear `.env.local` con `VITE_WP_DOMAIN=https://tu-wordpress.com`
- Reiniciar servidor de desarrollo: `npm run dev`

### Error: Cannot read properties of undefined
- Verificar que ACF fields están expuestos en REST API (plugin "ACF to REST API").
- Comprobar en navegador: `https://tu-wordpress.com/wp-json/wp/v2/proveidors?_embed`

### Scroll no funciona en navegación
- ScrollToTop.tsx está activo en App.tsx (debe estar dentro de BrowserRouter).

### Imágenes no se cargan
- Verificar `featured_image_url` en respuesta de API.
- Comprobar CORS headers si WordPress está en host diferente.

## 📦 Dependencias Principales

- **React 18** — Framework UI
- **Vite** — Bundler y dev server
- **React Router v6** — Enrutamiento
- **Tailwind CSS** — Estilos
- **TypeScript** — Tipado estático
- **Lucide React** — Iconos

## 📄 Licencia

Proyecto de la Cooperativa La Igualitària. Derechos reservados.

## 👥 Contribuir

1. Fork del repositorio
2. Crear rama: `git checkout -b feat/nueva-feature`
3. Commit: `git commit -m "feat: descripción"`
4. Push: `git push origin feat/nueva-feature`
5. Pull Request



**Última actualización**: Noviembre 2025




