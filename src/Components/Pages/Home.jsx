import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

const Home = () => {
    return(
        <div>
             <Banner/>
             <About/>
             <Skills/>
             <Portfolio/>
             <Contact/>
        </div>
    )}
export default Home;