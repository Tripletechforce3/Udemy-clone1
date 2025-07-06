const express = require('express');
const Enrollment = require('../models/Enrollment');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// 🎓 POST /api/enroll
router.post('/', verifyToken, async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;

    // ✅ Check for duplicate enrollment here
    const alreadyEnrolled = await Enrollment.findOne({ userId, courseId });
    if (alreadyEnrolled) {
      return res.status(400).json({ msg: 'Already enrolled in this course.' });
    }

    // ✅ If not enrolled, save new enrollment
    const enrollment = new Enrollment({ userId, courseId });
    await enrollment.save();

    res.status(201).json({ msg: 'Enrollment successful', enrollment });
  } catch (err) {
    res.status(500).json({ msg: 'Enrollment failed', error: err.message });
  }
});

// 🎓 GET /api/enroll/check/:courseId - Check if user is enrolled in specific course
router.get('/check/:courseId', verifyToken, async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user.id;
    
    const enrollment = await Enrollment.findOne({ userId, courseId });
    res.status(200).json({ isEnrolled: !!enrollment });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to check enrollment', error: err.message });
  }
});

// 🎓 GET /api/enroll/user - Get user's enrollments
router.get('/user', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const enrollments = await Enrollment.find({ userId })
      .populate('courseId', 'title imageUrl price');
    res.status(200).json(enrollments);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch user enrollments', error: err.message });
  }
});

// 🎓 GET /api/enroll/all - Admin only: Get all enrollments with user and course info
router.get('/all', verifyToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ msg: 'Access denied. Admins only.' });
    }
    const enrollments = await Enrollment.find()
      .populate('userId', 'email username')
      .populate('courseId', 'title');
    res.status(200).json(enrollments);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch enrollments', error: err.message });
  }
});

module.exports = router;
