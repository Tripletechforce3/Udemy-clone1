const express = require('express');
const Video = require('../models/Video');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// ✅ Admin-only - Upload Video
router.post('/upload', verifyToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ msg: 'Access denied. Admins only.' });
    }

    const { title, courseId, videoUrl, duration, description } = req.body;

    const newVideo = new Video({
      title,
      courseId,
      videoUrl,
      duration,
      description,
      uploadedBy: req.user.id
    });

    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Public - Get Videos by Course
router.get('/course/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const videos = await Video.find({ courseId }).sort({ createdAt: 1 });
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch videos', error: err.message });
  }
});

// ✅ Admin-only - Get All Videos
router.get('/all', async (req, res) => {
  try {
    // Temporarily remove auth check for testing
    // if (!req.user.isAdmin) {
    //   return res.status(403).json({ msg: 'Access denied. Admins only.' });
    // }
    const videos = await Video.find().populate('courseId', 'title').sort({ createdAt: 1 });
    console.log('📹 Found videos:', videos.length);
    res.status(200).json(videos);
  } catch (err) {
    console.error('❌ Error fetching videos:', err);
    res.status(500).json({ msg: 'Failed to fetch videos', error: err.message });
  }
});

// ✅ Admin-only - Assign Video to Course
router.put('/assign', verifyToken, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ msg: 'Access denied. Admins only.' });
    }

    const { videoId, courseId } = req.body;

    if (!videoId || !courseId) {
      return res.status(400).json({ msg: 'Video ID and Course ID are required' });
    }

    const updatedVideo = await Video.findByIdAndUpdate(
      videoId,
      { courseId: courseId },
      { new: true }
    );

    if (!updatedVideo) {
      return res.status(404).json({ msg: 'Video not found' });
    }

    res.status(200).json({ msg: 'Video assigned to course successfully', video: updatedVideo });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to assign video to course', error: err.message });
  }
});

// ✅ Debug - Get All Videos (no auth for testing)
router.get('/debug', async (req, res) => {
  try {
    const videos = await Video.find().populate('courseId', 'title').sort({ createdAt: 1 });
    res.status(200).json({ count: videos.length, videos });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch videos', error: err.message });
  }
});

module.exports = router; 