# Política de seguridad — WEB Responsive School SME

## Alcance

Este repositorio contiene el sitio web institucional del Colegio Santa María de la Esperanza. Es principalmente un sitio estático, pero incorpora formularios y consumo de contenido externo.

## Controles

- No se deben almacenar credenciales, claves privadas o tokens en el repositorio.
- Los formularios deben utilizar proveedores externos configurados de forma explícita y no scripts PHP obsoletos.
- El contenido recibido desde fuentes externas debe tratarse como no confiable y no debe insertarse directamente como HTML.
- Los enlaces que abran nuevas pestañas deben utilizar `noopener noreferrer` cuando corresponda.
- El servidor debe enviar encabezados HTTP de seguridad cuando la infraestructura de despliegue lo permita.
- Los cambios importantes de seguridad deben revisarse antes de publicarse.

## Datos personales

El sitio publica datos institucionales de contacto y utiliza servicios externos como FormSubmit y Google Forms. No se deben añadir datos personales de estudiantes, familias o funcionarios al código fuente.

## Reporte

No publiques credenciales ni datos sensibles en issues públicas. Reporta vulnerabilidades al mantenedor mediante el canal de contacto disponible en el perfil del proyecto.
