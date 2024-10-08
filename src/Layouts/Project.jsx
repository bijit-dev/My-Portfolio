import React from 'react'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import Flex from '../components/Flex'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import project from '../assets/project.png'

const Project = () => {
    return (
        <section className='py-28 bg-cyan-700'>
            <Container>
                <div className='text-center'>
                    <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-design mb-12 font-extrabold' >PROJECTS</h2>
                    <p className='text-white pb-2 text-lg'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                </div>
                <Flex className='justify-between pb-4'>
                    <FaArrowLeftLong size={45} className='text-white py-1 px-2 border-2 border-white rounded-lg hover:bg-green-600/55'/>
                    <FaArrowRightLong size={45} className='text-white py-1 px-2 border-2 border-white rounded-lg hover:bg-green-600'/>
                </Flex>
                <div className='grid grid-cols-2 gap-4'>
                    <ProjectCard src={project} title='project'/>
                    <ProjectCard src={project} title='project'/>
                    <ProjectCard src={project} title='project'/>
                    <ProjectCard src={project} title='project'/>
                    
                </div>
            </Container>
        </section>
    )
}

export default Project