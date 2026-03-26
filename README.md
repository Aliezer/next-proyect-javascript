# Next Proyect JavaScript

Proyecto de ejemplo con Next.js + App Router + Prisma 7 + PostgreSQL.

## 🧰 Tecnologías

- Next.js 16.2.1
- React 19.2.4
- Tailwind CSS 4
- Prisma 7
- PostgreSQL
- Node 18+ (recomendado)

## 🗂 Estructura clave

- `app/page.jsx` - página inicial.
- `app/usuarios/page.jsx` - CRUD de usuarios con `prisma.user`, server action y revalidación.
- `lib/prisma.js` - client Prisma global.
- `prisma/schema/*.prisma` - modelos: `User`, `Post`, `Profile`.
- `.env` - `DATABASE_URL`.
- `copilot-instructions.md` - contexto IA para asistente/copilot.

## ⚙️ Configuración de la BD

1. Asegúrate de tener PostgreSQL corriendo.
2. `.env`:

```ini
DATABASE_URL="postgresql://postgres:123@localhost:5432/Web?schema=public"
```

3. Genera client:

```bash
npx prisma generate
```

4. Ejecuta migraciones (si existen):

```bash
npx prisma migrate dev
```

## 🚀 Desarrollo

```bash
npm install
npm run dev
```

- Abre: `http://localhost:3000`
- Usuarios: `http://localhost:3000/usuarios`

## 🛠 Comandos

- `npm run dev` - iniciar dev server
- `npm run build` - build de producción
- `npm start` - arrancar app en producción
- `npx prisma generate` - regenerar client Prisma
- `npx prisma migrate dev` - aplicar migraciones

## 🧩 Atención Prisma 7

`prisma/schema/schema.prisma` NO debe tener `url = env("DATABASE_URL")`.
La conexión se establece en `lib/prisma.js` con adaptador PostgreSQL y `process.env.DATABASE_URL`.

## 🧠 Copilot / IA

- Lee `copilot-instructions.md` para contexto de busqueda rápida.
- Comprueba:
  - stack de rutas
  - modelos Prisma
  - acciones server y revalidación en `app/usuarios/page.jsx`

## 🔁 Actualizar README

1. Añade nuevas rutas/componentes en "Estructura clave".
2. Ajusta `Tecnologías` y dependencias si cambias versiones.
3. Guarda + commit:

```bash
git add README.md
git commit -m "Actualiza README con la nueva ruta X"
```

---

## 📌 Nota final

Si te da error en `/usuarios`, valida que PostgreSQL esté activo y el `.env` correcto, revisa `lib/prisma.js` y haz `npx prisma generate` again.
