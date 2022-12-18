import React from "react";
import mealMaker from "../../assets/projects/meal-maker.jpg"
import tikTak from "../../assets/projects/tik-tak.jpg"
import techBlog from "../../assets/projects/tech-blog.jpg"
import Jate from "../../assets/projects/jate.jpg"
import { AiFillGithub } from 'react-icons/ai'

const Portfolio = () => {
    return(
        <section className="m-0">
            <h1 className="text-center mb-6 mt-16 text-violet-600 font-serif text-7xl" id="portfolio">Portfolio</h1>
            <div className="flex">
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300">
                    <img src={mealMaker} className='m-2 p-8 rounded-3xl shadow-lg transition ease-linear delay-100 group-hover:opacity-10 duration-300' style={{ width: '100%', height: '100%'}} alt='cover'/>
                    <div className="absolute top-16 left-11 invisible">
                        <a className="no-underline text-violet-600 text-5xl font-serif font-bold hover:text-blue-700 hover:contrast-200 group-hover/edit:visible" href="https://pmacdonald07.github.io/Meal-Maker/" target="_blank" rel="noreferrer">
                            Meal Maker
                        </a>
                    </div>
                    <div className="absolute top-8 left-1/2 text-8xl invisible">
                        <a className="text-violet-600 hover:text-blue-700 hover:contrast-200 group-hover/edit:visible" href="https://github.com/pmacdonald07/Meal-Maker" target="_blank" rel="noreferrer">
                        <AiFillGithub></AiFillGithub>
                        </a>
                    </div>
                </div>
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300">
                    <img src={tikTak} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10' style={{ width: '100%', height: '100%'}} alt='cover'/>
                    <div className="absolute top-16 left-11 invisible">
                        <a className="no-underline text-violet-600 text-5xl font-serif font-bold hover:text-blue-700 hover:contrast-200 group-hover/edit:visible" href="https://p2tiktak.herokuapp.com/" target="_blank" rel="noreferrer">
                            TikTak
                        </a>
                    </div>
                    <div className="absolute top-8 left-1/2 text-8xl invisible">
                        <a className="text-violet-600 hover:text-blue-700 hover:contrast-200 group-hover/edit:visible" href="https://github.com/DavidDowell/project-2" target="_blank" rel="noreferrer">
                        <AiFillGithub></AiFillGithub>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300">
                    <img src={techBlog} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10' style={{ width: '100%', height: '100%'}} alt='cover'/>
                    <div className="absolute top-16 left-11 invisible">
                        <a className="no-underline text-violet-600 text-5xl font-serif font-bold hover:text-blue-700 hover:contrast-200 group-hover/edit:visible" href="https://enigmatic-escarpment-05230.herokuapp.com/" target="_blank" rel="noreferrer">
                            Tech Blog
                        </a>
                    </div>
                    <div className="absolute top-8 left-1/2 text-8xl invisible">
                        <a className="text-violet-600 hover:text-blue-700 hover:contrast-200 group-hover/edit:visible" href="https://github.com/DavidDowell/MVC-tech-blog" target="_blank" rel="noreferrer">
                        <AiFillGithub></AiFillGithub>
                        </a>
                    </div>
                </div>
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300">
                    <img src={Jate} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10' style={{ width: '100%', height: '100%'}} alt='cover'/>
                    <div className="absolute top-16 left-11 invisible">
                        <a className="no-underline text-violet-600 text-5xl font-serif font-bold hover:text-blue-700 hover:contrast-200 group-hover/edit:visible" href="https://mysterious-garden-48318.herokuapp.com/" target="_blank" rel="noreferrer">
                            JATE
                        </a>
                    </div>
                    <div className="absolute top-8 left-1/2 text-8xl invisible">
                        <a className="text-violet-600 hover:text-blue-700 hover:contrast-200 group-hover/edit:visible" href="https://github.com/DavidDowell/text-editor" target="_blank" rel="noreferrer">
                        <AiFillGithub></AiFillGithub>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;