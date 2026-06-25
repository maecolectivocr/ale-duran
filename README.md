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
- **Email:** `booking@aleduran.com` ← ⚠️ placeholder, reemplazar si hay uno real.

## 📸 Fotos (carpeta `images/`)
Colocar con estos **nombres exactos**. Mientras no existan, se ve un marcador con el nombre.

| Archivo | Uso |
|---|---|
| `ale.webp` | **Principal** — hero, sección "Sobre Ale" y galería (la foto de estudio) |
| `gallery-2.jpg` | Galería (opcional) |
| `gallery-3.jpg` | Galería (opcional) |
| `gallery-4.jpg` | Galería ancha (opcional) |

### Convertir la foto a .webp (macOS, sin instalar nada)
```bash
cd ~/Desktop/repositorios\ web/ale-duran
# desde tu archivo original (jpg/png/heic):
sips -s format webp "/ruta/a/la/foto-de-ale.jpg" --out images/ale.webp
```
> Recomendado: lado largo ~1600 px, calidad alta. Orientación vertical (retrato).

## Deploy en Netlify
- **Rápido:** arrastrar la carpeta a https://app.netlify.com/drop
- **Git:** subir a GitHub y conectar el repo (build: vacío · publish dir: `/`)
