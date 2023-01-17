import React from "react";
import mealMaker from "../../assets/projects/meal-maker.jpg"
import tikTak from "../../assets/projects/tik-tak.jpg"
import techBlog from "../../assets/projects/tech-blog.jpg"
import Jate from "../../assets/projects/jate.jpg"
import ourplace from "../../assets/projects/ourplace.jpg"
import { AiFillGithub } from 'react-icons/ai'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Portfolio = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

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
            <div className="grid grid-cols-1 grid-rows-1 cardsList mx-auto gap-10 mt-10">
            <Carousel responsive={responsive} swipeable={true}>
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300">
                    <img src={mealMaker} className='m-2 p-8 rounded-3xl shadow-lg transition ease-linear delay-100 group-hover:opacity-10 duration-300 bg-[#212359]' style={{ width: '100%', height: '320px'}} alt='cover'/>
                    <div className="absolute left-0 top-24 right-0 text-center invisible">
                        <a className="no-underline text-black xl:text-5xl text-3xl font-serif font-bold hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://pmacdonald07.github.io/Meal-Maker/" target="_blank" rel="noreferrer">
                            Meal Maker
                        </a>
                    </div>
                </div>
                <div className="relative group group/edit transition ease-in-out delay-200 bg-[#212359] rounded-3xl m-2 text-lg flex flex-col justify-center text-center group-hover:opacity-10 duration-300 hover:translate-y-1 hover:scale-90" style={{ width: '100%', height: '320px'}}>
                        <p className="text-white m-2 p-2 group-hover:opacity-10 duration-300">This project was the first I completed with a team, during my time at UNC bootcamp. We created a Meal Maker app that used the spoonacular api to grab user input and use that as endpoints for meals found in that database. After grabbing that data, we created 5 cards that populated using javascript with meals that fit the users input.</p>
                        <div className="absolute top-1 right-48 xl:text-7xl text-5xl invisible">
                        <a className="text-black hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://github.com/pmacdonald07/Meal-Maker" target="_blank" rel="noreferrer">
                        <AiFillGithub className="bg-transparent"></AiFillGithub>
                        </a>
                        </div>
                </div>
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300">
                    <img src={tikTak} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10 bg-[#212359]' style={{ width: '100%', height: '320px'}} alt='cover'/>
                    <div className="absolute right-0 left-0 top-24 text-center invisible">
                        <a className="no-underline text-black xl:text-5xl text-3xl font-serif font-bold hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://p2tiktak.herokuapp.com/" target="_blank" rel="noreferrer">
                            TikTak
                        </a>
                    </div>
                </div>
                <div className="relative group group/edit transition ease-in-out delay-200 bg-[#212359] rounded-3xl m-2 text-lg flex flex-col justify-center text-center group-hover:opacity-10 duration-300 hover:translate-y-1 hover:scale-90" style={{ width: '100%', height: '320px'}}>
                        <p className="text-white m-2 p-2 group-hover:opacity-10 duration-300">My second project completed within a group. The idea behind this project was to recreate YikYak social media app. This app was created using MVC structure and handlebars to access the data inside of the html. Each user has a dasbhoard to store their posts, homepage where their posts can be viewed by others, and they have the ability to vote and comment on other posts. </p>
                        <div className="absolute top-1 right-48 xl:text-7xl text-5xl invisible">
                        <a className="text-black hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://github.com/DavidDowell/project-2" target="_blank" rel="noreferrer">
                        <AiFillGithub className="bg-transparent"></AiFillGithub>
                        </a>
                        </div>
                </div>
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300">
                    <img src={ourplace} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10 bg-[#212359]' style={{ width: '100%', height: '320px'}} alt='cover'/>
                    <div className="absolute left-0 top-24 right-0 text-center invisible">
                        <a className="no-underline text-black xl:text-5xl text-3xl font-serif font-bold hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://p3-our-place.herokuapp.com/" target="_blank" rel="noreferrer">
                            OurPlace
                        </a>
                    </div>
                </div>
                <div className="relative group group/edit transition ease-in-out delay-200 bg-[#212359] rounded-3xl m-2 text-lg flex flex-col justify-center text-center group-hover:opacity-10 duration-300 hover:translate-y-1 hover:scale-90" style={{ width: '100%', height: '320px'}}>
                        <p className="text-white m-2 p-2 group-hover:opacity-10 duration-300">Third and final group project in my bootcamp was a roommate finder called OurPlace. Created using React.js, MongoDB, and GraphQl this was the most complex project I had to complete with others. This app contained more complex aspects of React, and a filter on the homepage to give the user parameters to find the right match.</p>
                        <div className="absolute top-1 right-48 xl:text-7xl text-5xl invisible">
                        <a className="text-black hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://github.com/awchen85/project-3" target="_blank" rel="noreferrer">
                        <AiFillGithub className="bg-transparent"></AiFillGithub>
                        </a>
                        </div>
                </div>
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300">
                    <img src={techBlog} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10 bg-[#212359]' style={{ width: '100%', height: '320px'}} alt='cover'/>
                    <div className="absolute left-0 top-24 right-0 text-center invisible">
                        <a className="no-underline text-black xl:text-5xl text-3xl font-serif font-bold hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://enigmatic-escarpment-05230.herokuapp.com/" target="_blank" rel="noreferrer">
                            Tech Blog
                        </a>
                    </div>
                    <div className="absolute top-4 left-2 xl:text-7xl text-4xl invisible">
                        <a className="text-black hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://github.com/DavidDowell/MVC-tech-blog" target="_blank" rel="noreferrer">
                        <AiFillGithub className="bg-transparent"></AiFillGithub>
                        </a>
                    </div>
                </div>
                <div className="relative m-2 group group/edit transition ease-in-out delay-200 hover:translate-y-1 hover:scale-90 duration-300">
                    <img src={Jate} className='m-2 p-8 rounded-3xl shadow-lg group-hover:opacity-10 bg-[#212359]' style={{ width: '100%', height: '320px'}} alt='cover'/>
                    <div className="absolute left-0 top-24 right-0 text-center invisible">
                        <a className="no-underline text-black xl:text-5xl text-3xl font-serif font-bold hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://mysterious-garden-48318.herokuapp.com/" target="_blank" rel="noreferrer">
                            JATE
                        </a>
                    </div>
                    <div className="absolute top-4 left-2 xl:text-7xl text-4xl invisible">
                        <a className="text-black hover:text-slate-200 hover:contrast-200 group-hover/edit:visible" href="https://github.com/DavidDowell/text-editor" target="_blank" rel="noreferrer">
                        <AiFillGithub className="bg-transparent"></AiFillGithub>
                        </a>
                    </div>
                </div>
            </Carousel>
            </div>
        </section>
    )
}

export default Portfolio;