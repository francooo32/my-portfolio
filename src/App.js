import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { NavBar } from "./components/NavBar";
import { TransitionAbout } from "./components/TransitionToAbout";
import { ProgramSection } from "./components/diapositivas/ProgramSection";
import { BrandingSection } from "./components/diapositivas/BrandingSection";
import { AnimatorSection } from "./components/diapositivas/AnimatorSection";
import { Footer } from "./components/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import wassapIcon from './assets/img/wassap.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='wassap'>
          <a href='https://wa.me/541162767256' target='_blank'>
          <img src={wassapIcon} alt="" />
            </a>
        </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/transition" element={<TransitionAbout />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<ProgramSection />} />
          <Route path="/branding" element={<BrandingSection />} />
          <Route path="/animator" element={<AnimatorSection />} />
          <Route path="*" element={`<h1>Page not found<h1/>`} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
