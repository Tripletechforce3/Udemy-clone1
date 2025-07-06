# Backend Setup Guide

## Quick Fix for "Unexpected token '<'" Error

This error means the backend server is not running. Follow these steps:

### 1. Check if Backend is Running
```bash
cd udemy-backend
npm run test-server
```

### 2. If Test Fails, Start the Backend:
```bash
# Make sure you're in the backend directory
cd udemy-backend

# Install dependencies (if not done)
npm install

# Create .env file (if not exists)
cp env.example .env

# Edit .env file with your MongoDB URI
# Make sure MONGODB_URI is correct

# Create admin user
npm run create-admin

# Start the server
npm start
```

### 3. Verify Backend is Running
You should see:
```
🚀 Booting server...
✅ .env file loaded
⏳ Connecting to MongoDB Atlas...
✅ MongoDB Connected
🚀 Server running on port 5000
```

### 4. Test API Endpoints
Visit these URLs in your browser:
- http://localhost:5000/ (should show "✅ API is running...")
- http://localhost:5000/api/courses (should show JSON array)

## Common Issues & Solutions

### Issue 1: MongoDB Connection Error
**Error:** "MongoDB connection failed"
**Solution:** 
- Check your MONGODB_URI in .env file
- Make sure MongoDB Atlas is accessible
- Verify network connection

### Issue 2: Port Already in Use
**Error:** "EADDRINUSE"
**Solution:**
- Kill process using port 5000: `npx kill-port 5000`
- Or change port in .env: `PORT=5001`

### Issue 3: Missing Dependencies
**Error:** "Cannot find module"
**Solution:**
```bash
cd udemy-backend
npm install
```

### Issue 4: Environment Variables
**Error:** "JWT_SECRET is not defined"
**Solution:**
- Make sure .env file exists
- Check that JWT_SECRET is set in .env

## Environment File (.env)
Make sure your .env file contains:
```
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database
JWT_SECRET=your-secret-key
PORT=5000
```

## Testing the Setup

1. **Start Backend:**
   ```bash
   cd udemy-backend
   npm start
   ```

2. **Test Server:**
   ```bash
   npm run test-server
   ```

3. **Create Admin:**
   ```bash
   npm run create-admin
   ```

4. **Start Frontend:**
   ```bash
   cd ../udemy-clone
   npm start
   ```

## API Endpoints to Test

- `GET /` - Health check
- `GET /api/courses` - Get all courses
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register
- `POST /api/courses/create` - Create course (admin)
- `POST /api/videos/upload` - Upload video (admin)
- `GET /api/videos/course/:courseId` - Get videos by course

## Troubleshooting Commands

```bash
# Check if port 5000 is in use
netstat -an | grep 5000

# Kill process on port 5000
npx kill-port 5000

# Check MongoDB connection
node -e "require('mongoose').connect(process.env.MONGODB_URI).then(() => console.log('Connected')).catch(console.error)"

# Test server manually
curl http://localhost:5000/
``` 