# Udemy Clone - Full Stack Application

A complete Udemy clone with React frontend and Node.js/Express backend with MongoDB.

## Features

### Frontend (React)
- ✅ User authentication (login/register)
- ✅ Course browsing and search
- ✅ Course details with curriculum
- ✅ Admin dashboard for course management
- ✅ Responsive design with Tailwind CSS
- ✅ Real-time API integration

### Backend (Node.js/Express)
- ✅ User authentication with JWT
- ✅ Course CRUD operations
- ✅ User enrollment system
- ✅ MongoDB database integration
- ✅ Admin role management

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd udemy-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   # Copy the example file
   cp env.example .env
   ```

4. **Configure environment variables:**
   Edit `.env` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/udemy-clone
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   PORT=5000
   ```

5. **Start MongoDB:**
   - Local: Make sure MongoDB is running on your machine
   - Atlas: Use your MongoDB Atlas connection string

6. **Create admin user (one-time setup):**
   ```bash
   npm run create-admin
   ```
   This will create an admin user with:
   - Email: admin@gmail.com
   - Password: admin@1234
   - Role: Admin

7. **Start the backend server:**
   ```bash
   npm start
   # or for development with auto-restart:
   npm run dev
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd udemy-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses/create` - Create new course (admin only)

### Enrollments
- `POST /api/enroll` - Enroll in a course

## Usage

1. **Register/Login:** Create an account or login with existing credentials
2. **Browse Courses:** View available courses on the dashboard
3. **Course Details:** Click on any course to see detailed information
4. **Admin Features:** Login as admin to create and manage courses

## Admin Access

The admin user is created using a script and has predefined credentials:
- **Email:** admin@gmail.com
- **Password:** admin@1234
- **Role:** Admin

To create the admin user, run:
```bash
cd udemy-backend
npm run create-admin
```

**Note:** Admin users cannot be created through the website registration form for security reasons.

## Database Schema

### User
- username (String, required, unique)
- email (String, required, unique)
- password (String, required, hashed)
- isAdmin (Boolean, default: false)

### Course
- title (String, required)
- description (String)
- instructor (String)
- category (String)
- imageUrl (String)
- price (Number)
- createdBy (ObjectId, ref: User)

### Enrollment
- userId (ObjectId, ref: User)
- courseId (ObjectId, ref: Course)
- enrolledAt (Date)

## Technologies Used

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

## Development

### Adding New Features
1. Backend: Add routes in `/routes` directory
2. Frontend: Add components in `/src` directory
3. Update API service in `/src/api.js`

### Database Changes
1. Update models in `/models` directory
2. Run database migrations if needed

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error:**
   - Ensure MongoDB is running
   - Check MONGODB_URI in .env file
   - Verify network connectivity

2. **CORS Errors:**
   - Backend CORS is configured for development
   - Check if frontend is running on port 3000

3. **JWT Errors:**
   - Ensure JWT_SECRET is set in .env
   - Check token expiration

4. **Port Conflicts:**
   - Backend: Change PORT in .env
   - Frontend: Use `PORT=3001 npm start`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. 