import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg"
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const About = () => {
    return(
        <div>
        <section className="my-4 flex flex-wrap justify-center text-center p-5">
            <div className="title flex justify-center my-2 md:text-7xl text-5xl text-black" id='about'>
                <div className="animate-fade-in-down">D</div>
                <div className="animate-fade-in-up">a</div>
                <div className="animate-fade-in-down">v</div>
                <div className="animate-fade-in-up">i</div>
                <div className="animate-fade-in-down" >d</div>
                <div className="ml-4 mr-4 animate-fade-in-up">M.</div>
                <div className="animate-fade-in-up">D</div>
                <div className="animate-fade-in-down">o</div>
                <div className="animate-fade-in-up" >w</div>
                <div className="animate-fade-in-down">e</div>
                <div className="animate-fade-in-up">l</div>
                <div className="animate-fade-in-down">l</div>
            </div>
            <h3 className='flex justify-center my-2 md:text-4xl text-3xl backdrop-brightness-150' style={{width: '100%'}}>Web Developer</h3>
            <p className="flex flex-wrap justify-center text-2xl my-3 leading-9" style={{width: '50%'}}>Hello, my name is <a className="ml-2 text-white hover:text-[#212359]" href="https://www.facebook.com/david.dowell.100" rel="noreferrer" target="_blank">David Dowell</a> I am a junior web developer looking to expand my knowledge and skills. I am proficient in JavaScript, GitHub, and the MERN stack. Front end work, like this portfolio created with REACT, excites me just as much as the back end. I am eager to learn and develop alongside other driven programmers!</p>
            <div className="text-7xl flex justify-center"style={{width: '100%'}}>
                <a className="text-white mr-1 md:hover:animate-[wiggle_1s_ease-in-out_infinite] hover:text-[#212359]" href="https://www.linkedin.com/in/david-dowell95/" target="_blank" rel="noreferrer">
                <AiFillLinkedin></AiFillLinkedin>
                </a>
                <a className="text-white ml-1 md:hover:animate-[wiggle_1s_ease-in-out_infinite] hover:text-[#212359]" href="https://github.com/DavidDowell" target="_blank" rel="noreferrer">
                <AiFillGithub></AiFillGithub>
                </a>
            </div>
            <div className="flex justify-center my-5 relative group/img group/img2">
                    <img src={coverImage} className='img2 my-2 rounded-lg' style={{ width: '50%', height: '80%'}} alt='cover'/>
            </div>
        </section>
        </div>
    )
}

export default About;