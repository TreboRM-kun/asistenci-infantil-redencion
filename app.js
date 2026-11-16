const HOJAS = {
  ninos: "Niños",
  asistencias: "Asistencias",
  maestros: "Maestros",
  anuncios: "Anuncios"
};

let anuncios = JSON.parse(
  localStorage.getItem("anunciosInfantilRedencion")
) || [];

let datosNinos = {};

function claveNino(salon, nombre) {
  return `${salon}::${nombre}`;
}

function normalizarCumpleanos(valor) {
  const texto = String(valor || "").trim();
  let partes;

  if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(texto)) {
    partes = texto.split("-").slice(1);
  } else if (/^\d{1,2}\/\d{1,2}$/.test(texto)) {
    partes = texto.split("/").reverse();
  } else if (/^\d{1,2}-\d{1,2}$/.test(texto)) {
    partes = texto.split("-");
    if (Number(partes[0]) > 12) partes.reverse();
  } else {
    return "";
  }

  const mes = Number(partes[0]);
  const dia = Number(partes[1]);
  const fecha = new Date(2024, mes - 1, dia);
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31 ||
      fecha.getMonth() !== mes - 1 || fecha.getDate() !== dia) {
    return "";
  }

  return `${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
}

function formatearCumpleanosEntrada(valor) {
  const normalizado = normalizarCumpleanos(valor);
  return normalizado ? normalizado.split("-").reverse().join("/") : "";
}

function obtenerDatosNino(salon, nombre) {
  return datosNinos[claveNino(salon, nombre)] || {
    cumpleanos: "",
    estado: "Activo",
    representante: "",
    telefonoRepresentante: "",
    alergico: false,
    alergias: "",
    fotoData: "",
    fotoTipo: ""
  };
}

function guardarDatosNinos() {
  localStorage.setItem("datosNinosRedencion", JSON.stringify(datosNinos));
}

function actualizarEstadoNino(salon, nombre) {
  const clave = claveNino(salon, nombre);
  const datos = datosNinos[clave] ||= { cumpleanos: "", estado: "Activo" };
  const estadoAnterior = datos.estado || "Activo";
  const semanasAnteriores = Number(datos.semanasSinAsistencia) || 0;
  const ultimoDomingoAnterior = datos.ultimoDomingoEstado || "";
  const inicioServicio = new Date("2026-09-20T00:00:00");
  const fechaAlta = datos.fechaAlta
    ? new Date(`${datos.fechaAlta}T00:00:00`)
    : inicioServicio;
  const fechaInicio = fechaAlta > inicioServicio ? fechaAlta : inicioServicio;
  const fechaFin = new Date(`${obtenerDomingoAnterior()}T00:00:00`);
  const registros = asistencias.filter(fila =>
    String(fila.Salon) === salon && String(fila.Nombre) === nombre
  );
  const manualFecha = datos.estadoManualFecha
    ? new Date(`${datos.estadoManualFecha}T00:00:00`)
    : null;
  let estado = "Activo";
  let semanasSinAsistencia = 0;
  let domingo = new Date(fechaInicio);
  if (fechaAlta > inicioServicio) {
    domingo.setDate(domingo.getDate() + 7);
  }

  if (manualFecha && manualFecha >= fechaInicio && manualFecha <= fechaFin) {
    estado = datos.estadoManual || estadoAnterior;
    semanasSinAsistencia = 0;
    if (domingo <= manualFecha) {
      domingo = new Date(manualFecha);
      domingo.setDate(domingo.getDate() + 7);
    }
  }

  while (domingo <= fechaFin) {
    const fechaTexto = domingo.toISOString().slice(0, 10);
    const registro = registros.find(fila => String(fila.Fecha) === fechaTexto);
    if (registro?.Asistencia === "Sí") {
      estado = "Activo";
      semanasSinAsistencia = 0;
    } else {
      semanasSinAsistencia++;
      if (semanasSinAsistencia >= 3) estado = "Inactivo";
    }
    domingo.setDate(domingo.getDate() + 7);
  }

  datos.estado = estado;
  datos.semanasSinAsistencia = semanasSinAsistencia;
  datos.ultimoDomingoEstado = fechaFin.toISOString().slice(0, 10);
  return estado !== estadoAnterior ||
    semanasSinAsistencia !== semanasAnteriores ||
    datos.ultimoDomingoEstado !== ultimoDomingoAnterior;
}

function actualizarEstadosNinos(salon, guardarLocalmente = true) {
  let cambiaronDatos = false;
  ninos[salon].forEach(nombre => {
    cambiaronDatos = actualizarEstadoNino(salon, nombre) || cambiaronDatos;
  });
  if (guardarLocalmente) guardarDatosNinos();
  return cambiaronDatos;
}

async function leerHoja(nombreHoja) {
  const firebase = await window.firebaseReady;
  const resultado = await firebase.get(
    firebase.ref(firebase.database, nombreHoja)
  );

  return resultado.exists() ? Object.values(resultado.val()) : [];
}

function leerArchivoComoDataURL(archivo) {
  return new Promise((resolver, rechazar) => {
    const lector = new FileReader();
    lector.onload = () => resolver(lector.result);
    lector.onerror = () => rechazar(lector.error || new Error("No se pudo leer el archivo."));
    lector.readAsDataURL(archivo);
  });
}

async function prepararImagen(archivo, limiteBytes) {
  if (archivo.size <= limiteBytes) {
    return { tipo: archivo.type, datos: await leerArchivoComoDataURL(archivo) };
  }

  let imagen;
  try {
    if (typeof createImageBitmap === "function") {
      imagen = await createImageBitmap(archivo);
    } else {
      imagen = await new Promise((resolver, rechazar) => {
        const url = URL.createObjectURL(archivo);
        const elemento = new Image();
        elemento.onload = () => {
          URL.revokeObjectURL(url);
          resolver(elemento);
        };
        elemento.onerror = () => {
          URL.revokeObjectURL(url);
          rechazar(new Error("No se pudo preparar la imagen."));
        };
        elemento.src = url;
      });
    }

    let escala = Math.min(1, 2048 / Math.max(imagen.width, imagen.height));
    const calidades = [0.88, 0.78, 0.68, 0.58];

    for (let intento = 0; intento < 9; intento++) {
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(imagen.width * escala));
      canvas.height = Math.max(1, Math.round(imagen.height * escala));
      const contexto = canvas.getContext("2d");
      if (!contexto) throw new Error("No se pudo preparar la compresión de la imagen.");
      contexto.fillStyle = "#fff";
      contexto.fillRect(0, 0, canvas.width, canvas.height);
      contexto.drawImage(imagen, 0, 0, canvas.width, canvas.height);

      for (const calidad of calidades) {
        const blob = await new Promise((resolver, rechazar) => {
          if (typeof canvas.toBlob === "function") {
            canvas.toBlob(resultado => {
              if (resultado) resolver(resultado);
              else rechazar(new Error("El navegador no pudo comprimir la imagen."));
            }, "image/jpeg", calidad);
            return;
          }

          try {
            const partes = canvas.toDataURL("image/jpeg", calidad).split(",");
            const binario = atob(partes[1]);
            const bytes = new Uint8Array(binario.length);
            for (let indice = 0; indice < binario.length; indice++) {
              bytes[indice] = binario.charCodeAt(indice);
            }
            resolver(new Blob([bytes], { type: "image/jpeg" }));
          } catch (error) {
            rechazar(error);
          }
        });
        if (blob.size <= limiteBytes) {
          return { tipo: blob.type, datos: await leerArchivoComoDataURL(blob) };
        }
      }
      escala *= 0.78;
    }
  } finally {
    imagen?.close();
  }

  throw new Error("No fue posible comprimir la imagen al tamaño permitido.");
}

async function reemplazarHoja(nombreHoja, filas) {
  const firebase = await window.firebaseReady;
  if (!firebase || typeof firebase.set !== "function") {
    throw new Error("La sincronización de Firebase no está disponible.");
  }
  await firebase.set(
    firebase.ref(firebase.database, nombreHoja),
    filas
  );
}

function sincronizarHoja(nombreHoja, filas) {
  reemplazarHoja(nombreHoja, filas).catch(error => {
    console.error(error);
  });
}

function filasDeNinos() {
  return Object.entries(ninos).flatMap(([salon, nombres]) =>
    nombres.map(nombre => ({
      Nombre: nombre,
      Salon: salon,
      Cumpleanos: obtenerDatosNino(salon, nombre).cumpleanos,
      Estado: obtenerDatosNino(salon, nombre).estado,
      SemanasSinAsistencia: Number(obtenerDatosNino(salon, nombre).semanasSinAsistencia) || 0,
      UltimoDomingoEstado: obtenerDatosNino(salon, nombre).ultimoDomingoEstado || "",
      EstadoManual: obtenerDatosNino(salon, nombre).estadoManual || "",
      EstadoManualFecha: obtenerDatosNino(salon, nombre).estadoManualFecha || "",
      FechaAlta: obtenerDatosNino(salon, nombre).fechaAlta || "",
      Representante: obtenerDatosNino(salon, nombre).representante || "",
      TelefonoRepresentante: obtenerDatosNino(salon, nombre).telefonoRepresentante || "",
      Alergico: Boolean(obtenerDatosNino(salon, nombre).alergico),
      Alergias: obtenerDatosNino(salon, nombre).alergias || "",
      FotoData: obtenerDatosNino(salon, nombre).fotoData || "",
      FotoTipo: obtenerDatosNino(salon, nombre).fotoTipo || ""
    }))
  );
}

async function cargarDatosDesdeAPI(sesionActiva = () => true) {
  try {
    const [filasNinos, filasAsistencias, filasMaestros, filasAnuncios] =
      await Promise.all([
        leerHoja(HOJAS.ninos),
        leerHoja(HOJAS.asistencias),
        leerHoja(HOJAS.maestros),
        leerHoja(HOJAS.anuncios)
      ]);

    if (!sesionActiva()) {
      throw new Error("La sesión de inicio ya no está activa.");
    }

    if (filasAnuncios.length) {
      anuncios = filasAnuncios;
      localStorage.setItem("anunciosInfantilRedencion", JSON.stringify(anuncios));
    } else {
      sincronizarHoja(HOJAS.anuncios, anuncios);
    }
    mostrarAnunciosLogin();

    if (filasNinos.length) {
      ninos = { Semillas: [], Plantas: [], Arboles: [] };
      filasNinos.forEach(fila => {
        if (ninos[fila.Salon]) {
          ninos[fila.Salon].push(fila.Nombre);
          datosNinos[claveNino(fila.Salon, fila.Nombre)] = {
            cumpleanos: normalizarCumpleanos(fila.Cumpleanos || fila.cumpleanos),
            estado: fila.Estado || fila.estado || "Activo",
            semanasSinAsistencia: Number(fila.SemanasSinAsistencia ?? fila.semanasSinAsistencia) || 0,
            ultimoDomingoEstado: fila.UltimoDomingoEstado || fila.ultimoDomingoEstado || "",
            estadoManual: fila.EstadoManual || fila.estadoManual || "",
            estadoManualFecha: fila.EstadoManualFecha || fila.estadoManualFecha || "",
            fechaAlta: fila.FechaAlta || fila.fechaAlta || "",
            representante: fila.Representante || fila.representante || "",
            telefonoRepresentante: fila.TelefonoRepresentante || fila.telefonoRepresentante || "",
            alergico: Boolean(fila.Alergico ?? fila.alergico),
            alergias: fila.Alergias || fila.alergias || "",
            fotoData: fila.FotoData || fila.fotoData || "",
            fotoTipo: fila.FotoTipo || fila.fotoTipo || ""
          };
        }
      });
    } else {
      sincronizarHoja(HOJAS.ninos, filasDeNinos());
    }

    if (filasAsistencias.length) {
      asistencias = filasAsistencias;
    }
    Object.keys(ninos).forEach(salon => actualizarEstadosNinos(salon, false));

    if (filasMaestros.length) {
      maestrosSalon = { Semillas: "", Plantas: "", Arboles: "" };
      filasMaestros.forEach(fila => {
        if (maestrosSalon[fila.Salon] !== undefined) {
          maestrosSalon[fila.Salon] = fila.Maestros || "";
        }
      });
      localStorage.setItem(
        "maestrosSalonRedencion",
        JSON.stringify(maestrosSalon)
      );
    } else {
      sincronizarHoja(
        HOJAS.maestros,
        Object.entries(maestrosSalon).map(([salon, maestros]) => ({
          Salon: salon,
          Maestros: maestros
        }))
      );
    }

  } catch (error) {
    console.error("No se pudieron cargar los datos protegidos de Firebase.", error);
    throw error;
  }
}

    localStorage.removeItem("usuariosRedencion");

    let ninos = { Semillas: [], Plantas: [], Arboles: [] };
    let asistencias = [];

    let usuarioActual = null;
    let instalacionPendiente = null;

    function actualizarBotonCambioContrasena() {
      document.getElementById("botonCambiarContrasena").classList.toggle(
        "oculto",
        usuarioActual?.rol !== "Administrador"
      );
    }

    function inicializarInterfaz() {
      prepararInstalacion();
      const fecha = document.getElementById("fecha");
      fecha.value = obtenerDomingoAnterior();

      document.getElementById("usuario").addEventListener("keydown", evento => {
        if (evento.key === "Enter") {
          evento.preventDefault();
          document.getElementById("contrasena").focus();
        }
      });

      document.getElementById("contrasena").addEventListener("keydown", evento => {
        if (evento.key === "Enter") {
          evento.preventDefault();
          iniciarSesion();
        }
      });

      mostrarAnunciosLogin();
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", inicializarInterfaz);
    } else {
      inicializarInterfaz();
    }

    function prepararInstalacion() {
      const boton = document.getElementById("botonInstalar");
      if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone) {
        boton.classList.add("oculto");
      }

      window.addEventListener("beforeinstallprompt", evento => {
        evento.preventDefault();
        instalacionPendiente = evento;
        boton.classList.remove("oculto");
      });

      window.addEventListener("appinstalled", () => {
        instalacionPendiente = null;
        boton.classList.add("oculto");
      });

      if ("serviceWorker" in navigator && window.isSecureContext) {
        navigator.serviceWorker.register("./service-worker.js")
          .catch(error => console.error("No se pudo preparar la instalación de la aplicación.", error));
      }
    }

    async function instalarAplicacion() {
      if (instalacionPendiente) {
        instalacionPendiente.prompt();
        const resultado = await instalacionPendiente.userChoice;
        instalacionPendiente = null;
        if (resultado.outcome === "accepted") {
          document.getElementById("botonInstalar").classList.add("oculto");
        }
        return;
      }

      if (!window.isSecureContext) {
        alert("Para instalar la aplicación, ábrala desde una dirección HTTPS o desde localhost. Los archivos abiertos directamente como file:// no se pueden instalar desde el navegador.");
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        alert("Para instalar la aplicación, toque Compartir y seleccione «Agregar a pantalla de inicio».");
      } else {
        alert("Si el navegador todavía no muestra la instalación, abra su menú y seleccione «Instalar aplicación» o «Agregar a pantalla de inicio».");
      }
    }

    function obtenerDomingoAnterior(fechaTexto) {
      const fecha = fechaTexto
        ? new Date(`${fechaTexto}T00:00:00`)
        : new Date();

      fecha.setHours(0, 0, 0, 0);
      fecha.setDate(fecha.getDate() - fecha.getDay());

      return [
        fecha.getFullYear(),
        String(fecha.getMonth() + 1).padStart(2, "0"),
        String(fecha.getDate()).padStart(2, "0")
      ].join("-");
    }

    function esDomingo(fechaTexto) {
      return fechaTexto && new Date(`${fechaTexto}T00:00:00`).getDay() === 0;
    }

    function validarFechaDomingo() {
      const campoFecha = document.getElementById("fecha");

      if (!esDomingo(campoFecha.value)) {
        alert("Las asistencias solo pueden registrarse para un domingo.");
        campoFecha.value = obtenerDomingoAnterior(campoFecha.value);
      }

      mostrarAsistencia();
    }

    function guardarNinos() {
      localStorage.setItem("ninosRedencion", JSON.stringify(ninos));
      sincronizarHoja(HOJAS.ninos, filasDeNinos());
    }

    function ordenarNinos(salon) {
      ninos[salon].sort((a, b) =>
        a.localeCompare(b, "es", { sensitivity: "base" })
      );
    }

        const maestrosIniciales = {
      Semillas: "",
      Plantas: "",
      Arboles: ""
    };

    let maestrosSalon = JSON.parse(
      localStorage.getItem("maestrosSalonRedencion")
    ) || maestrosIniciales;

    function guardarMaestrosSalon() {
      if (!usuarioActual || usuarioActual.rol !== "Administrador") {
        return;
      }

      const salon = document.getElementById("salon").value;
      const campo = document.getElementById("maestrosSalon");

      maestrosSalon[salon] = campo.value.trim().toUpperCase();

      localStorage.setItem(
        "maestrosSalonRedencion",
        JSON.stringify(maestrosSalon)
      );

      sincronizarHoja(
        HOJAS.maestros,
        Object.entries(maestrosSalon).map(([nombreSalon, maestros]) => ({
          Salon: nombreSalon,
          Maestros: maestros
        }))
      );
    }

    function mostrarMaestroSalon() {
      const salon = document.getElementById("salon").value;
      const campo = document.getElementById("maestrosSalon");

      if (!campo) {
        return;
      }

      campo.value = (maestrosSalon[salon] || "").toUpperCase();
      campo.readOnly = usuarioActual.rol !== "Administrador";
    }

    function escaparTexto(texto) {
      return texto
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function obtenerAsistencia(salon, fecha, nombre) {
      return asistencias.find(fila =>
        String(fila.Salon) === salon &&
        String(fila.Fecha) === fecha &&
        String(fila.Nombre) === nombre
      );
    }

    function obtenerDatosClase(salon, fecha) {
      return asistencias.find(fila =>
        String(fila.Salon) === salon && String(fila.Fecha) === fecha &&
        (fila.Comentario || fila.MediaData)
      ) || null;
    }

    function mostrarMultimediaClase(fila) {
      if (!fila?.MediaData || !fila.MediaTipo) return "";
      const datos = escaparTexto(fila.MediaData);
      if (fila.MediaTipo.startsWith("image/")) {
            return `<img class="multimedia-clase multimedia-ampliable" src="${datos}" alt="Archivo de la clase" title="Abrir archivo" onclick="abrirMultimediaDesdeElemento(event, this)">`;
      }
      if (fila.MediaTipo.startsWith("video/")) {
            return `<video class="multimedia-clase multimedia-ampliable" controls preload="metadata" src="${datos}" title="Abrir archivo" onclick="abrirMultimediaDesdeElemento(event, this)"></video>`;
      }
      if (fila.MediaTipo.startsWith("audio/")) {
            return `<audio class="multimedia-clase multimedia-ampliable" controls src="${datos}" title="Abrir archivo" onclick="abrirMultimediaDesdeElemento(event, this)"></audio>`;
      }
      return "";
    }

        function abrirMultimediaDesdeElemento(evento, elemento) {
          evento.preventDefault();
          evento.stopPropagation();
          const fuente = escaparTexto(elemento.currentSrc || elemento.src);
          const tipo = elemento.tagName === "VIDEO" ? "video" : elemento.tagName === "AUDIO" ? "audio" : "img";
          const atributos = tipo === "img" ? 'alt="Archivo multimedia ampliado"' : "controls autoplay";
          document.getElementById("contenidoMultimedia").innerHTML =
            `<${tipo} src="${fuente}" ${atributos}></${tipo}>`;
          document.getElementById("modalMultimedia").classList.remove("oculto");
        }

    function correoInternoDeUsuario(usuario) {
      const bytes = new TextEncoder().encode(usuario.trim().toLocaleLowerCase("es"));
      const identificador = Array.from(bytes, byte =>
        byte.toString(16).padStart(2, "0")
      ).join("");
      return `u${identificador}@asistencia-infantil-redencion.firebaseapp.com`;
    }

    function esperarConLimite(operacion, etapa, limiteMs = 30000) {
      let temporizador;
      return Promise.race([
        operacion,
        new Promise((_, rechazar) => {
          temporizador = setTimeout(
            () => rechazar(new Error(`LOGIN_TIMEOUT:${etapa}`)),
            limiteMs
          );
        })
      ]).finally(() => clearTimeout(temporizador));
    }

    async function iniciarSesion() {
      const usuario = document.getElementById("usuario").value.trim();
      const contrasena = document.getElementById("contrasena").value;
      const boton = document.getElementById("botonIngresar");
      const mensaje = document.getElementById("mensajeLogin");

      if (!usuario || !contrasena) {
        mensaje.textContent = "Escriba su usuario y contraseña.";
        return;
      }

      boton.disabled = true;
      mensaje.textContent = "Iniciando sesión...";

      try {
        const firebase = await window.firebaseReady;
        const credencial = await esperarConLimite(
          firebase.signInWithEmailAndPassword(
            firebase.auth,
            correoInternoDeUsuario(usuario),
            contrasena
          ),
          "autenticación"
        );
        const resultadoPerfil = await esperarConLimite(
          firebase.get(
            firebase.ref(firebase.database, `Perfiles/${credencial.user.uid}`)
          ),
          "perfil"
        );

        if (!resultadoPerfil.exists()) {
          throw new Error("La cuenta no tiene un perfil autorizado.");
        }

        const perfil = resultadoPerfil.val();
        const rolesPermitidos = ["Maestro", "Supervisor", "Administrador"];
        const salonesPermitidos = ["Semillas", "Plantas", "Arboles"];
        const perfilValido =
          rolesPermitidos.includes(perfil.rol) &&
          String(perfil.usuario || "").trim().toLocaleLowerCase("es") ===
            usuario.toLocaleLowerCase("es") &&
          (perfil.rol === "Maestro"
            ? salonesPermitidos.includes(perfil.salon)
            : perfil.salon === "todos");

        if (!perfilValido) {
          throw new Error("El perfil no coincide con el usuario o el rol.");
        }

        usuarioActual = {
          uid: credencial.user.uid,
          usuario: perfil.usuario,
          rol: perfil.rol,
          salon: perfil.salon
        };
        actualizarBotonCambioContrasena();
        await esperarConLimite(
          cargarDatosDesdeAPI(
            () => usuarioActual?.uid === credencial.user.uid
          ),
          "datos",
          120000
        );

        mensaje.textContent = "";
        document.getElementById("pantallaLogin").classList.add("oculto");
        document.querySelector(".anuncios-inicio").classList.add("oculto");
        document.getElementById("pantallaSistema").classList.remove("oculto");
        document.getElementById("informacionUsuario").textContent =
          `Usuario: ${usuarioActual.usuario} | Rol: ${usuarioActual.rol}`;

        const selectorSalon = document.getElementById("salon");
        const formulario = document.getElementById("formularioNino");
        if (usuarioActual.salon !== "todos") {
          selectorSalon.value = usuarioActual.salon;
          selectorSalon.disabled = true;
          document.getElementById("salonNuevoNino").value = usuarioActual.salon;
          document.getElementById("salonNuevoNino").disabled = true;
        } else {
          selectorSalon.disabled = false;
          document.getElementById("salonNuevoNino").disabled = false;
        }
        formulario.classList.toggle(
          "oculto",
          usuarioActual.rol !== "Maestro" &&
          usuarioActual.rol !== "Administrador"
        );

        mostrarAsistencia();
        mostrarPanelUsuarios();
        mostrarCintaCumpleanos();
      } catch (error) {
        console.error("No se pudo iniciar sesión en la aplicación.", error);
        try {
          const firebase = await window.firebaseReady;
          await esperarConLimite(firebase.signOut(firebase.auth), "cierre de sesión", 5000);
        } catch (errorCerrarSesion) {
          console.error("No se pudo cerrar la sesión de Firebase.", errorCerrarSesion);
        }
        usuarioActual = null;
        actualizarBotonCambioContrasena();
        if (error?.message === "La cuenta no tiene un perfil autorizado.") {
          mensaje.textContent =
            "La cuenta existe, pero falta asignarle un perfil en Firebase. Contacte al administrador.";
        } else if (error?.message === "El perfil no coincide con el usuario o el rol.") {
          mensaje.textContent =
            "El perfil de esta cuenta no coincide con el usuario o el salón asignado.";
        } else if (error?.code === "auth/too-many-requests") {
          mensaje.textContent =
            "Se realizaron demasiados intentos. Espere un momento y vuelva a intentarlo.";
        } else if (error?.message?.startsWith("LOGIN_TIMEOUT:")) {
          mensaje.textContent = error.message.endsWith(":autenticación")
            ? "Firebase tardó demasiado en verificar el acceso. Revise la conexión e intente de nuevo."
            : error.message.endsWith(":perfil")
              ? "El acceso se validó, pero no se pudo verificar el perfil. Contacte al administrador."
              : error.message.endsWith(":datos")
                ? "La descarga de datos (incluidas fotos y archivos) tardó más de 2 minutos. Revise la conexión e intente de nuevo."
                : "La conexión tardó demasiado. Intente de nuevo.";
        } else if (error?.code?.startsWith("auth/")) {
          mensaje.textContent = "Usuario o contraseña incorrectos.";
        } else {
          mensaje.textContent =
            "No se pudo cargar la información protegida. Intente de nuevo o contacte al administrador.";
        }
      } finally {
        boton.disabled = false;
      }
    }

    function abrirCambioContrasena() {
      if (!usuarioActual || usuarioActual.rol !== "Administrador") return;
      document.getElementById("nuevaContrasena").value = "";
      document.getElementById("confirmarNuevaContrasena").value = "";
      document.getElementById("mensajeCambioContrasena").textContent = "";
      document.getElementById("modalCambioContrasena").classList.remove("oculto");
    }

    async function guardarNuevaContrasena() {
      if (!usuarioActual || usuarioActual.rol !== "Administrador") {
        console.warn("Solo el administrador puede cambiar la contraseña desde esta sección.");
        return;
      }

      const nueva = document.getElementById("nuevaContrasena").value;
      const confirmar = document.getElementById("confirmarNuevaContrasena").value;
      const mensaje = document.getElementById("mensajeCambioContrasena");
      const boton = document.getElementById("botonGuardarContrasena");

      if (nueva.length < 6) {
        mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;
      }
      if (nueva !== confirmar) {
        mensaje.textContent = "Las contraseñas no coinciden.";
        return;
      }

      boton.disabled = true;
      mensaje.textContent = "Guardando contraseña...";
      try {
        const firebase = await window.firebaseReady;
        const usuarioAutenticado = firebase.auth.currentUser;
        if (!usuarioAutenticado) {
          throw new Error("No hay una sesión autenticada.");
        }
        await firebase.updatePassword(usuarioAutenticado, nueva);
        document.getElementById("nuevaContrasena").value = "";
        document.getElementById("confirmarNuevaContrasena").value = "";
        document.getElementById("modalCambioContrasena").classList.add("oculto");
        mostrarExito("La contraseña se cambió correctamente.");
      } catch (error) {
        console.error("No se pudo cambiar la contraseña.", error);
        mensaje.textContent = error?.code === "auth/requires-recent-login"
          ? "Vuelva a iniciar sesión y cambie su contraseña inmediatamente."
          : "No se pudo cambiar la contraseña. Intente de nuevo.";
      } finally {
        boton.disabled = false;
      }
    }

    function mostrarAsistencia() {
      const salon = document.getElementById("salon").value;
      const fecha = document.getElementById("fecha").value;

      mostrarMaestroSalon();

      if (!usuarioActual || !ninos[salon]) return;

      ordenarNinos(salon);

      const puedeModificar =
        usuarioActual.rol === "Maestro" ||
        usuarioActual.rol === "Administrador";

      const puedeEliminar = usuarioActual.rol === "Administrador";

      let html = `
        <h2>Salón: ${salon}</h2>
        <div class="tabla-scroll">
        <table class="tabla-asistencia">
          <tr>
            <th>Nombre</th>
            <th>Asistencia</th>
            <th>Comportamiento</th>
            <th>Participación</th>
            <th>Desarrollo de habilidades</th>
            <th>Observaciones</th>
          </tr>
      `;

      ninos[salon].forEach((nino, indice) => {
        const id = `${salon}-${indice}-${fecha}`;
        const asistenciaGuardada = obtenerAsistencia(salon, fecha, nino);

        html += `
          <tr>
            <td class="nombre-nino">
              <div class="nombre-lider">
                <span>${escaparTexto(nino)}</span>
                <span class="acciones-lider">
                  ${puedeEliminar ? `
                    <button class="accion-lider boton-rojo" title="Eliminar niño" aria-label="Eliminar niño"
                      onclick="eliminarNino('${salon}', ${indice})">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg>
                    </button>
                  ` : ""}
                  ${usuarioActual ? `
                    <button class="accion-lider boton-editar" title="Modificar niño" aria-label="Modificar niño"
                      onclick="editarNino('${salon}', ${indice})">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9a2.1 2.1 0 0 0-4-4L4 16v4Z" /><path d="m13.5 6.5 4 4" /></svg>
                    </button>
                  ` : ""}
                </span>
              </div>
            </td>

            <td>
              <input id="asistencia-${id}" type="checkbox"
                ${asistenciaGuardada?.Asistencia === "Sí" ? "checked" : ""}
                ${puedeModificar ? "" : "disabled"}
                onchange="actualizarCamposAsistencia('${id}')">
            </td>

            <td>
              <select id="comportamiento-${id}"
                ${puedeModificar && asistenciaGuardada?.Asistencia === "Sí" ? "" : "disabled"}>
                <option value="" ${!asistenciaGuardada?.Asistencia || asistenciaGuardada?.Asistencia !== "Sí" ? "selected" : ""}>-</option>
                <option ${asistenciaGuardada?.Comportamiento === "Excelente" ? "selected" : ""}>Excelente</option>
                <option ${asistenciaGuardada?.Comportamiento === "Bueno" ? "selected" : ""}>Bueno</option>
                <option ${asistenciaGuardada?.Comportamiento === "Regular" ? "selected" : ""}>Regular</option>
                <option ${asistenciaGuardada?.Comportamiento === "Necesita apoyo" ? "selected" : ""}>Necesita apoyo</option>
              </select>
            </td>

            <td>
              <select id="participacion-${id}"
                ${puedeModificar && asistenciaGuardada?.Asistencia === "Sí" ? "" : "disabled"}>
                <option value="" ${!asistenciaGuardada?.Asistencia || asistenciaGuardada?.Asistencia !== "Sí" ? "selected" : ""}>-</option>
                <option ${asistenciaGuardada?.Participacion === "Alta" ? "selected" : ""}>Alta</option>
                <option ${asistenciaGuardada?.Participacion === "Media" ? "selected" : ""}>Media</option>
                <option ${asistenciaGuardada?.Participacion === "Baja" ? "selected" : ""}>Baja</option>
              </select>
            </td>

            <td>
              <select id="desarrollo-${id}"
                ${puedeModificar && asistenciaGuardada?.Asistencia === "Sí" ? "" : "disabled"}>
                <option value="" ${!asistenciaGuardada?.Asistencia || asistenciaGuardada?.Asistencia !== "Sí" ? "selected" : ""}>-</option>
                <option ${asistenciaGuardada?.Desarrollo === "Excelente" ? "selected" : ""}>Excelente</option>
                <option ${asistenciaGuardada?.Desarrollo === "Bueno" ? "selected" : ""}>Bueno</option>
                <option ${asistenciaGuardada?.Desarrollo === "En proceso" ? "selected" : ""}>En proceso</option>
              </select>
            </td>

            <td>
              <textarea id="observaciones-${id}"
                ${puedeModificar && asistenciaGuardada?.Asistencia === "Sí" ? "" : "disabled"}
                placeholder="Observaciones">${asistenciaGuardada?.Asistencia === "Sí" ? escaparTexto(asistenciaGuardada?.Observaciones || "") : ""}</textarea>
            </td>

          </tr>
        `;
      });

      html += "</table></div>";

      if (puedeModificar) {
        const datosClase = obtenerDatosClase(salon, fecha);
        html += `
          <div class="datos-clase">
            <div>
              <label for="comentarioClase">Comentario de la clase:</label>
              <textarea id="comentarioClase" placeholder="Comentario de la clase">${escaparTexto(datosClase?.Comentario || "")}</textarea>
            </div>
            <div>
              <label for="multimediaClase">Archivo multimedia (imagen, video o audio):</label>
              <input id="multimediaClase" type="file" accept="image/*,video/*,audio/*">
              <small>Imagen/audio hasta 2 MB o video hasta 5 MB.</small>
              ${mostrarMultimediaClase(datosClase)}
            </div>
          </div>
          <br>
          <button onclick="guardarAsistencia()">Guardar asistencia</button>
        `;
      } else {
        html += `
          <p><strong>Modo consulta:</strong>
          solamente puede consultar la información.</p>
        `;
      }

      document.getElementById("tablaAsistencia").innerHTML = html;
    }

    function actualizarCamposAsistencia(id) {
      const asistencia = document.getElementById(`asistencia-${id}`);
      const habilitado = asistencia.checked && !asistencia.disabled;
      ["comportamiento", "participacion", "desarrollo", "observaciones"].forEach(campo => {
        const elemento = document.getElementById(`${campo}-${id}`);
        elemento.disabled = !habilitado;
        if (!habilitado) {
          if (elemento.tagName === "SELECT") elemento.value = "";
          else elemento.value = "";
        }
      });
    }

    function agregarNino() {
      const nombre = document.getElementById("nombreNino").value.trim();
      const cumpleanos = normalizarCumpleanos(
        document.getElementById("cumpleanosNino").value
      );
      const salonNuevo = document.getElementById("salonNuevoNino").value;
      const mensaje = document.getElementById("mensajeNino");

      if (!nombre) {
        mensaje.className = "mensaje";
        mensaje.textContent = "Escriba el nombre del niño.";
        return;
      }

      if (ninos[salonNuevo].includes(nombre)) {
        mensaje.className = "mensaje";
        mensaje.textContent = "Ese niño ya existe en este salón.";
        return;
      }

      ninos[salonNuevo].push(nombre);
      datosNinos[claveNino(salonNuevo, nombre)] = {
        cumpleanos,
        estado: "Activo",
        representante: "",
        telefonoRepresentante: "",
        alergico: false,
        alergias: "",
        fotoData: "",
        fotoTipo: "",
        fechaAlta: obtenerDomingoAnterior()
      };
      guardarDatosNinos();
      ordenarNinos(salonNuevo);
      guardarNinos();

      document.getElementById("nombreNino").value = "";
      document.getElementById("cumpleanosNino").value = "";
      mensaje.className = "exito";
      mensaje.textContent = "Niño agregado correctamente.";

      if (document.getElementById("salon").value === salonNuevo) {
        mostrarAsistencia();
      }
    }

    function eliminarNino(salon, indice) {
      if (!usuarioActual || usuarioActual.rol !== "Administrador") return;
      const nombre = ninos[salon][indice];

      ninoEliminacionPendiente = { salon, indice };
      document.getElementById("textoConfirmacionNino").textContent =
        `¿Está seguro de eliminar a ${nombre}?`;
      document.getElementById("modalConfirmacionNino")
        .classList.remove("oculto");
    }

    function eliminarNinoConfirmado() {
      if (!usuarioActual || usuarioActual.rol !== "Administrador" ||
          !ninoEliminacionPendiente) {
        return;
      }

      const { salon, indice } = ninoEliminacionPendiente;
      const nombre = ninos[salon][indice];
      ninos[salon].splice(indice, 1);
      delete datosNinos[claveNino(salon, nombre)];
      guardarDatosNinos();
      guardarNinos();
      ninoEliminacionPendiente = null;
      cerrarModal("modalConfirmacionNino");
      mostrarAsistencia();
    }

    async function guardarAsistencia() {
      const salon = document.getElementById("salon").value;
      const fecha = document.getElementById("fecha").value;
      const comentario = document.getElementById("comentarioClase")?.value.trim() || "";
      const archivo = document.getElementById("multimediaClase")?.files[0];
      const datosClase = obtenerDatosClase(salon, fecha);

      if (!esDomingo(fecha)) {
        alert("No se puede guardar la asistencia: seleccione un domingo.");
        return;
      }

      let multimedia;
      if (archivo) {
        const esImagen = archivo.type.startsWith("image/");
        const limite = archivo.type.startsWith("video/") ? 5 * 1024 * 1024 : 2 * 1024 * 1024;
        if (!esImagen && archivo.size > limite) {
          alert(`El archivo supera el límite permitido de ${archivo.type.startsWith("video/") ? "5 MB" : "2 MB"}.`);
          return;
        }
        try {
          multimedia = esImagen
            ? await prepararImagen(archivo, limite)
            : { tipo: archivo.type, datos: await leerArchivoComoDataURL(archivo) };
        } catch (error) {
          console.error("No se pudo preparar el archivo multimedia de la asistencia.", error);
          alert("No se pudo preparar el archivo multimedia. Intente con otra imagen.");
          return;
        }
      } else {
        multimedia = { tipo: datosClase?.MediaTipo || "", datos: datosClase?.MediaData || "" };
      }

      const filasAsistencia = ninos[salon].map((nombre, indice) => {
        const id = `${salon}-${indice}-${fecha}`;

        return {
          Fecha: fecha,
          Salon: salon,
          Nombre: nombre,
          Asistencia: document.getElementById(`asistencia-${id}`).checked
            ? "Sí"
            : "No",
          Comportamiento: document.getElementById(`comportamiento-${id}`).value,
          Participacion: document.getElementById(`participacion-${id}`).value,
          Desarrollo: document.getElementById(`desarrollo-${id}`).value,
          Observaciones: document.getElementById(`observaciones-${id}`).value,
          Comentario: comentario,
          MediaTipo: multimedia.tipo,
          MediaData: multimedia.datos
        };
      });

      asistencias = asistencias.filter(fila =>
        String(fila.Fecha) !== fecha || String(fila.Salon) !== salon
      );
      asistencias.push(...filasAsistencia);
      const sincronizada = await sincronizarAsistencias(
        fecha,
        salon,
        filasAsistencia
      );

      actualizarEstadosNinos(salon);
      guardarNinos();

      mostrarExito(
        sincronizada
          ? "Asistencia guardada correctamente."
          : "No se pudo sincronizar. La asistencia queda solo en esta pantalla; revise la conexión y vuelva a guardar antes de salir."
      );
    }

    async function sincronizarAsistencias(fecha, salon, filasNuevas) {
      try {
        const filasActuales = await leerHoja(HOJAS.asistencias);
        const restantes = filasActuales.filter(fila =>
          fila.Fecha !== fecha || fila.Salon !== salon
        );

        await reemplazarHoja(
          HOJAS.asistencias,
          restantes.concat(filasNuevas)
        );
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    }

    function mostrarPanelUsuarios() {
  const botonResumen = document.getElementById("botonResumenNino");
  const botonResumenClase = document.getElementById("botonResumenClase");

  if (usuarioActual &&
      (usuarioActual.rol === "Supervisor" ||
       usuarioActual.rol === "Administrador")) {
    botonResumen.classList.remove("oculto");
  } else {
    botonResumen.classList.add("oculto");
  }

  botonResumenClase.classList.toggle(
    "oculto",
    !usuarioActual || (usuarioActual.rol !== "Supervisor" && usuarioActual.rol !== "Administrador")
  );
}

function nombreMesCumpleanos(fechaTexto) {
  if (!fechaTexto) return "";
  const [mes, dia] = normalizarCumpleanos(fechaTexto).split("-");
  return new Date(2024, Number(mes) - 1, Number(dia)).toLocaleDateString("es-MX", {
    day: "2-digit", month: "long"
  });
}

function obtenerNinosConCumpleanos() {
  return Object.entries(ninos).flatMap(([salon, nombres]) => nombres.map(nombre => ({
    salon, nombre, ...obtenerDatosNino(salon, nombre)
  })).filter(nino => nino.cumpleanos));
}

function cumpleanosEstaSemana(fechaTexto) {
  if (!fechaTexto) return false;
  const [mes, dia] = fechaTexto.split("-").map(Number);
  const hoy = new Date();
  const inicio = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  inicio.setDate(inicio.getDate() - ((inicio.getDay() + 6) % 7));
  const fin = new Date(inicio);
  fin.setDate(fin.getDate() + 6);
  const fecha = new Date(inicio.getFullYear(), mes - 1, dia);
  if (fecha < inicio) fecha.setFullYear(fecha.getFullYear() + 1);
  return fecha >= inicio && fecha <= fin;
}

function mostrarCintaCumpleanos() {
  const mensajes = obtenerNinosConCumpleanos()
    .filter(nino => cumpleanosEstaSemana(nino.cumpleanos))
    .map(nino => `${nino.nombre} (${nino.salon})`);
  mostrarCinta("cintaCumpleanosSistema", mensajes.length ? [`CUMPLEAÑOS DE LA SEMANA: ${mensajes.join("  ·  ")}`] : []);
}

function mostrarCinta(id, mensajes) {
  const cinta = document.getElementById(id);
  if (!cinta || !mensajes.length) {
    if (cinta) {
      cinta.classList.remove("visible");
      cinta.innerHTML = "";
    }
    return;
  }
  cinta.classList.toggle("cinta-anuncios", id === "cintaAnunciosLogin");
  cinta.classList.toggle("cinta-cumpleanos", id === "cintaCumpleanosSistema");
  cinta.innerHTML = `<div class="cinta-contenido">${mensajes.map(mensaje => `<span>${escaparTexto(mensaje)}</span>`).join("")}</div>`;
  cinta.classList.add("visible");
}

function textoAnuncio(anuncio) {
  return anuncio.Titulo ? `ANUNCIO: ${anuncio.Titulo} | ${anuncio.Texto}` : `ANUNCIO: ${anuncio.Texto}`;
}

function formatearFechaAnuncio(fechaTexto) {
  if (!fechaTexto) return "";

  let fecha;
  if (/^\d{4}-\d{2}-\d{2}$/.test(String(fechaTexto))) {
    fecha = new Date(`${fechaTexto}T00:00:00`);
  } else {
    fecha = new Date(Number(fechaTexto));
  }

  if (Number.isNaN(fecha.getTime())) return "";

  return fecha.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function ordenarAnuncios(lista) {
  return [...lista].sort((a, b) => {
    const fechaA = a.FechaLimite ? Date.parse(`${a.FechaLimite}T00:00:00`) : Infinity;
    const fechaB = b.FechaLimite ? Date.parse(`${b.FechaLimite}T00:00:00`) : Infinity;
    return (fechaA - fechaB) ||
      (a.Rol === "Administrador" ? 0 : 1) - (b.Rol === "Administrador" ? 0 : 1) ||
      Number(b.Fecha || 0) - Number(a.Fecha || 0);
  });
}

function mostrarAnunciosLogin() {
  const lista = document.getElementById("listaAnunciosInicio");
  if (!lista) return;

  const vigentes = ordenarAnuncios(anuncios.filter(anuncioVigente));
  const seccion = lista.parentElement;
  seccion?.classList.toggle("oculto", vigentes.length === 0);

  lista.classList.toggle("una-columna", vigentes.length === 1);

  lista.innerHTML = vigentes.map(anuncio => {
    const fecha = anuncio.FechaLimite || anuncio.Fecha;
    const multimedia = anuncio.MediaTipo?.startsWith("image/")
      ? `<img class="anuncio-multimedia multimedia-ampliable" src="${escaparTexto(anuncio.MediaData)}" alt="Imagen del anuncio" onclick="abrirMultimediaDesdeElemento(event, this)">`
      : anuncio.MediaTipo?.startsWith("video/")
        ? `<video class="anuncio-multimedia multimedia-ampliable" controls preload="metadata" src="${escaparTexto(anuncio.MediaData)}" onclick="abrirMultimediaDesdeElemento(event, this)"></video>`
        : anuncio.MediaTipo?.startsWith("audio/")
          ? `<audio class="anuncio-multimedia multimedia-ampliable" controls src="${escaparTexto(anuncio.MediaData)}" onclick="abrirMultimediaDesdeElemento(event, this)"></audio>`
          : "";

    return `
      <article class="anuncio-inicio">
        <div class="anuncio-cabecera">
          <h3>${escaparTexto(anuncio.Titulo || "Anuncio")}</h3>
          ${fecha ? `<span class="anuncio-fecha">${formatearFechaAnuncio(fecha)}</span>` : ""}
        </div>
        <div>${escaparTexto(anuncio.Texto || "")}</div>
        ${multimedia}
      </article>
    `;
  }).join("");
}

function anuncioVigente(anuncio) {
  return !anuncio.FechaLimite || anuncio.FechaLimite >= obtenerFechaActual();
}

function obtenerFechaActual() {
  const fecha = new Date();
  return [fecha.getFullYear(), String(fecha.getMonth() + 1).padStart(2, "0"), String(fecha.getDate()).padStart(2, "0")].join("-");
}

function mostrarTarjetaAnuncio(anuncio, indice, pasado = false) {
  return `
    <div class="anuncio-item ${anuncio.Rol === "Administrador" ? "prioridad" : ""} ${pasado ? "anuncio-pasado" : ""}">
      <div class="anuncio-cabecera">
        <strong>${escaparTexto(anuncio.Titulo || "Anuncio")}</strong>
        ${anuncio.FechaLimite ? `<span class="anuncio-fecha">${formatearFechaAnuncio(anuncio.FechaLimite)}</span>` : ""}
      </div>
      <span>${escaparTexto(anuncio.Texto)}</span>
      ${anuncio.MediaTipo?.startsWith("image/") ? `<img class="anuncio-multimedia multimedia-ampliable" src="${escaparTexto(anuncio.MediaData)}" alt="Imagen del anuncio" title="Abrir archivo" onclick="abrirMultimediaDesdeElemento(event, this)">` : ""}
      ${anuncio.MediaTipo?.startsWith("video/") ? `<video class="anuncio-multimedia multimedia-ampliable" controls preload="metadata" src="${escaparTexto(anuncio.MediaData)}" title="Abrir archivo" onclick="abrirMultimediaDesdeElemento(event, this)"></video>` : ""}
      ${anuncio.Rol === "Administrador" ? "<small>Prioridad administrativa</small>" : ""}
      ${usuarioActual?.rol === "Administrador" ? `<button onclick="editarAnuncio(${indice})">Modificar anuncio</button><button class="boton-eliminar-anuncio boton-rojo" onclick="confirmarEliminarAnuncio(${indice})">Eliminar anuncio</button>` : ""}
    </div>
  `;
}

function mostrarListaAnuncios() {
  const lista = document.getElementById("listaAnuncios");
  lista.innerHTML = ordenarAnuncios(anuncios.filter(anuncioVigente))
    .map(anuncio => mostrarTarjetaAnuncio(anuncio, anuncios.indexOf(anuncio)))
    .join("") || "<p>No hay anuncios publicados.</p>";
  document.getElementById("listaAnunciosPasados").innerHTML = ordenarAnuncios(anuncios.filter(anuncio => !anuncioVigente(anuncio)))
    .map(anuncio => mostrarTarjetaAnuncio(anuncio, anuncios.indexOf(anuncio), true))
    .join("") || "<p>No hay anuncios pasados.</p>";
}

function abrirAnuncios() {
  mostrarListaAnuncios();
  document.getElementById("modalAnuncios").classList.remove("oculto");
}

async function guardarAnuncio() {
  if (!usuarioActual) return;
  const titulo = document.getElementById("tituloAnuncio").value.trim();
  const texto = document.getElementById("textoAnuncio").value.trim();
  const fechaLimite = document.getElementById("fechaAnuncio").value;
  if (!texto) return alert("Escriba el contenido del anuncio.");
  const archivo = document.getElementById("multimediaAnuncio").files[0];
  const limite = archivo?.type.startsWith("video/") ? 5 * 1024 * 1024 : 2 * 1024 * 1024;
  if (archivo && archivo.size > limite) return alert("El archivo supera el límite permitido.");
  const multimedia = archivo ? await new Promise((resolver, rechazar) => {
    const lector = new FileReader();
    lector.onload = () => resolver({ tipo: archivo.type, datos: lector.result });
    lector.onerror = rechazar;
    lector.readAsDataURL(archivo);
  }) : {
    tipo: anuncioEditando === null ? "" : anuncios[anuncioEditando].MediaTipo || "",
    datos: anuncioEditando === null ? "" : anuncios[anuncioEditando].MediaData || ""
  };
  const datosAnuncio = { Titulo: titulo, Texto: texto, Autor: usuarioActual.usuario, Rol: usuarioActual.rol,
    Fecha: Date.now(), FechaLimite: fechaLimite, MediaTipo: multimedia.tipo, MediaData: multimedia.datos };
  if (anuncioEditando === null) anuncios.push(datosAnuncio);
  else anuncios[anuncioEditando] = { ...anuncios[anuncioEditando], ...datosAnuncio };
  localStorage.setItem("anunciosInfantilRedencion", JSON.stringify(anuncios));
  await reemplazarHoja(HOJAS.anuncios, anuncios);
  document.getElementById("tituloAnuncio").value = "";
  document.getElementById("textoAnuncio").value = "";
  document.getElementById("fechaAnuncio").value = "";
  document.getElementById("multimediaAnuncio").value = "";
  anuncioEditando = null;
  document.getElementById("botonGuardarAnuncio").textContent = "Publicar anuncio";
  document.getElementById("botonCancelarEdicionAnuncio").classList.add("oculto");
  mostrarListaAnuncios();
  mostrarAnunciosLogin();
  mostrarExito("El anuncio fue publicado correctamente.");
}

let anuncioPendiente = null;
let anuncioEditando = null;

function editarAnuncio(indice) {
  if (usuarioActual?.rol !== "Administrador") return;
  const anuncio = anuncios[indice];
  anuncioEditando = indice;
  document.getElementById("tituloAnuncio").value = anuncio.Titulo || "";
  document.getElementById("textoAnuncio").value = anuncio.Texto || "";
  document.getElementById("fechaAnuncio").value = anuncio.FechaLimite || "";
  document.getElementById("multimediaAnuncio").value = "";
  document.getElementById("botonGuardarAnuncio").textContent = "Guardar cambios";
  document.getElementById("botonCancelarEdicionAnuncio").classList.remove("oculto");
}

function cancelarEdicionAnuncio() {
  anuncioEditando = null;
  document.getElementById("tituloAnuncio").value = "";
  document.getElementById("textoAnuncio").value = "";
  document.getElementById("fechaAnuncio").value = "";
  document.getElementById("multimediaAnuncio").value = "";
  document.getElementById("botonGuardarAnuncio").textContent = "Publicar anuncio";
  document.getElementById("botonCancelarEdicionAnuncio").classList.add("oculto");
  mostrarListaAnuncios();
  mostrarAnunciosLogin();
}

function confirmarEliminarAnuncio(indice) {
  if (usuarioActual?.rol !== "Administrador") return;
  anuncioPendiente = indice;
  document.getElementById("textoConfirmacionAnuncio").textContent =
    `¿Está seguro de eliminar el anuncio "${anuncios[indice].Titulo || "Anuncio"}"?`;
  document.getElementById("modalConfirmacionAnuncio").classList.remove("oculto");
}

async function eliminarAnuncioConfirmado() {
  if (usuarioActual?.rol !== "Administrador" || anuncioPendiente === null) return;
  anuncios.splice(anuncioPendiente, 1);
  anuncioPendiente = null;
  localStorage.setItem("anunciosInfantilRedencion", JSON.stringify(anuncios));
  await reemplazarHoja(HOJAS.anuncios, anuncios);
  cerrarModal("modalConfirmacionAnuncio");
  mostrarListaAnuncios();
  mostrarAnunciosLogin();
  mostrarExito("El anuncio fue eliminado correctamente.");
}

    function cargarNinosResumen() {
  const salon = document.getElementById("resumenSalon").value;
  const selectorNino = document.getElementById("resumenNino");

  selectorNino.innerHTML = ninos[salon]
    .map(nino => `
      <option value="${escaparTexto(nino)}">${escaparTexto(nino)}</option>
    `)
    .join("");
}

    function abrirResumenNino() {
  if (!usuarioActual ||
      (usuarioActual.rol !== "Supervisor" &&
       usuarioActual.rol !== "Administrador")) {
    return;
  }

  const salon = usuarioActual.salon === "todos"
    ? document.getElementById("salon").value
    : usuarioActual.salon;
  const domingoActual = obtenerDomingoAnterior();

  document.getElementById("resumenSalon").value = salon;
  document.getElementById("resumenDesde").value = "2026-09-20";
  document.getElementById("resumenHasta").value = domingoActual;
  cargarNinosResumen();
  document.getElementById("contenidoResumenNino").innerHTML = "";
  document.getElementById("modalResumenNino").classList.remove("oculto");
}

function abrirResumenClase() {
  if (!usuarioActual || (usuarioActual.rol !== "Supervisor" && usuarioActual.rol !== "Administrador")) return;
  const salon = usuarioActual.salon === "todos"
    ? document.getElementById("salon").value
    : usuarioActual.salon;
  document.getElementById("resumenClaseSalon").value = salon;
  document.getElementById("resumenClaseFecha").value = document.getElementById("fecha").value;
  document.getElementById("contenidoResumenClase").innerHTML = "";
  document.getElementById("modalResumenClase").classList.remove("oculto");
}

function mostrarResumenClase() {
  if (!usuarioActual || (usuarioActual.rol !== "Supervisor" && usuarioActual.rol !== "Administrador")) return;
  const salonSeleccionado = document.getElementById("resumenClaseSalon").value;
  const fecha = document.getElementById("resumenClaseFecha").value;
  if (!fecha || !esDomingo(fecha)) return alert("Seleccione una fecha que sea domingo.");
  const salones = salonSeleccionado === "todos"
    ? Object.keys(ninos)
    : [salonSeleccionado];
  const lideresPorSalon = salones.map(salon => ({
    salon,
    nombres: ninos[salon] || [],
    registros: asistencias.filter(fila =>
      String(fila.Salon) === salon && String(fila.Fecha) === fecha
    )
  }));
  const totalNinos = lideresPorSalon.reduce((total, grupo) => total + grupo.nombres.length, 0);
  const totalAsistentes = lideresPorSalon.reduce(
    (total, grupo) => total + grupo.nombres.filter(nombre =>
      grupo.registros.some(registro =>
        String(registro.Nombre) === nombre && registro.Asistencia === "Sí"
      )
    ).length,
    0
  );
  const totalRegistros = lideresPorSalon.reduce((total, grupo) => total + grupo.registros.length, 0);
  const desgloseAsistencia = salonSeleccionado === "todos"
    ? `<div class="asistencia-por-salon">
        ${lideresPorSalon.map(grupo => {
          const asistentesSalon = grupo.nombres.filter(nombre =>
            grupo.registros.some(registro =>
              String(registro.Nombre) === nombre && registro.Asistencia === "Sí"
            )
          ).length;
          const claseCero = asistentesSalon === 0 || grupo.registros.length === 0
            ? "asistencia-cero"
            : "";
          return `<span><span>${escaparTexto(grupo.salon)}</span><span class="conteo-asistencia ${claseCero}">${asistentesSalon}</span></span>`;
        }).join("")}
        <span class="asistencia-total"><span>Total</span><span class="conteo-asistencia">${totalAsistentes}</span></span>
      </div>`
    : `<strong>${totalAsistentes}</strong>`;
  const filas = lideresPorSalon.flatMap(({ salon, nombres, registros }) =>
    nombres.map(nombre => {
      const registro = registros.find(fila => String(fila.Nombre) === nombre);
      const asistio = registro?.Asistencia === "Sí";
      return `<tr class="${!asistio ? "fila-falta" : ""}">
          ${salonSeleccionado === "todos" ? `<td class="col-salon">${escaparTexto(salon)}</td>` : ""}
          <td class="col-nino">${escaparTexto(nombre)}</td>
          <td>${escaparTexto(obtenerDatosNino(salon, nombre).estado || "Activo")}</td>
          <td>${asistio ? "Asistió" : "Faltó"}</td>
          <td>${asistio ? escaparTexto(registro?.Comportamiento || "-") : "-"}</td>
          <td>${asistio ? escaparTexto(registro?.Participacion || "-") : "-"}</td>
          <td>${asistio ? escaparTexto(registro?.Desarrollo || "-") : "-"}</td>
          <td class="col-observaciones">${asistio ? escaparTexto(registro?.Observaciones || "-") : "-"}</td>
        </tr>`;
    })
  ).join("");
  const datosClases = lideresPorSalon.map(({ salon }) => ({
    salon,
    datos: obtenerDatosClase(salon, fecha)
  })).filter(({ datos }) => datos?.Comentario || datos?.MediaData);
  const detalleClase = datosClases.map(({ salon, datos }) => `
    <section class="detalle-resumen-clase">
      ${salonSeleccionado === "todos" ? `<h3>${escaparTexto(salon)}</h3>` : ""}
      ${datos.Comentario ? `<div class="resumen-dato">Comentario de la clase<strong>${escaparTexto(datos.Comentario)}</strong></div>` : ""}
      ${mostrarMultimediaClase(datos)}
    </section>
  `).join("");
  document.getElementById("contenidoResumenClase").innerHTML = `
    <div class="resumen-datos">
      <div class="resumen-dato">Niños<strong>${totalNinos}</strong></div>
    <div class="resumen-dato">Asistieron${desgloseAsistencia}</div>
      <div class="resumen-dato">Faltaron<strong>${totalNinos - totalAsistentes}</strong></div>
      <div class="resumen-dato">Registros guardados<strong>${totalRegistros}</strong></div>
    </div>
    <div class="tabla-scroll">
      <table class="tabla-resumen">
        <tr>
          ${salonSeleccionado === "todos" ? `<th class="col-salon">Salón</th>` : ""}
          <th class="col-nino">Niño</th>
          <th>Estado</th>
          <th>Asistencia</th>
          <th>Comportamiento</th>
          <th>Participación</th>
          <th>Desarrollo</th>
          <th class="col-observaciones">Observaciones</th>
        </tr>
        ${filas || `<tr><td colspan="${salonSeleccionado === "todos" ? 8 : 7}">No hay niños registrados en ${salonSeleccionado === "todos" ? "los salones" : "este salón"}.</td></tr>`}
      </table>
    </div>
    ${detalleClase || (!ninos[salonSeleccionado] && salonSeleccionado !== "todos" ? "" : "<p>No hay comentarios ni archivos multimedia de clase para esta fecha.</p>")}
  `;
}

function mostrarCalendarioCumpleanos() {
  const mesTexto = document.getElementById("mesCumpleanos").value;
  const mes = Number(mesTexto);
  const anioActual = new Date().getFullYear();
  const porDia = {};
  obtenerNinosConCumpleanos().forEach(nino => {
    (porDia[nino.cumpleanos] ||= []).push(nino);
  });
  const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  let html = `<div class="calendario-cumpleanos">${dias.map(dia => `<div class="dia-semana">${dia}</div>`).join("")}`;
  const primerDiaMes = new Date(anioActual, mes - 1, 1);
  const diaInicio = new Date(primerDiaMes);
  diaInicio.setDate(diaInicio.getDate() - ((diaInicio.getDay() + 6) % 7));
  const diasEnMes = new Date(anioActual, mes, 0).getDate();
  const numeroCeldas = Math.ceil((((primerDiaMes.getDay() + 6) % 7) + diasEnMes) / 7) * 7;

  for (let indice = 0; indice < numeroCeldas; indice++) {
    const fecha = new Date(diaInicio);
    fecha.setDate(diaInicio.getDate() + indice);
    const mesCelda = fecha.getMonth() + 1;
    const claveCumpleanos = `${String(mesCelda).padStart(2, "0")}-${String(fecha.getDate()).padStart(2, "0")}`;
    const cumpleaneros = porDia[claveCumpleanos] || [];
    const clasesMes = mesCelda === mes ? "" : " otro-mes";
    html += `<button type="button" class="dia-cumpleanos${clasesMes}" aria-label="${fecha.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" })}" onclick="abrirCumpleanosDia(${mesCelda}, ${fecha.getDate()}, ${fecha.getFullYear()})"><span class="numero-dia">${fecha.getDate()}</span>${cumpleaneros.map(nino => `<span class="cumpleanero"><strong>${escaparTexto(nino.nombre)}</strong><br>${escaparTexto(nino.salon)}<img class="foto-cumpleanero" src="${escaparTexto(fuenteFotoNino(nino))}" alt="Foto de ${escaparTexto(nino.nombre)}"></span>`).join("")}</button>`;
  }
  document.getElementById("calendarioCumpleanos").innerHTML = `${html}</div>`;
}

const ICONO_USUARIO_NINO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23174ea6'%3E%3Cpath d='M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.2 0-9 2.7-9 6v2h18v-2c0-3.3-3.8-6-9-6Z'/%3E%3C/svg%3E";

function fuenteFotoNino(nino) {
  return nino?.fotoData || ICONO_USUARIO_NINO;
}

function abrirCumpleanosDia(mes, dia, anio = new Date().getFullYear()) {
  const cumpleanos = obtenerNinosConCumpleanos().filter(nino => {
    const [mesNino, diaNino] = nino.cumpleanos.split("-").map(Number);
    return mesNino === mes && diaNino === dia;
  });
  const fecha = new Date(anio, mes - 1, dia);
  document.getElementById("tituloCumpleanosDia").textContent =
    `Cumpleaños del ${fecha.toLocaleDateString("es-MX", { day: "numeric", month: "long" })}`;
  document.getElementById("listaCumpleanosDia").innerHTML = cumpleanos.length
    ? cumpleanos.map(nino => `
      <article class="cumpleanero-dia">
        <img class="foto-cumpleanero multimedia-ampliable"
          src="${escaparTexto(fuenteFotoNino(nino))}"
          alt="Foto de ${escaparTexto(nino.nombre)}"
          title="Abrir foto"
          onclick="abrirMultimediaDesdeElemento(event, this)">
        <div><strong>${escaparTexto(nino.nombre)}</strong><br>
          <span>Salón: ${escaparTexto(nino.salon)}</span>
        </div>
      </article>
    `).join("")
    : "<p>No hay cumpleaños registrados para este día.</p>";
  document.getElementById("modalCumpleanosDia").classList.remove("oculto");
}

function abrirCalendarioCumpleanos() {
  document.getElementById("mesCumpleanos").value = String(new Date().getMonth() + 1).padStart(2, "0");
  mostrarCalendarioCumpleanos();
  document.getElementById("modalCumpleanos").classList.remove("oculto");
}

    function cerrarResumenNino() {
  document.getElementById("modalResumenNino").classList.add("oculto");
}

    function obtenerDomingosEntre(desdeTexto, hastaTexto) {
  const domingos = [];
  const fecha = new Date(`${desdeTexto}T00:00:00`);
  const hasta = new Date(`${hastaTexto}T00:00:00`);

  while (fecha <= hasta) {
    domingos.push([
      fecha.getFullYear(),
      String(fecha.getMonth() + 1).padStart(2, "0"),
      String(fecha.getDate()).padStart(2, "0")
    ].join("-"));
    fecha.setDate(fecha.getDate() + 7);
  }

  return domingos;
}

    function valorMasFrecuente(filas, propiedad) {
  const cantidades = {};

  filas.forEach(fila => {
    const valor = String(fila[propiedad] || "").trim();
    if (valor) {
      cantidades[valor] = (cantidades[valor] || 0) + 1;
    }
  });

  const valores = Object.keys(cantidades);
  if (!valores.length) {
    return "Sin datos";
  }

  return valores.sort((a, b) => cantidades[b] - cantidades[a])[0];
}

    function formatearFechaResumen(fechaTexto) {
  return new Date(`${fechaTexto}T00:00:00`).toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

    function mostrarResumenNino() {
  if (!usuarioActual ||
      (usuarioActual.rol !== "Supervisor" &&
       usuarioActual.rol !== "Administrador")) {
    return;
  }

  const salon = document.getElementById("resumenSalon").value;
  const nino = document.getElementById("resumenNino").value;
  const desde = document.getElementById("resumenDesde").value;
  const hasta = document.getElementById("resumenHasta").value;

  if (!nino || !esDomingo(desde) || !esDomingo(hasta)) {
    alert("Seleccione fechas de inicio y fin que sean domingos.");
    return;
  }

  if (desde > hasta) {
    alert("La fecha inicial no puede ser posterior a la fecha final.");
    return;
  }

  const domingos = obtenerDomingosEntre(desde, hasta);
  const registros = asistencias.filter(fila =>
    String(fila.Salon) === salon &&
    String(fila.Nombre) === nino &&
    domingos.includes(String(fila.Fecha))
  );
  const registrosPorFecha = Object.fromEntries(
    registros.map(fila => [String(fila.Fecha), fila])
  );
  const asistenciasContadas = registros.filter(fila => fila.Asistencia === "Sí").length;
  const faltasContadas = registros.filter(fila => fila.Asistencia === "No").length;
  const totalRegistradas = registros.length;
  const sinRegistro = domingos.length - totalRegistradas;

  const filasCalendario = domingos.map(fecha => {
    const registro = registrosPorFecha[fecha];
    const estado = !registro
      ? "Sin registro"
      : registro.Asistencia === "Sí" ? "Asistió" : "Falta";
    const puedeMostrarResultados = registro?.Asistencia === "Sí";

    return `
      <tr class="${registro?.Asistencia === "No" ? "fila-falta" : ""}">
        <td>${formatearFechaResumen(fecha)}</td>
        <td>${estado}</td>
        <td>${puedeMostrarResultados ? escaparTexto(registro.Comportamiento || "-") : "-"}</td>
        <td>${puedeMostrarResultados ? escaparTexto(registro.Participacion || "-") : "-"}</td>
        <td>${puedeMostrarResultados ? escaparTexto(registro.Desarrollo || "-") : "-"}</td>
      </tr>
    `;
  }).join("");
  const datosNino = obtenerDatosNino(salon, nino);

  document.getElementById("contenidoResumenNino").innerHTML = `
    <div class="encabezado-resumen-nino">
      <div class="foto-resumen-contenedor">
        <img class="foto-nino-resumen multimedia-ampliable"
          src="${escaparTexto(fuenteFotoNino(datosNino))}"
          alt="Foto de ${escaparTexto(nino)}"
          title="Abrir foto"
          onclick="abrirMultimediaDesdeElemento(event, this)">
      </div>
      <div class="datos-encabezado-resumen">
        <h3>${escaparTexto(nino)} | ${escaparTexto(salon)}</h3>
        <p class="fecha-cumpleanos-resumen"><strong>Cumpleaños:</strong> ${datosNino.cumpleanos ? nombreMesCumpleanos(datosNino.cumpleanos) : "Sin registrar"}</p>
        <p>Periodo: ${formatearFechaResumen(desde)} al ${formatearFechaResumen(hasta)}</p>
      </div>
    </div>

    <div class="resumen-datos">
      <div class="resumen-dato">Estado<strong>${escaparTexto(datosNino.estado || "Activo")}</strong></div>
      <div class="resumen-dato">Representante<strong>${escaparTexto(datosNino.representante || "Sin registrar")}</strong></div>
      <div class="resumen-dato">Teléfono del representante<strong>${escaparTexto(datosNino.telefonoRepresentante || "Sin registrar")}</strong></div>
      <div class="resumen-dato">Alergias<strong>${datosNino.alergico ? escaparTexto(datosNino.alergias || "Sí, no especificadas") : "No"}</strong></div>
      <div class="resumen-dato">Domingos del periodo<strong>${domingos.length}</strong></div>
      <div class="resumen-dato">Asistencias<strong>${asistenciasContadas}</strong></div>
      <div class="resumen-dato">Faltas<strong>${faltasContadas}</strong></div>
      <div class="resumen-dato">Registros guardados<strong>${totalRegistradas}</strong></div>
      <div class="resumen-dato">Sin registro<strong>${sinRegistro}</strong></div>
      <div class="resumen-dato">Comportamiento predominante<strong>${escaparTexto(valorMasFrecuente(registros, "Comportamiento"))}</strong></div>
      <div class="resumen-dato">Participación predominante<strong>${escaparTexto(valorMasFrecuente(registros, "Participacion"))}</strong></div>
      <div class="resumen-dato">Desarrollo predominante<strong>${escaparTexto(valorMasFrecuente(registros, "Desarrollo"))}</strong></div>
    </div>

    <div class="tabla-scroll">
      <table class="tabla-resumen">
        <tr>
          <th>Domingo</th>
          <th>Estado</th>
          <th>Comportamiento</th>
          <th>Participación</th>
          <th>Desarrollo</th>
        </tr>
        ${filasCalendario}
      </table>
    </div>
  `;
}

let ninoPendiente = null;
let fotoNinoSeleccionada = "";
let fotoNinoTipoSeleccionada = "";

    function editarNino(salon, indice) {
      if (!usuarioActual || !ninos[salon]?.[indice]) return;

      const nombreAnterior = ninos[salon][indice];
      const datos = obtenerDatosNino(salon, nombreAnterior);

      ninoPendiente = { salon, indice };
      fotoNinoSeleccionada = datos.fotoData || "";
      fotoNinoTipoSeleccionada = datos.fotoTipo || "";

      document.getElementById("nombreNinoCambioTexto").textContent =
        `Nombre actual: ${nombreAnterior}`;
      document.getElementById("nombreNinoModal").value = nombreAnterior;
      document.getElementById("cumpleanosNinoModal").value =
        formatearCumpleanosEntrada(datos.cumpleanos);
      document.getElementById("estadoNinoModal").value =
        datos.estado || "Activo";
      document.getElementById("representanteNinoModal").value =
        datos.representante || "";
      document.getElementById("telefonoRepresentanteModal").value =
        datos.telefonoRepresentante || "";
      document.getElementById("alergicoNinoModal").checked = Boolean(datos.alergico);
      document.getElementById("alergiasNinoModal").value = datos.alergias || "";
      document.getElementById("alergiasNinoModal").disabled = !datos.alergico;
      document.getElementById("fotoNinoArchivo").value = "";
      actualizarVistaFotoNino();
      document.getElementById("modalNombreNino").classList.remove("oculto");
    }

    function actualizarVistaFotoNino() {
      const boton = document.getElementById("fotoNinoPerfil");
      const imagen = document.getElementById("fotoNinoPrevia");
      const tieneFoto = Boolean(fotoNinoSeleccionada);
      boton.classList.toggle("tiene-foto", tieneFoto);
      imagen.src = fotoNinoSeleccionada || "";
    }

    function abrirFotoNino() {
      if (!fotoNinoSeleccionada) {
        document.getElementById("fotoNinoArchivo").click();
        return;
      }
      document.getElementById("contenidoMultimedia").innerHTML =
        `<img src="${escaparTexto(fotoNinoSeleccionada)}" alt="Foto ampliada del niño">`;
      document.getElementById("modalMultimedia").classList.remove("oculto");
    }

    async function cargarFotoNino(archivo) {
      if (!archivo) return;
      if (!archivo.type.startsWith("image/")) {
        alert("Seleccione un archivo de imagen.");
        return;
      }
      try {
        const foto = await prepararImagen(archivo, 2 * 1024 * 1024);
        fotoNinoSeleccionada = String(foto.datos || "");
        fotoNinoTipoSeleccionada = foto.tipo;
        actualizarVistaFotoNino();
      } catch (error) {
        console.error("No se pudo preparar la foto del niño.", error);
        document.getElementById("fotoNinoArchivo").value = "";
        alert("No se pudo preparar la foto seleccionada. Intente con otra imagen.");
      }
    }

    function guardarNombreNino() {
      if (!usuarioActual || !ninoPendiente) return;

      const nuevoNombre = document.getElementById("nombreNinoModal")
        .value.trim();
      const nuevoCumpleanos = normalizarCumpleanos(
        document.getElementById("cumpleanosNinoModal").value
      );
      const nuevoEstado = document.getElementById("estadoNinoModal").value;

      if (!nuevoNombre) {
        alert("El nombre no puede estar vacío.");
        return;
      }

      const nombreAnterior = ninos[ninoPendiente.salon][ninoPendiente.indice];
      if (nuevoNombre !== nombreAnterior &&
          ninos[ninoPendiente.salon].includes(nuevoNombre)) {
        alert("Ya existe un niño con ese nombre en este salón.");
        return;
      }
      const datosAnteriores = obtenerDatosNino(ninoPendiente.salon, nombreAnterior);
      delete datosNinos[claveNino(ninoPendiente.salon, nombreAnterior)];
      ninos[ninoPendiente.salon][ninoPendiente.indice] = nuevoNombre;
      datosNinos[claveNino(ninoPendiente.salon, nuevoNombre)] = {
        ...datosAnteriores,
        cumpleanos: nuevoCumpleanos,
        estado: nuevoEstado,
        semanasSinAsistencia: 0,
        ultimoDomingoEstado: obtenerDomingoAnterior(),
        estadoManual: nuevoEstado,
        estadoManualFecha: obtenerDomingoAnterior(),
        representante: document.getElementById("representanteNinoModal").value.trim(),
        telefonoRepresentante: document.getElementById("telefonoRepresentanteModal").value.trim(),
        alergico: document.getElementById("alergicoNinoModal").checked,
        alergias: document.getElementById("alergicoNinoModal").checked
          ? document.getElementById("alergiasNinoModal").value.trim()
          : "",
        fotoData: fotoNinoSeleccionada,
        fotoTipo: fotoNinoTipoSeleccionada
      };
      guardarDatosNinos();
      ordenarNinos(ninoPendiente.salon);
      guardarNinos();
      cerrarModal("modalNombreNino");
      ninoPendiente = null;
      mostrarAsistencia();
    }

let ninoEliminacionPendiente = null;

function mostrarExito(mensaje) {
  document.getElementById("textoExito").textContent = mensaje;
  document.getElementById("modalExito").classList.remove("oculto");
}

function cerrarModal(id) {
  document.getElementById(id).classList.add("oculto");
  if (id === "modalMultimedia") {
    document.getElementById("contenidoMultimedia").innerHTML = "";
  }
}

    async function cerrarSesion() {
  try {
    const firebase = await window.firebaseReady;
    await firebase.signOut(firebase.auth);
  } catch (error) {
    console.error("No se pudo cerrar la sesión de Firebase.", error);
    alert("No se pudo cerrar la sesión. Intente de nuevo.");
    return;
  }

  usuarioActual = null;
  actualizarBotonCambioContrasena();

  document.getElementById("pantallaSistema").classList.add("oculto");
  document.getElementById("pantallaLogin").classList.remove("oculto");
  mostrarAnunciosLogin();

  document.getElementById("usuario").value = "";
  document.getElementById("contrasena").value = "";
  document.getElementById("mensajeLogin").textContent = "";

  document.getElementById("modalResumenNino").classList.add("oculto");
  document.getElementById("modalResumenClase").classList.add("oculto");
  document.getElementById("modalCumpleanos").classList.add("oculto");
  document.getElementById("modalCumpleanosDia").classList.add("oculto");
  document.getElementById("modalAnuncios").classList.add("oculto");
  document.getElementById("modalConfirmacionAnuncio").classList.add("oculto");
  document.getElementById("modalCambioContrasena").classList.add("oculto");
  document.getElementById("cintaCumpleanosSistema").classList.remove("visible");
  document.getElementById("botonResumenNino").classList.add("oculto");
  document.getElementById("botonResumenClase").classList.add("oculto");

  document.getElementById("salon").disabled = false;
  document.getElementById("salonNuevoNino").disabled = false;
}
