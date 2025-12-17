# 🧠 **AI Resume Builder**

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Deployed-success)

---

An intelligent **AI-powered Resume Builder** that helps users generate, edit, and manage professional resumes.  
The project follows a **modern MERN architecture** with separate frontend and backend deployments.

---

## 🚀 **Features**

* 🧾 AI-generated resume content  
* 🎨 Multiple resume templates  
* ☁️ Image upload and storage  
* ⚡ Fast frontend using React + Vite  
* 🔒 Secure backend with JWT authentication  
* 🌍 Production-ready deployment  
* 🧠 Scalable MERN architecture  

---

## 🧰 **Tech Stack**

| **Layer**    | **Technologies** |
|-------------|------------------|
| **Frontend** | React, Vite, Axios, Tailwind CSS |
| **Backend**  | Node.js, Express, MongoDB |
| **AI**       | AI API (Gemini / OpenAI compatible) |
| **Hosting**  | Vercel (Frontend), Render (Backend) |
| **Tools**    | npm, Git, dotenv |

---

## ⚙️ **Local Development Setup**

---

### 🔹 **Step 1: Clone the Repository**

```bash
git clone https://github.com/your-username/AI-Resume-Builder.git
cd AI-Resume-Builder
````

---

### 🔹 **Step 2: Backend Setup (Server)**

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```ini
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_uri
IMAGEKIT_PRIVATE_KEY=your_imagekit_key
OPENAI_API_KEY=your_ai_key
OPENAI_BASE_URL=your_ai_base_url
OPENAI_MODEL=your_model_name
PORT=3000
```

Start the backend server:

```bash
npm run server
```

---

### 🔹 **Step 3: Frontend Setup (Client)**

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔐 **Environment Variables**

* `.env` files are excluded using `.gitignore`
* Sensitive keys are **never committed**
* Frontend environment variables must start with `VITE_`

Example:

```ini
VITE_BASE_URL=http://localhost:3000
```
### 🔁 API Base URL Handling (Local vs Production)

During local development, the frontend communicates with the backend running on `localhost`.  
In production, the frontend is configured to communicate with the deployed backend.

**Local development (`client/.env`):**
```ini
VITE_BASE_URL=http://localhost:3000
Production (Vercel Environment Variables):


VITE_BASE_URL=your_production_backend_url
The frontend uses this variable in a centralized Axios configuration:


baseURL: import.meta.env.VITE_BASE_URL
This approach ensures:

No hardcoded URLs in the codebase

Seamless switching between local and production environments

Secure handling of environment-specific configurations
---

## 🚀 **Deployment Process**

This project uses **split deployment**, which is a standard industry practice.

| Component | Platform      |
| --------- | ------------- |
| Frontend  | Vercel        |
| Backend   | Render        |
| Database  | MongoDB Atlas |

---

### 🔹 **Backend Deployment (Render)**

1. Create a new **Web Service** on Render
2. Select the GitHub repository
3. Choose the `server` directory
4. Set build command:

   ```bash
   npm install
   ```
5. Set start command:

   ```bash
   node server.js
   ```
6. Add environment variables via the Render dashboard
7. Deploy the service

---

### 🔹 **Frontend Deployment (Vercel)**

1. Import the GitHub repository into Vercel
2. Set **Root Directory** to:

   ```
   client
   ```
3. Select framework preset:

   ```
   Vite
   ```
4. Add frontend environment variable:

   ```ini
   VITE_BASE_URL=your_backend_url
   ```
5. Deploy the project

---

## 🔁 **SPA Routing Configuration**

Since this is a **Single Page Application**, refreshing deep links may cause a `404` error.

### ✅ Solution

A rewrite rule is added using `client/vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures:

* Page refresh works correctly
* Direct URLs load without errors
* Routing is handled by React

---

## 🧠 **How It Works**

1. User signs up or logs in
2. Frontend sends requests using Axios
3. Backend processes AI responses and uploads
4. Resume content is rendered dynamically
5. Data is securely stored in the database

---

## 👥 **Contributors**

| Name             | GitHub          |
| ---------------- | --------------- |
| **Rajeev Yadav** | @Rxjxev         |
| **Shivam Singh** | @23-shivamsingh |

---

## 📜 **License**

This project is licensed under the **MIT License**.

---

⭐ **If you like this project, consider giving it a star on GitHub!**

```
