import React from 'react'
import Container from '../components/Container'
import EducationCard from '../components/EducationCard'
import hpi from '../assets/hpi.png'
import ssc from '../assets/ssc.jpg'

const Education = () => {
    return (
        <section className='py-20 lg:py-26 bg-cyan-800 '>
            <Container>
                <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-design mb-8 font-extrabold text-center '>Education</h1>
                <p className='md:w-[33rem] md:mx-auto text-lg font-semibold text-center text-zinc-300 mx-5 '>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
                <div>
                    <EducationCard src={hpi} title='Habiganj Polytechnic Institute' dir='Diploma In Engineering - Computer Science and Technology' date='Jun 2020 - Present' grade='Not Published Yet.' dis='I have completed of the Diploma in Computer Science & Engineering at Habiganj Polytechnic Institue. I have taken courses in Data Structures, Algorithms, Object Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.'/>
                    <EducationCard src={ssc} title='PUTI JURI S. C. HIGH SCHOOL, PUTIJURI' dir='SSC - Science' date='March 2020' grade='4.50 out of 5.' dis='I completed my class 10 high school education at PUTI JURI S. C. HIGH SCHOOL (EIIN: 129326), where I studied Science group include MATHEMATICS.'/>
                </div>
            </Container>
        </section>
    )
}

export default Education
