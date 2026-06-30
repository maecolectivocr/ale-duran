# Ale Durán — Sitio web

One-page moderno (inspirado en el lenguaje de Rimas Entertainment): near-black, tipografía
**Archivo** bold en mayúsculas, gradiente "atardecer Pacífico" (ámbar→coral→violeta), orbes blur.
Bilingüe **ES / EN**. Stack: HTML + CSS + JS vanilla. Sin build ni dependencias. Listo para Netlify.

## Cómo verlo
Abrir `index.html` o con servidor local:
```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Idiomas (i18n)
- Toggle **ES / EN** en la barra superior.
- El idioma se guarda en el navegador (localStorage) y respeta el idioma del sistema en la 1ª visita.
- Todos los textos viven en el diccionario `I18N` dentro de `script.js`. Para editar copy,
  cambiar ahí los valores de `es` y `en` (las claves coinciden con `data-i18n` en el HTML).

## ✏️ Datos ya cargados
- **WhatsApp:** +506 8585 8566 (`50685858566`) — botón flotante, contacto, footer y formulario.
- **Instagram:** @aleduran_m
- **Email:** `adurancontrataciones@outlook.com`

## 🎤 Formatos
Solo, Dúo Plancha Rock (con Rayssa), Dúo Rock Pop (con Lucho Aguilar), Dúo Guitarra & Percusión, Banda.
Editar en `script.js` → claves `rep.f1`...`rep.f5` / `rep.f2name`...`rep.f5name`.

## 📸 Fotos (carpeta `images/`) — ya cargadas
Todas en `.webp` optimizado (~1600 px, 50-110 KB).

| Archivo | Uso |
|---|---|
| `ale.webp` | Hero + galería destacada (canto al micrófono) |
| `about.webp` | Sección "Sobre Ale" (retrato frontal) |
| `gallery-2/3/4.webp` | Galería — sesión de estudio |
| `duo-rayssa.webp` | Galería + formato "Dúo Plancha Rock" |
| `duo-lucho.webp` | Galería + formato "Dúo Rock Pop" |
| `banda.webp` | Galería + formato "Banda" |

### Reemplazar / agregar fotos (.webp con Python+Pillow)
```bash
cd ~/Desktop/repositorios\ web/ale-duran
python3 - <<'PY'
from PIL import Image
im = Image.open("/ruta/a/foto.jpg").convert("RGB")
MAX=1600; w,h=im.size
if max(w,h)>MAX:
    s=MAX/max(w,h); im=im.resize((round(w*s),round(h*s)), Image.LANCZOS)
im.save("images/ale.webp","WEBP",quality=82,method=6)
PY
```
> Nota: `sips` de macOS lee `.webp` pero no lo escribe; por eso se usa Pillow.

## Deploy en Netlify
- **Rápido:** arrastrar la carpeta a https://app.netlify.com/drop
- **Git:** subir a GitHub y conectar el repo (build: vacío · publish dir: `/`)
