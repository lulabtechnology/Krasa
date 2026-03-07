# Krása Dermoestudio Landing

Landing page premium construida con **Next.js 14 + TypeScript + TailwindCSS + Framer Motion**, lista para subir a GitHub y desplegar en Vercel.

## 1) Cómo correr local
1. Abre la carpeta del proyecto.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   npm run dev
   ```
4. Abre `http://localhost:3000`.

## 2) Subir a GitHub usando GitHub Web
1. Entra a GitHub.
2. Clic en **New repository**.
3. Nombre sugerido: `krasadermoestudio-landing`.
4. Clic en **Create repository**.
5. En el repositorio nuevo, clic en **uploading an existing file**.
6. Arrastra todo el contenido interno de la carpeta.
7. Haz commit.

## 3) Deploy a Vercel
1. Entra a Vercel.
2. Clic en **Add New Project**.
3. Importa el repo de GitHub.
4. Deja la configuración por defecto.
5. Clic en **Deploy**.

## 4) Cómo reemplazar imágenes
Carpeta:
```text
/public/placeholders/
```
Archivos:
- hero.jpg
- before.jpg
- after.jpg
- gallery-1.jpg
- gallery-2.jpg
- gallery-3.jpg

## 5) Cómo cambiar el número de WhatsApp
Busca `50768917500` y reemplázalo en:
- `components/Header.tsx`
- `components/FloatingWhatsApp.tsx`
- `components/WhatsAppForm.tsx`
- `app/page.tsx`

## 6) Cómo cambiar textos
Principalmente en:
- `app/page.tsx`
- `components/FAQ.tsx`

## 7) Paleta usada
- `#D2A898`
- `#CA9A88`
- `#E8DBD8`
- `#FEF5EA`
- `#FDFDFC`
- `#C4BDC2`
- `#141414`
