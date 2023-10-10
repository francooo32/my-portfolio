import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import { WorkProcess } from "../components/WorkProcess";
import { BotonDescubre } from "../components/diapositivas/BotonDescubre";

function Home() {
  return (
      <>
        <Banner />
        <WorkProcess />
        <Projects />
        <BotonDescubre />
        {/* <Footer /> */}
      </>
  );
}

export default Home;
