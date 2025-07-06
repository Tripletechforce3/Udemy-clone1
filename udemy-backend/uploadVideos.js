const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Video = require('./models/Video');
const Course = require('./models/Course');
const User = require('./models/User');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const uploadVideos = async () => {
  try {
    console.log('🚀 Starting video upload process...');

    // Get admin user (assuming admin exists)
    const adminUser = await User.findOne({ isAdmin: true });
    if (!adminUser) {
      console.error('❌ No admin user found. Please create admin user first.');
      return;
    }

    // Get all courses
    const courses = await Course.find();
    if (courses.length === 0) {
      console.error('❌ No courses found. Please create courses first.');
      return;
    }

    console.log(`📚 Found ${courses.length} courses`);
    courses.forEach((course, index) => {
      console.log(`${index + 1}. ${course.title}`);
    });

    // Get video files from Videos folder
    const videosDir = path.join(__dirname, 'Videos');
    const videoFiles = fs.readdirSync(videosDir).filter(file => 
      file.endsWith('.mp4') || file.endsWith('.avi') || file.endsWith('.mov')
    );

    console.log(`📹 Found ${videoFiles.length} video files`);

    // Video titles and descriptions
    const videoData = [
      { title: 'Introduction to Programming', description: 'Learn the basics of programming concepts' },
      { title: 'Variables and Data Types', description: 'Understanding variables and different data types' },
      { title: 'Control Structures', description: 'Learn about loops and conditional statements' },
      { title: 'Functions and Methods', description: 'Creating and using functions in your code' },
      { title: 'Object-Oriented Programming', description: 'Understanding classes and objects' },
      { title: 'Advanced Concepts', description: 'Advanced programming techniques and best practices' }
    ];

    // Upload videos
    for (let i = 0; i < videoFiles.length; i++) {
      const videoFile = videoFiles[i];
      const courseIndex = i % courses.length; // Distribute videos across courses
      const course = courses[courseIndex];
      const videoInfo = videoData[i] || { title: `Video ${i + 1}`, description: 'Course video content' };

      // Check if video already exists
      const existingVideo = await Video.findOne({ 
        title: videoInfo.title,
        courseId: course._id 
      });

      if (existingVideo) {
        console.log(`⏭️  Video "${videoInfo.title}" already exists for course "${course.title}"`);
        continue;
      }

      // Create video record
      const video = new Video({
        title: videoInfo.title,
        courseId: course._id,
        videoUrl: videoFile,
        duration: '10:00', // Default duration
        description: videoInfo.description,
        uploadedBy: adminUser._id
      });

      await video.save();
      console.log(`✅ Uploaded: "${videoInfo.title}" to course "${course.title}"`);
    }

    console.log('🎉 Video upload process completed!');
    console.log(`📊 Total videos uploaded: ${videoFiles.length}`);

    // Show summary
    const totalVideos = await Video.countDocuments();
    console.log(`📈 Total videos in database: ${totalVideos}`);

  } catch (error) {
    console.error('❌ Error uploading videos:', error);
  } finally {
    mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
};

// Run the upload
uploadVideos(); 