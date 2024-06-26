# crudAngularSCSS

Este proyecto es una aplicación CRUD desarrollada con Angular y Laravel. La aplicación utiliza SCSS para el estilo y proporciona una funcionalidad completa de gestión de datos.

## Tecnologías Utilizadas

- **Frontend:** Angular CLI 15.2.11
- **Backend:** Laravel Framework 11.11.1
- **Node.js:** 18.19.1
- **Gestor de Paquetes:** npm 10.2.4
- **Sistema Operativo:** Windows 10 x64

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes en tu sistema:

- Node.js
- npm (incluido con Node.js)
- PHP
- Composer
- MySQL (o cualquier otro sistema de base de datos que prefieras)

## Instalación

### Backend (Laravel)

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio/budget-buddy-api
    ```

2. Instala las dependencias de PHP:

    ```bash
    composer install
    ```

3. Copia el archivo de configuración `.env` y genera la clave de la aplicación:

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. Configura la conexión a la base de datos en el archivo `.env`.

5. Ejecuta las migraciones de la base de datos:

    ```bash
    php artisan migrate
    ```

6. Inicia el servidor de desarrollo de Laravel:

    ```bash
    php artisan serve
    ```

### Frontend (Angular)

1. Navega al directorio del frontend:

    ```bash
    cd ../budget-buddy-app
    ```

2. Instala las dependencias de Node.js:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo de Angular:

    ```bash
    ng serve
    ```

4. Abre tu navegador y navega a `http://localhost:4200`.

## Uso

### Backend

- Las rutas de la API están disponibles en `http://127.0.0.1:8000/api/expenses`.
- Asegúrate de que el servidor de desarrollo de Laravel esté en funcionamiento antes de intentar realizar solicitudes a la API.

### Frontend

- La aplicación Angular se ejecuta en `http://localhost:4200`.
- Utiliza la interfaz de usuario para realizar operaciones CRUD en los gastos.

## Estructura del Proyecto

```plaintext
crudAngularSCSS/
├── budget-buddy-api/    # Backend (Laravel)
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── public/
│   ├── resources/
│   ├── routes/
│   ├── storage/
│   ├── tests/
│   └── ...
├── budget-buddy-app/    # Frontend (Angular)
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
└── README.md
