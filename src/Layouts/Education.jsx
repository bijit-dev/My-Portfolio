import React from 'react'
import Container from '../components/Container'
import EducationCard from '../components/EducationCard'

const Education = () => {
    return (
        <section className='py-28 bg-cyan-800 '>
            <Container>
                <h1 className='lg:text-5xl font-semibold text-center text-white pb-5'>Education</h1>
                <p className='text-lg font-semibold text-center text-zinc-300 pb-5'>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
                <div>
                    <EducationCard/>
                </div>
            </Container>
        </section>
    )
}

export default Education