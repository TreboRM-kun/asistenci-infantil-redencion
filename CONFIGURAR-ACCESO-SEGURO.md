# Acceso seguro a la aplicación

## Estado de la migración

- La página pública usa Firebase Authentication (Email/Password) y conserva los nombres de usuario que ya conocían los maestros.
- Las seis cuentas y sus perfiles están creados en Firebase.
- Las reglas de Realtime Database ya requieren autenticación y perfil para leer; las escrituras se limitan según el rol.
- La rama `Usuarios`, que guardaba contraseñas antiguas, fue eliminada después de conservar los respaldos locales.
- La app y el service worker v7 están publicados en GitHub Pages. Durante el inicio de sesión, la app informa el progreso de descarga de las cuatro ramas y permite hasta dos minutos para cargar los datos y archivos multimedia.
- El proyecto continúa en el plan gratuito Spark; no se activó Blaze.

## Cuentas

El inicio de sesión sigue solicitando el nombre de usuario. La app lo convierte internamente en un correo técnico con el formato:

`u` + nombre de usuario en minúsculas convertido a bytes UTF-8 hexadecimales + `@asistencia-infantil-redencion.firebaseapp.com`

| Usuario | Correo interno | Rol | Salón |
| --- | --- | --- | --- |
| Sembrador | `u73656d627261646f72@asistencia-infantil-redencion.firebaseapp.com` | Maestro | Semillas |
| Regador | `u72656761646f72@asistencia-infantil-redencion.firebaseapp.com` | Maestro | Plantas |
| Cosechador | `u636f7365636861646f72@asistencia-infantil-redencion.firebaseapp.com` | Maestro | Arboles |
| Pastor | `u706173746f72@asistencia-infantil-redencion.firebaseapp.com` | Administrador | todos |
| Supervisor | `u73757065727669736f72@asistencia-infantil-redencion.firebaseapp.com` | Supervisor | todos |
| Granjero | `u6772616e6a65726f@asistencia-infantil-redencion.firebaseapp.com` | Administrador | todos |

Sembrador, Regador y Cosechador recibieron contraseñas temporales seguras porque sus claves anteriores no cumplían el mínimo de Firebase. Deben iniciar sesión y cambiarlas desde **Cambiar contraseña**. No guardes contraseñas en este archivo ni en Realtime Database.

Estos correos no tienen buzón; no se puede usar recuperación de contraseña por correo. Para cambiar roles o salones, actualiza el perfil `Perfiles/{UID}` en Firebase Console. La app no administra perfiles ni crea cuentas.

## Permisos vigentes

- Lectura de `Niños`, `Asistencias`, `Maestros` y `Anuncios`: usuario autenticado con un perfil existente.
- Escritura en `Niños` y `Asistencias`: perfiles con rol `Maestro` o `Administrador`.
- Escritura en `Maestros` y `Anuncios`: solo `Administrador`.
- `Perfiles/{UID}`: cada cuenta solo puede leer su propio perfil; el cliente no puede modificar perfiles.
- Lectura y escritura en la raíz y en `Usuarios`: denegadas.

La app escribe las listas de niños y asistencias como ramas completas. Por eso las reglas actuales impiden el acceso público y limitan escrituras por rol, pero un maestro podría manipular una solicitud para modificar datos de otro salón. El aislamiento estricto por salón requiere cambiar el modelo de escritura antes de añadir más usuarios o roles.

## Si el inicio de sesión no avanza

Abre de nuevo la página publicada o recárgala completamente para recibir la última versión. La pantalla ahora indica si está verificando acceso, perfil o asistencias; si una etapa tarda demasiado, muestra un error y permite reintentar. No abras las reglas públicas para solucionar un problema de caché o de inicio de sesión.
