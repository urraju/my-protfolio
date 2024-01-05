import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import Qualification from "../Qualification/Qualification";
import ServiceSection from "../Service/ServiceSection";
import Skills from "../Skills/Skills";

const Home = () => {
    return(
        <div>
             <Banner/>
             <About/>
             <Skills/>
             <ServiceSection/>
             <Portfolio/>
             <Qualification/>
             <Contact/>
             <Footer/>
        </div>
    )}
export default Home;