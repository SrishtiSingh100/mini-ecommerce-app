# Mini E-Commerce App 🛒

A simple full-stack e-commerce application built using React, Node.js, and Express. The project demonstrates frontend-backend integration, user authentication, product listing, cart management, and cloud deployment.

---

## Live Demo 🌐

**Frontend:** [https://mini-ecommerce-app-orpin.vercel.app/](https://mini-ecommerce-app-orpin.vercel.app/)
**Backend API:** [https://mini-ecommerce-app-r6td.onrender.com](https://mini-ecommerce-app-r6td.onrender.com)

---

## Features ✨

- User Signup
- User Login
- Product Listing
- Add Products to Cart
- Cart Total Calculation
- Responsive and Clean UI
- REST API Integration
- Cloud Deployment using Render and Vercel

---

## Tech Stack 🛠️

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- CORS

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Project Structure 📂

```text
mini-ecommerce-app
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── node_modules
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── Signup.jsx
│   │   ├── ProductList.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## API Endpoints 📡

### Signup

```http
POST /signup
```

Request Body:
```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

Response:
```json
{
  "message": "Signup Successful"
}
```

### Login

```http
POST /login
```

Request Body:
```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

Response:
```json
{
  "message": "Login Successful"
}
```

### Products

```http
GET /products
```

Response:
```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 50000
  },
  {
    "id": 2,
    "name": "Phone",
    "price": 20000
  },
  {
    "id": 3,
    "name": "Headphones",
    "price": 3000
  }
]
```

---

## Installation and Setup ⚙️

Clone the repository:
```bash
git clone https://github.com/SrishtiSingh100/mini-ecommerce-app.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend will run on:
```text
http://localhost:8000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:
```text
http://localhost:5173
```

---

## Learning Outcomes 📚

This project helped in understanding:

- React State Management
- Component-Based Architecture
- REST APIs
- Express.js Server Development
- Client-Server Communication
- Git and GitHub Workflow
- Cloud Deployment
- Full-Stack Application Development

---


## Author

**Srishti Singh**
