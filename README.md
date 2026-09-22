# Flores amarillas

Cada carpeta es una página independiente, con su propio mensaje:

- `b/index.html`
- `nay/index.html`

Ambas incluyen **in the pool - The Dreamer Piano** en `sound/musica.mp3`.
Abre cada `index.html` en un navegador y toca **Reproducir música**.
También se intenta iniciar la canción al tocar la página o abrir la carta.
El botón permite pausar y reanudar. Los navegadores pueden exigir un toque
para permitir el audio: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay

## Compartir por WhatsApp

Publica los archivos en un alojamiento web y envía el enlace de cada página.
Enviar solo `index.html` deja fuera la música, las imágenes y los estilos.

Si usas GitHub Pages:

1. Sube las carpetas completas `b` y `nay` al repositorio.
2. En **Settings → Pages**, selecciona **Deploy from a branch**, tu rama
   (normalmente `main`) y la carpeta **/(root)**. Guarda los cambios.
3. Cuando GitHub indique la dirección publicada, añade `/b/` o `/nay/`
   al final de la dirección del proyecto y envía a cada persona su enlace.
4. Comprueba ambos enlaces desde tu celular y toca **Reproducir música**.

Ejemplos de formato (no son enlaces ya publicados):

- `https://TU-USUARIO.github.io/TU-REPOSITORIO/b/`
- `https://TU-USUARIO.github.io/TU-REPOSITORIO/nay/`

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Cambiar la canción

Reemplaza `sound/musica.mp3` en ambas carpetas por otro MP3 manteniendo el nombre.
