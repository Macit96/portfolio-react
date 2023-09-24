import {useState} from 'react'

import profile from '../assets/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowRight, } from "@fortawesome/free-solid-svg-icons";
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Patsakorn Lerssuk</h1>
                    <p class="text-xl font-bold text-gray-300">"I am currently studying at the undergraduate level in the Faculty of Science and Technology, majoring in Information Technology."</p>
                    <p className="text-md font-light text-gray-400 ">"I have graduated with a Bachelor's degree in the field of Information Science and Technology from Bangkok Thonburi University. Currently, I am looking for job opportunities related to front-end, back-end, and full stack development. I am passionate about web development, maintaining various systems, and enjoy dedicating my free time to learning new skills to continuously improve myself. On my website, you can explore my various projects and certifications that showcase my skillset. I am open to collaborating with others, listening actively, and offering solutions when needed. Thank you for reading until the end, and I hope to have the opportunity to work with you."</p>
                </div>
                <a href='#' className='mt-2 block'>Read My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a>
                
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/Macit96' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                 
                </ul>
            </div>
            {/* <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />   */}  {/* ปิดไปก่อน */}
        </div>
        </>
    )
}
