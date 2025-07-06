// Get your IP address automatically or set it manually
const getBackendURL = () => {
  // Option 1: Use localhost for same device
  // return 'http://localhost:5000/api';
  
  // Option 2: Use your computer's IP address for external access
  return 'http://192.168.1.202:5000/api';
  
  // Option 3: Auto-detect (uncomment if you want to try this)
  // const hostname = window.location.hostname;
  // return `http://${hostname}:5000/api`;
};

const API_BASE_URL = getBackendURL();

// Check if backend is running
const checkBackendStatus = async () => {
  try {
    const response = await fetch('http://192.168.1.202:5000/');
    return response.ok;
  } catch (error) {
    console.error('Backend server is not running:', error.message);
    return false;
  }
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    try {
      const error = await response.json();
      throw new Error(error.msg || 'Something went wrong');
    } catch (parseError) {
      // If response is not JSON (like HTML error page)
      const text = await response.text();
      if (text.includes('<!DOCTYPE')) {
        throw new Error('Backend server is not running. Please start the server at http://localhost:5000');
      }
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }
  }
  return response.json();
};

// API Service functions
export const api = {
  // Authentication
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(response);
  },

  register: async (username, email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    return handleResponse(response);
  },

  // Courses
  getCourses: async () => {
    const response = await fetch(`${API_BASE_URL}/courses`);
    return handleResponse(response);
  },

  createCourse: async (courseData, token) => {
    const response = await fetch(`${API_BASE_URL}/courses/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(courseData),
    });
    return handleResponse(response);
  },

  // Enrollments
  enrollInCourse: async (courseId, token) => {
    const response = await fetch(`${API_BASE_URL}/enroll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ courseId }),
    });
    return handleResponse(response);
  },

  // Check if user is enrolled in a course
  checkEnrollment: async (courseId, token) => {
    const response = await fetch(`${API_BASE_URL}/enroll/check/${courseId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },

  // Get user's enrollments
  getUserEnrollments: async (token) => {
    const response = await fetch(`${API_BASE_URL}/enroll/user`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },

  // Videos
  uploadVideo: async (videoData, token) => {
    const response = await fetch(`${API_BASE_URL}/videos/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(videoData),
    });
    return handleResponse(response);
  },

  getVideosByCourse: async (courseId) => {
    const response = await fetch(`${API_BASE_URL}/videos/course/${courseId}`);
    return handleResponse(response);
  },

  // Admin - Get all enrollments
  fetchAllEnrollments: async (token) => {
    const response = await fetch(`${API_BASE_URL}/enroll/all`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },

  // Admin - Get sales reports
  fetchSalesReports: async (token) => {
    const response = await fetch(`${API_BASE_URL}/courses/sales`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },

  // Admin - Get all videos
  fetchAllVideos: async (token) => {
    const response = await fetch(`${API_BASE_URL}/videos/all`, {
      headers: {
        // Temporarily remove auth for testing
        // 'Authorization': `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  },

  // Admin - Assign video to course
  assignVideoToCourse: async (videoId, courseId, token) => {
    const response = await fetch(`${API_BASE_URL}/videos/assign`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ videoId, courseId }),
    });
    return handleResponse(response);
  },
};

// Local storage helpers
export const storage = {
  setToken: (token) => localStorage.setItem('token', token),
  getToken: () => localStorage.getItem('token'),
  removeToken: () => localStorage.removeItem('token'),
  setUser: (user) => localStorage.setItem('user', JSON.stringify(user)),
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  removeUser: () => localStorage.removeItem('user'),
  clearAuth: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
}; 