# 🧠 AI Resume Builder

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

## 📂 Folder Structure

```yaml
resume-builder/
│
├── client/ # Frontend (React + Vite)
│   ├── src/ # Components, pages, assets
│   ├── package.json # Frontend dependencies
│   └── vite.config.js
│
├── server/ # Backend (Node.js + Express)
│   ├── routes/ # API routes
│   ├── models/ # Database models (MongoDB)
│   ├── controllers/ # Backend logic
│   ├── .env # Environment variables (not uploaded)
│   └── package.json # Backend dependencies
│
└── README.md # Project documentation
🚀 Features
🧾 AI-generated resume content

🎨 Multiple resume templates

☁️ Image upload and storage (ImageKit API)

⚡ Fast frontend with React + Vite

🔒 Secure backend using Express and environment variables

🧠 Easy to configure and run locally

🧰 Tech Stack
Layer	Technologies
Frontend	React, Vite, Axios, Tailwind CSS
Backend	Node.js, Express, MongoDB, ImageKit
Tools	npm, Git, dotenv

⚙️ Setup Instructions (Local Development)
🔹 Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/Rxjxev/AI-Resume-Builder.git
cd AI-Resume-Builder
🔹 Step 2: Setup the Backend (Server)
bash
Copy code
cd server
npm install
Create a .env file inside the server folder and add your API keys:

ini
Copy code
IMAGEKIT_PUBLIC_KEY=your_public_key_here
IMAGEKIT_PRIVATE_KEY=your_private_key_here
MONGO_URI=your_mongodb_connection_here
PORT=5000
Start the backend server:

bash
Copy code
npm start
Backend will run on:

arduino
Copy code
http://localhost:5000
🔹 Step 3: Setup the Frontend (Client)
Open a new terminal and run:

bash
Copy code
cd client
npm install
npm run dev
Frontend will start on:

arduino
Copy code
http://localhost:5173
🔒 Environment Variables
Keep your .env file private.
Make sure .gitignore includes:

bash
Copy code
.env
node_modules
🧠 How It Works
The user fills in details or generates resume content using AI.

Data is rendered in real-time as a professional resume.

Users can download or preview their resume directly.

Backend handles image uploads and secure API interactions.

👥 Contributors
Name	GitHub Profile
Rajeev Yadav	@Rxjxev
Shivam Singh	@23-shivamsingh

📜 License
This project is licensed under the MIT License — feel free to use and modify it.