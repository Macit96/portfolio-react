import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/mtcna.jpg"
import adinusa from "../assets/certs/adinusa.png"
import dicodingAws from "../assets/certs/dicoding-aws.png"
import dicodingJs from "../assets/certs/dicoding-js.png"
import dicodingNetwork from "../assets/certs/dicoding-network.png"
import progateHtml from "../assets/certs/progate-htmlcss.png"
import progateJs from "../assets/certs/progate-js.png"
import fccResponsive from "../assets/certs/fcc-responsive.png"
import HTML_CSS_JAVA from "../assets/certs/HTML_CSS_JAVA.png"
import JAVA from "../assets/certs/JAVA.png"
import React_basic1 from "../assets/certs/React_basic1.jpg"
import React_basic2 from "../assets/certs/React_basic2.jpg"
import React_basic3 from "../assets/certs/React_basic3.jpg"
import React_basic4 from "../assets/certs/React_basic4.jpg"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                
                <CertCard name= "html & css & Javascript" img={HTML_CSS_JAVA} issued="future skill" date="2023"/>
                <CertCard name= "Javascript" img= {JAVA} issued="future skill" date="2023"/>
                <CertCard name= "React-basic1" img= {React_basic1} issued="future skill" date="2023"/>
                <CertCard name= "React-basic2" img= {React_basic2} issued="future skill" date="2023"/>
                <CertCard name= "React-basic3" img= {React_basic3} issued="future skill" date="2023"/>
                <CertCard name= "React-basic4" img= {React_basic4} issued="future skill" date="2023"/>

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
