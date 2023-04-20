import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import About from "./pages/About"
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { TransitionAbout } from "./components/TransitionToAbout";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/transition" element={<TransitionAbout />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={`<h1>Page not found<h1/>`} />
        </Routes>
      </Router>
      {/* <Banner /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
