# Barbería Corte Fino 💈

Web para un negocio local (barbería) con **sistema de reservas online**.
Proyecto de portafolio construido con **Next.js 14**, **React** y **Tailwind CSS**.

> Es una plantilla pensada para rebrandear a cualquier negocio (restaurante,
> clínica, peluquería…). Cambia textos, colores y servicios y tienes otra web.

## ✨ Qué incluye

- Página de inicio con hero y servicios destacados
- Página de servicios con precios y duración
- Página de contacto con mapa
- **Sistema de reservas** con formulario validado y confirmación
- **API** (`/api/reservas`) que recibe y registra las reservas
- Diseño responsive (móvil y escritorio) y modo oscuro elegante

## 🚀 Cómo ejecutarlo

### 1. Instala Node.js
Descarga la versión **LTS** desde https://nodejs.org y instálala.
Comprueba que quedó bien:

```bash
node -v
npm -v
```

### 2. Instala las dependencias del proyecto
Abre una terminal **dentro de esta carpeta** y ejecuta:

```bash
npm install
```

### 3. Arranca el servidor de desarrollo

```bash
npm run dev
```

Abre tu navegador en **http://localhost:3000** 🎉
Cualquier cambio que guardes se refleja al instante.

## 🛠️ Estructura del proyecto

```
app/
  layout.js          → estructura común (navbar + footer)
  page.js            → página de inicio
  servicios/page.js  → lista de servicios
  contacto/page.js   → contacto y mapa
  reservar/page.js   → página de reservas
  api/reservas/      → endpoint que recibe las reservas
components/
  Navbar.js  Footer.js  ReservationForm.js
data/
  services.js        → edita aquí los servicios y precios
```

## 🎨 Cómo personalizarlo

- **Nombre y textos**: edita los componentes en `components/` y las páginas en `app/`.
- **Servicios y precios**: todo está en `data/services.js`.
- **Colores**: cambia la paleta `brand` en `tailwind.config.js`.
- **Fotos**: sustituye los bloques de marcador por imágenes reales.

## ☁️ Publicarlo gratis (recomendado para portafolio)

1. Sube el proyecto a GitHub.
2. Entra en https://vercel.com, conéctate con GitHub e importa el repo.
3. Vercel lo despliega solo y te da un link público para compartir con clientes.

## 📌 Próximos pasos (ideas para mejorar)

- Guardar las reservas en una base de datos (Supabase, MongoDB…).
- Enviar email/SMS de confirmación real.
- Panel de administración para ver las reservas.
- Bloquear horas ya ocupadas.
