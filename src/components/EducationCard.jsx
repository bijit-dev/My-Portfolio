import React from 'react'
import Image from './Image'
import Flex from './Flex'
import hpi from '../assets/hpi.png'

const EducationCard = () => {
    return (
        <div className='bg-transparent w-w650 mx-auto border-2 rounded-xl border-design shadow-lg shadow-design/50 p-4'>
            <Flex className='gap-5 items-center'>
                <Image className='h-12 rounded-lg ' src={hpi}/>
                <div>
                    <h1 className='text-lg font-semibold text-gray-400'>Habiganj Polytechnic Institute</h1>
                    <h5 className='text-sm font-medium text-gray-400'>Diploma In Engineering - Computer Science and Technology</h5>
                    <p className='text-xs font-normal text-gray-400'>Jun 2020 - Present</p>
                </div>
            </Flex>
            <p className='text-gray-400 text-sm font-medium py-4'>Grade: Not Published Yet</p>
            <p className='text-gray-400 text-base font-medium'>I have completed of the Diploma in Computer Science & Engineering at Habiganj Polytechnic Institue. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.</p>
        </div>
    )
}

export default EducationCard