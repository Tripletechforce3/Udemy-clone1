import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams
} from 'react-router-dom';
import { useState } from 'react';

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
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
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
  const user = { name: "Guru Hiremath", initials: "GH" };
  const categories = [
    "Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity", "Personal Development", "Design", "Marketing", "Health & Fitness", "Music"
  ];
  const recommendedCourses = [
    {
      id: 'python-bootcamp',
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      author: "Dr. Angela Yu",
      rating: 4.7,
      reviews: 378490,
      learners: 1609177,
      price: 499,
      oldPrice: 3219,
      img: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
      bestseller: true,
      whatYouLearn: [
        "You will master the Python programming language by building 100 unique projects over 100 days.",
        "You will be able to program in Python professionally.",
        "Create a portfolio of 100 Python projects to apply for developer jobs.",
        "Be able to use Python for data science and machine learning.",
        "Build GUIs and Desktop applications with Python.",
        "You will learn automation, game, app and web development, data science and machine learning all using Python.",
        "You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
        "Be able to build fully fledged websites and web apps with Python.",
        "Build games like Blackjack, Pong and Snake using Python."
      ],
      curriculum: [
        {
          section: "Day 1 - Beginner - Working with Variables in Python to Manage Data",
          lectures: [
            { title: "What you're going to get from this course", preview: true, duration: "3:27" },
            { title: "START HERE", preview: false, duration: "2:53" },
            { title: "Downloadable Resources and Tips for Taking the Course", preview: true, duration: "4:22" },
            { title: "Day 1 Goals: what we will make by the end of the day", preview: false, duration: "2:30" },
            { title: "Download and Setup PyCharm for Learning", preview: false, duration: "4:22" },
            { title: "Printing to the Console in Python", preview: false, duration: "11:25" },
            { title: "Printing Practice", preview: false, duration: "1 question" },
            { title: "String Manipulation and Code Intelligence", preview: false, duration: "9:13" },
            { title: "Debugging Practice", preview: false, duration: "1 question" },
            { title: "The Python Input Function", preview: false, duration: "12:35" },
            { title: "Python Variables", preview: false, duration: "13:02" },
            { title: "Variables", preview: false, duration: "1 question" },
            { title: "Variable Naming", preview: false, duration: "4:23" },
            { title: "Variable Naming Quiz", preview: false, duration: "3 questions" },
            { title: "Day 1 Project: Band Name Generator", preview: false, duration: "5:32" },
            { title: "Congratulations! Well done!", preview: false, duration: "0:52" },
          ]
        },
        {
          section: "Day 2 - Beginner - Understanding Data Types and How to Manipulate Strings",
          lectures: [
            { title: "Data Types Overview", preview: false, duration: "7:00" },
            { title: "String Manipulation", preview: false, duration: "8:00" },
          ]
        }
      ]
    },
    {
      id: 'ml-projects',
      title: "40 Real World Data Science, Machine Learning Projects",
      author: "Pianalytix",
      rating: 4.3,
      reviews: 322,
      learners: 75000,
      price: 509,
      oldPrice: 2549,
      img: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
      whatYouLearn: ["Build real-world ML projects.", "Boost your portfolio."],
      curriculum: [
        {
          section: "Section 1 - Introduction to Data Science Projects",
          lectures: [
            { title: "Course Overview", preview: true, duration: "2:10" },
            { title: "Setting Up Your Environment", preview: false, duration: "5:00" },
            { title: "Project 1: Predicting House Prices", preview: false, duration: "12:30" },
            { title: "Project 2: Customer Segmentation", preview: false, duration: "10:00" },
            { title: "Quiz: Data Science Basics", preview: false, duration: "5 questions" },
          ]
        },
        {
          section: "Section 2 - Machine Learning Projects",
          lectures: [
            { title: "Project 3: Image Classification", preview: true, duration: "15:00" },
            { title: "Project 4: Sentiment Analysis", preview: false, duration: "13:45" },
            { title: "Project 5: Fraud Detection", preview: false, duration: "14:20" },
            { title: "Quiz: ML Concepts", preview: false, duration: "7 questions" },
          ]
        }
      ]
    },
    {
      id: 'ds-mastery',
      title: "Data Science Mastery: Journey into Machine Learning",
      author: "Tech Career World",
      rating: 4.3,
      reviews: 245,
      learners: 50000,
      price: 479,
      oldPrice: 799,
      img: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
      whatYouLearn: ["Master data science.", "Hands-on projects."],
      curriculum: [
        {
          section: "Module 1 - Data Science Foundations",
          lectures: [
            { title: "Welcome to the Course", preview: true, duration: "3:00" },
            { title: "What is Data Science?", preview: false, duration: "6:30" },
            { title: "Python for Data Science", preview: false, duration: "8:00" },
            { title: "Quiz: Data Science Terms", preview: false, duration: "4 questions" },
          ]
        },
        {
          section: "Module 2 - Machine Learning Essentials",
          lectures: [
            { title: "Supervised vs Unsupervised Learning", preview: true, duration: "7:00" },
            { title: "Regression Analysis", preview: false, duration: "9:30" },
            { title: "Classification Techniques", preview: false, duration: "10:00" },
            { title: "Quiz: ML Types", preview: false, duration: "5 questions" },
          ]
        }
      ]
    },
    {
      id: 'ds-realworld',
      title: "Data Science Real World Projects in Python",
      author: "Shan Singh",
      rating: 4.4,
      reviews: 1413,
      learners: 100000,
      price: 619,
      oldPrice: 3999,
      img: "https://img-c.udemycdn.com/course/240x135/903744_8eb2_2.jpg",
      whatYouLearn: ["Real world projects.", "Python for data science."],
      curriculum: [
        {
          section: "Part 1 - Real World Data Science",
          lectures: [
            { title: "Course Introduction", preview: true, duration: "2:45" },
            { title: "Project: Sales Forecasting", preview: false, duration: "11:00" },
            { title: "Project: Stock Price Prediction", preview: false, duration: "13:20" },
            { title: "Quiz: Forecasting", preview: false, duration: "3 questions" },
          ]
        },
        {
          section: "Part 2 - Python for Data Science",
          lectures: [
            { title: "Python Basics", preview: true, duration: "6:00" },
            { title: "Data Visualization", preview: false, duration: "8:30" },
            { title: "Quiz: Python", preview: false, duration: "4 questions" },
          ]
        }
      ]
    },
    {
      id: 'mlops-advanced',
      title: "Beginner to Advanced MLOps on GCP-CI/CD, Kubernetes...",
      author: "KRISHAI Technologies",
      rating: 4.5,
      reviews: 203,
      learners: 20000,
      price: 499,
      oldPrice: 2129,
      img: "https://img-c.udemycdn.com/course/240x135/3241526_5b3b_2.jpg",
      whatYouLearn: ["MLOps from scratch.", "CI/CD pipelines."],
      curriculum: [
        {
          section: "Unit 1 - MLOps Fundamentals",
          lectures: [
            { title: "Introduction to MLOps", preview: true, duration: "4:00" },
            { title: "CI/CD Concepts", preview: false, duration: "7:30" },
            { title: "Quiz: MLOps Basics", preview: false, duration: "5 questions" },
          ]
        },
        {
          section: "Unit 2 - Advanced MLOps",
          lectures: [
            { title: "Kubernetes for ML", preview: true, duration: "10:00" },
            { title: "Monitoring ML Models", preview: false, duration: "8:45" },
            { title: "Quiz: Advanced Topics", preview: false, duration: "6 questions" },
          ]
        }
      ]
    },
  ];
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
          <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-lg">{user.initials}</div>
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
        <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-3xl">{user.initials}</div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome back, {user.name}</h2>
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
  function handleLogin(e) {
    e.preventDefault();
    // Admin login
    if (email === "admin@gmail.com" && password === "admin@1234") {
      navigate('/admin-dashboard');
      return;
    }
    // Simulate user login
    navigate('/dashboard');
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
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
  // For demo, use the same static data as in Dashboard
  const allCourses = [
    {
      id: 'python-bootcamp',
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      author: "Dr. Angela Yu",
      rating: 4.7,
      reviews: 378490,
      learners: 1609177,
      price: 499,
      oldPrice: 3219,
      img: "https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg",
      bestseller: true,
      whatYouLearn: [
        "You will master the Python programming language by building 100 unique projects over 100 days.",
        "You will be able to program in Python professionally.",
        "Create a portfolio of 100 Python projects to apply for developer jobs.",
        "Be able to use Python for data science and machine learning.",
        "Build GUIs and Desktop applications with Python.",
        "You will learn automation, game, app and web development, data science and machine learning all using Python.",
        "You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
        "Be able to build fully fledged websites and web apps with Python.",
        "Build games like Blackjack, Pong and Snake using Python."
      ],
      curriculum: [
        {
          section: "Day 1 - Beginner - Working with Variables in Python to Manage Data",
          lectures: [
            { title: "What you're going to get from this course", preview: true, duration: "3:27" },
            { title: "START HERE", preview: false, duration: "2:53" },
            { title: "Downloadable Resources and Tips for Taking the Course", preview: true, duration: "4:22" },
            { title: "Day 1 Goals: what we will make by the end of the day", preview: false, duration: "2:30" },
            { title: "Download and Setup PyCharm for Learning", preview: false, duration: "4:22" },
            { title: "Printing to the Console in Python", preview: false, duration: "11:25" },
            { title: "Printing Practice", preview: false, duration: "1 question" },
            { title: "String Manipulation and Code Intelligence", preview: false, duration: "9:13" },
            { title: "Debugging Practice", preview: false, duration: "1 question" },
            { title: "The Python Input Function", preview: false, duration: "12:35" },
            { title: "Python Variables", preview: false, duration: "13:02" },
            { title: "Variables", preview: false, duration: "1 question" },
            { title: "Variable Naming", preview: false, duration: "4:23" },
            { title: "Variable Naming Quiz", preview: false, duration: "3 questions" },
            { title: "Day 1 Project: Band Name Generator", preview: false, duration: "5:32" },
            { title: "Congratulations! Well done!", preview: false, duration: "0:52" },
          ]
        },
        {
          section: "Day 2 - Beginner - Understanding Data Types and How to Manipulate Strings",
          lectures: [
            { title: "Data Types Overview", preview: false, duration: "7:00" },
            { title: "String Manipulation", preview: false, duration: "8:00" },
          ]
        }
      ]
    },
    {
      id: 'ml-projects',
      title: "40 Real World Data Science, Machine Learning Projects",
      author: "Pianalytix",
      rating: 4.3,
      reviews: 322,
      learners: 75000,
      price: 509,
      oldPrice: 2549,
      img: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
      whatYouLearn: ["Build real-world ML projects.", "Boost your portfolio."],
      curriculum: [
        {
          section: "Section 1 - Introduction to Data Science Projects",
          lectures: [
            { title: "Course Overview", preview: true, duration: "2:10" },
            { title: "Setting Up Your Environment", preview: false, duration: "5:00" },
            { title: "Project 1: Predicting House Prices", preview: false, duration: "12:30" },
            { title: "Project 2: Customer Segmentation", preview: false, duration: "10:00" },
            { title: "Quiz: Data Science Basics", preview: false, duration: "5 questions" },
          ]
        },
        {
          section: "Section 2 - Machine Learning Projects",
          lectures: [
            { title: "Project 3: Image Classification", preview: true, duration: "15:00" },
            { title: "Project 4: Sentiment Analysis", preview: false, duration: "13:45" },
            { title: "Project 5: Fraud Detection", preview: false, duration: "14:20" },
            { title: "Quiz: ML Concepts", preview: false, duration: "7 questions" },
          ]
        }
      ]
    },
    {
      id: 'ds-mastery',
      title: "Data Science Mastery: Journey into Machine Learning",
      author: "Tech Career World",
      rating: 4.3,
      reviews: 245,
      learners: 50000,
      price: 479,
      oldPrice: 799,
      img: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
      whatYouLearn: ["Master data science.", "Hands-on projects."],
      curriculum: [
        {
          section: "Module 1 - Data Science Foundations",
          lectures: [
            { title: "Welcome to the Course", preview: true, duration: "3:00" },
            { title: "What is Data Science?", preview: false, duration: "6:30" },
            { title: "Python for Data Science", preview: false, duration: "8:00" },
            { title: "Quiz: Data Science Terms", preview: false, duration: "4 questions" },
          ]
        },
        {
          section: "Module 2 - Machine Learning Essentials",
          lectures: [
            { title: "Supervised vs Unsupervised Learning", preview: true, duration: "7:00" },
            { title: "Regression Analysis", preview: false, duration: "9:30" },
            { title: "Classification Techniques", preview: false, duration: "10:00" },
            { title: "Quiz: ML Types", preview: false, duration: "5 questions" },
          ]
        }
      ]
    },
    {
      id: 'ds-realworld',
      title: "Data Science Real World Projects in Python",
      author: "Shan Singh",
      rating: 4.4,
      reviews: 1413,
      learners: 100000,
      price: 619,
      oldPrice: 3999,
      img: "https://img-c.udemycdn.com/course/240x135/903744_8eb2_2.jpg",
      whatYouLearn: ["Real world projects.", "Python for data science."],
      curriculum: [
        {
          section: "Part 1 - Real World Data Science",
          lectures: [
            { title: "Course Introduction", preview: true, duration: "2:45" },
            { title: "Project: Sales Forecasting", preview: false, duration: "11:00" },
            { title: "Project: Stock Price Prediction", preview: false, duration: "13:20" },
            { title: "Quiz: Forecasting", preview: false, duration: "3 questions" },
          ]
        },
        {
          section: "Part 2 - Python for Data Science",
          lectures: [
            { title: "Python Basics", preview: true, duration: "6:00" },
            { title: "Data Visualization", preview: false, duration: "8:30" },
            { title: "Quiz: Python", preview: false, duration: "4 questions" },
          ]
        }
      ]
    },
    {
      id: 'mlops-advanced',
      title: "Beginner to Advanced MLOps on GCP-CI/CD, Kubernetes...",
      author: "KRISHAI Technologies",
      rating: 4.5,
      reviews: 203,
      learners: 20000,
      price: 499,
      oldPrice: 2129,
      img: "https://img-c.udemycdn.com/course/240x135/3241526_5b3b_2.jpg",
      whatYouLearn: ["MLOps from scratch.", "CI/CD pipelines."],
      curriculum: [
        {
          section: "Unit 1 - MLOps Fundamentals",
          lectures: [
            { title: "Introduction to MLOps", preview: true, duration: "4:00" },
            { title: "CI/CD Concepts", preview: false, duration: "7:30" },
            { title: "Quiz: MLOps Basics", preview: false, duration: "5 questions" },
          ]
        },
        {
          section: "Unit 2 - Advanced MLOps",
          lectures: [
            { title: "Kubernetes for ML", preview: true, duration: "10:00" },
            { title: "Monitoring ML Models", preview: false, duration: "8:45" },
            { title: "Quiz: Advanced Topics", preview: false, duration: "6 questions" },
          ]
        }
      ]
    },
  ];
  const course = allCourses.find(c => c.id === id);
  if (!course) return <div className="p-8">Course not found.</div>;
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto pt-8 px-4 gap-8">
        {/* Main content */}
        <div className="flex-1">
          <div className="text-sm text-gray-500 mb-2">Development &gt; Programming Languages &gt; Python</div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{course.title}</h1>
          <div className="text-lg text-gray-700 mb-4">Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</div>
          {course.bestseller && <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold mr-2">Bestseller</span>}
          <div className="mb-2 text-sm text-gray-700">Created by <span className="text-blue-700 font-medium">{course.author}</span></div>
          <div className="mb-2 text-xs text-gray-500">Last updated 06/2025 &bull; English &bull; English, Arabic [Auto], 27 more</div>
          <div className="flex items-center gap-6 mt-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="bg-purple-700 text-white px-3 py-1 rounded text-sm font-semibold">Premium</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-yellow-600">{course.rating}</span>
              <span className="text-xs text-gray-600">{course.reviews.toLocaleString()} ratings</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-gray-800">{course.learners.toLocaleString()}</span>
              <span className="text-xs text-gray-600">learners</span>
            </div>
          </div>
          <div className="bg-white rounded shadow p-6 mt-6 mb-8">
            <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {course.whatYouLearn && course.whatYouLearn.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Curriculum Accordion */}
          {course.curriculum && (
            <div className="bg-white rounded shadow p-0 mb-8">
              <h2 className="text-lg font-bold mb-0 px-6 pt-6 pb-2">Course content</h2>
              <div className="px-6 pb-6">
                <Accordion sections={course.curriculum} />
              </div>
            </div>
          )}
        </div>
        {/* Sidebar */}
        <div className="w-full md:w-96 flex-shrink-0">
          <div className="bg-white rounded shadow p-4 mb-6">
            <img src={course.img} alt={course.title} className="rounded w-full h-40 object-cover mb-4" />
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-700 text-white px-2 py-1 rounded text-xs font-semibold">Premium</span>
            </div>
            <div className="text-2xl font-bold mb-1">₹{course.price} <span className="text-gray-400 text-base line-through ml-2">₹{course.oldPrice}</span></div>
            <div className="text-red-600 text-sm mb-2">1 hour left at this price!</div>
            <button className="w-full bg-purple-700 text-white py-2 rounded font-semibold mb-2 hover:bg-purple-800 transition">Add to cart</button>
            <button className="w-full border border-purple-700 text-purple-700 py-2 rounded font-semibold hover:bg-purple-50 transition mb-2">Buy now</button>
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
    </div>
  );
}

function AdminDashboard() {
  const [tab, setTab] = useState('courses');
  // Mock data
  const [courses, setCourses] = useState([
    { id: 1, title: 'Python Bootcamp', instructor: 'Dr. Angela Yu' },
    { id: 2, title: 'ML Projects', instructor: 'Pianalytix' },
  ]);
  const [videos, setVideos] = useState([
    { id: 1, course: 'Python Bootcamp', title: 'Intro to Python', url: 'video1.mp4' },
  ]);
  const [enrollments] = useState([
    { id: 1, user: 'user1@gmail.com', course: 'Python Bootcamp', date: '2024-06-01' },
    { id: 2, user: 'user2@gmail.com', course: 'ML Projects', date: '2024-06-02' },
  ]);
  const [sales] = useState([
    { id: 1, course: 'Python Bootcamp', amount: 499, date: '2024-06-01' },
    { id: 2, course: 'ML Projects', amount: 509, date: '2024-06-02' },
  ]);
  // Upload forms state
  const [newCourse, setNewCourse] = useState({ title: '', instructor: '', image: '', curriculum: '' });
  const [newVideo, setNewVideo] = useState({ course: '', title: '', file: null });
  // Handlers
  function handleCourseUpload(e) {
    e.preventDefault();
    setCourses([...courses, { id: Date.now(), ...newCourse }]);
    setNewCourse({ title: '', instructor: '', image: '', curriculum: '' });
    alert('Course uploaded!');
  }
  function handleVideoUpload(e) {
    e.preventDefault();
    setVideos([...videos, { id: Date.now(), ...newVideo }]);
    setNewVideo({ course: '', title: '', file: null });
    alert('Video uploaded!');
  }
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col p-6 gap-4">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Admin Panel</h2>
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
            <form className="bg-white rounded shadow p-6 mb-8 max-w-lg" onSubmit={handleCourseUpload}>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Course Title</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={newCourse.title} onChange={e => setNewCourse({ ...newCourse, title: e.target.value })} required />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Instructor</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={newCourse.instructor} onChange={e => setNewCourse({ ...newCourse, instructor: e.target.value })} required />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Image URL</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={newCourse.image} onChange={e => setNewCourse({ ...newCourse, image: e.target.value })} />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Curriculum (comma separated)</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={newCourse.curriculum} onChange={e => setNewCourse({ ...newCourse, curriculum: e.target.value })} />
              </div>
              <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded font-semibold hover:bg-purple-800 transition">Upload Course</button>
            </form>
            <h4 className="text-lg font-semibold mb-2">Existing Courses</h4>
            <table className="w-full bg-white rounded shadow mb-8">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Title</th>
                  <th className="p-2 text-left">Instructor</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(c => (
                  <tr key={c.id} className="border-b last:border-b-0">
                    <td className="p-2">{c.title}</td>
                    <td className="p-2">{c.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {tab === 'videos' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Upload Videos</h3>
            <form className="bg-white rounded shadow p-6 mb-8 max-w-lg" onSubmit={handleVideoUpload}>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Course</label>
                <select className="w-full border rounded px-3 py-2" value={newVideo.course} onChange={e => setNewVideo({ ...newVideo, course: e.target.value })} required>
                  <option value="">Select Course</option>
                  {courses.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Video Title</label>
                <input type="text" className="w-full border rounded px-3 py-2" value={newVideo.title} onChange={e => setNewVideo({ ...newVideo, title: e.target.value })} required />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Video File</label>
                <input type="file" className="w-full" onChange={e => setNewVideo({ ...newVideo, file: e.target.files[0] })} required />
              </div>
              <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded font-semibold hover:bg-purple-800 transition">Upload Video</button>
            </form>
            <h4 className="text-lg font-semibold mb-2">Uploaded Videos</h4>
            <table className="w-full bg-white rounded shadow mb-8">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Course</th>
                  <th className="p-2 text-left">Title</th>
                  <th className="p-2 text-left">File</th>
                </tr>
              </thead>
              <tbody>
                {videos.map(v => (
                  <tr key={v.id} className="border-b last:border-b-0">
                    <td className="p-2">{v.course}</td>
                    <td className="p-2">{v.title}</td>
                    <td className="p-2">{v.file ? v.file.name : v.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                  <tr key={e.id} className="border-b last:border-b-0">
                    <td className="p-2">{e.user}</td>
                    <td className="p-2">{e.course}</td>
                    <td className="p-2">{e.date}</td>
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
                {sales.map(s => (
                  <tr key={s.id} className="border-b last:border-b-0">
                    <td className="p-2">{s.course}</td>
                    <td className="p-2">₹{s.amount}</td>
                    <td className="p-2">{s.date}</td>
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
