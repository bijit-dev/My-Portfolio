import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import BannerImg from '../assets/banner.png'
import { FaRegPaperPlane } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import Image from '../components/Image'

const Banner = () => {
    return (
        <section className='bg-back py-40'>
            <Container>
                <Flex className='gap-2 items-center'>
                    <div className='w-7/12'>
                        <h1 className='text-[27px] sm:text-[32px] md:text-[36px] lg:text-[40px]  xl:text-5xl pt-12 text-htext font-pop font-semibold md:pt-4 lg:pt-2 xl:pt-1 md:bg-6 lg:pb-1 pb-1 '>HEY, I'M BIJIT DEB.</h1>

                        <h2 className='text-[27px] sm:text-[32px] md:text-[36px] lg:text-[40px]  xl:text-5xl pt-3 text-ptext font-pop font-semibold    md:bg-6 lg:pb-8 pb-4'>I build things for the web.</h2>

                        <p className='text-ptext text-justify mb-14 text-lg font-medium font-pop'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                        <Flex className="gap-6">
                            <div className='group flex items-center text-base font-pop font-meduim sm:text-lg md:text-2xl font-bold relative'><Button className="py-4 pl-8 pr-15" text="HIRE ME" /><RiExternalLinkLine className='text-secondary absolute top-5 right-6 '/></div>
                            
                            <div className='group flex items-center text-base bg-transparent hover:bg-blue-800 text-red-400 hover:text-white font-pop font-meduim sm:text-lg md:text-2lg font-bold pl-6 pr-12 border-lime-500 hover:border-orange-400 rounded-[40px] border-2 relative'><a href="#">Contact Me</a><FaRegPaperPlane className='text-red-400 group-hover:text-white absolute top-5 right-5 ' /></div>
                            
                        </Flex>
                    </div>
                    
                    <Image className='w-5/12' src={BannerImg}/>
                </Flex>
            </Container>
        </section>
    
    )
}

export default Banner
