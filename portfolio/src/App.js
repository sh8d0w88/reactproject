// App.jsx
 
import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import Navigation from './Nav.js'
import './App.css';
 
function App() {
  return (
    <BrowserRouter >
      <div className="App">
  
      <div className="navigation">
          <div className="navigation-sub">
                                          
            <Navigation />

  
          </div>
      </div>

        // Set up the Router
        <Routes>
          <Route exact path="/" element={<Projects/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/about" element={<About/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}
 
export default App;