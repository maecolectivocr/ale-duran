# Deploy en Netlify

El sitio está listo para deployar. Dos opciones:

## Opción 1: Drag & Drop (más rápido)
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta `ale-duran` completa
3. Listo — Netlify genera un URL temporal

## Opción 2: GitHub (recomendado, acceso futuro)
1. Ve a https://app.netlify.com
2. Haz login con tu cuenta GitHub
3. Click **"New site from Git"**
4. Selecciona el repo `maecolectivocr/ale-duran`
5. Configuración:
   - **Build command**: (dejar vacío)
   - **Publish directory**: `.` (raíz del proyecto)
6. Click **Deploy**

## Después del deploy
- Netlify te da un URL automático (ej: `ale-duran-xyz.netlify.app`)
- **Para dominio personalizado** (ej: `aleduran.com`):
  - En Netlify: Site settings → Domain management → Add custom domain
  - En tu registrador (GoDaddy, Namecheap, etc): apunta el DNS a Netlify

## Actualizar después
Cualquier push a `main` en GitHub = deploy automático en Netlify (si usas Opción 2).
