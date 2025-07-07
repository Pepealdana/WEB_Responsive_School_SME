# 🌐 Colegio Santa María de la Esperanza – Sitio Web Institucional

Este proyecto corresponde al sitio web oficial del **Colegio Santa María de la Esperanza**, una institución educativa católica ubicada en Facatativá (Cundinamarca, Colombia), orientada por la espiritualidad de la Madre Clara Fey y las Hermanas del Niño Jesús Pobre.

👉 Enlace en producción: [https://colsme.edu.co](https://colsme.edu.co)

---

## 🧭 Objetivo

Crear una plataforma web institucional, informativa, moderna, accesible y responsive, que permita a estudiantes, familias y visitantes conocer:

- La filosofía, identidad y espiritualidad del colegio.
- El proceso de admisión y contacto.
- Recursos educativos y presentación académica.
- Secciones temáticas especiales como Madre Clara Fey, comunidad PIJ, exalumnos y símbolos institucionales.

---

## 🛠️ Tecnologías utilizadas

| Herramienta / Lenguaje  | Propósito                                      |
|-------------------------|-----------------------------------------------|
| **HTML5**               | Maquetación semántica de cada página.         |
| **CSS3** (custom + Bootstrap 5) | Estilos personalizados + diseño responsive.   |
| **JavaScript**          | Animaciones, formularios, efectos dinámicos.  |
| **AOS (Animate On Scroll)** | Efectos de entrada suaves al hacer scroll.   |
| **Bootstrap Icons**     | Iconografía profesional y ligera.             |
| **FormSubmit.co**       | Envío de formularios sin backend propio.      |
| **Google Maps Embed**   | Integración del mapa de ubicación del colegio.|
| **PHP Email Form (descartado)** | Inicialmente considerado, luego reemplazado. |

---

## 📁 Estructura de carpetas

WEB_Responsive_School_SME/
│
├── assets/
│   ├── css/ → Estilos personalizados y bootstrap
│   ├── js/ → Scripts JS propios y externos
│   ├── img/ → Imágenes institucionales y de secciones
│   └── vendor/ → Librerías externas (AOS, Bootstrap Icons, etc.)
│
├── forms/
│   └── contact.php → (Obsoleto) Script de backend con PHP Email Form
│
├── index.html → Página de inicio
├── contacto.html → Página con formulario de contacto funcional
├── admisiones.html → Información del proceso de admisión
├── comunidadpij.html → Sección sobre la comunidad religiosa PIJ
├── madreclara.html → Página dedicada a Clara Fey
├── direccion.html → Misión, visión, valores y creencias
├── modeloacademico.html → Propuesta pedagógica del colegio
├── simbolos.html → Escudo, bandera e himno institucional
├── tourvirtual.html → Instalaciones y recorrido virtual
├── cronograma.html → Calendario institucional
├── exalumnos.html → Espacio para antiguos estudiantes
├── gracias.html → Página de confirmación tras envío de formulario
├── 404.html → Página personalizada de error 404
├── .htaccess → Redirección de errores del servidor Apache
└── README.md → Documentación del proyecto


## 📨 Formulario de contacto

- Funciona mediante integración con [FormSubmit.co](https://formsubmit.co/)
- Campos: nombre, correo, asunto, mensaje
- Redirección tras envío exitoso a `gracias.html`
- Validación nativa en el frontend
- Código JavaScript personalizado para mostrar confirmación sin recargar

---

## 🎨 Colores institucionales

- **Amarillo (#FFDD57):** Fondo y tarjetas especiales
- **Celeste institucional (#55C9F4):** Botones, encabezados, acentos
- **Azul profundo (#213B52):** Tipografía principal
- **Blanco:** Formularios y textos destacados

---

## 🔐 Consideraciones de privacidad

- Los únicos formularios activos son: **buzón de sugerencias (Google Forms)** y **formulario de contacto**.
- El sitio cumple con la Ley 1581 de 2012 (Protección de Datos en Colombia).
- Ver más en: [terminos.html](terminos.html)

---

## 🚀 Cómo desplegar

1. Subir la carpeta del proyecto vía **cPanel**, **FTP** o **Administrador de Archivos** a `/public_html`
2. Asegurarse que `index.html` esté en la raíz.
3. Comprobar visibilidad en el dominio configurado (ej. `https://colsme.edu.co`)
4. Validar que los assets (imágenes, estilos, scripts) carguen correctamente.

---

## 🧩 Extensiones recomendadas

- **Prettier** y **Live Server** para desarrollo en VS Code
- **FileZilla** para carga por FTP
- **ImageOptim / TinyPNG** para optimización de imágenes

---

## ✨ Autoría y desarrollo

**Desarrollado y mantenido por:**  
Peters Aldana Gómez – Docente de Tecnología e Informática  
 
📧 [pepealdanagomez@hotmail.com](mailto:pepealdanagomez@hotmail.com)

---

## 📜 Licencia

Este proyecto es de uso educativo e institucional.  
Todos los derechos reservados © Colegio Santa María de la Esperanza 2025.

