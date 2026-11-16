# Compatibilidad con Android antiguo

La página detecta si el navegador admite módulos JavaScript. Los navegadores modernos usan la aplicación y Firebase actuales; los antiguos cargan una compilación ES5, polyfills y Firebase 8.10.1. Ambos modos usan la misma dirección y los mismos datos.

Para regenerar los archivos que necesita el modo antiguo:

```text
npm ci
npm run build:legacy
npm run test:legacy
```

Publica junto con `index.html` los archivos `app.js`, `app.legacy.js` y `legacy-polyfills.js`. Android 4.4 no admite la instalación PWA moderna; en esa versión se debe abrir la página en el navegador y usar su opción “Agregar a pantalla de inicio”. La compatibilidad con Android 4.4 es de mejor esfuerzo y debe confirmarse en la tablet física, especialmente el inicio de sesión y la conexión HTTPS.
