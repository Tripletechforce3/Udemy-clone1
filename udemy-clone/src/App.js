import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api, storage } from './api';

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 min-h-screen">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 bg-white/80 shadow-md sticky top-0 z-20 backdrop-blur-md gap-4 md:gap-0">
        <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
          <span className="text-2xl font-extrabold text-purple-700 tracking-tight drop-shadow">Udemify</span>
          <span className="ml-4 text-gray-700 cursor-pointer hover:text-purple-700 font-medium hidden sm:inline">Explore</span>
        </div>
        <div className="w-full md:w-auto flex justify-center order-3 md:order-none">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg px-4 py-2 border-2 border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80 shadow-sm"
          />
        </div>
        <nav className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-end">
          <span className="text-gray-700 hover:text-purple-700 cursor-pointer font-medium hidden sm:inline">Plans & Pricing</span>
          <span className="text-gray-700 hover:text-purple-700 cursor-pointer font-medium hidden sm:inline">Business</span>
          <span className="text-gray-700 hover:text-purple-700 cursor-pointer font-medium hidden sm:inline">Teach</span>
          <button className="px-4 py-1 border-2 rounded text-purple-700 border-purple-700 hover:bg-purple-50 font-semibold transition" onClick={() => navigate('/login')}>Log in</button>
          <button className="px-4 py-1 rounded bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 font-semibold shadow transition" onClick={() => navigate('/register')}>Sign up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 py-8 md:py-16 bg-white/90 mt-4 rounded-3xl shadow-2xl max-w-6xl mx-auto relative overflow-hidden gap-8 md:gap-0">
        <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-2xl z-0" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 blur-2xl z-0" />
        <div className="w-full md:w-1/2 z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-900 drop-shadow">Skills that drive you forward</h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6">Technology and the world of work change fast — with us, you're faster. Get the skills to achieve goals and stay competitive.</p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded font-semibold hover:from-purple-700 hover:to-pink-600 shadow-lg transition w-full sm:w-auto">View Plans</button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center z-10 mb-6 md:mb-0">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Hero" className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-md border-4 border-purple-100 object-cover" />
        </div>
      </section>

      {/* Decorative SVG Wave */}
      <div className="-mt-2">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16">
          <path fill="#ede9fe" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,133.3C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V32Z" />
        </svg>
      </div>

      {/* Feature Cards Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 text-center">Ready to reimagine your career?</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 text-center">Get the skills and real-world experience employers want with Career Accelerators.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-purple-200 to-pink-100 p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer border-t-4 border-purple-400 flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mentor" className="w-16 h-16 rounded-full mb-4 border-4 border-white shadow" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-purple-800">Expert Mentors</h3>
            <p className="text-gray-700 text-center text-sm sm:text-base">Learn from industry leaders and get personalized feedback on your progress.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-gradient-to-br from-blue-200 to-purple-100 p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer border-t-4 border-blue-400 flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Projects" className="w-16 h-16 rounded-full mb-4 border-4 border-white shadow" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-blue-800">Hands-on Projects</h3>
            <p className="text-gray-700 text-center text-sm sm:text-base">Build real-world projects to showcase your skills and boost your portfolio.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-gradient-to-br from-pink-200 to-purple-100 p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer border-t-4 border-pink-400 flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Community" className="w-16 h-16 rounded-full mb-4 border-4 border-white shadow" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-pink-800">Vibrant Community</h3>
            <p className="text-gray-700 text-center text-sm sm:text-base">Join a global network of learners, share knowledge, and grow together.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-500 py-8 md:py-10 text-center text-white mt-8 shadow-lg px-4 md:px-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 drop-shadow">Start your learning journey today!</h2>
        <p className="mb-4 text-sm sm:text-base">Sign up now and unlock access to thousands of courses and expert mentors.</p>
        <button className="bg-white text-purple-700 px-8 py-2 rounded font-semibold hover:bg-gray-100 transition shadow-lg w-full sm:w-auto" onClick={() => navigate('/register')}>Get Started</button>
      </section>
    </div>
  );
}

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.register(formData.username, formData.email, formData.password);
      
      // Store auth data
      storage.setToken(response.token);
      storage.setUser(response.user);
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.username}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <button className="text-blue-600 underline" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const currentUser = storage.getUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setUser(currentUser);

    // Fetch courses from backend
    const fetchCourses = async () => {
      try {
        const coursesData = await api.getCourses();
        setCourses(coursesData);
      } catch (err) {
        setError('Failed to load courses');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [navigate]);
  const categories = [
    "Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity", "Personal Development", "Design", "Marketing", "Health & Fitness", "Music"
  ];
    // Transform backend courses to match frontend format
  const recommendedCourses = courses.map(course => ({
    id: course._id,
    title: course.title,
    author: course.instructor || 'Unknown Instructor',
    rating: 4.5, // Default rating since backend doesn't store this
    reviews: 100, // Default reviews
    learners: 1000, // Default learners
    price: course.price || 499,
    oldPrice: (course.price || 499) * 2, // Mock old price
    img: course.imageUrl || "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
    bestseller: true,
    category: course.category,
    description: course.description
  }));
  const viewedCourses = [
    {
      id: 'ml-projects',
      title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]",
      img: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    },
  ];
  function handleCourseClick(id) {
    navigate(`/course/${id}`);
  }
  const handleLogout = () => {
    storage.clearAuth();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 border-b bg-white sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-gray-900 tracking-tight"> <span className="text-purple-700">u</span>dem<span className="text-purple-700">y</span></span>
          <span className="ml-6 text-gray-700 cursor-pointer hover:text-purple-700 font-medium hidden md:inline">Explore</span>
        </div>
        <div className="flex-1 flex justify-center px-8">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full max-w-2xl px-5 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50 shadow-sm"
          />
        </div>
        <nav className="flex items-center gap-6">
          <span className="text-gray-700 hover:text-purple-700 cursor-pointer font-medium hidden md:inline">Udemy Business</span>
          <span className="text-gray-700 hover:text-purple-700 cursor-pointer font-medium hidden md:inline">Teach on Udemy</span>
          <span className="text-gray-700 hover:text-purple-700 cursor-pointer font-medium hidden md:inline">My learning</span>
          <span className="text-2xl cursor-pointer">♡</span>
          <span className="text-2xl cursor-pointer">🛒</span>
          <span className="text-2xl cursor-pointer">🔔</span>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-lg">
              {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
            </div>
            <button 
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-purple-700"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>
      {/* Category Menu */}
      <nav className="flex gap-6 px-8 py-3 border-b bg-white overflow-x-auto text-sm font-medium text-gray-700">
        {categories.map((cat) => (
          <span key={cat} className="cursor-pointer hover:text-purple-700 whitespace-nowrap">{cat}</span>
        ))}
      </nav>
      {/* Welcome Section */}
      <section className="flex items-center gap-6 px-8 py-8">
        <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-3xl">
          {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome back, {user.username || 'User'}</h2>
          <a href="#" className="text-purple-700 font-medium underline text-base">Add occupation and interests</a>
        </div>
      </section>
      {/* What to learn next */}
      <section className="px-8">
        <h2 className="text-3xl font-bold mb-2 mt-4">What to learn next</h2>
        <h3 className="text-xl font-semibold mb-4">Recommended for you</h3>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {recommendedCourses.map((course, idx) => (
            <button key={course.id} onClick={() => handleCourseClick(course.id)} className="min-w-[260px] max-w-[260px] bg-white rounded-lg shadow hover:shadow-lg border border-gray-200 flex flex-col items-start p-3 transition cursor-pointer text-left">
              <img src={course.img} alt={course.title} className="rounded w-full h-32 object-cover mb-2" />
              <div className="font-bold text-base mb-1 line-clamp-2">{course.title}</div>
              <div className="text-xs text-gray-600 mb-1">{course.author}</div>
              <div className="flex items-center gap-1 text-sm mb-1">
                <span className="font-semibold">{course.rating}</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-500">({course.reviews})</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg">₹{course.price}</span>
                <span className="text-gray-400 line-through text-sm">₹{course.oldPrice}</span>
              </div>
              <span className="bg-purple-700 text-white text-xs px-2 py-1 rounded mt-1">Premium</span>
            </button>
          ))}
        </div>
      </section>
      {/* Because you viewed */}
      <section className="px-8 mt-8">
        <h3 className="text-xl font-semibold mb-4">Because you viewed <span className="text-purple-700">"Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]"</span></h3>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {viewedCourses.map((course, idx) => (
            <button key={course.id} onClick={() => handleCourseClick(course.id)} className="min-w-[220px] max-w-[220px] bg-white rounded-lg shadow hover:shadow-lg border border-gray-200 flex flex-col items-start p-3 transition cursor-pointer text-left">
              <img src={course.img} alt={course.title} className="rounded w-full h-24 object-cover mb-2" />
              <div className="font-bold text-base mb-1 line-clamp-2">{course.title}</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.login(email, password);
      
      // Store auth data
      storage.setToken(response.token);
      storage.setUser(response.user);
      
      // Navigate based on user role
      if (response.user.isAdmin) {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <button className="text-blue-600 underline" onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>
    </div>
  );
}

function Accordion({ sections }) {
  const [openIndex, setOpenIndex] = useState(0);
  // Icons (could be replaced with images if desired)
  const icons = {
    video: (
      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="15" height="14" rx="2"/><polygon points="16 7 22 12 16 17 16 7"/></svg>
    ),
    quiz: (
      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M9 9h.01M15 9h.01"/></svg>
    ),
    doc: (
      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><polyline points="7 2 7 8 17 8"/></svg>
    ),
  };
  // Helper to guess icon type
  function getIcon(title) {
    if (title.toLowerCase().includes('quiz')) return icons.quiz;
    if (title.toLowerCase().includes('download') || title.toLowerCase().includes('resource')) return icons.doc;
    if (title.toLowerCase().includes('practice') || title.toLowerCase().includes('question')) return icons.quiz;
    return icons.video;
  }
  return (
    <div className="rounded shadow border divide-y bg-white">
      {sections.map((section, idx) => {
        const isOpen = openIndex === idx;
        // Count lectures and total duration (fake for now)
        const lectureCount = section.lectures.length;
        const totalDuration = section.lectures.reduce((acc, lec) => {
          // Parse duration like '3:27' or '1hr 12min' or '1 question'
          if (lec.duration.includes('question')) return acc;
          if (lec.duration.includes('hr') || lec.duration.includes('min')) return acc; // skip for now
          const [min, sec] = lec.duration.split(':').map(Number);
          return acc + (min ? min : 0) + ((sec ? sec : 0) / 60);
        }, 0);
        return (
          <div key={idx}>
            <button
              className={`w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 font-semibold text-left text-gray-900 transition focus:outline-none`}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
            >
              <div className="flex items-center gap-2">
                <img
                  src={isOpen ? "https://img.icons8.com/ios-filled/24/000000/expand-arrow--v2.png" : "https://img.icons8.com/ios-filled/24/000000/collapse-arrow--v2.png"}
                  alt="arrow"
                  className={`w-4 h-4 mr-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
                <span>{section.section}</span>
              </div>
              <div className="text-xs text-gray-600 font-normal">
                {lectureCount} lectures
                {/* Optionally add total duration here */}
              </div>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-2">
                <ul>
                  {section.lectures.map((lec, lidx) => (
                    <li key={lidx} className="flex items-center gap-3 py-2 border-b last:border-b-0">
                      <span>{getIcon(lec.title)}</span>
                      <span className={`flex-1 ${lec.preview ? 'text-purple-700 font-semibold cursor-pointer hover:underline' : ''}`}>{lec.title}{lec.preview && <span className="ml-2 text-xs">Preview</span>}</span>
                      <span className="text-xs text-gray-500 whitespace-nowrap">{lec.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrolling, setEnrolling] = useState(false);
  const [enrollMessage, setEnrollMessage] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [hasReviewed, setHasReviewed] = useState(false);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setLoading(true);
        // Fetch course details and videos
        const [coursesData, videosData] = await Promise.all([
          api.getCourses(),
          api.getVideosByCourse(id)
        ]);
        
        const foundCourse = coursesData.find(c => c._id === id);
        if (!foundCourse) {
          setError('Course not found');
          return;
        }
        
        setCourse(foundCourse);
        setVideos(videosData);

        // Check if user is enrolled (if logged in)
        const user = storage.getUser();
        const token = storage.getToken();
        if (user && token) {
          try {
            const enrollmentStatus = await api.checkEnrollment(id, token);
            setIsEnrolled(enrollmentStatus.isEnrolled);
          } catch (err) {
            console.error('Failed to check enrollment status:', err);
          }
        }
      } catch (err) {
        setError('Failed to load course data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [id]);

  // Add beforeunload event listener for enrolled users
  useEffect(() => {
    if (isEnrolled && !hasReviewed) {
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = '';
        setShowRatingModal(true);
        return '';
      };

      const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden' && !hasReviewed) {
          setShowRatingModal(true);
        }
      };

      const handlePopState = () => {
        if (!hasReviewed) {
          setShowRatingModal(true);
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [isEnrolled, hasReviewed]);

  const handleEnroll = async () => {
    const user = storage.getUser();
    const token = storage.getToken();
    
    if (!user || !token) {
      setEnrollMessage('Please login to enroll in this course');
      return;
    }

    setEnrolling(true);
    setEnrollMessage("");

    try {
      await api.enrollInCourse(id, token);
      setShowPayment(true);
      setEnrollMessage('Successfully enrolled! Please complete payment.');
    } catch (err) {
      setEnrollMessage(err.message || 'Failed to enroll in course');
    } finally {
      setEnrolling(false);
    }
  };

  const handlePaymentSubmit = async () => {
    try {
      // Simulate payment verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mark as enrolled after successful payment
      setIsEnrolled(true);
      setShowPayment(false);
      setShowPaymentModal(false);
      setEnrollMessage('Payment successful! You are now enrolled.');
    } catch (err) {
      setEnrollMessage('Payment verification failed. Please try again.');
    }
  };

  const handleRatingSubmit = async () => {
    try {
      setHasReviewed(true);
      setShowRatingModal(false);
      setEnrollMessage('Thank you for your review! Your feedback helps other learners.');
    } catch (err) {
      setEnrollMessage('Failed to submit review. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <p className="text-gray-600">{error || 'The course you are looking for does not exist.'}</p>
        </div>
      </div>
    );
  }

  // Transform videos to match curriculum format
  const curriculum = videos.length > 0 ? [
    {
      section: "Course Videos",
      lectures: videos.map(video => ({
        title: video.title,
        preview: true,
        duration: video.duration || "10:00",
        videoUrl: video.videoUrl
      }))
    }
  ] : [
    {
      section: "Course Content",
      lectures: [
        { title: "Introduction to the Course", preview: true, duration: "5:00" },
        { title: "Getting Started", preview: false, duration: "10:00" }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto pt-8 px-4 gap-8">
        {/* Main content */}
        <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-2">Development &gt; {course.category || 'Programming'}</div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{course.title}</h1>
        <div className="text-lg text-gray-700 mb-4">{course.description || 'Learn the fundamentals and advanced concepts of this course.'}</div>
        <div className="mb-2 text-sm text-gray-700">Created by <span className="text-blue-700 font-medium">{course.instructor || 'Instructor'}</span></div>
        <div className="mb-2 text-xs text-gray-500">Last updated {new Date(course.updatedAt || Date.now()).toLocaleDateString()} &bull; English</div>
        <div className="flex items-center gap-6 mt-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-purple-700 text-white px-3 py-1 rounded text-sm font-semibold">Premium</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-yellow-600">4.5</span>
            <span className="text-xs text-gray-600">100 ratings</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold text-gray-800">1,000</span>
            <span className="text-xs text-gray-600">learners</span>
          </div>
        </div>
        <div className="bg-white rounded shadow p-6 mt-6 mb-8">
          <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Master the core concepts of {course.title}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Build real-world projects and applications</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Get hands-on experience with practical exercises</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Learn from industry experts and best practices</span>
            </div>
          </div>
        </div>
          {/* Curriculum Accordion */}
          <div className="bg-white rounded shadow p-0 mb-8">
            <h2 className="text-lg font-bold mb-0 px-6 pt-6 pb-2">Course content</h2>
            <div className="px-6 pb-6">
              <Accordion sections={curriculum} />
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-full md:w-96 flex-shrink-0">
          <div className="bg-white rounded shadow p-4 mb-6">
            <img src={course.imageUrl || "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg"} alt={course.title} className="rounded w-full h-40 object-cover mb-4" />
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-700 text-white px-2 py-1 rounded text-xs font-semibold">Premium</span>
            </div>
            <div className="text-2xl font-bold mb-1">₹{course.price || 499} <span className="text-gray-400 text-base line-through ml-2">₹{(course.price || 499) * 2}</span></div>
            <div className="text-red-600 text-sm mb-2">1 hour left at this price!</div>
            
            {enrollMessage && (
              <div className={`mb-2 p-2 rounded text-sm ${enrollMessage.includes('Successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {enrollMessage}
              </div>
            )}
            
            {isEnrolled ? (
              <div className="mb-2">
                <button className="w-full bg-green-600 text-white py-2 rounded font-semibold mb-2" disabled>
                  ✓ Enrolled
                </button>
                <button className="w-full border border-purple-700 text-purple-700 py-2 rounded font-semibold hover:bg-purple-50 transition mb-2">
                  Start Learning
                </button>
                {!hasReviewed && (
                  <button 
                    onClick={() => setShowRatingModal(true)}
                    className="w-full bg-yellow-500 text-white py-2 rounded font-semibold hover:bg-yellow-600 transition mb-2"
                  >
                    ⭐ Rate & Review Course
                  </button>
                )}
              </div>
            ) : showPayment ? (
              <div className="mb-2">
                <button 
                  onClick={() => setShowPaymentModal(true)}
                  className="w-full bg-green-600 text-white py-2 rounded font-semibold mb-2 hover:bg-green-700 transition"
                >
                  Pay Now - ₹{course.price || 499}
                </button>
                <button className="w-full border border-purple-700 text-purple-700 py-2 rounded font-semibold hover:bg-purple-50 transition mb-2">
                  Start Learning
                </button>
              </div>
            ) : (
              <div className="mb-2">
                <button 
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="w-full bg-purple-700 text-white py-2 rounded font-semibold mb-2 hover:bg-purple-800 transition disabled:opacity-50"
                >
                  {enrolling ? 'Enrolling...' : 'Enroll Now'}
                </button>
                <button className="w-full border border-purple-700 text-purple-700 py-2 rounded font-semibold hover:bg-purple-50 transition mb-2">
                  Add to Wishlist
                </button>
              </div>
            )}
            <div className="text-xs text-gray-500 mb-2">30-Day Money-Back Guarantee<br/>Full Lifetime Access</div>
            <div className="flex gap-2 mb-2">
              <button className="text-xs underline text-gray-700">Share</button>
              <button className="text-xs underline text-gray-700">Gift this course</button>
              <button className="text-xs underline text-gray-700">Apply Coupon</button>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input type="text" placeholder="Enter Coupon" className="border rounded px-2 py-1 text-xs w-2/3" />
              <button className="bg-purple-700 text-white px-2 py-1 rounded text-xs">Apply</button>
            </div>
            <div className="mt-4">
              <button className="w-full bg-purple-100 text-purple-700 py-2 rounded font-semibold hover:bg-purple-200 transition">Start subscription</button>
              <div className="text-xs text-gray-500 mt-1">Starting at ₹852 per month<br/>Cancel anytime</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        course={course}
        onSubmit={handlePaymentSubmit}
      />
      
      {/* Rating Modal */}
      <RatingModal
        isOpen={showRatingModal}
        onClose={() => setShowRatingModal(false)}
        course={course}
        onSubmit={handleRatingSubmit}
      />
    </div>
  );
}

function AdminDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('courses');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  // Check if user is admin and fetch courses
  useEffect(() => {
    const user = storage.getUser();
    if (!user || !user.isAdmin) {
      navigate('/login');
      return;
    }

    // Fetch courses for admin dashboard
    const fetchCourses = async () => {
      try {
        const coursesData = await api.getCourses();
        setCourses(coursesData);
      } catch (err) {
        console.error('Failed to fetch courses:', err);
      }
    };

    fetchCourses();
  }, [navigate]);

  // State for courses and videos
  const [courses, setCourses] = useState([]);
  const [videos, setVideos] = useState([
    { id: 1, course: 'Python Bootcamp', title: 'Intro to Python', url: 'video1.mp4' },
  ]);
  const [enrollments, setEnrollments] = useState([]);
  const [sales, setSales] = useState([]);
  const [selectedCourseVideos, setSelectedCourseVideos] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [allVideos, setAllVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  
  // Upload forms state
  const [newCourse, setNewCourse] = useState({ 
    title: '', 
    instructor: '', 
    imageUrl: '', 
    category: '',
    description: '',
    price: ''
  });
  const [newVideo, setNewVideo] = useState({ course: '', title: '', file: null });
  
  // Fetch enrollments and sales for admin
  useEffect(() => {
    const user = storage.getUser();
    const token = storage.getToken();
    if (!user || !user.isAdmin) return;

    const fetchAdminData = async () => {
      try {
        console.log('🔍 Starting to fetch admin data...');
        const [enrollmentsData, salesData, videosData] = await Promise.all([
          api.fetchAllEnrollments(token),
          api.fetchSalesReports(token),
          api.fetchAllVideos(token),
        ]);
        console.log('📊 Enrollments:', enrollmentsData.length);
        console.log('💰 Sales:', salesData.length);
        console.log('📹 Videos:', videosData.length, 'videos fetched');
        console.log('📹 Video details:', videosData);
        
        setEnrollments(enrollmentsData);
        setSales(salesData);
        setAllVideos(videosData);
      } catch (err) {
        console.error('❌ Failed to fetch admin data:', err);
        console.error('❌ Error details:', err.message);
      }
    };
    fetchAdminData();
  }, []);
  
  // Handlers
  async function handleCourseUpload(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = storage.getToken();
      const courseData = {
        ...newCourse,
        price: parseFloat(newCourse.price) || 0
      };
      
      await api.createCourse(courseData, token);
      setSuccess('Course uploaded successfully!');
      setNewCourse({ title: '', instructor: '', imageUrl: '', category: '', description: '', price: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  
  async function handleVideoUpload(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = storage.getToken();
      
      // Find the selected video
      const videoToAssign = allVideos.find(v => v._id === selectedVideo);
      if (!videoToAssign) {
        throw new Error('Selected video not found');
      }

      // Assign video to course using API
      await api.assignVideoToCourse(selectedVideo, newVideo.course, token);

      setSuccess('Video assigned to course successfully!');
      setSelectedVideo("");
      setNewVideo({ course: '', title: '', file: null });
      
      // Refresh the videos list
      const updatedVideos = await api.fetchAllVideos(token);
      setAllVideos(updatedVideos);
      
      // Refresh course videos if a course is selected
      if (selectedCourseId) {
        fetchVideosForCourse(selectedCourseId);
      }
    } catch (err) {
      setError(err.message || 'Failed to assign video to course');
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = () => {
    storage.clearAuth();
    navigate('/login');
  };

  // Fetch videos for selected course
  const fetchVideosForCourse = async (courseId) => {
    if (!courseId) {
      setSelectedCourseVideos([]);
      return;
    }
    try {
      const videosData = await api.getVideosByCourse(courseId);
      setSelectedCourseVideos(videosData);
    } catch (err) {
      setSelectedCourseVideos([]);
      console.error('Failed to fetch videos for course:', err);
    }
  };

  // Handle course selection change
  const handleCourseSelectionChange = (courseId) => {
    setSelectedCourseId(courseId);
    fetchVideosForCourse(courseId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col p-6 gap-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-purple-700">Admin Panel</h2>
          <button 
            onClick={handleLogout}
            className="text-sm text-gray-600 hover:text-purple-700"
          >
            Logout
          </button>
        </div>
        <button className={`text-left px-4 py-2 rounded font-semibold ${tab === 'courses' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`} onClick={() => setTab('courses')}>Upload Courses</button>
        <button className={`text-left px-4 py-2 rounded font-semibold ${tab === 'videos' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`} onClick={() => setTab('videos')}>Upload Videos</button>
        <button className={`text-left px-4 py-2 rounded font-semibold ${tab === 'enrollments' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`} onClick={() => setTab('enrollments')}>View User Enrollments</button>
        <button className={`text-left px-4 py-2 rounded font-semibold ${tab === 'sales' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`} onClick={() => setTab('sales')}>View Sales Reports</button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        {tab === 'courses' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Upload Courses</h3>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {success}
              </div>
            )}
            
            <form className="bg-white rounded shadow p-6 mb-8 max-w-lg" onSubmit={handleCourseUpload}>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Course Title</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2" 
                  value={newCourse.title} 
                  onChange={e => setNewCourse({ ...newCourse, title: e.target.value })} 
                  required 
                  disabled={loading}
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Instructor</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2" 
                  value={newCourse.instructor} 
                  onChange={e => setNewCourse({ ...newCourse, instructor: e.target.value })} 
                  required 
                  disabled={loading}
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Category</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2" 
                  value={newCourse.category} 
                  onChange={e => setNewCourse({ ...newCourse, category: e.target.value })} 
                  placeholder="e.g., Development, Business, Design"
                  disabled={loading}
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Description</label>
                <textarea 
                  className="w-full border rounded px-3 py-2" 
                  value={newCourse.description} 
                  onChange={e => setNewCourse({ ...newCourse, description: e.target.value })} 
                  rows="3"
                  disabled={loading}
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Price (₹)</label>
                <input 
                  type="number" 
                  className="w-full border rounded px-3 py-2" 
                  value={newCourse.price} 
                  onChange={e => setNewCourse({ ...newCourse, price: e.target.value })} 
                  placeholder="499"
                  disabled={loading}
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Image URL</label>
                <input 
                  type="text" 
                  className="w-full border rounded px-3 py-2" 
                  value={newCourse.imageUrl} 
                  onChange={e => setNewCourse({ ...newCourse, imageUrl: e.target.value })} 
                  placeholder="https://example.com/image.jpg"
                  disabled={loading}
                />
              </div>
              <button 
                type="submit" 
                className="bg-purple-700 text-white px-6 py-2 rounded font-semibold hover:bg-purple-800 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Uploading...' : 'Upload Course'}
              </button>
            </form>
          </div>
        )}
        {tab === 'videos' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Upload Videos</h3>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {success}
              </div>
            )}
            
            <form className="bg-white rounded shadow p-6 mb-8 max-w-lg" onSubmit={handleVideoUpload}>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Course</label>
                <select 
                  className="w-full border rounded px-3 py-2" 
                  value={newVideo.course} 
                  onChange={e => {
                    setNewVideo({ ...newVideo, course: e.target.value });
                    handleCourseSelectionChange(e.target.value);
                  }} 
                  required
                  disabled={loading}
                >
                  <option value="">Select Course</option>
                  {courses.map(c => <option key={c._id} value={c._id}>{c.title}</option>)}
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Select Video from Database</label>
                <button 
                  type="button"
                  onClick={async () => {
                    const token = storage.getToken();
                    try {
                      console.log('🔍 Testing video fetch...');
                      console.log('🔑 Token:', token ? 'Present' : 'Missing');
                      
                      const videos = await api.fetchAllVideos(token);
                      console.log('📹 Test result:', videos);
                      setAllVideos(videos);
                    } catch (err) {
                      console.error('❌ Test failed:', err);
                    }
                  }}
                  className="mb-2 bg-blue-500 text-white px-4 py-2 rounded text-sm"
                >
                  Test Fetch Videos
                </button>
                <button 
                  type="button"
                  onClick={async () => {
                    try {
                      console.log('🔍 Testing server connection...');
                      const response = await fetch('http://192.168.1.202:5000/');
                      const text = await response.text();
                      console.log('✅ Server response:', text);
                    } catch (err) {
                      console.error('❌ Server test failed:', err);
                    }
                  }}
                  className="mb-2 bg-green-500 text-white px-4 py-2 rounded text-sm ml-2"
                >
                  Test Server
                </button>
                <select 
                  className="w-full border rounded px-3 py-2" 
                  value={selectedVideo} 
                  onChange={e => setSelectedVideo(e.target.value)} 
                  required
                  disabled={loading}
                >
                  <option value="">Choose a video to upload ({allVideos.length} videos available)</option>
                  {allVideos.length > 0 ? (
                    allVideos.map(video => (
                      <option key={video._id} value={video._id}>
                        {video.title} {video.courseId ? `(Currently in: ${video.courseId.title})` : '(Not assigned)'}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>No videos available in database</option>
                  )}
                </select>
                {allVideos.length === 0 && (
                  <p className="text-sm text-gray-500 mt-1">
                    No videos found. Please run the video upload script first: npm run upload-videos
                  </p>
                )}
              </div>
              <button 
                type="submit" 
                className="bg-purple-700 text-white px-6 py-2 rounded font-semibold hover:bg-purple-800 transition disabled:opacity-50"
                disabled={loading || !selectedVideo || !newVideo.course}
              >
                {loading ? 'Uploading...' : 'Assign Video to Course'}
              </button>
            </form>
            
            {/* Course Selector for Viewing Videos */}
            <div className="bg-white rounded shadow p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">View Videos by Course</h4>
              
              {selectedCourseId && (
                <div>
                  <h5 className="font-semibold mb-3">Videos for {courses.find(c => c._id === selectedCourseId)?.title}</h5>
                  {selectedCourseVideos.length > 0 ? (
                    <table className="w-full bg-gray-50 rounded">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 text-left">Title</th>
                          <th className="p-2 text-left">Duration</th>
                          <th className="p-2 text-left">File</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedCourseVideos.map(video => (
                          <tr key={video._id} className="border-b last:border-b-0">
                            <td className="p-2">{video.title}</td>
                            <td className="p-2">{video.duration || '10:00'}</td>
                            <td className="p-2">{video.videoUrl}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-gray-500">No videos uploaded for this course yet.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        {tab === 'enrollments' && (
          <div>
            <h3 className="text-xl font-bold mb-4">User Enrollments</h3>
            <table className="w-full bg-white rounded shadow mb-8">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">User</th>
                  <th className="p-2 text-left">Course</th>
                  <th className="p-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {enrollments.map(e => (
                  <tr key={e._id} className="border-b last:border-b-0">
                    <td className="p-2">{e.userId?.email || e.userId?.username || 'Unknown'}</td>
                    <td className="p-2">{e.courseId?.title || 'Unknown'}</td>
                    <td className="p-2">{new Date(e.enrolledAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {tab === 'sales' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Sales Reports</h3>
            <table className="w-full bg-white rounded shadow mb-8">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Course</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((s, idx) => (
                  <tr key={idx} className="border-b last:border-b-0">
                    <td className="p-2">{s.course}</td>
                    <td className="p-2">₹{s.amount}</td>
                    <td className="p-2">{new Date(s.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

// Payment Modal Component
function PaymentModal({ isOpen, onClose, course, onSubmit }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError("Please upload a payment screenshot");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const token = storage.getToken();
      if (!token) {
        setError("Please login to complete payment");
        return;
      }

      // Upload payment screenshot to backend
      const result = await api.verifyPayment(
        course._id,
        course.price || 499,
        selectedFile,
        token
      );

      console.log('💰 Payment submitted:', result);
      onSubmit();
      onClose();
    } catch (err) {
      setError(err.message || "Payment submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">Complete Payment</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Course: {course?.title}</h4>
          <p className="text-2xl font-bold text-green-600">₹{course?.price || 499}</p>
        </div>

        {/* Dummy Scanner */}
        {/* <div className="mb-6">
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="w-32 h-32 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center mb-2">
                  <div className="text-gray-500">
                    <div className="text-4xl mb-2">📱</div>
                    <div className="text-sm">Scanner</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Dummy QR Scanner</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Scan the QR code to pay ₹{course?.price || 499}</p>
          </div>
        </div> */}
        <img src="https://pvccardprinting.in/wp-content/uploads/2023/12/gpay-qr-code.webp" alt="Course" className="w-full h-auto" />
        {/* File Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Payment Screenshot
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="payment-screenshot"
            />
            <label htmlFor="payment-screenshot" className="cursor-pointer">
              <div className="text-gray-500">
                <div className="text-2xl mb-2">📷</div>
                <div className="text-sm">
                  {selectedFile ? selectedFile.name : "Click to upload payment screenshot"}
                </div>
              </div>
            </label>
          </div>
          {selectedFile && (
            <div className="mt-2 text-sm text-green-600">
              ✓ {selectedFile.name} selected
            </div>
          )}
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded font-semibold hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !selectedFile}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Submit Payment"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Rating Modal Component
function RatingModal({ isOpen, onClose, course, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      setError("Please select a rating");
      return;
    }
    if (!review.trim()) {
      setError("Please write a review");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Just show success, do not save to DB
      setTimeout(() => {
        onSubmit();
        onClose();
      }, 1000);
    } catch (err) {
      setError("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
    setError("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">Rate & Review</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Course: {course?.title}</h4>
          <p className="text-sm text-gray-600">How would you rate your experience?</p>
        </div>

        {/* Star Rating */}
        <div className="mb-6">
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                className={`text-3xl transition-colors ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300'
                } hover:text-yellow-400`}
              >
                ★
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            {rating > 0 ? `${rating} out of 5 stars` : 'Click to rate'}
          </p>
        </div>

        {/* Review Text */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Write your review
          </label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share your experience with this course..."
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded font-semibold hover:bg-gray-50 transition"
          >
            Skip
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || rating === 0 || !review.trim()}
            className="flex-1 bg-purple-600 text-white py-2 px-4 rounded font-semibold hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
