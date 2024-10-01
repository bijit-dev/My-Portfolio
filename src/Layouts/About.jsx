import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Section from '../components/Section'

const About = () => {
  return (
    <Section className='bg-third py-14 md:py-28'>
      <Container>
        <div className='pb-14'>
        <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-black font-normal font-robo text-center'>ABOUT ME</h2>
        <h6 className='lg:w-w806 sm:mx-4 lg:mx-auto text-center mx-auto text-sm  md:text-base  lg:text-lg text-black font-robo font-normal  pt-4 sm:leading-7'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h6>
        </div>
        <Flex>
          <div>
            <Flex>
              <div>
                <h3>Education</h3>
              </div>
              <div></div>
            </Flex>
          </div>
          <div></div>
        </Flex>
      </Container>
    </Section>
  )
}

export default About