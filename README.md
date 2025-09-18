# Event Management System

A **full-stack Event Management System** built with the **MERN stack** (**MongoDB, Express, React, Node.js**).

Features include:

* User authentication
* Event creation & management
* Event registration
* Dashboards for users
* Responsive UI for seamless event organization

---

## 🚀 Tech Stack

* **Frontend:** React, Vite, TypeScript, Tailwind CSS
* **Backend:** Node.js, Express, MongoDB, Mongoose
* **Authentication:** JWT, bcryptjs
* **Others:** Axios, CORS, dotenv, Morgan

---

## 🌌 Backend Setup (Node.js + Express + MongoDB)

1. **Create project folder**

```bash
mkdir event-backend
cd event-backend
```

2. **Initialize npm**

```bash
npm init -y
```

3. **Update `package.json`**
   Set `"type": "module"` and add scripts:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

4. **Install dependencies**

```bash
npm install express mongoose dotenv cors morgan bcryptjs jsonwebtoken
npm install --save-dev nodemon eslint prettier
```

5. **Start the server**

```bash
npm start       # production
npm run dev     # development with nodemon
```

> Make sure your backend listens on `process.env.PORT` and you have your MongoDB URI set in `.env`.

---

## ⚡ Frontend Setup (React + Vite + TypeScript + Tailwind)

1. **Scaffold the frontend project**

```bash
npx create-vite react react-ts
cd react
npm install
```

2. **Install Tailwind CSS**

```bash
npm install tailwindcss @tailwindcss/vite
```

3. **Configure Vite with Tailwind**

Update `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

4. **Add Tailwind directives** to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. **Start frontend development server**

```bash
npm run dev      # dev mode (Vite)
npm run build    # production build
```

> Ensure your **frontend Axios client** points to the correct **backend API URL**.

---

## ⚡ Running Both Backend & Frontend

* **Backend server:** e.g., `localhost:5000`
* **Frontend dev server:** default `localhost:5173`

---

## ✅ Scripts Overview

**Backend**

| Script        | Description                             |
| ------------- | --------------------------------------- |
| `npm start`   | Start server in production              |
| `npm run dev` | Start server with nodemon (development) |

**Frontend**

| Script          | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start Vite dev server         |
| `npm run build` | Build frontend for production |

---




