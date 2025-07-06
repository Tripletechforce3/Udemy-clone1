# 🚀 How to Share Your Udemy Clone App

Your app is now configured to be accessible to others on your network using your IP address: `192.168.1.202`

## 📋 Prerequisites

1. **Backend Server Running**: Make sure your backend server is running on port 5000
2. **Frontend Server Running**: Make sure your React app is running and accessible externally
3. **Network Access**: Both devices should be on the same network

## 🔧 Starting the Servers

### Backend Server
```bash
cd udemy-backend
npm start
```
The backend will be accessible at: `http://192.168.1.202:5000`

### Frontend Server
```bash
cd udemy-clone
npm run start-external
```
The frontend will be accessible at: `http://192.168.1.202:3000`

## 🌐 Sharing the App

### For Others on Your Network:
- **Frontend URL**: `http://192.168.1.202:3000`
- **Backend API**: `http://192.168.1.202:5000`

### What Others Can Do:
1. **Register**: Create new user accounts
2. **Login**: Access with existing accounts
3. **Browse Courses**: View all available courses
4. **Enroll**: Enroll in courses (if logged in)
5. **Admin Access**: Login with admin credentials to manage courses

### Admin Access:
- **Email**: `admin@gmail.com`
- **Password**: `admin@1234`

## 🔒 Security Notes:
- This setup allows access only within your local network
- For internet access, you'd need port forwarding or a hosting service
- The app uses JWT tokens for authentication
- Admin functions are protected and require admin privileges

## 🛠️ Troubleshooting:

1. **Can't access the app**: Make sure both servers are running
2. **API errors**: Check if backend is running on port 5000
3. **CORS issues**: Backend is configured to accept requests from any origin
4. **Database issues**: Ensure MongoDB connection is working

## 📱 Mobile Access:
The app is responsive and works on mobile devices. Users can access it from their phones using the same URL: `http://192.168.1.202:3000` 