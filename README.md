# Express MySQL REST API

[![Node.js Version](https://img.shields.io/badge/node-v14%2B-brightgreen)](https://nodejs.org)
[![Express Version](https://img.shields.io/badge/express-v5.1.0-blue)](https://expressjs.com)
[![MySQL Version](https://img.shields.io/badge/mysql-v8.0-orange)](https://www.mysql.com)

A production-ready RESTful API built with Express.js and MySQL, featuring complete user management operations, error handling, and database integration.

## 🚀 Features

- **Full CRUD Operations**: Complete user management API endpoints
- **MySQL Integration**: Robust database integration with connection pooling
- **Error Handling**: Centralized error handling with detailed responses
- **Environment Configuration**: Easy configuration using environment variables
- **API Security**: CORS enabled and configurable security options
- **Development Ready**: Hot-reload with Nodemon included

## 📋 Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Joshuapavan/crud_api_express.git
   cd crud_api_express
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   Create a `.env` file in the root directory:
   ```env
   PORT=8080
   DATABASE_USER="your_username"
   DATABASE_HOST="localhost"
   DATABASE_PASSWORD="your_password"
   DATABASE="express_crud"
   DATABASE_PORT=3306
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

## 📚 API Documentation

### Base URL
```
http://localhost:8080/api/v1
```

### Endpoints

| Method | Endpoint     | Description         | Request Body |
|--------|-------------|---------------------|--------------|
| GET    | /user       | Get all users       | -           |
| POST   | /user       | Create user         | JSON        |
| GET    | /user/:id   | Get user by ID      | -           |
| PUT    | /user/:id   | Update user         | JSON        |
| DELETE | /user/:id   | Delete user         | -           |

### Request Examples

#### Create User
```bash
POST /api/v1/user
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "password123"
}
```

## 📁 Project Structure

```
src/
├── config/         # Database configuration
├── controllers/    # Request handlers
├── data/          # Database schemas
├── middleware/    # Custom middleware
├── models/        # Database models
├── routes/        # API routes
└── server.js      # Application entry point
```

## 🔧 Development

Available Scripts:
- `npm run dev`: Start development server with hot-reload

## 🔒 Security Features

- CORS protection
- Environment variable configuration
- Prepared SQL statements
- Error handling middleware

## 📝 License

This project is licensed under the ISC License.

---
Made with ❤️ using Express.js and MySQL
