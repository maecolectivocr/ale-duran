# Ale Durán — Sitio web

Sitio de una sola página (one-page), dark / cinematográfico, listo para Netlify.
Stack: HTML + CSS + JS vanilla. Sin dependencias ni build.

## Cómo verlo
Abrir `index.html` en el navegador (doble clic) o con un servidor local:
```bash
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

## ✏️ Qué editar (datos reales)

### 1. Número de WhatsApp
Aparece en **3 lugares**. Buscar y reemplazar `50600000000` por el número real
(formato internacional sin `+` ni espacios, ej: `50688887777`):
- `script.js` → constante `WHATSAPP_NUMBER`
- `index.html` → botón flotante de WhatsApp y link de la sección Contacto/Footer

### 2. Email
Reemplazar `booking@aleduran.com` en `index.html` (sección Contacto y footer).

### 3. Fotos
Colocar las imágenes en la carpeta `images/` con estos **nombres exactos**.
Mientras no existan, el sitio muestra un marcador elegante con el nombre del archivo.

| Archivo | Uso | Orientación sugerida |
|---|---|---|
| `hero.jpg` | Fondo del hero (pantalla completa) | Horizontal / vertical impactante |
| `about.jpg` | Retrato sección "Sobre Ale" | Vertical 4:5 |
| `gallery-1.jpg` | Galería (vertical, ocupa doble alto) | Vertical |
| `gallery-2.jpg` | Galería | Horizontal |
| `gallery-3.jpg` | Galería | Horizontal |
| `gallery-4.jpg` | Galería (ancho, ocupa doble) | Horizontal |

> Recomendado: exportar en **WebP o JPG optimizado**, máx ~300 KB c/u, lado largo ~1600 px.

### 4. Video (opcional)
El bloque "Video en vivo" de la galería es decorativo. Para enlazarlo a un video real
(YouTube/Instagram), avisame y lo convierto en link o embed.

### 5. Textos
El copy es un primer borrador acorde a la marca. Ajustar libremente en `index.html`.

## Deploy en Netlify
- **Opción rápida:** arrastrar la carpeta del proyecto a https://app.netlify.com/drop
- **Opción git:** subir a GitHub y conectar el repo en Netlify (build command: vacío, publish dir: `/`)
