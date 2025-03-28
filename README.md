# Event Management System

## Overview  
This is a **Full-Stack Event Management System** where:  
✔️ **Users** can view events only for the city they are registered in.  
✔️ **Admins** can add events only for the city they manage.  

---

## 🖥️ Features & Screens  

### 🔹 User Flow:  
1️⃣ **User Login** - Users log in to view events in their registered city.  
2️⃣ **User Registration** - New users can sign up with their details.  
3️⃣ **Event Listing** - Displays all events happening in the user’s city.  
4️⃣ **Event Details & Comments** - Users can view event details and post comments.  

### 🔹 Admin Flow:  
5️⃣ **Admin Login** - Admins log in to create events for their assigned city.  
6️⃣ **Create Event** - Admins can add new events, but only for their city.  

---

## 🔗 API Endpoints  

### 🟢 User APIs  
- `POST /users/register` → Register a new user  
- `POST /users/login` → Log in and get the user's city  
- `GET /events/events/:city` → Get all events for a specific city  
- `GET /events/eventDetails/:id` → Get details of a specific event  

### 🔴 Admin APIs  
- `POST /admin/login` → Log in as an admin (returns admin city)  
- `POST /admin/create-event` → Create an event (Admins can only create events for their city)  

---

## 🚀 Tech Stack  
**Frontend:** React.js, React Router, Material UI  
**Backend:** Express.js, Node.js  
**Database:** MySQL  

---

## 📌 How to Run the Project  

### 1️⃣ Setup Backend  
```sh
cd backend
npm install
node index.js  # Runs Express Server on http://localhost:5000
```

### 2️⃣ Setup Frontend  
```sh
cd frontend
npm install
npm start  # Runs React App on http://localhost:3000
```

---

## 🎯 Key Functionalities  
✔️ **Users can only see events in their city**  
✔️ **Admins can only create events for their city**  
✔️ **Secure login for both users and admins**  
✔️ **Event details with user comments**  
✔️ **Real-time event listing for the city**  

---
