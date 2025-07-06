const express = require('express');
const Course = require('../models/Course');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// ✅ Admin-only - Upload Course
router.post('/create', verifyToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ msg: 'Access denied. Admins only.' });
    }

    const { title, description, instructor, category, imageUrl, price } = req.body;

    const newCourse = new Course({
      title,
      description,
      instructor,
      category,
      imageUrl,
      price,
      createdBy: req.user.id
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Public - Get All Courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().select('title category imageUrl price');
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch courses', error: err.message });
  }
});

// ✅ Admin-only - Get Sales Reports
router.get('/sales', verifyToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ msg: 'Access denied. Admins only.' });
    }
    // Find all enrollments and populate course info
    const Enrollment = require('../models/Enrollment');
    const enrollments = await Enrollment.find()
      .populate('courseId', 'title price');
    // Map to sales report format
    const sales = enrollments.map(e => ({
      course: e.courseId?.title || 'Unknown',
      amount: e.courseId?.price || 0,
      date: e.enrolledAt,
    }));
    res.status(200).json(sales);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch sales reports', error: err.message });
  }
});

module.exports = router;
