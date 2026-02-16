# Booking System API

A backend API for managing time slot bookings.

This API allows users to create, view, filter, and delete bookings while preventing overlapping reservations. It also includes JWT-based authentication and pagination.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JSON Web Token (JWT)

---

## 📦 Features

### Core Features

- Create a booking
- List all bookings
- View booking by ID
- Delete a booking by ID
- Prevent overlapping bookings
- Validate time logic (end_time must be after start_time)
- Automatic `created_at` timestamp

### Bonus Features

- JWT Authentication
- Filtering bookings by date
- Pagination support

---

## 📂 Project Structure

```
booking-api/
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js
├── package.json
└── .env
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd booking-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=mysecretkey
```

### 4️⃣ Start the Server

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Authentication (JWT)

### Login to Get Token

**POST**
```
/auth/login
```

### Request Body

```json
{
  "username": "admin",
  "password": "1234"
}
```

### Response

```json
{
  "token": "your_jwt_token_here"
}
```

### Using the Token

For all `/bookings` routes:

1. Go to Authorization tab in Postman  
2. Select **Bearer Token**  
3. Paste your JWT token  

---

## 📌 API Endpoints

### 1️⃣ Create Booking

**POST**
```
/bookings
```

#### Body Example

```json
{
  "user_name": "Name",
  "date": "2026-02-20",
  "start_time": "10:00",
  "end_time": "11:00"
}
```

**Success Response**
```
201 Created
```

---

### 2️⃣ Get All Bookings

**GET**
```
/bookings
```

---

### 3️⃣ Get Booking by ID

**GET**
```
/bookings/:id
```

---

### 4️⃣ Delete Booking

**DELETE**
```
/bookings/:id
```

---

## 🔍 Filtering

Filter by date:

```
GET /bookings?date=2026-02-20
```

Returns only bookings for that date.

---

## 📄 Pagination

```
GET /bookings?page=1&limit=5
```

- `page` → page number  
- `limit` → number of records per page  

---

## 🛑 Business Rules

- No overlapping bookings allowed
- End time must be after start time
- All required fields must be provided
- JWT authentication required for booking routes

---

## ❗ Error Handling

- `400 Bad Request` → Validation errors  
- `401 Unauthorized` → Missing or invalid token  
- `404 Not Found` → Booking not found  
- `500 Internal Server Error` → Server error  

---

## 🧪 Sample Test Flow

1. Login → Get JWT token  
2. Create booking  
3. Try overlapping booking (should fail)  
4. Filter bookings by date  
5. Test pagination  
6. Delete booking  

---

## 🏁 Conclusion

This API fulfills the backend requirements for a booking system with validation, overlap prevention, authentication, filtering, and pagination.
