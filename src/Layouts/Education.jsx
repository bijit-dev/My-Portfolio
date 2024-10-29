import React from 'react'
import Container from '../components/Container'
import EducationCard from '../components/EducationCard'

const Education = () => {
    return (
        <section className='py-20 lg:py-28 bg-cyan-800 '>
            <Container>
                <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-design mb-8 font-extrabold text-center '>Education</h1>
                <p className='text-lg font-semibold text-center text-zinc-300 pb-5 mx-5 '>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
                <div>
                    <EducationCard/>
                </div>
            </Container>
        </section>
    )
}

export default Education
