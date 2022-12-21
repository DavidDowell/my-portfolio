import { AiFillFileAdd } from 'react-icons/ai'
import { HiChevronRight } from "react-icons/hi";


const Resume = () => {
    return(
        <div className="m-20">
            <div className='flex justify-center'>
                <h1 className="text-5xl text-black">Resume</h1>
                <div className='text-3xl'>
                    <a className="hover:text-teal-300 text-white animate-pulse"href={require('../../assets/pdf/DD-resume.pdf')} download>
                        <AiFillFileAdd></AiFillFileAdd>
                    </a>
                </div>
            </div>
            <div className='flex md:justify-around justify-between flex-wrap'>
            <div className='mb-5'>
                <h2 className='md:text-5xl text-4xl'>Front-end Proficiences</h2>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>HTML</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>CSS</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>JavaScript</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>JQuery</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>Responsive Design</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>React</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>Bootstrap/Tailwind/Bulma</h3>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='md:text-5xl text-4xl'>Back-end Proficiences</h2>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>APIs</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>Node</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>Express</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>MySQL,Sequelize</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>MongoDB, Mongoose</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>REST</h3>
                    </div>
                </div>
                <div className='flex hover:text-teal-300 hover-underline-animation'>
                    <div className='text-white text-2xl hover:-translate-x-1'>
                        <HiChevronRight></HiChevronRight>
                    </div>
                    <div>
                        <h3 className='text-4xl'>GraphQL</h3>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Resume;