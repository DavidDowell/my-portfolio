import React from "react";
import mealMaker from "../../assets/projects/meal-maker.jpg"
import tikTak from "../../assets/projects/tik-tak.jpg"
import techBlog from "../../assets/projects/tech-blog.jpg"
import Jate from "../../assets/projects/jate.jpg"
import ourplace from "../../assets/projects/ourplace.jpg"
import { AiFillGithub } from 'react-icons/ai'

const Portfolio = () => {
    return(
        <section className="portfolio-section">
            <div className="flex justify-center text-center md:text-5xl text-3xl mb-2">
                <div className="text-black m-2 hover:scale-150">P</div>
                <div className="text-black m-2 hover:scale-150">o</div>
                <div className="text-black m-2 hover:scale-150">r</div>
                <div className="text-black m-2 hover:scale-150">t</div>
                <div className="text-black m-2 hover:scale-150">f</div>
                <div className="text-black m-2 hover:scale-150">o</div>
                <div className="text-black m-2 hover:scale-150">l</div>
                <div className="text-black m-2 hover:scale-150">i</div>
                <div className="text-black m-2 hover:scale-150">o</div>
            </div>
            <div className="grid grid-cols-6 gap-4">
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300 md:col-start-1 md:col-end-4 col-span-6">
                    <img src={mealMaker} className='m-2 p-8 rounded-3xl shadow-lg transition ease-linear delay-100 group-hover:opacity-10 duration-300 bg-slate-500' style={{ width: '100%', height: '100%'}} alt='cover'/>
                    <div className="absolute left-0 top-24 right-0 text-center invisible">
                        <a className="no-underline text-black xl:text-5xl text-3xl font-serif font-bold hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://pmacdonald07.github.io/Meal-Maker/" target="_blank" rel="noreferrer">
                            Meal Maker
                        </a>
                    </div>
                    <div className="absolute top-4 left-2 xl:text-8xl text-5xl invisible">
                        <a className="text-black hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://github.com/pmacdonald07/Meal-Maker" target="_blank" rel="noreferrer">
                        <AiFillGithub className="bg-transparent"></AiFillGithub>
                        </a>
                    </div>
                </div>
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300 md:col-end-7 md:col-span-3 col-span-6">
                    <img src={tikTak} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10 bg-slate-500' style={{ width: '100%', height: '100%'}} alt='cover'/>
                    <div className="absolute right-0 left-0 top-24 text-center invisible">
                        <a className="no-underline text-black xl:text-5xl text-3xl font-serif font-bold hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://p2tiktak.herokuapp.com/" target="_blank" rel="noreferrer">
                            TikTak
                        </a>
                    </div>
                    <div className="absolute top-4 left-2 xl:text-8xl text-5xl invisible">
                        <a className="text-black hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://github.com/DavidDowell/project-2" target="_blank" rel="noreferrer">
                        <AiFillGithub className="bg-transparent"></AiFillGithub>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-4">
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300 md:col-start-1 md:col-end-4 col-span-6">
                    <img src={techBlog} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10 bg-slate-500' style={{ width: '100%', height: '100%'}} alt='cover'/>
                    <div className="absolute left-0 top-24 right-0 text-center invisible">
                        <a className="no-underline text-black xl:text-5xl text-3xl font-serif font-bold hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://enigmatic-escarpment-05230.herokuapp.com/" target="_blank" rel="noreferrer">
                            Tech Blog
                        </a>
                    </div>
                    <div className="absolute top-4 left-2 xl:text-8xl text-5xl invisible">
                        <a className="text-black hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://github.com/DavidDowell/MVC-tech-blog" target="_blank" rel="noreferrer">
                        <AiFillGithub className="bg-transparent"></AiFillGithub>
                        </a>
                    </div>
                </div>
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300 md:col-end-7 md:col-span-3 col-span-6">
                    <img src={Jate} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10 bg-slate-500' style={{ width: '100%', height: '100%'}} alt='cover'/>
                    <div className="absolute left-0 top-24 right-0 text-center invisible">
                        <a className="no-underline text-black xl:text-5xl text-3xl font-serif font-bold hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://mysterious-garden-48318.herokuapp.com/" target="_blank" rel="noreferrer">
                            JATE
                        </a>
                    </div>
                    <div className="absolute top-4 left-2 xl:text-8xl text-5xl invisible">
                        <a className="text-black hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://github.com/DavidDowell/text-editor" target="_blank" rel="noreferrer">
                        <AiFillGithub className="bg-transparent"></AiFillGithub>
                        </a>
                    </div>
                </div>
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300 md:col-end-7 md:col-span-6 col-span-6">
                    <img src={ourplace} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10 bg-slate-500' style={{ width: '100%', height: '80%'}} alt='cover'/>
                    <div className="absolute left-0 top-24 right-0 text-center invisible">
                        <a className="no-underline text-black xl:text-5xl text-3xl font-serif font-bold hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://p3-our-place.herokuapp.com/" target="_blank" rel="noreferrer">
                            OurPlace
                        </a>
                    </div>
                    <div className="absolute top-4 left-2 xl:text-8xl text-5xl invisible">
                        <a className="text-black hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://github.com/awchen85/project-3" target="_blank" rel="noreferrer">
                        <AiFillGithub className="bg-transparent"></AiFillGithub>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;