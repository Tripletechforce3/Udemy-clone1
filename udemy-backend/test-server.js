const http = require('http');

function testServer() {
  console.log('🔍 Testing backend server...');
  
  const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('✅ Server is running!');
      console.log('📡 Response:', data);
      
      // Test courses endpoint
      testCoursesEndpoint();
    });
  });

  req.on('error', (error) => {
    console.error('❌ Server test failed:', error.message);
    console.log('\n🔧 Troubleshooting steps:');
    console.log('1. Make sure MongoDB is running');
    console.log('2. Check if .env file exists and has correct MONGODB_URI');
    console.log('3. Run: npm start in the udemy-backend directory');
    console.log('4. Check if port 5000 is available');
  });

  req.end();
}

function testCoursesEndpoint() {
  const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/courses',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const coursesData = JSON.parse(data);
        console.log('✅ Courses API working!');
        console.log('📚 Found', coursesData.length, 'courses');
      } catch (error) {
        console.log('⚠️ Courses API response:', data);
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ Courses API test failed:', error.message);
  });

  req.end();
}

testServer(); 