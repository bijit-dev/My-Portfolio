import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Flex from '../components/Flex'
import List from '../components/List'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'

const Navber = () => {
  return (
    <nav className='bg-back py-4'>
      <Container>
        <Flex className='items-center justify-between'>
          <div className='w-3/12 flex items-center gap-4'>
            <Image className='w-16 rounded-full' src={Logo} />
            <div className='text-htext text-xl md:text-[24px] lg:text-text28 font-[Roboto Slab] font-semibold'>BIJIT DEB</div>
          </div>

          <div className='w-8/12 pr-6'>
            <List/>
          </div>
          <div className='1/12'>
            <a href="https://rxresu.me/bijitdeb087/bijit-deb" target="_blank"><Button text="Resume"/></a>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navber