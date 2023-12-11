import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import Qualification from "../Qualification/Qualification";
import Skills from "../Skills/Skills";

const Home = () => {
    return(
        <div>
             <Banner/>
             <About/>
             <Skills/>
             <Portfolio/>
             <Qualification/>
             <Contact/>
             <Footer/>
        </div>
    )}
export default Home;