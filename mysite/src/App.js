import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom';
import Home from './pages';
import Content from './pages/contentcreation';
import Programming from './pages/programming';
import Music from './pages/music';
import Blogs from './pages/blogs';

function App() {
  const blurRef = useRef(null);

  return (
    <div ref={blurRef}>
      <Router>
        <Navbar />
        <Routes>
          <Route path= '/' element= {<Home />} />
          <Route path= '/photography/*' element= {<Content propRef={blurRef}/>} /> 
          <Route path= '/programming' element= {<Programming />} />
          <Route path= '/music' element= {<Music />} />
          <Route path= '/blogs' element= {<Blogs />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
