import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { TransitionAbout } from "../components/TransitionToAbout";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

function Home() {
  return (
      <>
        <Banner />
        <Projects />
        {/* <Footer /> */}
      </>
  );
}

export default Home;
