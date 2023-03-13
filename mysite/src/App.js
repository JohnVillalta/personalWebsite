import './App.css';
import React, { useRef } from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
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
        <Navbar className="z-1"/>
        <Parallax pages={1.2} style={{ top: '9vh', left: '0', height: '91vh'}} class='animation'>
          <ParallaxLayer offset={0} speed={0.1} className="-z-1">
              <img class="animation_layer parallax" src={triPics[0]}/>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2} className="-z-1">
              <img class="animation_layer parallax" src={triPics[1]}/>
          </ParallaxLayer>
          <ParallaxLayer offset={0.2} speed={0.1} className="-z-1">
              <img class="animation_layer parallax" src={triPics[2]}/>
          </ParallaxLayer>
          <ParallaxLayer offset={0.43} speed={0.4} className="-z-1">
              <img class="animation_layer parallax" src={triPics[3]}/>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3} className="-z-1">
              <img class="animation_layer parallax" src={triPics[4]}/>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4} className="-z-1">
              <img class="animation_layer parallax" src={triPics[5]}/>
          </ParallaxLayer>
          <ParallaxLayer offset={.45} speed={0.45} className="-z-1">
              <img class="animation_layer parallax" src={triPics[6]}/>
          </ParallaxLayer>
          <ParallaxLayer offset={0.2} speed={0.2} className="-z-1">
              <img class="animation_layer parallax" src={triPics[7]}/>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.6} className="z-1">
            <Routes>
              <Route path= '/' element= {<Home />} />
              <Route path= '/photography/*' element= {<Content propRef={blurRef}/>} /> 
              <Route path= '/programming' element= {<Programming />} />
              <Route path= '/music' element= {<Music />} />
              <Route path= '/blogs' element= {<Blogs />} />
            </Routes>
          </ParallaxLayer>
        </Parallax>
      </Router>
    </div>
  );
};

const triPics = [require('./components/Home/tri1.png'), require('./components/Home/tri2.png'), require('./components/Home/tri3.png'), 
    require('./components/Home/tri4.png'), require('./components/Home/tri5.png'), require('./components/Home/tri6.png'),
    require('./components/Home/tri7.png'), require('./components/Home/tri8.png')]

export default App;
