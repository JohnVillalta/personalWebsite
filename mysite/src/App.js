import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Home2  from './pages/home';
import Content from './pages/contentcreation';
import Programming from './pages/programming';
import Music from './pages/music';
import Blogs from './pages/blogs';

function App() {
  const blurRef = useRef(null);

  return (
    <div ref={blurRef} className="h-[100vh] overflow-auto">
      <Router>
        <Navbar />
        <Routes>
          <Route path= '/' exact element= {<Home />} />
          <Route path= '/home' element= {<Home2 />} />
          <Route path= '/contentcreation/*' element= {<Content propRef={blurRef}/>} /> 
          <Route path= '/programming' element= {<Programming />} />
          <Route path= '/music' element= {<Music />} />
          <Route path= '/blogs' element= {<Blogs />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
