# MercadoLiebre Frontend

Frontend institucional del sistema **MercadoLiebre**, desarrollado con **Angular 20** y **TypeScript**. La aplicación consume una API REST desarrollada en FastAPI y proporciona una interfaz moderna para clientes, vendedores y administradores, permitiendo gestionar productos, categorías, usuarios y órdenes de compra.

---

# Descripción General

Este repositorio contiene la capa de presentación del proyecto **MercadoLiebre**.

El objetivo del proyecto es ofrecer una experiencia intuitiva para la compra y venta de productos mediante una arquitectura modular basada en Angular Standalone Components.

El frontend consume el backend desarrollado en FastAPI y utiliza autenticación mediante JWT para proteger las rutas privadas de la aplicación.

---

# Tecnologías Utilizadas

- Angular 20
- TypeScript
- SCSS
- Bootstrap 5
- Bootstrap Icons
- Angular Router
- Angular HttpClient
- SweetAlert2
- jwt-decode

---

# Alcance Funcional

El sistema contempla tres tipos principales de usuarios:

- Visitantes
- Clientes
- Vendedores

Entre las funcionalidades del proyecto se encuentran:

- Landing Page
- Inicio de sesión
- Registro de usuarios
- Dashboard principal
- Gestión de usuarios
- Gestión de vendedores
- Gestión de categorías
- Gestión de productos
- Gestión de órdenes
- Gestión del detalle de órdenes
- Perfil de usuario
- Autenticación mediante JWT
- Rutas protegidas
- Manejo de roles

---

# Arquitectura del Proyecto

El proyecto sigue una arquitectura modular basada en funcionalidades (Feature Based Architecture).

```text
mercadoliebre-frontend/
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── users/
│   │   │   ├── sellers/
│   │   │   ├── categories/
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   ├── purchase-details/
│   │   │   └── home/
│   │   │
│   │   ├── layouts/
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   ├── directives/
│   │   │   └── pipes/
│   │   │
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.scss
│   │
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.development.ts
│   │
│   ├── main.ts
│   └── styles.scss
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

# Organización de Carpetas

## Core

Contiene la infraestructura compartida del proyecto.

- Servicios HTTP
- Guards
- Interceptores
- Modelos
- Utilidades

---

## Features

Cada carpeta representa un módulo funcional del sistema.

Por ejemplo:

- Auth
- Products
- Categories
- Users
- Orders

Cada módulo contiene sus propias páginas, componentes y servicios.

---

## Shared

Contiene componentes reutilizables para toda la aplicación.

Ejemplo:

- Navbar
- Footer
- Botones
- Tablas
- Formularios

---

## Layouts

Define las estructuras visuales de la aplicación.

Ejemplo:

- Layout público
- Layout autenticado
- Dashboard
- Panel administrativo

---

# Rutas Principales

Las rutas principales del sistema serán:

- `/`
- `/login`
- `/register`
- `/dashboard`
- `/users`
- `/sellers`
- `/categories`
- `/products`
- `/orders`
- `/purchase-details`

---

# Ejecución Local

## Requisitos Previos

- Node.js 22 o superior
- npm 10 o superior
- Angular CLI 20
- Backend MercadoLiebre en ejecución

---

# Instalación

Clonar el repositorio.

```bash
git clone https://github.com/TU-USUARIO/MercadoLiebre-Frontend.git
```

Ingresar al proyecto.

```bash
cd MercadoLiebre-Frontend
```

Instalar las dependencias.

```bash
npm install
```

---

# Dependencias Principales

Bootstrap

```bash
npm install bootstrap
```

SweetAlert2

```bash
npm install sweetalert2
```

JWT Decode

```bash
npm install jwt-decode
```

---

# Configuración

Crear los archivos de entorno.

```text
src/
└── environments/
    ├── environment.ts
    └── environment.development.ts
```

Contenido:

```typescript
export const environment = {
    production: false,
    apiUrl: "http://127.0.0.1:8000/api"
};
```

---

# Ejecución

Servidor de desarrollo.

```bash
npm start
```

o

```bash
ng serve
```

La aplicación estará disponible en:

```
http://localhost:4200
```

---

# Compilación para Producción

```bash
ng build
```

---

# Backend Asociado

Este frontend consume el backend desarrollado en:

**MercadoLiebre Backend**

https://github.com/AngelDavidGutierrez/MercadoLiebre-Backend

---

# Convenciones del Proyecto

- Arquitectura basada en funcionalidades (Feature Based Architecture).
- Componentes Standalone.
- Servicios separados por entidad.
- Una responsabilidad por servicio.
- Código fuente en inglés.
- Interfaz visible en español.
- Uso de SCSS para estilos personalizados.
- Bootstrap para el sistema de diseño.
- JWT para autenticación.

---

# Flujo de Trabajo con Git

El proyecto utiliza una estrategia basada en ramas.

```text
main
│
└── develop
      │
      ├── feature/project-setup
      ├── feature/login
      ├── feature/layout
      ├── feature/dashboard
      ├── feature/users
      ├── feature/sellers
      ├── feature/categories
      ├── feature/products
      ├── feature/orders
      └── feature/purchase-details
```

Cada nueva funcionalidad se desarrolla en una rama `feature/*` independiente y posteriormente se integra a `develop`.

---

# Licencia

Este proyecto se distribuye bajo una **licencia de uso académico**.

Su propósito es educativo y de demostración, como parte del portafolio académico del autor y de las actividades desarrolladas en el **Instituto Tecnológico Metropolitano (ITM)**.

No se autoriza el uso comercial sin autorización expresa del autor.

---

# Autor

**Ángel David Gutiérrez Ladino**

Tecnología en Desarrollo de Software

Instituto Tecnológico Metropolitano (ITM)

2026