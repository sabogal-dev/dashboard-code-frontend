# Dashboard Empresarial

Aplicación web desarrollada en **React** con **Vite**, diseñada para la visualización de información comercial de la empresa.
El dashboard permite analizar métricas de ventas y rendimiento a través de gráficos y paneles interactivos.

## 🚀 Funcionalidad

* **Visualización de ventas mensuales** por períodos definidos.
* **Análisis por categoría de producto**.
* **Comparación entre vendedores** con métricas de desempeño.
* **Monitoreo de metas** frente a resultados alcanzados.
* **Filtros dinámicos** para refinar la información visualizada.
* **Modo consulta únicamente:** la aplicación no guarda ni genera registros, únicamente realiza llamadas al backend para obtener datos.

## 🛠️ Tecnologías utilizadas

* [React 19](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [Chakra UI](https://chakra-ui.com/) (interfaz y diseño)
* [Recharts](https://recharts.org/) (gráficos interactivos)
* [React Router](https://reactrouter.com/) (navegación de vistas)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Next Themes](https://github.com/pacocoursey/next-themes) (gestión de temas)
* [Formkit Tempo](https://formkit.com/tempo) (manejo de fechas y tiempos)

## 📦 Instalación

Clona el repositorio:

```bash
git clone https://github.com/sabogal-dev/dashboard-code-frontend
cd dashboard-code-frontend
```

Instala las dependencias:

```bash
npm install
```

### Variables de entorno

⚠️ **Nota:** Las credenciales y configuraciones específicas del backend **no están incluidas** en este repositorio por motivos de seguridad.

## ▶️ Ejecución en modo desarrollo

```bash
npm run dev
```

Generalmente se abre en `http://localhost:5173/`.

## 🏗️ Generar build de producción

```bash
npm run build
```

## ✅ Linter y buenas prácticas

Para ejecutar el linter:

```bash
npm run lint
```

## 📄 Dependencias principales

* `react`, `react-dom`: base de la aplicación.
* `vite`: bundler de desarrollo.
* `@chakra-ui/react` + `@emotion/react`: interfaz y estilos.
* `@chakra-ui/charts` + `recharts`: visualización de datos y gráficos.
* `react-router`: navegación entre pantallas.
* `next-themes`: soporte de temas.
* `react-icons`: set de íconos.
* `@formkit/tempo`: utilidades para tiempo y fechas.

## 🔐 Licencia

Copyright (c) 2025 CODEOPTIKAL SAS

Todos los derechos reservados.

Este código es propiedad privada y no puede ser utilizado, copiado, modificado ni distribuido sin autorización expresa por escrito del titular.