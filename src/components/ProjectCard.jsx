import React from 'react'
import Image from './Image'
import Flex from './Flex'
import Button from './Button'

const ProjectCard = ({src,title}) => {
    return (
        <div className='w-[360px] border-2 border-slate-100 rounded-xl p-6 hover:border-design shadow-lg lg:hover:shadow-design'>
            <Image src={src} className= 'w-full'/>
            <h2 className='text-lg font-bold text-white mt-2 mb-2'>{title}</h2>
            <ul className='grid grid-cols-4 gap-3 text-sm  text-center font-medium mb-4'>
                <li className='bg-slate-950 bg-opacity-45 px-2 py-1 rounded-md m-1 transition-transform transform hover:scale-110 text-white md:hover:text-design'>html</li>
                <li className='bg-slate-950 bg-opacity-45 px-2 py-1 rounded-md m-1 transition-transform transform hover:scale-110 text-white md:hover:text-design'>html</li>
                <li className='bg-slate-950 bg-opacity-45 px-2 py-1 rounded-md m-1 transition-transform transform hover:scale-110 text-white md:hover:text-design'>html</li>
                <li className='bg-slate-950 bg-opacity-45 px-2 py-1 rounded-md m-1 transition-transform transform hover:scale-110 text-white md:hover:text-design'>html</li>
                <li className='bg-slate-950 bg-opacity-45 px-2 py-1 rounded-md m-1 transition-transform transform hover:scale-110 text-white md:hover:text-design'>html</li>
            </ul>

            <Flex className='flex justify-between'>
                <Button className='px-3 lg:px-5' text='Live link'/>
                <Button className='px-3 lg:px-5' text='Github link'/>
            </Flex>
        </div>
    )
}

export default ProjectCard