# 🔒 OTP Authentication & User Authorization System

A secure backend system for User Authentication and Authorization built with **Node.js**, **Express.js**, and **MongoDB (Atlas)**. The project follows the **MVC (Model-View-Controller)** architecture pattern and implements secure email verification via One-Time Passwords (OTP) and protected routing using JSON Web Tokens (JWT).

## 🚀 Features

* **User Registration:** Secure signup with password hashing using `bcrypt`.
* **OTP Verification:** Automated OTP generation and email delivery upon registration.
* **User Login:** Token-based authentication using JWT.
* **Protected Routes:** Custom middleware to restrict access to authorized users only.
* **Database Integration:** Scalable data models with MongoDB Atlas.
* **Clean Architecture:** Strict separation of concerns using the MVC pattern.

---

## 📂 Project Structure (MVC)

```text
├── config/          # Database configuration (MongoDB Atlas connection)
├── controllers/     # Business logic for Auth and OTP handling
├── middleware/      # JWT verification and route protection
├── models/          # Mongoose Schemas (User, OTP)
├── routes/          # API Endpoints mapping
├── app.js           # Application entry point
├── package.json     # Project dependencies and scripts
└── .gitignore       # Excluded files (e.g., node_modules, .env)
