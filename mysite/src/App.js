import React from 'react';
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
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path= '/' exact element= {<Home />} />
        <Route path= '/home' element= {<Home2 />} />
        <Route path= '/contentcreation/*' element= {<Content />} />
        <Route path= '/programming' element= {<Programming />} />
        <Route path= '/music' element= {<Music />} />
        <Route path= '/blogs' element= {<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
