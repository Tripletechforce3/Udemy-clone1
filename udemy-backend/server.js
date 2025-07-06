// 🚀 Starting message
console.log('🚀 Booting server...');

// 🌐 Import packages
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// 🔑 Load environment variables
dotenv.config();
console.log('✅ .env file loaded');

// 🧠 Initialize Express app
const app = express();

// 🔌 Connect to MongoDB
console.log('⏳ Connecting to MongoDB...');
connectDB();

// 🔄 Middlewares
app.use(cors());
app.use(express.json());

// 📦 Import routes
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');
const enrollRoutes = require('./routes/enroll');
const videoRoutes = require('./routes/video');
const paymentRoutes = require('./routes/payment');
const reviewRoutes = require('./routes/review');

// 🔀 Use routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enroll', enrollRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/reviews', reviewRoutes);

// ✅ Health check
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Accessible at: http://localhost:${PORT}`);
  console.log(`🌐 External access: http://192.168.1.202:${PORT}`);
});
