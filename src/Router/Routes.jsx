import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Pages/Home";
import NotFound from "../Components/NotFound/NotFound";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Portfolio from "../Components/Portfolio/Portfolio";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        errorElement : <NotFound/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'about',
                element : <About/>
            },
            
            {
                path : 'skills',
                element : <Skills/>
            },
            {
                path : 'portfolio',
                element : <Portfolio/>
            },
        ]
    }
])

export default router