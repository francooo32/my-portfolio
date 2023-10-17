import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import About from "./pages/About"
import wassap from '../src/assets/img/icons8-whatsapp.svg';
import { NavBar } from "./components/NavBar";
import { TransitionAbout } from "./components/TransitionToAbout";
import { ProgramSection } from "./components/diapositivas/ProgramSection";
import { BrandingSection } from "./components/diapositivas/BrandingSection";
import { AnimatorSection } from "./components/diapositivas/AnimatorSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className='wassap'>
        <a href="https://wa.me/541162767256" target="_blank">
          <img src={wassap} alt="" />
        </a>
      </div>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/transition" element={<TransitionAbout />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<ProgramSection />} />
          <Route path="/branding" element={<BrandingSection />} />
          <Route path="/animator" element={<AnimatorSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={`<h1>Page not found<h1/>`} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
