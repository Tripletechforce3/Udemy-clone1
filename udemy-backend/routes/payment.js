const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/payments';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'payment-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// ✅ POST /api/payment/verify - Verify payment with screenshot
router.post('/verify', verifyToken, upload.single('paymentScreenshot'), async (req, res) => {
  try {
    const { courseId, amount } = req.body;
    const userId = req.user.id;

    if (!req.file) {
      return res.status(400).json({ msg: 'Payment screenshot is required' });
    }

    if (!courseId || !amount) {
      return res.status(400).json({ msg: 'Course ID and amount are required' });
    }

    // Save payment record (you might want to create a Payment model)
    const paymentRecord = {
      userId,
      courseId,
      amount: parseFloat(amount),
      screenshotPath: req.file.path,
      status: 'pending', // pending, verified, rejected
      submittedAt: new Date()
    };

    // For now, we'll just return success
    // In a real app, you'd save this to a database
    console.log('💰 Payment submitted:', paymentRecord);

    res.status(200).json({ 
      msg: 'Payment submitted successfully',
      paymentId: Date.now().toString(),
      status: 'pending'
    });

  } catch (error) {
    console.error('❌ Payment verification error:', error);
    res.status(500).json({ msg: 'Payment verification failed', error: error.message });
  }
});

// ✅ GET /api/payment/status/:paymentId - Check payment status
router.get('/status/:paymentId', verifyToken, async (req, res) => {
  try {
    const { paymentId } = req.params;
    const userId = req.user.id;

    // In a real app, you'd fetch from database
    // For now, return a mock status
    res.status(200).json({
      paymentId,
      status: 'verified', // or 'pending', 'rejected'
      verifiedAt: new Date()
    });

  } catch (error) {
    res.status(500).json({ msg: 'Failed to check payment status', error: error.message });
  }
});

// ✅ GET /api/payment/history - Get user's payment history
router.get('/history', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    // In a real app, you'd fetch from database
    // For now, return mock data
    res.status(200).json([
      {
        paymentId: '1',
        courseId: 'course1',
        amount: 499,
        status: 'verified',
        submittedAt: new Date(),
        verifiedAt: new Date()
      }
    ]);

  } catch (error) {
    res.status(500).json({ msg: 'Failed to fetch payment history', error: error.message });
  }
});

module.exports = router; 