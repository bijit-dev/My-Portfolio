import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Section from '../components/Section'
import Button from '../components/Button'
import Image from '../components/Image'
import logo from '../assets/Logo.png'

const About = () => {
  return (
    <Section className='bg-third py-14 md:py-28'>
      <Container>
        <div className='pb-14'>
        <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-black font-normal font-robo text-center'>ABOUT ME</h2>
        <h6 className='lg:w-w806 sm:mx-4 lg:mx-auto text-center mx-auto text-sm  md:text-base  lg:text-lg text-black font-robo font-normal  pt-4 sm:leading-7'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h6>
        </div>
        <Flex className='gap-5'>
          <Image src={logo} className='w-full px-12 rounded-[50%]' />
          <div>
          <Flex className='gap-5'>
            <div className='bg-white rounded-lg drop-shadow-l w-w270 pb-4 h-40'>
              <h3 className='text-black text-sm lg:text-xl font-robo font-bold text-center pt-4 md:pt-6'>Experience
              </h3>
              <p className='text-[#000000ba] text-sm lg:text-base font-robo font-normal text-center pt-1 md:pt-2'>1 + years</p>
              <p className='text-[#000000ba] text-sm lg:text-base font-robo font-normal text-center pt-1 md:pt-2'>Frontend Development</p>
            </div>
            <div className='bg-white rounded-lg drop-shadow-l w-w270 pb-4 h-40'>
                <h3 className='text-black text-sm lg:text-xl font-robo font-bold text-center pt-4 md:pt-6'>Education</h3>
                <p className='text-[#000000ba] text-sm lg:text-base font-robo font-normal text-center pt-1 md:pt-2'>Diploma</p>
            </div>
          </Flex>
            <p className=' w-full md:text-left text-center px-4 md:px-0 text-black text-sm md:text-base  lg:text-lg font-normal font-robo pt-10 pb-8 sm:leading-7 sm:px-4 md:mx-auto'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
            <Button className='bg-green-500  text-white' text='Download CV'/>
          </div>
        </Flex>
      </Container>
    </Section>
  )
}

export default About