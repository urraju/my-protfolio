import aboutPic from '../../assets/myPic/me2.jpg'
import { MdWorkspacePremium } from "react-icons/md";

import TitleContent from '../TitleContent/TitleContent';
const About = () => {
    return(
        <div>
            <TitleContent heading={'About Me'} subHeading={'My Introduction'}/>
             <div>
                <div>
                    <img className='w-80' src={aboutPic} alt="" />
                </div>
                {/* about title  */}
                <div>
                    <div>
                        <div>
                         <MdWorkspacePremium />
                         
                        </div>
                    </div>

                </div>
             </div>
        </div>
    )}
export default About;