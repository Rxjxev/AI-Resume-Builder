# 🧠 **AI Resume Builder**

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)

---

An intelligent **AI-powered Resume Builder** that helps users easily generate, edit, and manage professional resumes.
This project consists of a **React + Vite frontend** and a **Node.js + Express backend**, connected with APIs for real-time operations.

---

## 🚀 **Features**

* 🧾 **AI-generated resume content**
* 🎨 **Multiple resume templates**
* ☁️ **Image upload and storage (ImageKit API)**
* ⚡ **Fast frontend with React + Vite**
* 🔒 **Secure backend using Express and environment variables**
* 🧠 **Easy to configure and run locally**

---

## 🧰 **Tech Stack**

| **Layer**    | **Technologies**                    |
| ------------ | ----------------------------------- |
| **Frontend** | React, Vite, Axios, Tailwind CSS    |
| **Backend**  | Node.js, Express, MongoDB, ImageKit |
| **Tools**    | npm, Git, dotenv                    |

---

## ⚙️ **Setup Instructions (Local Development)**

---

### 🔹 **Step 1: Clone the Repository**

```bash
git clone https://github.com/Rxjxev/AI-Resume-Builder.git
cd AI-Resume-Builder
```

---

### 🔹 **Step 2: Setup the Backend (Server)**

```bash
cd server
npm install
```

**Create a `.env` file** inside the `server` folder and add your API keys:

```ini
JWT_SECRET=your_secret_key_here
MONGODB_URI=your_mongodb_connection_string_here
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key_here
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_BASE_URL=your_openai_base_url_here
OPENAI_MODEL=your_openai_model_name_here
PORT=5000

```

**Start the backend server:**

```bash
npm run server
```

Backend will run on:
👉 **[http://localhost:5000](http://localhost:5000)**

---

### 🔹 **Step 3: Setup the Frontend (Client)**

Open a new terminal and run:

```bash
cd client
npm install
npm run dev
```

Frontend will start on:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🔒 **Environment Variables**

Keep your `.env` file **private**.
Make sure `.gitignore` includes:

```bash
.env
node_modules
```

---

## 🧠 **How It Works**

1. The user fills in details or generates resume content using AI.
2. Data is rendered in real-time as a professional resume.
3. Users can download or preview their resume directly.
4. The backend handles image uploads and secure API interactions.

---

## 👥 **Contributors**

| **Name**         | **GitHub Profile**                                   |
| ---------------- | ---------------------------------------------------- |
| **Rajeev Yadav** | [@Rxjxev](https://github.com/Rxjxev)                 |
| **Shivam Singh** | [@23-shivamsingh](https://github.com/23-shivamsingh) |

---

## 📜 **License**

This project is licensed under the **MIT License** — feel free to use and modify it.
