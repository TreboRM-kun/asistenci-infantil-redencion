function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? (c > 1 && (G.n = c < 3 ? -1 : u), d(c, u)) : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var HOJAS = {
  ninos: "Niños",
  asistencias: "Asistencias",
  maestros: "Maestros",
  anuncios: "Anuncios"
};
var anuncios = JSON.parse(localStorage.getItem("anunciosInfantilRedencion")) || [];
var datosNinos = {};
function claveNino(salon, nombre) {
  return "".concat(salon, "::").concat(nombre);
}
function normalizarCumpleanos(valor) {
  var texto = String(valor || "").trim();
  var partes;
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
  var mes = Number(partes[0]);
  var dia = Number(partes[1]);
  var fecha = new Date(2024, mes - 1, dia);
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31 || fecha.getMonth() !== mes - 1 || fecha.getDate() !== dia) {
    return "";
  }
  return "".concat(String(mes).padStart(2, "0"), "-").concat(String(dia).padStart(2, "0"));
}
function formatearCumpleanosEntrada(valor) {
  var normalizado = normalizarCumpleanos(valor);
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
  var clave = claveNino(salon, nombre);
  var datos = datosNinos[clave] || (datosNinos[clave] = {
    cumpleanos: "",
    estado: "Activo"
  });
  var estadoAnterior = datos.estado || "Activo";
  var semanasAnteriores = Number(datos.semanasSinAsistencia) || 0;
  var ultimoDomingoAnterior = datos.ultimoDomingoEstado || "";
  var inicioServicio = new Date("2026-09-20T00:00:00");
  var fechaAlta = datos.fechaAlta ? new Date("".concat(datos.fechaAlta, "T00:00:00")) : inicioServicio;
  var fechaInicio = fechaAlta > inicioServicio ? fechaAlta : inicioServicio;
  var fechaFin = new Date("".concat(obtenerDomingoAnterior(), "T00:00:00"));
  var registros = asistencias.filter(function (fila) {
    return String(fila.Salon) === salon && String(fila.Nombre) === nombre;
  });
  var manualFecha = datos.estadoManualFecha ? new Date("".concat(datos.estadoManualFecha, "T00:00:00")) : null;
  var estado = "Activo";
  var semanasSinAsistencia = 0;
  var domingo = new Date(fechaInicio);
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
  var _loop = function _loop() {
    var fechaTexto = domingo.toISOString().slice(0, 10);
    var registro = registros.find(function (fila) {
      return String(fila.Fecha) === fechaTexto;
    });
    if ((registro === null || registro === void 0 ? void 0 : registro.Asistencia) === "Sí") {
      estado = "Activo";
      semanasSinAsistencia = 0;
    } else {
      semanasSinAsistencia++;
      if (semanasSinAsistencia >= 3) estado = "Inactivo";
    }
    domingo.setDate(domingo.getDate() + 7);
  };
  while (domingo <= fechaFin) {
    _loop();
  }
  datos.estado = estado;
  datos.semanasSinAsistencia = semanasSinAsistencia;
  datos.ultimoDomingoEstado = fechaFin.toISOString().slice(0, 10);
  return estado !== estadoAnterior || semanasSinAsistencia !== semanasAnteriores || datos.ultimoDomingoEstado !== ultimoDomingoAnterior;
}
function actualizarEstadosNinos(salon) {
  var guardarLocalmente = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var cambiaronDatos = false;
  ninos[salon].forEach(function (nombre) {
    cambiaronDatos = actualizarEstadoNino(salon, nombre) || cambiaronDatos;
  });
  if (guardarLocalmente) guardarDatosNinos();
  return cambiaronDatos;
}
function leerHoja(_x) {
  return _leerHoja.apply(this, arguments);
}
function _leerHoja() {
  _leerHoja = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(nombreHoja) {
    var firebase, resultado;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return window.firebaseReady;
        case 1:
          firebase = _context.v;
          _context.n = 2;
          return firebase.get(firebase.ref(firebase.database, nombreHoja));
        case 2:
          resultado = _context.v;
          return _context.a(2, resultado.exists() ? Object.values(resultado.val()) : []);
      }
    }, _callee);
  }));
  return _leerHoja.apply(this, arguments);
}
function leerArchivoComoDataURL(archivo) {
  return new Promise(function (resolver, rechazar) {
    var lector = new FileReader();
    lector.onload = function () {
      return resolver(lector.result);
    };
    lector.onerror = function () {
      return rechazar(lector.error || new Error("No se pudo leer el archivo."));
    };
    lector.readAsDataURL(archivo);
  });
}
function prepararImagen(_x2, _x3) {
  return _prepararImagen.apply(this, arguments);
}
function _prepararImagen() {
  _prepararImagen = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(archivo, limiteBytes) {
    var imagen, escala, calidades, _loop2, _ret, intento, _imagen, _t5, _t6;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          if (!(archivo.size <= limiteBytes)) {
            _context4.n = 2;
            break;
          }
          _t5 = archivo.type;
          _context4.n = 1;
          return leerArchivoComoDataURL(archivo);
        case 1:
          _t6 = _context4.v;
          return _context4.a(2, {
            tipo: _t5,
            datos: _t6
          });
        case 2:
          _context4.p = 2;
          if (!(typeof createImageBitmap === "function")) {
            _context4.n = 4;
            break;
          }
          _context4.n = 3;
          return createImageBitmap(archivo);
        case 3:
          imagen = _context4.v;
          _context4.n = 6;
          break;
        case 4:
          _context4.n = 5;
          return new Promise(function (resolver, rechazar) {
            var url = URL.createObjectURL(archivo);
            var elemento = new Image();
            elemento.onload = function () {
              URL.revokeObjectURL(url);
              resolver(elemento);
            };
            elemento.onerror = function () {
              URL.revokeObjectURL(url);
              rechazar(new Error("No se pudo preparar la imagen."));
            };
            elemento.src = url;
          });
        case 5:
          imagen = _context4.v;
        case 6:
          escala = Math.min(1, 2048 / Math.max(imagen.width, imagen.height));
          calidades = [0.88, 0.78, 0.68, 0.58];
          _loop2 = /*#__PURE__*/_regenerator().m(function _loop2() {
            var canvas, contexto, _loop3, _ret2, _i, _calidades;
            return _regenerator().w(function (_context3) {
              while (1) switch (_context3.n) {
                case 0:
                  canvas = document.createElement("canvas");
                  canvas.width = Math.max(1, Math.round(imagen.width * escala));
                  canvas.height = Math.max(1, Math.round(imagen.height * escala));
                  contexto = canvas.getContext("2d");
                  if (contexto) {
                    _context3.n = 1;
                    break;
                  }
                  throw new Error("No se pudo preparar la compresión de la imagen.");
                case 1:
                  contexto.fillStyle = "#fff";
                  contexto.fillRect(0, 0, canvas.width, canvas.height);
                  contexto.drawImage(imagen, 0, 0, canvas.width, canvas.height);
                  _loop3 = /*#__PURE__*/_regenerator().m(function _loop3() {
                    var calidad, blob, _t, _t2, _t3, _t4;
                    return _regenerator().w(function (_context2) {
                      while (1) switch (_context2.n) {
                        case 0:
                          calidad = _calidades[_i];
                          _context2.n = 1;
                          return new Promise(function (resolver, rechazar) {
                            if (typeof canvas.toBlob === "function") {
                              canvas.toBlob(function (resultado) {
                                if (resultado) resolver(resultado);else rechazar(new Error("El navegador no pudo comprimir la imagen."));
                              }, "image/jpeg", calidad);
                              return;
                            }
                            try {
                              var partes = canvas.toDataURL("image/jpeg", calidad).split(",");
                              var binario = atob(partes[1]);
                              var bytes = new Uint8Array(binario.length);
                              for (var indice = 0; indice < binario.length; indice++) {
                                bytes[indice] = binario.charCodeAt(indice);
                              }
                              resolver(new Blob([bytes], {
                                type: "image/jpeg"
                              }));
                            } catch (error) {
                              rechazar(error);
                            }
                          });
                        case 1:
                          blob = _context2.v;
                          if (!(blob.size <= limiteBytes)) {
                            _context2.n = 3;
                            break;
                          }
                          _t = blob.type;
                          _context2.n = 2;
                          return leerArchivoComoDataURL(blob);
                        case 2:
                          _t2 = _context2.v;
                          _t3 = {
                            tipo: _t,
                            datos: _t2
                          };
                          _t4 = {
                            v: _t3
                          };
                          return _context2.a(2, {
                            v: _t4
                          });
                        case 3:
                          return _context2.a(2);
                      }
                    }, _loop3);
                  });
                  _i = 0, _calidades = calidades;
                case 2:
                  if (!(_i < _calidades.length)) {
                    _context3.n = 5;
                    break;
                  }
                  return _context3.d(_regeneratorValues(_loop3()), 3);
                case 3:
                  _ret2 = _context3.v;
                  if (!_ret2) {
                    _context3.n = 4;
                    break;
                  }
                  return _context3.a(2, _ret2.v);
                case 4:
                  _i++;
                  _context3.n = 2;
                  break;
                case 5:
                  escala *= 0.78;
                case 6:
                  return _context3.a(2);
              }
            }, _loop2);
          });
          intento = 0;
        case 7:
          if (!(intento < 9)) {
            _context4.n = 10;
            break;
          }
          return _context4.d(_regeneratorValues(_loop2()), 8);
        case 8:
          _ret = _context4.v;
          if (!_ret) {
            _context4.n = 9;
            break;
          }
          return _context4.a(2, _ret.v);
        case 9:
          intento++;
          _context4.n = 7;
          break;
        case 10:
          _context4.p = 10;
          (_imagen = imagen) === null || _imagen === void 0 || _imagen.close();
          return _context4.f(10);
        case 11:
          throw new Error("No fue posible comprimir la imagen al tamaño permitido.");
        case 12:
          return _context4.a(2);
      }
    }, _callee2, null, [[2,, 10, 11]]);
  }));
  return _prepararImagen.apply(this, arguments);
}
function reemplazarHoja(_x4, _x5) {
  return _reemplazarHoja.apply(this, arguments);
}
function _reemplazarHoja() {
  _reemplazarHoja = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(nombreHoja, filas) {
    var firebase;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return window.firebaseReady;
        case 1:
          firebase = _context5.v;
          if (!(!firebase || typeof firebase.set !== "function")) {
            _context5.n = 2;
            break;
          }
          throw new Error("La sincronización de Firebase no está disponible.");
        case 2:
          _context5.n = 3;
          return firebase.set(firebase.ref(firebase.database, nombreHoja), filas);
        case 3:
          return _context5.a(2);
      }
    }, _callee3);
  }));
  return _reemplazarHoja.apply(this, arguments);
}
function sincronizarHoja(nombreHoja, filas) {
  reemplazarHoja(nombreHoja, filas).catch(function (error) {
    console.error(error);
  });
}
function filasDeNinos() {
  return Object.entries(ninos).flatMap(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      salon = _ref2[0],
      nombres = _ref2[1];
    return nombres.map(function (nombre) {
      return {
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
      };
    });
  });
}
function cargarDatosDesdeAPI() {
  return _cargarDatosDesdeAPI.apply(this, arguments);
}
function _cargarDatosDesdeAPI() {
  _cargarDatosDesdeAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var sesionActiva,
      _yield$Promise$all,
      _yield$Promise$all2,
      filasNinos,
      filasAsistencias,
      filasMaestros,
      filasAnuncios,
      _args6 = arguments,
      _t7;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          sesionActiva = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : function () {
            return true;
          };
          _context6.p = 1;
          _context6.n = 2;
          return Promise.all([leerHoja(HOJAS.ninos), leerHoja(HOJAS.asistencias), leerHoja(HOJAS.maestros), leerHoja(HOJAS.anuncios)]);
        case 2:
          _yield$Promise$all = _context6.v;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 4);
          filasNinos = _yield$Promise$all2[0];
          filasAsistencias = _yield$Promise$all2[1];
          filasMaestros = _yield$Promise$all2[2];
          filasAnuncios = _yield$Promise$all2[3];
          if (sesionActiva()) {
            _context6.n = 3;
            break;
          }
          throw new Error("La sesión de inicio ya no está activa.");
        case 3:
          if (filasAnuncios.length) {
            anuncios = filasAnuncios;
            localStorage.setItem("anunciosInfantilRedencion", JSON.stringify(anuncios));
          } else {
            sincronizarHoja(HOJAS.anuncios, anuncios);
          }
          mostrarAnunciosLogin();
          if (filasNinos.length) {
            ninos = {
              Semillas: [],
              Plantas: [],
              Arboles: []
            };
            filasNinos.forEach(function (fila) {
              if (ninos[fila.Salon]) {
                var _fila$SemanasSinAsist, _fila$Alergico;
                ninos[fila.Salon].push(fila.Nombre);
                datosNinos[claveNino(fila.Salon, fila.Nombre)] = {
                  cumpleanos: normalizarCumpleanos(fila.Cumpleanos || fila.cumpleanos),
                  estado: fila.Estado || fila.estado || "Activo",
                  semanasSinAsistencia: Number((_fila$SemanasSinAsist = fila.SemanasSinAsistencia) !== null && _fila$SemanasSinAsist !== void 0 ? _fila$SemanasSinAsist : fila.semanasSinAsistencia) || 0,
                  ultimoDomingoEstado: fila.UltimoDomingoEstado || fila.ultimoDomingoEstado || "",
                  estadoManual: fila.EstadoManual || fila.estadoManual || "",
                  estadoManualFecha: fila.EstadoManualFecha || fila.estadoManualFecha || "",
                  fechaAlta: fila.FechaAlta || fila.fechaAlta || "",
                  representante: fila.Representante || fila.representante || "",
                  telefonoRepresentante: fila.TelefonoRepresentante || fila.telefonoRepresentante || "",
                  alergico: Boolean((_fila$Alergico = fila.Alergico) !== null && _fila$Alergico !== void 0 ? _fila$Alergico : fila.alergico),
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
          Object.keys(ninos).forEach(function (salon) {
            return actualizarEstadosNinos(salon, false);
          });
          if (filasMaestros.length) {
            maestrosSalon = {
              Semillas: "",
              Plantas: "",
              Arboles: ""
            };
            filasMaestros.forEach(function (fila) {
              if (maestrosSalon[fila.Salon] !== undefined) {
                maestrosSalon[fila.Salon] = fila.Maestros || "";
              }
            });
            localStorage.setItem("maestrosSalonRedencion", JSON.stringify(maestrosSalon));
          } else {
            sincronizarHoja(HOJAS.maestros, Object.entries(maestrosSalon).map(function (_ref1) {
              var _ref10 = _slicedToArray(_ref1, 2),
                salon = _ref10[0],
                maestros = _ref10[1];
              return {
                Salon: salon,
                Maestros: maestros
              };
            }));
          }
          _context6.n = 5;
          break;
        case 4:
          _context6.p = 4;
          _t7 = _context6.v;
          console.error("No se pudieron cargar los datos protegidos de Firebase.", _t7);
          throw _t7;
        case 5:
          return _context6.a(2);
      }
    }, _callee4, null, [[1, 4]]);
  }));
  return _cargarDatosDesdeAPI.apply(this, arguments);
}
localStorage.removeItem("usuariosRedencion");
var ninos = {
  Semillas: [],
  Plantas: [],
  Arboles: []
};
var asistencias = [];
var usuarioActual = null;
var instalacionPendiente = null;
function actualizarBotonCambioContrasena() {
  var _usuarioActual;
  document.getElementById("botonCambiarContrasena").classList.toggle("oculto", ((_usuarioActual = usuarioActual) === null || _usuarioActual === void 0 ? void 0 : _usuarioActual.rol) !== "Administrador");
}
function inicializarInterfaz() {
  prepararInstalacion();
  var fecha = document.getElementById("fecha");
  fecha.value = obtenerDomingoAnterior();
  document.getElementById("usuario").addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      evento.preventDefault();
      document.getElementById("contrasena").focus();
    }
  });
  document.getElementById("contrasena").addEventListener("keydown", function (evento) {
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
  var boton = document.getElementById("botonInstalar");
  if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone) {
    boton.classList.add("oculto");
  }
  window.addEventListener("beforeinstallprompt", function (evento) {
    evento.preventDefault();
    instalacionPendiente = evento;
    boton.classList.remove("oculto");
  });
  window.addEventListener("appinstalled", function () {
    instalacionPendiente = null;
    boton.classList.add("oculto");
  });
  if ("serviceWorker" in navigator && window.isSecureContext) {
    navigator.serviceWorker.register("./service-worker.js").catch(function (error) {
      return console.error("No se pudo preparar la instalación de la aplicación.", error);
    });
  }
}
function instalarAplicacion() {
  return _instalarAplicacion.apply(this, arguments);
}
function _instalarAplicacion() {
  _instalarAplicacion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    var resultado;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          if (!instalacionPendiente) {
            _context7.n = 2;
            break;
          }
          instalacionPendiente.prompt();
          _context7.n = 1;
          return instalacionPendiente.userChoice;
        case 1:
          resultado = _context7.v;
          instalacionPendiente = null;
          if (resultado.outcome === "accepted") {
            document.getElementById("botonInstalar").classList.add("oculto");
          }
          return _context7.a(2);
        case 2:
          if (!window.isSecureContext) {
            alert("Para instalar la aplicación, ábrala desde una dirección HTTPS o desde localhost. Los archivos abiertos directamente como file:// no se pueden instalar desde el navegador.");
          } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            alert("Para instalar la aplicación, toque Compartir y seleccione «Agregar a pantalla de inicio».");
          } else {
            alert("Si el navegador todavía no muestra la instalación, abra su menú y seleccione «Instalar aplicación» o «Agregar a pantalla de inicio».");
          }
        case 3:
          return _context7.a(2);
      }
    }, _callee5);
  }));
  return _instalarAplicacion.apply(this, arguments);
}
function obtenerDomingoAnterior(fechaTexto) {
  var fecha = fechaTexto ? new Date("".concat(fechaTexto, "T00:00:00")) : new Date();
  fecha.setHours(0, 0, 0, 0);
  fecha.setDate(fecha.getDate() - fecha.getDay());
  return [fecha.getFullYear(), String(fecha.getMonth() + 1).padStart(2, "0"), String(fecha.getDate()).padStart(2, "0")].join("-");
}
function esDomingo(fechaTexto) {
  return fechaTexto && new Date("".concat(fechaTexto, "T00:00:00")).getDay() === 0;
}
function validarFechaDomingo() {
  var campoFecha = document.getElementById("fecha");
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
  ninos[salon].sort(function (a, b) {
    return a.localeCompare(b, "es", {
      sensitivity: "base"
    });
  });
}
var maestrosIniciales = {
  Semillas: "",
  Plantas: "",
  Arboles: ""
};
var maestrosSalon = JSON.parse(localStorage.getItem("maestrosSalonRedencion")) || maestrosIniciales;
function guardarMaestrosSalon() {
  if (!usuarioActual || usuarioActual.rol !== "Administrador") {
    return;
  }
  var salon = document.getElementById("salon").value;
  var campo = document.getElementById("maestrosSalon");
  maestrosSalon[salon] = campo.value.trim().toUpperCase();
  localStorage.setItem("maestrosSalonRedencion", JSON.stringify(maestrosSalon));
  sincronizarHoja(HOJAS.maestros, Object.entries(maestrosSalon).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      nombreSalon = _ref4[0],
      maestros = _ref4[1];
    return {
      Salon: nombreSalon,
      Maestros: maestros
    };
  }));
}
function mostrarMaestroSalon() {
  var salon = document.getElementById("salon").value;
  var campo = document.getElementById("maestrosSalon");
  if (!campo) {
    return;
  }
  campo.value = (maestrosSalon[salon] || "").toUpperCase();
  campo.readOnly = usuarioActual.rol !== "Administrador";
}
function escaparTexto(texto) {
  return texto.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function obtenerAsistencia(salon, fecha, nombre) {
  return asistencias.find(function (fila) {
    return String(fila.Salon) === salon && String(fila.Fecha) === fecha && String(fila.Nombre) === nombre;
  });
}
function obtenerDatosClase(salon, fecha) {
  return asistencias.find(function (fila) {
    return String(fila.Salon) === salon && String(fila.Fecha) === fecha && (fila.Comentario || fila.MediaData);
  }) || null;
}
function mostrarMultimediaClase(fila) {
  if (!(fila !== null && fila !== void 0 && fila.MediaData) || !fila.MediaTipo) return "";
  var datos = escaparTexto(fila.MediaData);
  if (fila.MediaTipo.startsWith("image/")) {
    return "<img class=\"multimedia-clase multimedia-ampliable\" src=\"".concat(datos, "\" alt=\"Archivo de la clase\" title=\"Abrir archivo\" onclick=\"abrirMultimediaDesdeElemento(event, this)\">");
  }
  if (fila.MediaTipo.startsWith("video/")) {
    return "<video class=\"multimedia-clase multimedia-ampliable\" controls preload=\"metadata\" src=\"".concat(datos, "\" title=\"Abrir archivo\" onclick=\"abrirMultimediaDesdeElemento(event, this)\"></video>");
  }
  if (fila.MediaTipo.startsWith("audio/")) {
    return "<audio class=\"multimedia-clase multimedia-ampliable\" controls src=\"".concat(datos, "\" title=\"Abrir archivo\" onclick=\"abrirMultimediaDesdeElemento(event, this)\"></audio>");
  }
  return "";
}
function abrirMultimediaDesdeElemento(evento, elemento) {
  evento.preventDefault();
  evento.stopPropagation();
  var fuente = escaparTexto(elemento.currentSrc || elemento.src);
  var tipo = elemento.tagName === "VIDEO" ? "video" : elemento.tagName === "AUDIO" ? "audio" : "img";
  var atributos = tipo === "img" ? 'alt="Archivo multimedia ampliado"' : "controls autoplay";
  document.getElementById("contenidoMultimedia").innerHTML = "<".concat(tipo, " src=\"").concat(fuente, "\" ").concat(atributos, "></").concat(tipo, ">");
  document.getElementById("modalMultimedia").classList.remove("oculto");
}
function correoInternoDeUsuario(usuario) {
  var bytes = new TextEncoder().encode(usuario.trim().toLocaleLowerCase("es"));
  var identificador = Array.from(bytes, function (byte) {
    return byte.toString(16).padStart(2, "0");
  }).join("");
  return "u".concat(identificador, "@asistencia-infantil-redencion.firebaseapp.com");
}
function esperarConLimite(operacion, etapa) {
  var limiteMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30000;
  var temporizador;
  return Promise.race([operacion, new Promise(function (_, rechazar) {
    temporizador = setTimeout(function () {
      return rechazar(new Error("LOGIN_TIMEOUT:".concat(etapa)));
    }, limiteMs);
  })]).finally(function () {
    return clearTimeout(temporizador);
  });
}
function iniciarSesion() {
  return _iniciarSesion.apply(this, arguments);
}
function _iniciarSesion() {
  _iniciarSesion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var usuario, contrasena, boton, mensaje, firebase, credencial, resultadoPerfil, perfil, rolesPermitidos, salonesPermitidos, perfilValido, selectorSalon, formulario, _error$message, _error$code, _firebase, _t8, _t9;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          usuario = document.getElementById("usuario").value.trim();
          contrasena = document.getElementById("contrasena").value;
          boton = document.getElementById("botonIngresar");
          mensaje = document.getElementById("mensajeLogin");
          if (!(!usuario || !contrasena)) {
            _context8.n = 1;
            break;
          }
          mensaje.textContent = "Escriba su usuario y contraseña.";
          return _context8.a(2);
        case 1:
          boton.disabled = true;
          mensaje.textContent = "Iniciando sesión...";
          _context8.p = 2;
          _context8.n = 3;
          return window.firebaseReady;
        case 3:
          firebase = _context8.v;
          _context8.n = 4;
          return esperarConLimite(firebase.signInWithEmailAndPassword(firebase.auth, correoInternoDeUsuario(usuario), contrasena), "autenticación");
        case 4:
          credencial = _context8.v;
          _context8.n = 5;
          return esperarConLimite(firebase.get(firebase.ref(firebase.database, "Perfiles/".concat(credencial.user.uid))), "perfil");
        case 5:
          resultadoPerfil = _context8.v;
          if (resultadoPerfil.exists()) {
            _context8.n = 6;
            break;
          }
          throw new Error("La cuenta no tiene un perfil autorizado.");
        case 6:
          perfil = resultadoPerfil.val();
          rolesPermitidos = ["Maestro", "Supervisor", "Administrador"];
          salonesPermitidos = ["Semillas", "Plantas", "Arboles"];
          perfilValido = rolesPermitidos.includes(perfil.rol) && String(perfil.usuario || "").trim().toLocaleLowerCase("es") === usuario.toLocaleLowerCase("es") && (perfil.rol === "Maestro" ? salonesPermitidos.includes(perfil.salon) : perfil.salon === "todos");
          if (perfilValido) {
            _context8.n = 7;
            break;
          }
          throw new Error("El perfil no coincide con el usuario o el rol.");
        case 7:
          usuarioActual = {
            uid: credencial.user.uid,
            usuario: perfil.usuario,
            rol: perfil.rol,
            salon: perfil.salon
          };
          actualizarBotonCambioContrasena();
          _context8.n = 8;
          return esperarConLimite(cargarDatosDesdeAPI(function () {
            var _usuarioActual5;
            return ((_usuarioActual5 = usuarioActual) === null || _usuarioActual5 === void 0 ? void 0 : _usuarioActual5.uid) === credencial.user.uid;
          }), "datos", 120000);
        case 8:
          mensaje.textContent = "";
          document.getElementById("pantallaLogin").classList.add("oculto");
          document.querySelector(".anuncios-inicio").classList.add("oculto");
          document.getElementById("pantallaSistema").classList.remove("oculto");
          document.getElementById("informacionUsuario").textContent = "Usuario: ".concat(usuarioActual.usuario, " | Rol: ").concat(usuarioActual.rol);
          selectorSalon = document.getElementById("salon");
          formulario = document.getElementById("formularioNino");
          if (usuarioActual.salon !== "todos") {
            selectorSalon.value = usuarioActual.salon;
            selectorSalon.disabled = true;
            document.getElementById("salonNuevoNino").value = usuarioActual.salon;
            document.getElementById("salonNuevoNino").disabled = true;
          } else {
            selectorSalon.disabled = false;
            document.getElementById("salonNuevoNino").disabled = false;
          }
          formulario.classList.toggle("oculto", usuarioActual.rol !== "Maestro" && usuarioActual.rol !== "Administrador");
          mostrarAsistencia();
          mostrarPanelUsuarios();
          mostrarCintaCumpleanos();
          _context8.n = 15;
          break;
        case 9:
          _context8.p = 9;
          _t8 = _context8.v;
          console.error("No se pudo iniciar sesión en la aplicación.", _t8);
          _context8.p = 10;
          _context8.n = 11;
          return window.firebaseReady;
        case 11:
          _firebase = _context8.v;
          _context8.n = 12;
          return esperarConLimite(_firebase.signOut(_firebase.auth), "cierre de sesión", 5000);
        case 12:
          _context8.n = 14;
          break;
        case 13:
          _context8.p = 13;
          _t9 = _context8.v;
          console.error("No se pudo cerrar la sesión de Firebase.", _t9);
        case 14:
          usuarioActual = null;
          actualizarBotonCambioContrasena();
          if ((_t8 === null || _t8 === void 0 ? void 0 : _t8.message) === "La cuenta no tiene un perfil autorizado.") {
            mensaje.textContent = "La cuenta existe, pero falta asignarle un perfil en Firebase. Contacte al administrador.";
          } else if ((_t8 === null || _t8 === void 0 ? void 0 : _t8.message) === "El perfil no coincide con el usuario o el rol.") {
            mensaje.textContent = "El perfil de esta cuenta no coincide con el usuario o el salón asignado.";
          } else if ((_t8 === null || _t8 === void 0 ? void 0 : _t8.code) === "auth/too-many-requests") {
            mensaje.textContent = "Se realizaron demasiados intentos. Espere un momento y vuelva a intentarlo.";
          } else if (_t8 !== null && _t8 !== void 0 && (_error$message = _t8.message) !== null && _error$message !== void 0 && _error$message.startsWith("LOGIN_TIMEOUT:")) {
            mensaje.textContent = _t8.message.endsWith(":autenticación") ? "Firebase tardó demasiado en verificar el acceso. Revise la conexión e intente de nuevo." : _t8.message.endsWith(":perfil") ? "El acceso se validó, pero no se pudo verificar el perfil. Contacte al administrador." : _t8.message.endsWith(":datos") ? "La descarga de datos (incluidas fotos y archivos) tardó más de 2 minutos. Revise la conexión e intente de nuevo." : "La conexión tardó demasiado. Intente de nuevo.";
          } else if (_t8 !== null && _t8 !== void 0 && (_error$code = _t8.code) !== null && _error$code !== void 0 && _error$code.startsWith("auth/")) {
            mensaje.textContent = "Usuario o contraseña incorrectos.";
          } else {
            mensaje.textContent = "No se pudo cargar la información protegida. Intente de nuevo o contacte al administrador.";
          }
        case 15:
          _context8.p = 15;
          boton.disabled = false;
          return _context8.f(15);
        case 16:
          return _context8.a(2);
      }
    }, _callee6, null, [[10, 13], [2, 9, 15, 16]]);
  }));
  return _iniciarSesion.apply(this, arguments);
}
function abrirCambioContrasena() {
  if (!usuarioActual || usuarioActual.rol !== "Administrador") return;
  document.getElementById("nuevaContrasena").value = "";
  document.getElementById("confirmarNuevaContrasena").value = "";
  document.getElementById("mensajeCambioContrasena").textContent = "";
  document.getElementById("modalCambioContrasena").classList.remove("oculto");
}
function guardarNuevaContrasena() {
  return _guardarNuevaContrasena.apply(this, arguments);
}
function _guardarNuevaContrasena() {
  _guardarNuevaContrasena = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
    var nueva, confirmar, mensaje, boton, firebase, usuarioAutenticado, _t0;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          if (!(!usuarioActual || usuarioActual.rol !== "Administrador")) {
            _context9.n = 1;
            break;
          }
          console.warn("Solo el administrador puede cambiar la contraseña desde esta sección.");
          return _context9.a(2);
        case 1:
          nueva = document.getElementById("nuevaContrasena").value;
          confirmar = document.getElementById("confirmarNuevaContrasena").value;
          mensaje = document.getElementById("mensajeCambioContrasena");
          boton = document.getElementById("botonGuardarContrasena");
          if (!(nueva.length < 6)) {
            _context9.n = 2;
            break;
          }
          mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
          return _context9.a(2);
        case 2:
          if (!(nueva !== confirmar)) {
            _context9.n = 3;
            break;
          }
          mensaje.textContent = "Las contraseñas no coinciden.";
          return _context9.a(2);
        case 3:
          boton.disabled = true;
          mensaje.textContent = "Guardando contraseña...";
          _context9.p = 4;
          _context9.n = 5;
          return window.firebaseReady;
        case 5:
          firebase = _context9.v;
          usuarioAutenticado = firebase.auth.currentUser;
          if (usuarioAutenticado) {
            _context9.n = 6;
            break;
          }
          throw new Error("No hay una sesión autenticada.");
        case 6:
          _context9.n = 7;
          return firebase.updatePassword(usuarioAutenticado, nueva);
        case 7:
          document.getElementById("nuevaContrasena").value = "";
          document.getElementById("confirmarNuevaContrasena").value = "";
          document.getElementById("modalCambioContrasena").classList.add("oculto");
          mostrarExito("La contraseña se cambió correctamente.");
          _context9.n = 9;
          break;
        case 8:
          _context9.p = 8;
          _t0 = _context9.v;
          console.error("No se pudo cambiar la contraseña.", _t0);
          mensaje.textContent = (_t0 === null || _t0 === void 0 ? void 0 : _t0.code) === "auth/requires-recent-login" ? "Vuelva a iniciar sesión y cambie su contraseña inmediatamente." : "No se pudo cambiar la contraseña. Intente de nuevo.";
        case 9:
          _context9.p = 9;
          boton.disabled = false;
          return _context9.f(9);
        case 10:
          return _context9.a(2);
      }
    }, _callee7, null, [[4, 8, 9, 10]]);
  }));
  return _guardarNuevaContrasena.apply(this, arguments);
}
function mostrarAsistencia() {
  var salon = document.getElementById("salon").value;
  var fecha = document.getElementById("fecha").value;
  mostrarMaestroSalon();
  if (!usuarioActual || !ninos[salon]) return;
  ordenarNinos(salon);
  var puedeModificar = usuarioActual.rol === "Maestro" || usuarioActual.rol === "Administrador";
  var puedeEliminar = usuarioActual.rol === "Administrador";
  var html = "\n        <h2>Sal\xF3n: ".concat(salon, "</h2>\n        <div class=\"tabla-scroll\">\n        <table class=\"tabla-asistencia\">\n          <tr>\n            <th>Nombre</th>\n            <th>Asistencia</th>\n            <th>Comportamiento</th>\n            <th>Participaci\xF3n</th>\n            <th>Desarrollo de habilidades</th>\n            <th>Observaciones</th>\n          </tr>\n      ");
  ninos[salon].forEach(function (nino, indice) {
    var id = "".concat(salon, "-").concat(indice, "-").concat(fecha);
    var asistenciaGuardada = obtenerAsistencia(salon, fecha, nino);
    html += "\n          <tr>\n            <td class=\"nombre-nino\">\n              <div class=\"nombre-lider\">\n                <span>".concat(escaparTexto(nino), "</span>\n                <span class=\"acciones-lider\">\n                  ").concat(puedeEliminar ? "\n                    <button class=\"accion-lider boton-rojo\" title=\"Eliminar ni\xF1o\" aria-label=\"Eliminar ni\xF1o\"\n                      onclick=\"eliminarNino('".concat(salon, "', ").concat(indice, ")\">\n                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3\" /></svg>\n                    </button>\n                  ") : "", "\n                  ").concat(usuarioActual ? "\n                    <button class=\"accion-lider boton-editar\" title=\"Modificar ni\xF1o\" aria-label=\"Modificar ni\xF1o\"\n                      onclick=\"editarNino('".concat(salon, "', ").concat(indice, ")\">\n                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 20h4L19 9a2.1 2.1 0 0 0-4-4L4 16v4Z\" /><path d=\"m13.5 6.5 4 4\" /></svg>\n                    </button>\n                  ") : "", "\n                </span>\n              </div>\n            </td>\n\n            <td>\n              <input id=\"asistencia-").concat(id, "\" type=\"checkbox\"\n                ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Asistencia) === "Sí" ? "checked" : "", "\n                ").concat(puedeModificar ? "" : "disabled", "\n                onchange=\"actualizarCamposAsistencia('").concat(id, "')\">\n            </td>\n\n            <td>\n              <select id=\"comportamiento-").concat(id, "\"\n                ").concat(puedeModificar && (asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Asistencia) === "Sí" ? "" : "disabled", ">\n                <option value=\"\" ").concat(!(asistenciaGuardada !== null && asistenciaGuardada !== void 0 && asistenciaGuardada.Asistencia) || (asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Asistencia) !== "Sí" ? "selected" : "", ">-</option>\n                <option ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Comportamiento) === "Excelente" ? "selected" : "", ">Excelente</option>\n                <option ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Comportamiento) === "Bueno" ? "selected" : "", ">Bueno</option>\n                <option ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Comportamiento) === "Regular" ? "selected" : "", ">Regular</option>\n                <option ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Comportamiento) === "Necesita apoyo" ? "selected" : "", ">Necesita apoyo</option>\n              </select>\n            </td>\n\n            <td>\n              <select id=\"participacion-").concat(id, "\"\n                ").concat(puedeModificar && (asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Asistencia) === "Sí" ? "" : "disabled", ">\n                <option value=\"\" ").concat(!(asistenciaGuardada !== null && asistenciaGuardada !== void 0 && asistenciaGuardada.Asistencia) || (asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Asistencia) !== "Sí" ? "selected" : "", ">-</option>\n                <option ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Participacion) === "Alta" ? "selected" : "", ">Alta</option>\n                <option ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Participacion) === "Media" ? "selected" : "", ">Media</option>\n                <option ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Participacion) === "Baja" ? "selected" : "", ">Baja</option>\n              </select>\n            </td>\n\n            <td>\n              <select id=\"desarrollo-").concat(id, "\"\n                ").concat(puedeModificar && (asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Asistencia) === "Sí" ? "" : "disabled", ">\n                <option value=\"\" ").concat(!(asistenciaGuardada !== null && asistenciaGuardada !== void 0 && asistenciaGuardada.Asistencia) || (asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Asistencia) !== "Sí" ? "selected" : "", ">-</option>\n                <option ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Desarrollo) === "Excelente" ? "selected" : "", ">Excelente</option>\n                <option ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Desarrollo) === "Bueno" ? "selected" : "", ">Bueno</option>\n                <option ").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Desarrollo) === "En proceso" ? "selected" : "", ">En proceso</option>\n              </select>\n            </td>\n\n            <td>\n              <textarea id=\"observaciones-").concat(id, "\"\n                ").concat(puedeModificar && (asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Asistencia) === "Sí" ? "" : "disabled", "\n                placeholder=\"Observaciones\">").concat((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Asistencia) === "Sí" ? escaparTexto((asistenciaGuardada === null || asistenciaGuardada === void 0 ? void 0 : asistenciaGuardada.Observaciones) || "") : "", "</textarea>\n            </td>\n\n          </tr>\n        ");
  });
  html += "</table></div>";
  if (puedeModificar) {
    var datosClase = obtenerDatosClase(salon, fecha);
    html += "\n          <div class=\"datos-clase\">\n            <div>\n              <label for=\"comentarioClase\">Comentario de la clase:</label>\n              <textarea id=\"comentarioClase\" placeholder=\"Comentario de la clase\">".concat(escaparTexto((datosClase === null || datosClase === void 0 ? void 0 : datosClase.Comentario) || ""), "</textarea>\n            </div>\n            <div>\n              <label for=\"multimediaClase\">Archivo multimedia (imagen, video o audio):</label>\n              <input id=\"multimediaClase\" type=\"file\" accept=\"image/*,video/*,audio/*\">\n              <small>Imagen/audio hasta 2 MB o video hasta 5 MB.</small>\n              ").concat(mostrarMultimediaClase(datosClase), "\n            </div>\n          </div>\n          <br>\n          <button onclick=\"guardarAsistencia()\">Guardar asistencia</button>\n        ");
  } else {
    html += "\n          <p><strong>Modo consulta:</strong>\n          solamente puede consultar la informaci\xF3n.</p>\n        ";
  }
  document.getElementById("tablaAsistencia").innerHTML = html;
}
function actualizarCamposAsistencia(id) {
  var asistencia = document.getElementById("asistencia-".concat(id));
  var habilitado = asistencia.checked && !asistencia.disabled;
  ["comportamiento", "participacion", "desarrollo", "observaciones"].forEach(function (campo) {
    var elemento = document.getElementById("".concat(campo, "-").concat(id));
    elemento.disabled = !habilitado;
    if (!habilitado) {
      if (elemento.tagName === "SELECT") elemento.value = "";else elemento.value = "";
    }
  });
}
function agregarNino() {
  var nombre = document.getElementById("nombreNino").value.trim();
  var cumpleanos = normalizarCumpleanos(document.getElementById("cumpleanosNino").value);
  var salonNuevo = document.getElementById("salonNuevoNino").value;
  var mensaje = document.getElementById("mensajeNino");
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
    cumpleanos: cumpleanos,
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
  var nombre = ninos[salon][indice];
  ninoEliminacionPendiente = {
    salon: salon,
    indice: indice
  };
  document.getElementById("textoConfirmacionNino").textContent = "\xBFEst\xE1 seguro de eliminar a ".concat(nombre, "?");
  document.getElementById("modalConfirmacionNino").classList.remove("oculto");
}
function eliminarNinoConfirmado() {
  if (!usuarioActual || usuarioActual.rol !== "Administrador" || !ninoEliminacionPendiente) {
    return;
  }
  var _ninoEliminacionPendi = ninoEliminacionPendiente,
    salon = _ninoEliminacionPendi.salon,
    indice = _ninoEliminacionPendi.indice;
  var nombre = ninos[salon][indice];
  ninos[salon].splice(indice, 1);
  delete datosNinos[claveNino(salon, nombre)];
  guardarDatosNinos();
  guardarNinos();
  ninoEliminacionPendiente = null;
  cerrarModal("modalConfirmacionNino");
  mostrarAsistencia();
}
function guardarAsistencia() {
  return _guardarAsistencia.apply(this, arguments);
}
function _guardarAsistencia() {
  _guardarAsistencia = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
    var _document$getElementB, _document$getElementB2, _asistencias;
    var salon, fecha, comentario, archivo, datosClase, multimedia, esImagen, limite, filasAsistencia, sincronizada, _t1, _t10, _t11, _t12;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          salon = document.getElementById("salon").value;
          fecha = document.getElementById("fecha").value;
          comentario = ((_document$getElementB = document.getElementById("comentarioClase")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value.trim()) || "";
          archivo = (_document$getElementB2 = document.getElementById("multimediaClase")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.files[0];
          datosClase = obtenerDatosClase(salon, fecha);
          if (esDomingo(fecha)) {
            _context0.n = 1;
            break;
          }
          alert("No se puede guardar la asistencia: seleccione un domingo.");
          return _context0.a(2);
        case 1:
          if (!archivo) {
            _context0.n = 9;
            break;
          }
          esImagen = archivo.type.startsWith("image/");
          limite = archivo.type.startsWith("video/") ? 5 * 1024 * 1024 : 2 * 1024 * 1024;
          if (!(!esImagen && archivo.size > limite)) {
            _context0.n = 2;
            break;
          }
          alert("El archivo supera el l\xEDmite permitido de ".concat(archivo.type.startsWith("video/") ? "5 MB" : "2 MB", "."));
          return _context0.a(2);
        case 2:
          _context0.p = 2;
          if (!esImagen) {
            _context0.n = 4;
            break;
          }
          _context0.n = 3;
          return prepararImagen(archivo, limite);
        case 3:
          _t1 = _context0.v;
          _context0.n = 6;
          break;
        case 4:
          _t10 = archivo.type;
          _context0.n = 5;
          return leerArchivoComoDataURL(archivo);
        case 5:
          _t11 = _context0.v;
          _t1 = {
            tipo: _t10,
            datos: _t11
          };
        case 6:
          multimedia = _t1;
          _context0.n = 8;
          break;
        case 7:
          _context0.p = 7;
          _t12 = _context0.v;
          console.error("No se pudo preparar el archivo multimedia de la asistencia.", _t12);
          alert("No se pudo preparar el archivo multimedia. Intente con otra imagen.");
          return _context0.a(2);
        case 8:
          _context0.n = 10;
          break;
        case 9:
          multimedia = {
            tipo: (datosClase === null || datosClase === void 0 ? void 0 : datosClase.MediaTipo) || "",
            datos: (datosClase === null || datosClase === void 0 ? void 0 : datosClase.MediaData) || ""
          };
        case 10:
          filasAsistencia = ninos[salon].map(function (nombre, indice) {
            var id = "".concat(salon, "-").concat(indice, "-").concat(fecha);
            return {
              Fecha: fecha,
              Salon: salon,
              Nombre: nombre,
              Asistencia: document.getElementById("asistencia-".concat(id)).checked ? "Sí" : "No",
              Comportamiento: document.getElementById("comportamiento-".concat(id)).value,
              Participacion: document.getElementById("participacion-".concat(id)).value,
              Desarrollo: document.getElementById("desarrollo-".concat(id)).value,
              Observaciones: document.getElementById("observaciones-".concat(id)).value,
              Comentario: comentario,
              MediaTipo: multimedia.tipo,
              MediaData: multimedia.datos
            };
          });
          asistencias = asistencias.filter(function (fila) {
            return String(fila.Fecha) !== fecha || String(fila.Salon) !== salon;
          });
          (_asistencias = asistencias).push.apply(_asistencias, _toConsumableArray(filasAsistencia));
          _context0.n = 11;
          return sincronizarAsistencias(fecha, salon, filasAsistencia);
        case 11:
          sincronizada = _context0.v;
          actualizarEstadosNinos(salon);
          guardarNinos();
          mostrarExito(sincronizada ? "Asistencia guardada correctamente." : "No se pudo sincronizar. La asistencia queda solo en esta pantalla; revise la conexión y vuelva a guardar antes de salir.");
        case 12:
          return _context0.a(2);
      }
    }, _callee8, null, [[2, 7]]);
  }));
  return _guardarAsistencia.apply(this, arguments);
}
function sincronizarAsistencias(_x6, _x7, _x8) {
  return _sincronizarAsistencias.apply(this, arguments);
}
function _sincronizarAsistencias() {
  _sincronizarAsistencias = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(fecha, salon, filasNuevas) {
    var filasActuales, restantes, _t13;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          _context1.n = 1;
          return leerHoja(HOJAS.asistencias);
        case 1:
          filasActuales = _context1.v;
          restantes = filasActuales.filter(function (fila) {
            return fila.Fecha !== fecha || fila.Salon !== salon;
          });
          _context1.n = 2;
          return reemplazarHoja(HOJAS.asistencias, restantes.concat(filasNuevas));
        case 2:
          return _context1.a(2, true);
        case 3:
          _context1.p = 3;
          _t13 = _context1.v;
          console.error(_t13);
          return _context1.a(2, false);
      }
    }, _callee9, null, [[0, 3]]);
  }));
  return _sincronizarAsistencias.apply(this, arguments);
}
function mostrarPanelUsuarios() {
  var botonResumen = document.getElementById("botonResumenNino");
  var botonResumenClase = document.getElementById("botonResumenClase");
  if (usuarioActual && (usuarioActual.rol === "Supervisor" || usuarioActual.rol === "Administrador")) {
    botonResumen.classList.remove("oculto");
  } else {
    botonResumen.classList.add("oculto");
  }
  botonResumenClase.classList.toggle("oculto", !usuarioActual || usuarioActual.rol !== "Supervisor" && usuarioActual.rol !== "Administrador");
}
function nombreMesCumpleanos(fechaTexto) {
  if (!fechaTexto) return "";
  var _normalizarCumpleanos = normalizarCumpleanos(fechaTexto).split("-"),
    _normalizarCumpleanos2 = _slicedToArray(_normalizarCumpleanos, 2),
    mes = _normalizarCumpleanos2[0],
    dia = _normalizarCumpleanos2[1];
  return new Date(2024, Number(mes) - 1, Number(dia)).toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "long"
  });
}
function obtenerNinosConCumpleanos() {
  return Object.entries(ninos).flatMap(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      salon = _ref6[0],
      nombres = _ref6[1];
    return nombres.map(function (nombre) {
      return _objectSpread({
        salon: salon,
        nombre: nombre
      }, obtenerDatosNino(salon, nombre));
    }).filter(function (nino) {
      return nino.cumpleanos;
    });
  });
}
function cumpleanosEstaSemana(fechaTexto) {
  if (!fechaTexto) return false;
  var _fechaTexto$split$map = fechaTexto.split("-").map(Number),
    _fechaTexto$split$map2 = _slicedToArray(_fechaTexto$split$map, 2),
    mes = _fechaTexto$split$map2[0],
    dia = _fechaTexto$split$map2[1];
  var hoy = new Date();
  var inicio = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  inicio.setDate(inicio.getDate() - (inicio.getDay() + 6) % 7);
  var fin = new Date(inicio);
  fin.setDate(fin.getDate() + 6);
  var fecha = new Date(inicio.getFullYear(), mes - 1, dia);
  if (fecha < inicio) fecha.setFullYear(fecha.getFullYear() + 1);
  return fecha >= inicio && fecha <= fin;
}
function mostrarCintaCumpleanos() {
  var mensajes = obtenerNinosConCumpleanos().filter(function (nino) {
    return cumpleanosEstaSemana(nino.cumpleanos);
  }).map(function (nino) {
    return "".concat(nino.nombre, " (").concat(nino.salon, ")");
  });
  mostrarCinta("cintaCumpleanosSistema", mensajes.length ? ["CUMPLEA\xD1OS DE LA SEMANA: ".concat(mensajes.join("  ·  "))] : []);
}
function mostrarCinta(id, mensajes) {
  var cinta = document.getElementById(id);
  if (!cinta || !mensajes.length) {
    if (cinta) {
      cinta.classList.remove("visible");
      cinta.innerHTML = "";
    }
    return;
  }
  cinta.classList.toggle("cinta-anuncios", id === "cintaAnunciosLogin");
  cinta.classList.toggle("cinta-cumpleanos", id === "cintaCumpleanosSistema");
  cinta.innerHTML = "<div class=\"cinta-contenido\">".concat(mensajes.map(function (mensaje) {
    return "<span>".concat(escaparTexto(mensaje), "</span>");
  }).join(""), "</div>");
  cinta.classList.add("visible");
}
function textoAnuncio(anuncio) {
  return anuncio.Titulo ? "ANUNCIO: ".concat(anuncio.Titulo, " | ").concat(anuncio.Texto) : "ANUNCIO: ".concat(anuncio.Texto);
}
function formatearFechaAnuncio(fechaTexto) {
  if (!fechaTexto) return "";
  var fecha;
  if (/^\d{4}-\d{2}-\d{2}$/.test(String(fechaTexto))) {
    fecha = new Date("".concat(fechaTexto, "T00:00:00"));
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
  return _toConsumableArray(lista).sort(function (a, b) {
    var fechaA = a.FechaLimite ? Date.parse("".concat(a.FechaLimite, "T00:00:00")) : Infinity;
    var fechaB = b.FechaLimite ? Date.parse("".concat(b.FechaLimite, "T00:00:00")) : Infinity;
    return fechaA - fechaB || (a.Rol === "Administrador" ? 0 : 1) - (b.Rol === "Administrador" ? 0 : 1) || Number(b.Fecha || 0) - Number(a.Fecha || 0);
  });
}
function mostrarAnunciosLogin() {
  var lista = document.getElementById("listaAnunciosInicio");
  if (!lista) return;
  var vigentes = ordenarAnuncios(anuncios.filter(anuncioVigente));
  var seccion = lista.parentElement;
  seccion === null || seccion === void 0 || seccion.classList.toggle("oculto", vigentes.length === 0);
  lista.classList.toggle("una-columna", vigentes.length === 1);
  lista.innerHTML = vigentes.map(function (anuncio) {
    var _anuncio$MediaTipo, _anuncio$MediaTipo2, _anuncio$MediaTipo3;
    var fecha = anuncio.FechaLimite || anuncio.Fecha;
    var multimedia = (_anuncio$MediaTipo = anuncio.MediaTipo) !== null && _anuncio$MediaTipo !== void 0 && _anuncio$MediaTipo.startsWith("image/") ? "<img class=\"anuncio-multimedia multimedia-ampliable\" src=\"".concat(escaparTexto(anuncio.MediaData), "\" alt=\"Imagen del anuncio\" onclick=\"abrirMultimediaDesdeElemento(event, this)\">") : (_anuncio$MediaTipo2 = anuncio.MediaTipo) !== null && _anuncio$MediaTipo2 !== void 0 && _anuncio$MediaTipo2.startsWith("video/") ? "<video class=\"anuncio-multimedia multimedia-ampliable\" controls preload=\"metadata\" src=\"".concat(escaparTexto(anuncio.MediaData), "\" onclick=\"abrirMultimediaDesdeElemento(event, this)\"></video>") : (_anuncio$MediaTipo3 = anuncio.MediaTipo) !== null && _anuncio$MediaTipo3 !== void 0 && _anuncio$MediaTipo3.startsWith("audio/") ? "<audio class=\"anuncio-multimedia multimedia-ampliable\" controls src=\"".concat(escaparTexto(anuncio.MediaData), "\" onclick=\"abrirMultimediaDesdeElemento(event, this)\"></audio>") : "";
    return "\n      <article class=\"anuncio-inicio\">\n        <div class=\"anuncio-cabecera\">\n          <h3>".concat(escaparTexto(anuncio.Titulo || "Anuncio"), "</h3>\n          ").concat(fecha ? "<span class=\"anuncio-fecha\">".concat(formatearFechaAnuncio(fecha), "</span>") : "", "\n        </div>\n        <div>").concat(escaparTexto(anuncio.Texto || ""), "</div>\n        ").concat(multimedia, "\n      </article>\n    ");
  }).join("");
}
function anuncioVigente(anuncio) {
  return !anuncio.FechaLimite || anuncio.FechaLimite >= obtenerFechaActual();
}
function obtenerFechaActual() {
  var fecha = new Date();
  return [fecha.getFullYear(), String(fecha.getMonth() + 1).padStart(2, "0"), String(fecha.getDate()).padStart(2, "0")].join("-");
}
function mostrarTarjetaAnuncio(anuncio, indice) {
  var _anuncio$MediaTipo4, _anuncio$MediaTipo5, _usuarioActual2;
  var pasado = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return "\n    <div class=\"anuncio-item ".concat(anuncio.Rol === "Administrador" ? "prioridad" : "", " ").concat(pasado ? "anuncio-pasado" : "", "\">\n      <div class=\"anuncio-cabecera\">\n        <strong>").concat(escaparTexto(anuncio.Titulo || "Anuncio"), "</strong>\n        ").concat(anuncio.FechaLimite ? "<span class=\"anuncio-fecha\">".concat(formatearFechaAnuncio(anuncio.FechaLimite), "</span>") : "", "\n      </div>\n      <span>").concat(escaparTexto(anuncio.Texto), "</span>\n      ").concat((_anuncio$MediaTipo4 = anuncio.MediaTipo) !== null && _anuncio$MediaTipo4 !== void 0 && _anuncio$MediaTipo4.startsWith("image/") ? "<img class=\"anuncio-multimedia multimedia-ampliable\" src=\"".concat(escaparTexto(anuncio.MediaData), "\" alt=\"Imagen del anuncio\" title=\"Abrir archivo\" onclick=\"abrirMultimediaDesdeElemento(event, this)\">") : "", "\n      ").concat((_anuncio$MediaTipo5 = anuncio.MediaTipo) !== null && _anuncio$MediaTipo5 !== void 0 && _anuncio$MediaTipo5.startsWith("video/") ? "<video class=\"anuncio-multimedia multimedia-ampliable\" controls preload=\"metadata\" src=\"".concat(escaparTexto(anuncio.MediaData), "\" title=\"Abrir archivo\" onclick=\"abrirMultimediaDesdeElemento(event, this)\"></video>") : "", "\n      ").concat(anuncio.Rol === "Administrador" ? "<small>Prioridad administrativa</small>" : "", "\n      ").concat(((_usuarioActual2 = usuarioActual) === null || _usuarioActual2 === void 0 ? void 0 : _usuarioActual2.rol) === "Administrador" ? "<button onclick=\"editarAnuncio(".concat(indice, ")\">Modificar anuncio</button><button class=\"boton-eliminar-anuncio boton-rojo\" onclick=\"confirmarEliminarAnuncio(").concat(indice, ")\">Eliminar anuncio</button>") : "", "\n    </div>\n  ");
}
function mostrarListaAnuncios() {
  var lista = document.getElementById("listaAnuncios");
  lista.innerHTML = ordenarAnuncios(anuncios.filter(anuncioVigente)).map(function (anuncio) {
    return mostrarTarjetaAnuncio(anuncio, anuncios.indexOf(anuncio));
  }).join("") || "<p>No hay anuncios publicados.</p>";
  document.getElementById("listaAnunciosPasados").innerHTML = ordenarAnuncios(anuncios.filter(function (anuncio) {
    return !anuncioVigente(anuncio);
  })).map(function (anuncio) {
    return mostrarTarjetaAnuncio(anuncio, anuncios.indexOf(anuncio), true);
  }).join("") || "<p>No hay anuncios pasados.</p>";
}
function abrirAnuncios() {
  mostrarListaAnuncios();
  document.getElementById("modalAnuncios").classList.remove("oculto");
}
function guardarAnuncio() {
  return _guardarAnuncio.apply(this, arguments);
}
function _guardarAnuncio() {
  _guardarAnuncio = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
    var titulo, texto, fechaLimite, archivo, limite, multimedia, datosAnuncio, _t14;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          if (usuarioActual) {
            _context10.n = 1;
            break;
          }
          return _context10.a(2);
        case 1:
          titulo = document.getElementById("tituloAnuncio").value.trim();
          texto = document.getElementById("textoAnuncio").value.trim();
          fechaLimite = document.getElementById("fechaAnuncio").value;
          if (texto) {
            _context10.n = 2;
            break;
          }
          return _context10.a(2, alert("Escriba el contenido del anuncio."));
        case 2:
          archivo = document.getElementById("multimediaAnuncio").files[0];
          limite = archivo !== null && archivo !== void 0 && archivo.type.startsWith("video/") ? 5 * 1024 * 1024 : 2 * 1024 * 1024;
          if (!(archivo && archivo.size > limite)) {
            _context10.n = 3;
            break;
          }
          return _context10.a(2, alert("El archivo supera el límite permitido."));
        case 3:
          if (!archivo) {
            _context10.n = 5;
            break;
          }
          _context10.n = 4;
          return new Promise(function (resolver, rechazar) {
            var lector = new FileReader();
            lector.onload = function () {
              return resolver({
                tipo: archivo.type,
                datos: lector.result
              });
            };
            lector.onerror = rechazar;
            lector.readAsDataURL(archivo);
          });
        case 4:
          _t14 = _context10.v;
          _context10.n = 6;
          break;
        case 5:
          _t14 = {
            tipo: anuncioEditando === null ? "" : anuncios[anuncioEditando].MediaTipo || "",
            datos: anuncioEditando === null ? "" : anuncios[anuncioEditando].MediaData || ""
          };
        case 6:
          multimedia = _t14;
          datosAnuncio = {
            Titulo: titulo,
            Texto: texto,
            Autor: usuarioActual.usuario,
            Rol: usuarioActual.rol,
            Fecha: Date.now(),
            FechaLimite: fechaLimite,
            MediaTipo: multimedia.tipo,
            MediaData: multimedia.datos
          };
          if (anuncioEditando === null) anuncios.push(datosAnuncio);else anuncios[anuncioEditando] = _objectSpread(_objectSpread({}, anuncios[anuncioEditando]), datosAnuncio);
          localStorage.setItem("anunciosInfantilRedencion", JSON.stringify(anuncios));
          _context10.n = 7;
          return reemplazarHoja(HOJAS.anuncios, anuncios);
        case 7:
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
        case 8:
          return _context10.a(2);
      }
    }, _callee0);
  }));
  return _guardarAnuncio.apply(this, arguments);
}
var anuncioPendiente = null;
var anuncioEditando = null;
function editarAnuncio(indice) {
  var _usuarioActual3;
  if (((_usuarioActual3 = usuarioActual) === null || _usuarioActual3 === void 0 ? void 0 : _usuarioActual3.rol) !== "Administrador") return;
  var anuncio = anuncios[indice];
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
  var _usuarioActual4;
  if (((_usuarioActual4 = usuarioActual) === null || _usuarioActual4 === void 0 ? void 0 : _usuarioActual4.rol) !== "Administrador") return;
  anuncioPendiente = indice;
  document.getElementById("textoConfirmacionAnuncio").textContent = "\xBFEst\xE1 seguro de eliminar el anuncio \"".concat(anuncios[indice].Titulo || "Anuncio", "\"?");
  document.getElementById("modalConfirmacionAnuncio").classList.remove("oculto");
}
function eliminarAnuncioConfirmado() {
  return _eliminarAnuncioConfirmado.apply(this, arguments);
}
function _eliminarAnuncioConfirmado() {
  _eliminarAnuncioConfirmado = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
    var _usuarioActual6;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          if (!(((_usuarioActual6 = usuarioActual) === null || _usuarioActual6 === void 0 ? void 0 : _usuarioActual6.rol) !== "Administrador" || anuncioPendiente === null)) {
            _context11.n = 1;
            break;
          }
          return _context11.a(2);
        case 1:
          anuncios.splice(anuncioPendiente, 1);
          anuncioPendiente = null;
          localStorage.setItem("anunciosInfantilRedencion", JSON.stringify(anuncios));
          _context11.n = 2;
          return reemplazarHoja(HOJAS.anuncios, anuncios);
        case 2:
          cerrarModal("modalConfirmacionAnuncio");
          mostrarListaAnuncios();
          mostrarAnunciosLogin();
          mostrarExito("El anuncio fue eliminado correctamente.");
        case 3:
          return _context11.a(2);
      }
    }, _callee1);
  }));
  return _eliminarAnuncioConfirmado.apply(this, arguments);
}
function cargarNinosResumen() {
  var salon = document.getElementById("resumenSalon").value;
  var selectorNino = document.getElementById("resumenNino");
  selectorNino.innerHTML = ninos[salon].map(function (nino) {
    return "\n      <option value=\"".concat(escaparTexto(nino), "\">").concat(escaparTexto(nino), "</option>\n    ");
  }).join("");
}
function abrirResumenNino() {
  if (!usuarioActual || usuarioActual.rol !== "Supervisor" && usuarioActual.rol !== "Administrador") {
    return;
  }
  var salon = usuarioActual.salon === "todos" ? document.getElementById("salon").value : usuarioActual.salon;
  var domingoActual = obtenerDomingoAnterior();
  document.getElementById("resumenSalon").value = salon;
  document.getElementById("resumenDesde").value = "2026-09-20";
  document.getElementById("resumenHasta").value = domingoActual;
  cargarNinosResumen();
  document.getElementById("contenidoResumenNino").innerHTML = "";
  document.getElementById("modalResumenNino").classList.remove("oculto");
}
function abrirResumenClase() {
  if (!usuarioActual || usuarioActual.rol !== "Supervisor" && usuarioActual.rol !== "Administrador") return;
  var salon = usuarioActual.salon === "todos" ? document.getElementById("salon").value : usuarioActual.salon;
  document.getElementById("resumenClaseSalon").value = salon;
  document.getElementById("resumenClaseFecha").value = document.getElementById("fecha").value;
  document.getElementById("contenidoResumenClase").innerHTML = "";
  document.getElementById("modalResumenClase").classList.remove("oculto");
}
function mostrarResumenClase() {
  if (!usuarioActual || usuarioActual.rol !== "Supervisor" && usuarioActual.rol !== "Administrador") return;
  var salonSeleccionado = document.getElementById("resumenClaseSalon").value;
  var fecha = document.getElementById("resumenClaseFecha").value;
  if (!fecha || !esDomingo(fecha)) return alert("Seleccione una fecha que sea domingo.");
  var salones = salonSeleccionado === "todos" ? Object.keys(ninos) : [salonSeleccionado];
  var lideresPorSalon = salones.map(function (salon) {
    return {
      salon: salon,
      nombres: ninos[salon] || [],
      registros: asistencias.filter(function (fila) {
        return String(fila.Salon) === salon && String(fila.Fecha) === fecha;
      })
    };
  });
  var totalNinos = lideresPorSalon.reduce(function (total, grupo) {
    return total + grupo.nombres.length;
  }, 0);
  var totalAsistentes = lideresPorSalon.reduce(function (total, grupo) {
    return total + grupo.nombres.filter(function (nombre) {
      return grupo.registros.some(function (registro) {
        return String(registro.Nombre) === nombre && registro.Asistencia === "Sí";
      });
    }).length;
  }, 0);
  var totalRegistros = lideresPorSalon.reduce(function (total, grupo) {
    return total + grupo.registros.length;
  }, 0);
  var desgloseAsistencia = salonSeleccionado === "todos" ? "<div class=\"asistencia-por-salon\">\n        ".concat(lideresPorSalon.map(function (grupo) {
    var asistentesSalon = grupo.nombres.filter(function (nombre) {
      return grupo.registros.some(function (registro) {
        return String(registro.Nombre) === nombre && registro.Asistencia === "Sí";
      });
    }).length;
    var claseCero = asistentesSalon === 0 || grupo.registros.length === 0 ? "asistencia-cero" : "";
    return "<span><span>".concat(escaparTexto(grupo.salon), "</span><span class=\"conteo-asistencia ").concat(claseCero, "\">").concat(asistentesSalon, "</span></span>");
  }).join(""), "\n        <span class=\"asistencia-total\"><span>Total</span><span class=\"conteo-asistencia\">").concat(totalAsistentes, "</span></span>\n      </div>") : "<strong>".concat(totalAsistentes, "</strong>");
  var filas = lideresPorSalon.flatMap(function (_ref7) {
    var salon = _ref7.salon,
      nombres = _ref7.nombres,
      registros = _ref7.registros;
    return nombres.map(function (nombre) {
      var registro = registros.find(function (fila) {
        return String(fila.Nombre) === nombre;
      });
      var asistio = (registro === null || registro === void 0 ? void 0 : registro.Asistencia) === "Sí";
      return "<tr class=\"".concat(!asistio ? "fila-falta" : "", "\">\n          ").concat(salonSeleccionado === "todos" ? "<td class=\"col-salon\">".concat(escaparTexto(salon), "</td>") : "", "\n          <td class=\"col-nino\">").concat(escaparTexto(nombre), "</td>\n          <td>").concat(escaparTexto(obtenerDatosNino(salon, nombre).estado || "Activo"), "</td>\n          <td>").concat(asistio ? "Asistió" : "Faltó", "</td>\n          <td>").concat(asistio ? escaparTexto((registro === null || registro === void 0 ? void 0 : registro.Comportamiento) || "-") : "-", "</td>\n          <td>").concat(asistio ? escaparTexto((registro === null || registro === void 0 ? void 0 : registro.Participacion) || "-") : "-", "</td>\n          <td>").concat(asistio ? escaparTexto((registro === null || registro === void 0 ? void 0 : registro.Desarrollo) || "-") : "-", "</td>\n          <td class=\"col-observaciones\">").concat(asistio ? escaparTexto((registro === null || registro === void 0 ? void 0 : registro.Observaciones) || "-") : "-", "</td>\n        </tr>");
    });
  }).join("");
  var datosClases = lideresPorSalon.map(function (_ref8) {
    var salon = _ref8.salon;
    return {
      salon: salon,
      datos: obtenerDatosClase(salon, fecha)
    };
  }).filter(function (_ref9) {
    var datos = _ref9.datos;
    return (datos === null || datos === void 0 ? void 0 : datos.Comentario) || (datos === null || datos === void 0 ? void 0 : datos.MediaData);
  });
  var detalleClase = datosClases.map(function (_ref0) {
    var salon = _ref0.salon,
      datos = _ref0.datos;
    return "\n    <section class=\"detalle-resumen-clase\">\n      ".concat(salonSeleccionado === "todos" ? "<h3>".concat(escaparTexto(salon), "</h3>") : "", "\n      ").concat(datos.Comentario ? "<div class=\"resumen-dato\">Comentario de la clase<strong>".concat(escaparTexto(datos.Comentario), "</strong></div>") : "", "\n      ").concat(mostrarMultimediaClase(datos), "\n    </section>\n  ");
  }).join("");
  document.getElementById("contenidoResumenClase").innerHTML = "\n    <div class=\"resumen-datos\">\n      <div class=\"resumen-dato\">Ni\xF1os<strong>".concat(totalNinos, "</strong></div>\n    <div class=\"resumen-dato\">Asistieron").concat(desgloseAsistencia, "</div>\n      <div class=\"resumen-dato\">Faltaron<strong>").concat(totalNinos - totalAsistentes, "</strong></div>\n      <div class=\"resumen-dato\">Registros guardados<strong>").concat(totalRegistros, "</strong></div>\n    </div>\n    <div class=\"tabla-scroll\">\n      <table class=\"tabla-resumen\">\n        <tr>\n          ").concat(salonSeleccionado === "todos" ? "<th class=\"col-salon\">Sal\xF3n</th>" : "", "\n          <th class=\"col-nino\">Ni\xF1o</th>\n          <th>Estado</th>\n          <th>Asistencia</th>\n          <th>Comportamiento</th>\n          <th>Participaci\xF3n</th>\n          <th>Desarrollo</th>\n          <th class=\"col-observaciones\">Observaciones</th>\n        </tr>\n        ").concat(filas || "<tr><td colspan=\"".concat(salonSeleccionado === "todos" ? 8 : 7, "\">No hay ni\xF1os registrados en ").concat(salonSeleccionado === "todos" ? "los salones" : "este salón", ".</td></tr>"), "\n      </table>\n    </div>\n    ").concat(detalleClase || (!ninos[salonSeleccionado] && salonSeleccionado !== "todos" ? "" : "<p>No hay comentarios ni archivos multimedia de clase para esta fecha.</p>"), "\n  ");
}
function mostrarCalendarioCumpleanos() {
  var mesTexto = document.getElementById("mesCumpleanos").value;
  var mes = Number(mesTexto);
  var anioActual = new Date().getFullYear();
  var porDia = {};
  obtenerNinosConCumpleanos().forEach(function (nino) {
    var _nino$cumpleanos;
    (porDia[_nino$cumpleanos = nino.cumpleanos] || (porDia[_nino$cumpleanos] = [])).push(nino);
  });
  var dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  var html = "<div class=\"calendario-cumpleanos\">".concat(dias.map(function (dia) {
    return "<div class=\"dia-semana\">".concat(dia, "</div>");
  }).join(""));
  var primerDiaMes = new Date(anioActual, mes - 1, 1);
  var diaInicio = new Date(primerDiaMes);
  diaInicio.setDate(diaInicio.getDate() - (diaInicio.getDay() + 6) % 7);
  var diasEnMes = new Date(anioActual, mes, 0).getDate();
  var numeroCeldas = Math.ceil(((primerDiaMes.getDay() + 6) % 7 + diasEnMes) / 7) * 7;
  for (var indice = 0; indice < numeroCeldas; indice++) {
    var fecha = new Date(diaInicio);
    fecha.setDate(diaInicio.getDate() + indice);
    var mesCelda = fecha.getMonth() + 1;
    var claveCumpleanos = "".concat(String(mesCelda).padStart(2, "0"), "-").concat(String(fecha.getDate()).padStart(2, "0"));
    var cumpleaneros = porDia[claveCumpleanos] || [];
    var clasesMes = mesCelda === mes ? "" : " otro-mes";
    html += "<button type=\"button\" class=\"dia-cumpleanos".concat(clasesMes, "\" aria-label=\"").concat(fecha.toLocaleDateString("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }), "\" onclick=\"abrirCumpleanosDia(").concat(mesCelda, ", ").concat(fecha.getDate(), ", ").concat(fecha.getFullYear(), ")\"><span class=\"numero-dia\">").concat(fecha.getDate(), "</span>").concat(cumpleaneros.map(function (nino) {
      return "<span class=\"cumpleanero\"><strong>".concat(escaparTexto(nino.nombre), "</strong><br>").concat(escaparTexto(nino.salon), "<img class=\"foto-cumpleanero\" src=\"").concat(escaparTexto(fuenteFotoNino(nino)), "\" alt=\"Foto de ").concat(escaparTexto(nino.nombre), "\"></span>");
    }).join(""), "</button>");
  }
  document.getElementById("calendarioCumpleanos").innerHTML = "".concat(html, "</div>");
}
var ICONO_USUARIO_NINO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23174ea6'%3E%3Cpath d='M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.2 0-9 2.7-9 6v2h18v-2c0-3.3-3.8-6-9-6Z'/%3E%3C/svg%3E";
function fuenteFotoNino(nino) {
  return (nino === null || nino === void 0 ? void 0 : nino.fotoData) || ICONO_USUARIO_NINO;
}
function abrirCumpleanosDia(mes, dia) {
  var anio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getFullYear();
  var cumpleanos = obtenerNinosConCumpleanos().filter(function (nino) {
    var _nino$cumpleanos$spli = nino.cumpleanos.split("-").map(Number),
      _nino$cumpleanos$spli2 = _slicedToArray(_nino$cumpleanos$spli, 2),
      mesNino = _nino$cumpleanos$spli2[0],
      diaNino = _nino$cumpleanos$spli2[1];
    return mesNino === mes && diaNino === dia;
  });
  var fecha = new Date(anio, mes - 1, dia);
  document.getElementById("tituloCumpleanosDia").textContent = "Cumplea\xF1os del ".concat(fecha.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long"
  }));
  document.getElementById("listaCumpleanosDia").innerHTML = cumpleanos.length ? cumpleanos.map(function (nino) {
    return "\n      <article class=\"cumpleanero-dia\">\n        <img class=\"foto-cumpleanero multimedia-ampliable\"\n          src=\"".concat(escaparTexto(fuenteFotoNino(nino)), "\"\n          alt=\"Foto de ").concat(escaparTexto(nino.nombre), "\"\n          title=\"Abrir foto\"\n          onclick=\"abrirMultimediaDesdeElemento(event, this)\">\n        <div><strong>").concat(escaparTexto(nino.nombre), "</strong><br>\n          <span>Sal\xF3n: ").concat(escaparTexto(nino.salon), "</span>\n        </div>\n      </article>\n    ");
  }).join("") : "<p>No hay cumpleaños registrados para este día.</p>";
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
  var domingos = [];
  var fecha = new Date("".concat(desdeTexto, "T00:00:00"));
  var hasta = new Date("".concat(hastaTexto, "T00:00:00"));
  while (fecha <= hasta) {
    domingos.push([fecha.getFullYear(), String(fecha.getMonth() + 1).padStart(2, "0"), String(fecha.getDate()).padStart(2, "0")].join("-"));
    fecha.setDate(fecha.getDate() + 7);
  }
  return domingos;
}
function valorMasFrecuente(filas, propiedad) {
  var cantidades = {};
  filas.forEach(function (fila) {
    var valor = String(fila[propiedad] || "").trim();
    if (valor) {
      cantidades[valor] = (cantidades[valor] || 0) + 1;
    }
  });
  var valores = Object.keys(cantidades);
  if (!valores.length) {
    return "Sin datos";
  }
  return valores.sort(function (a, b) {
    return cantidades[b] - cantidades[a];
  })[0];
}
function formatearFechaResumen(fechaTexto) {
  return new Date("".concat(fechaTexto, "T00:00:00")).toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}
function mostrarResumenNino() {
  if (!usuarioActual || usuarioActual.rol !== "Supervisor" && usuarioActual.rol !== "Administrador") {
    return;
  }
  var salon = document.getElementById("resumenSalon").value;
  var nino = document.getElementById("resumenNino").value;
  var desde = document.getElementById("resumenDesde").value;
  var hasta = document.getElementById("resumenHasta").value;
  if (!nino || !esDomingo(desde) || !esDomingo(hasta)) {
    alert("Seleccione fechas de inicio y fin que sean domingos.");
    return;
  }
  if (desde > hasta) {
    alert("La fecha inicial no puede ser posterior a la fecha final.");
    return;
  }
  var domingos = obtenerDomingosEntre(desde, hasta);
  var registros = asistencias.filter(function (fila) {
    return String(fila.Salon) === salon && String(fila.Nombre) === nino && domingos.includes(String(fila.Fecha));
  });
  var registrosPorFecha = Object.fromEntries(registros.map(function (fila) {
    return [String(fila.Fecha), fila];
  }));
  var asistenciasContadas = registros.filter(function (fila) {
    return fila.Asistencia === "Sí";
  }).length;
  var faltasContadas = registros.filter(function (fila) {
    return fila.Asistencia === "No";
  }).length;
  var totalRegistradas = registros.length;
  var sinRegistro = domingos.length - totalRegistradas;
  var filasCalendario = domingos.map(function (fecha) {
    var registro = registrosPorFecha[fecha];
    var estado = !registro ? "Sin registro" : registro.Asistencia === "Sí" ? "Asistió" : "Falta";
    var puedeMostrarResultados = (registro === null || registro === void 0 ? void 0 : registro.Asistencia) === "Sí";
    return "\n      <tr class=\"".concat((registro === null || registro === void 0 ? void 0 : registro.Asistencia) === "No" ? "fila-falta" : "", "\">\n        <td>").concat(formatearFechaResumen(fecha), "</td>\n        <td>").concat(estado, "</td>\n        <td>").concat(puedeMostrarResultados ? escaparTexto(registro.Comportamiento || "-") : "-", "</td>\n        <td>").concat(puedeMostrarResultados ? escaparTexto(registro.Participacion || "-") : "-", "</td>\n        <td>").concat(puedeMostrarResultados ? escaparTexto(registro.Desarrollo || "-") : "-", "</td>\n      </tr>\n    ");
  }).join("");
  var datosNino = obtenerDatosNino(salon, nino);
  document.getElementById("contenidoResumenNino").innerHTML = "\n    <div class=\"encabezado-resumen-nino\">\n      <div class=\"foto-resumen-contenedor\">\n        <img class=\"foto-nino-resumen multimedia-ampliable\"\n          src=\"".concat(escaparTexto(fuenteFotoNino(datosNino)), "\"\n          alt=\"Foto de ").concat(escaparTexto(nino), "\"\n          title=\"Abrir foto\"\n          onclick=\"abrirMultimediaDesdeElemento(event, this)\">\n      </div>\n      <div class=\"datos-encabezado-resumen\">\n        <h3>").concat(escaparTexto(nino), " | ").concat(escaparTexto(salon), "</h3>\n        <p class=\"fecha-cumpleanos-resumen\"><strong>Cumplea\xF1os:</strong> ").concat(datosNino.cumpleanos ? nombreMesCumpleanos(datosNino.cumpleanos) : "Sin registrar", "</p>\n        <p>Periodo: ").concat(formatearFechaResumen(desde), " al ").concat(formatearFechaResumen(hasta), "</p>\n      </div>\n    </div>\n\n    <div class=\"resumen-datos\">\n      <div class=\"resumen-dato\">Estado<strong>").concat(escaparTexto(datosNino.estado || "Activo"), "</strong></div>\n      <div class=\"resumen-dato\">Representante<strong>").concat(escaparTexto(datosNino.representante || "Sin registrar"), "</strong></div>\n      <div class=\"resumen-dato\">Tel\xE9fono del representante<strong>").concat(escaparTexto(datosNino.telefonoRepresentante || "Sin registrar"), "</strong></div>\n      <div class=\"resumen-dato\">Alergias<strong>").concat(datosNino.alergico ? escaparTexto(datosNino.alergias || "Sí, no especificadas") : "No", "</strong></div>\n      <div class=\"resumen-dato\">Domingos del periodo<strong>").concat(domingos.length, "</strong></div>\n      <div class=\"resumen-dato\">Asistencias<strong>").concat(asistenciasContadas, "</strong></div>\n      <div class=\"resumen-dato\">Faltas<strong>").concat(faltasContadas, "</strong></div>\n      <div class=\"resumen-dato\">Registros guardados<strong>").concat(totalRegistradas, "</strong></div>\n      <div class=\"resumen-dato\">Sin registro<strong>").concat(sinRegistro, "</strong></div>\n      <div class=\"resumen-dato\">Comportamiento predominante<strong>").concat(escaparTexto(valorMasFrecuente(registros, "Comportamiento")), "</strong></div>\n      <div class=\"resumen-dato\">Participaci\xF3n predominante<strong>").concat(escaparTexto(valorMasFrecuente(registros, "Participacion")), "</strong></div>\n      <div class=\"resumen-dato\">Desarrollo predominante<strong>").concat(escaparTexto(valorMasFrecuente(registros, "Desarrollo")), "</strong></div>\n    </div>\n\n    <div class=\"tabla-scroll\">\n      <table class=\"tabla-resumen\">\n        <tr>\n          <th>Domingo</th>\n          <th>Estado</th>\n          <th>Comportamiento</th>\n          <th>Participaci\xF3n</th>\n          <th>Desarrollo</th>\n        </tr>\n        ").concat(filasCalendario, "\n      </table>\n    </div>\n  ");
}
var ninoPendiente = null;
var fotoNinoSeleccionada = "";
var fotoNinoTipoSeleccionada = "";
function editarNino(salon, indice) {
  var _ninos$salon;
  if (!usuarioActual || !((_ninos$salon = ninos[salon]) !== null && _ninos$salon !== void 0 && _ninos$salon[indice])) return;
  var nombreAnterior = ninos[salon][indice];
  var datos = obtenerDatosNino(salon, nombreAnterior);
  ninoPendiente = {
    salon: salon,
    indice: indice
  };
  fotoNinoSeleccionada = datos.fotoData || "";
  fotoNinoTipoSeleccionada = datos.fotoTipo || "";
  document.getElementById("nombreNinoCambioTexto").textContent = "Nombre actual: ".concat(nombreAnterior);
  document.getElementById("nombreNinoModal").value = nombreAnterior;
  document.getElementById("cumpleanosNinoModal").value = formatearCumpleanosEntrada(datos.cumpleanos);
  document.getElementById("estadoNinoModal").value = datos.estado || "Activo";
  document.getElementById("representanteNinoModal").value = datos.representante || "";
  document.getElementById("telefonoRepresentanteModal").value = datos.telefonoRepresentante || "";
  document.getElementById("alergicoNinoModal").checked = Boolean(datos.alergico);
  document.getElementById("alergiasNinoModal").value = datos.alergias || "";
  document.getElementById("alergiasNinoModal").disabled = !datos.alergico;
  document.getElementById("fotoNinoArchivo").value = "";
  actualizarVistaFotoNino();
  document.getElementById("modalNombreNino").classList.remove("oculto");
}
function actualizarVistaFotoNino() {
  var boton = document.getElementById("fotoNinoPerfil");
  var imagen = document.getElementById("fotoNinoPrevia");
  var tieneFoto = Boolean(fotoNinoSeleccionada);
  boton.classList.toggle("tiene-foto", tieneFoto);
  imagen.src = fotoNinoSeleccionada || "";
}
function abrirFotoNino() {
  if (!fotoNinoSeleccionada) {
    document.getElementById("fotoNinoArchivo").click();
    return;
  }
  document.getElementById("contenidoMultimedia").innerHTML = "<img src=\"".concat(escaparTexto(fotoNinoSeleccionada), "\" alt=\"Foto ampliada del ni\xF1o\">");
  document.getElementById("modalMultimedia").classList.remove("oculto");
}
function cargarFotoNino(_x9) {
  return _cargarFotoNino.apply(this, arguments);
}
function _cargarFotoNino() {
  _cargarFotoNino = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(archivo) {
    var foto, _t15;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          if (archivo) {
            _context12.n = 1;
            break;
          }
          return _context12.a(2);
        case 1:
          if (archivo.type.startsWith("image/")) {
            _context12.n = 2;
            break;
          }
          alert("Seleccione un archivo de imagen.");
          return _context12.a(2);
        case 2:
          _context12.p = 2;
          _context12.n = 3;
          return prepararImagen(archivo, 2 * 1024 * 1024);
        case 3:
          foto = _context12.v;
          fotoNinoSeleccionada = String(foto.datos || "");
          fotoNinoTipoSeleccionada = foto.tipo;
          actualizarVistaFotoNino();
          _context12.n = 5;
          break;
        case 4:
          _context12.p = 4;
          _t15 = _context12.v;
          console.error("No se pudo preparar la foto del niño.", _t15);
          document.getElementById("fotoNinoArchivo").value = "";
          alert("No se pudo preparar la foto seleccionada. Intente con otra imagen.");
        case 5:
          return _context12.a(2);
      }
    }, _callee10, null, [[2, 4]]);
  }));
  return _cargarFotoNino.apply(this, arguments);
}
function guardarNombreNino() {
  if (!usuarioActual || !ninoPendiente) return;
  var nuevoNombre = document.getElementById("nombreNinoModal").value.trim();
  var nuevoCumpleanos = normalizarCumpleanos(document.getElementById("cumpleanosNinoModal").value);
  var nuevoEstado = document.getElementById("estadoNinoModal").value;
  if (!nuevoNombre) {
    alert("El nombre no puede estar vacío.");
    return;
  }
  var nombreAnterior = ninos[ninoPendiente.salon][ninoPendiente.indice];
  if (nuevoNombre !== nombreAnterior && ninos[ninoPendiente.salon].includes(nuevoNombre)) {
    alert("Ya existe un niño con ese nombre en este salón.");
    return;
  }
  var datosAnteriores = obtenerDatosNino(ninoPendiente.salon, nombreAnterior);
  delete datosNinos[claveNino(ninoPendiente.salon, nombreAnterior)];
  ninos[ninoPendiente.salon][ninoPendiente.indice] = nuevoNombre;
  datosNinos[claveNino(ninoPendiente.salon, nuevoNombre)] = _objectSpread(_objectSpread({}, datosAnteriores), {}, {
    cumpleanos: nuevoCumpleanos,
    estado: nuevoEstado,
    semanasSinAsistencia: 0,
    ultimoDomingoEstado: obtenerDomingoAnterior(),
    estadoManual: nuevoEstado,
    estadoManualFecha: obtenerDomingoAnterior(),
    representante: document.getElementById("representanteNinoModal").value.trim(),
    telefonoRepresentante: document.getElementById("telefonoRepresentanteModal").value.trim(),
    alergico: document.getElementById("alergicoNinoModal").checked,
    alergias: document.getElementById("alergicoNinoModal").checked ? document.getElementById("alergiasNinoModal").value.trim() : "",
    fotoData: fotoNinoSeleccionada,
    fotoTipo: fotoNinoTipoSeleccionada
  });
  guardarDatosNinos();
  ordenarNinos(ninoPendiente.salon);
  guardarNinos();
  cerrarModal("modalNombreNino");
  ninoPendiente = null;
  mostrarAsistencia();
}
var ninoEliminacionPendiente = null;
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
function cerrarSesion() {
  return _cerrarSesion.apply(this, arguments);
}
function _cerrarSesion() {
  _cerrarSesion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
    var firebase, _t16;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.p = _context13.n) {
        case 0:
          _context13.p = 0;
          _context13.n = 1;
          return window.firebaseReady;
        case 1:
          firebase = _context13.v;
          _context13.n = 2;
          return firebase.signOut(firebase.auth);
        case 2:
          _context13.n = 4;
          break;
        case 3:
          _context13.p = 3;
          _t16 = _context13.v;
          console.error("No se pudo cerrar la sesión de Firebase.", _t16);
          alert("No se pudo cerrar la sesión. Intente de nuevo.");
          return _context13.a(2);
        case 4:
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
        case 5:
          return _context13.a(2);
      }
    }, _callee11, null, [[0, 3]]);
  }));
  return _cerrarSesion.apply(this, arguments);
}
