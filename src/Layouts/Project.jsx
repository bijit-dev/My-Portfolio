import React from 'react'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import Flex from '../components/Flex'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import project from '../assets/project.png'

const Project = () => {
    return (
        <section className='py-14 lg:py-28 bg-cyan-700'>
            <Container>
                <div className='text-center'>
                    <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-design mb-8 md:mb-10 font-extrabold' >MY PROJECTS</h2>
                    <p className='md:w-[41rem] text-white mx-auto pb-4 md:pb-2 text-lg capitalize'>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
                </div>
                <Flex className='justify-between pb-4 mx-4 lg:mx-0 hidden md:block'>
                    <FaArrowLeftLong size={45} className='text-white py-1 px-2 border-2 border-white rounded-lg hover:bg-green-600/55'/>
                    <FaArrowRightLong size={45} className='text-white py-1 px-2 border-2 border-white rounded-lg hover:bg-green-600'/>
                </Flex>
                <div className='grid md:grid-cols-2 gap-4 mx-4 lg:mx-0'>
                    <ProjectCard src={project} title='project'/>
                    <ProjectCard src={project} title='project'/>
                </div>
            </Container>
        </section>
    )
}

export default Project