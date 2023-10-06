# Prueba técnica de Dashfleet.

Se utiliza para la base de datos MySQL, para el backend Nodejs con Express y
para el frontend Angular.

## Instalación

Para instalar el proyecto se debe clonar el repositorio y ejecutar
`npm install` en la carpeta raíz del proyecto.  
Entrar a src/web/front-dashfleet-test y ejecutar `npm install`.

## Uso

- Iniciar el servidor de MySQL y correr el script que esta en el archivo
  **ordersdb_script.sql** en la raíz del proyecto, para crear la base de datos.

- Crear el archivo **.env** en la raíz del proyecto y agregar las variables de
  entorno para conectar a la base de datos.

- En la carpeta raíz del proyecto ejecutar `npm run start:mysql` para iniciar el
  servidor de Nodejs.

- En la carpeta src/web/front-dashfleet-test ejecutar `npm run start` para iniciar
  el servidor de Angular.
