import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg"
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const About = () => {
    return(
        <section className="my-4 flex flex-wrap justify-center text-center p-5 font-serif">
            <h1 className="flex justify-center my-2 text-7xl text-purple-600" style={{width: '100%'}} id='about'>David M. Dowell</h1>
            <h3 className='flex justify-center my-2 text-4xl' style={{width: '100%'}}>Web Developer</h3>
            <p className="flex flex-wrap justify-center text-xl my-3 leading-9" style={{width: '50%'}}>Hello, my name is David Dowell. I am a junior web developer looking to expand my knowledge and skills. I am proficient in JavaScript, GitHub, and the MERN stack. Front end work, like this portfolio created with REACT, excites me just as much as the back end. I am eager to learn and develop alongside other driven programmers!</p>
            <div className="text-6xl flex justify-center"style={{width: '100%'}}>
                <a className="text-purple-600" href="https://www.linkedin.com/in/david-dowell95/" target="_blank" rel="noreferrer">
                <AiFillLinkedin></AiFillLinkedin>
                </a>
                <a className="text-purple-600" href="https://github.com/DavidDowell" target="_blank" rel="noreferrer">
                <AiFillGithub></AiFillGithub>
                </a>
            </div>
            <div className="flex justify-center my-2">
                    <img src={coverImage} className='my-2 rounded-full hover:' style={{ width: '50%', height: '90%'}} alt='cover'/>
            </div>
        </section>
    )
}

export default About;