import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import NavBar from './components/navBar/navBar.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './pages/components/home/home.jsx'
import About from './pages/components/about/about.jsx'
import Contact from './pages/components/contact/contact.jsx'
import Portfolio from './pages/components/portfolio/portfolio.jsx'

function App() {

  const [scrollHeight, setScrolHeight] = useState(0) 

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolHeight(position); 
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={`<h1>Page not found<h1/>`} />
        </Routes>
      </Router>
      <NavBar isScrolling={scrollHeight}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
