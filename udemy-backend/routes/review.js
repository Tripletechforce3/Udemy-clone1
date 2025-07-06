const express = require('express');
const Review = require('../models/Review');
const Enrollment = require('../models/Enrollment');
const verifyToken = require('../middleware/auth');

const router = express.Router();

// ✅ POST /api/reviews/submit - Submit a review and rating
router.post('/submit', verifyToken, async (req, res) => {
  try {
    const { courseId, rating, review } = req.body;
    const userId = req.user.id;

    // Validate input
    if (!courseId || !rating || !review) {
      return res.status(400).json({ msg: 'Course ID, rating, and review are required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ msg: 'Rating must be between 1 and 5' });
    }

    // Check if user is enrolled in the course
    const enrollment = await Enrollment.findOne({ userId, courseId });
    if (!enrollment) {
      return res.status(403).json({ msg: 'You must be enrolled in this course to review it' });
    }

    // Check if user has already reviewed this course
    const existingReview = await Review.findOne({ userId, courseId });
    if (existingReview) {
      return res.status(400).json({ msg: 'You have already reviewed this course' });
    }

    // Create new review
    const newReview = new Review({
      userId,
      courseId,
      rating,
      review
    });

    const savedReview = await newReview.save();
    
    // Populate user info for response
    await savedReview.populate('userId', 'username email');

    console.log('⭐ Review submitted:', savedReview);
    res.status(201).json(savedReview);

  } catch (error) {
    console.error('❌ Review submission error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ msg: 'You have already reviewed this course' });
    }
    res.status(500).json({ msg: 'Failed to submit review', error: error.message });
  }
});

// ✅ GET /api/reviews/course/:courseId - Get all reviews for a course
router.get('/course/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;

    const reviews = await Review.find({ courseId })
      .populate('userId', 'username email')
      .sort({ createdAt: -1 });

    // Calculate average rating
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

    res.status(200).json({
      reviews,
      averageRating: Math.round(averageRating * 10) / 10,
      totalReviews: reviews.length
    });

  } catch (error) {
    console.error('❌ Error fetching reviews:', error);
    res.status(500).json({ msg: 'Failed to fetch reviews', error: error.message });
  }
});

// ✅ GET /api/reviews/user - Get user's reviews
router.get('/user', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const reviews = await Review.find({ userId })
      .populate('courseId', 'title imageUrl')
      .sort({ createdAt: -1 });

    res.status(200).json(reviews);

  } catch (error) {
    console.error('❌ Error fetching user reviews:', error);
    res.status(500).json({ msg: 'Failed to fetch user reviews', error: error.message });
  }
});

// ✅ PUT /api/reviews/:reviewId - Update user's review
router.put('/:reviewId', verifyToken, async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, review } = req.body;
    const userId = req.user.id;

    if (!rating || !review) {
      return res.status(400).json({ msg: 'Rating and review are required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ msg: 'Rating must be between 1 and 5' });
    }

    const existingReview = await Review.findOne({ _id: reviewId, userId });
    if (!existingReview) {
      return res.status(404).json({ msg: 'Review not found' });
    }

    existingReview.rating = rating;
    existingReview.review = review;
    existingReview.createdAt = new Date();

    const updatedReview = await existingReview.save();
    await updatedReview.populate('userId', 'username email');

    res.status(200).json(updatedReview);

  } catch (error) {
    console.error('❌ Error updating review:', error);
    res.status(500).json({ msg: 'Failed to update review', error: error.message });
  }
});

// ✅ DELETE /api/reviews/:reviewId - Delete user's review
router.delete('/:reviewId', verifyToken, async (req, res) => {
  try {
    const { reviewId } = req.params;
    const userId = req.user.id;

    const review = await Review.findOneAndDelete({ _id: reviewId, userId });
    if (!review) {
      return res.status(404).json({ msg: 'Review not found' });
    }

    res.status(200).json({ msg: 'Review deleted successfully' });

  } catch (error) {
    console.error('❌ Error deleting review:', error);
    res.status(500).json({ msg: 'Failed to delete review', error: error.message });
  }
});

module.exports = router; 