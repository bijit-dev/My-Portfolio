import React, { useState } from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Flex from '../components/Flex'
import List from '../components/List'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'
import { RxCross2 } from 'react-icons/rx'
import { HiBars4 } from 'react-icons/hi2'
import { div } from 'framer-motion/client'

const Navber = () => {
  let [show,setshow]=useState(false)

  let handleClick=()=>{
    setshow(!show)
  }
  let navlist = <div className='bg-indigo-800 w-full absolute top-20 left-0 z-10'>
    <ul className='text-center text-lg text-white font-medium font-pop p-2'>
      <li className='p-2'>Home</li>
        <li className='p-2'>About</li>
        <li className='p-2'>Skills</li>
        <li className='p-2'>Project</li>
        <li className='p-2'>Education</li>
        <li className='p-2'>Contact</li>
    </ul>
    <div className='text-center mb-4'>
            <a href="https://rxresu.me/bijitdeb087/bijit-deb" target="_blank"><Button text="Resume"/></a>
          </div>
  </div>

  return (
    <nav className='bg-back py-4'>
      {show&&navlist}
      <Container>
        <Flex className='items-center justify-between'>
          <div className='lg:w-3/12 flex items-center gap-4'>
            <Image className='w-16 rounded-full' src={Logo} />
            <div className='text-htext text-xl md:text-[24px] lg:text-text28 font-[Roboto Slab] font-semibold'>BIJIT DEB</div>
          </div>

          <div className='hidden lg:block lg:w-8/12 pr-6'>
            <List/>
          </div>
          <div className='hidden lg:block lg:1/12'>
            <a href="https://rxresu.me/bijitdeb087/bijit-deb" target="_blank"><Button text="Resume"/></a>
          </div>
        </Flex>

        <div onClick={handleClick} className='lg:hidden text-white text-3xl absolute top-[34px] right-[16px] z-20'>
          {
            show?<RxCross2  className='text-xl'/>:<HiBars4  className='text-xl'/>
          }
        </div>
      </Container>
    </nav>
  )
}

export default Navber