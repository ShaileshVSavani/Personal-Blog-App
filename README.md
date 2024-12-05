

# **Personal Blog App**

This is a **Personal Blog Application** where users can create, read, update, and delete blog posts. It includes user authentication and a responsive design built with modern technologies.

---

## **Features**

- User authentication (Sign up, Log in, Log out).
- Create, read, update, and delete blog posts.
- Fully responsive design for mobile and desktop devices.
- RESTful API for backend services.

---

## **Technologies Used**

### **Frontend**
- **React** with **Tailwind CSS** for UI and styling.
- **React Router** for client-side navigation.

### **Backend**
- **Node.js** and **Express** for server-side logic.
- **MongoDB** for database storage.

---

## **Project Structure**

```plaintext
root/
│
├── backend/               # Backend code
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── controllers/       # Request handlers
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
│
├── frontend/              # Frontend code
│   ├── src/               # React app source code
│   ├── public/            # Public assets
│   ├── package.json       # Frontend dependencies
│   └── README.md          # Frontend documentation
│
└── README.md              # Main project documentation
```

---

## **Deployment Links**

### **Frontend**
Deployed at: [Personal Blog Frontend](https://personal-blog-app-five-sigma.vercel.app/)

### **Backend**
Deployed at: [Personal Blog Backend](https://personal-blog-app-o5tx.onrender.com/api/posts)

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/ShaileshVSavani/Personal-Blog-App.git
cd your-repo-name
```

### **2. Install Dependencies**

#### **For Backend**
```bash
cd backend
npm install
```

#### **For Frontend**
```bash
cd frontend
npm install
```

### **3. Configure Environment Variables**

#### **Backend** (`backend/.env`)
```plaintext
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```

#### **Frontend** (`frontend/.env`)
```plaintext
REACT_APP_API_URL=<your-backend-url>
```

### **4. Run Locally**

#### **Backend**
```bash
cd backend
npm start
```

#### **Frontend**
```bash
cd frontend
npm start
```

---

## **API Endpoints**

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| POST   | `/api/signup`  | User signup                 |
| POST   | `/api/login`   | User login                  |
| GET    | `/api/posts`   | Fetch all blog posts        |
| POST   | `/api/posts`   | Create a new blog post      |
| PUT    | `/api/posts/:id` | Update a specific blog post |
| DELETE | `/api/posts/:id` | Delete a specific blog post |

---
