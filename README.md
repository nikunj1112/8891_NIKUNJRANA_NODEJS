# 🚀 Admin Manager API

A secure and scalable **Admin–Manager Management System API** built using **Node.js, Express, MongoDB, and JWT Authentication**.

This project implements full CRUD operations with authentication, search, pagination, sorting, and bulk deletion.

---

## 📌 Features

✅ Admin Registration  
✅ Admin Login with JWT  
✅ Password Encryption using bcrypt  
✅ Protected Routes using JWT Middleware  
✅ Create Manager  
✅ Get All Managers  
✅ Update Manager  
✅ Delete Manager  
✅ Search Managers (Name, Email, Phone)  
✅ Pagination  
✅ Sorting  
✅ Multiple Delete  

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- dotenv

---

## 📂 Project Structure
```
admin-manager-api/
│
├── controllers/
│ ├── admin_controller.js
│ └── manager_controller.js
│
├── models/
│ ├── Admin.js
│ └── Manager.js
│
├── middlewares/
│ └── auth_middleware.js
│
├── routes/
│ ├── admin_route.js
│ └── manager_route.js
│
├── app.js
├── .env
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/admin-manager-api.git
cd admin-manager-api
```

### 2️⃣ Install Dependencies
```
npm install
```

### 3️⃣ Create .env File
```

MONGO_URI=mongodb://localhost:27017/admin-manager-api
SECRET_KEY=your_secret_key
PORT=1011

```
### 4️⃣ Run Server
```
npx nodemon
```

### Server will run on:
```
http://localhost:1011
```

---

## 🔐 Authentication Flow

1. Register Admin

2. Login Admin

3. Receive JWT Token

4. Send Token in Authorization Header:


---
| Method | Endpoint            | Description    |
| ------ | ------------------- | -------------- |
| POST   | /api/admin/register | Register Admin |
| POST   | /api/admin/login    | Login Admin    |

---
| Method | Endpoint                               | Description      |
| ------ | -------------------------------------- | ---------------- |
| POST   | /api/manager                           | Create Manager   |
| GET    | /api/manager                           | Get All Managers |
| PUT    | /api/manager/:id                       | Update Manager   |
| DELETE | /api/manager/:id                       | Delete Manager   |
| GET    | /api/manager/search?search=value       | Search Manager   |
| GET    | /api/manager/pagination?page=1&limit=5 | Pagination       |
| POST   | /api/manager/multi-delete              | Multiple Delete  |

---

## 📸 Preview

***1)Register Admin***
<img width="1470" height="956" alt="signup admin" src="https://github.com/user-attachments/assets/d8a150d6-fb6f-4bad-ba29-61e1fc3afe3c" />

***2) Login Admin***
<img width="1470" height="956" alt="signin user" src="https://github.com/user-attachments/assets/ceac3665-677a-4cd3-a126-2ca8ecbbc4ef" />



***3)Create Manager***
<img width="1470" height="956" alt="add user" src="https://github.com/user-attachments/assets/cd0365e4-ce6a-4387-9e1c-fd14e736246e" />



***4)Get All Managers***
<img width="1470" height="956" alt="all user" src="https://github.com/user-attachments/assets/82228a61-c7ea-4bb3-a16f-03dcede0db97" />


***5)Update Manager***
<img width="1470" height="956" alt="updet user" src="https://github.com/user-attachments/assets/8bee9fa9-7905-401b-8270-167b589ba231" />



***6)Delete Manager***
<img width="1470" height="956" alt="user delete" src="https://github.com/user-attachments/assets/98533474-57a5-49c1-88db-61a679292900" />




***7)Search Manager***
<img width="1470" height="956" alt="serch user" src="https://github.com/user-attachments/assets/d3988f61-71b9-4ad9-b1cd-ad3f5366c903" />



***8)Pagination***
<img width="1470" height="956" alt="pagination user" src="https://github.com/user-attachments/assets/375a3067-1d45-4dfe-be72-cbc7cd4a625c" />



***9)Multiple Delete***
<img width="1470" height="956" alt="multi-delete" src="https://github.com/user-attachments/assets/82b4edad-0208-4355-9da9-7111e11e3d60" />




---
## 👨‍💻 Author

**Nikunj Rana**

Aspiring Full-Stack Developer (MERN Stack)

---
⭐ If you like this project, give it a star on GitHub!

---



