import React from 'react'
import Image from './Image'
import Flex from './Flex'

const EducationCard = ({title,src,dir,date,grade,dis}) => {
    return (
        <div className='bg-transparent md:w-w650  my-8 mx-5 md:mx-auto border-2 rounded-xl border-design shadow-lg lg:hover:shadow-design p-4'>
            <Flex className='gap-5 items-center'>
                <Image className='h-12 rounded-lg ' src={src}/>
                <div>
                    <h1 className='text-lg font-semibold text-gray-400'>{title}</h1>
                    <h5 className='text-sm font-medium text-gray-400'>{dir}</h5>
                    <p className='text-xs font-normal text-gray-400'>{date}</p>
                </div>
            </Flex>
            <p className='text-gray-400 text-sm font-medium py-4'>Grade: {grade}</p>
            <p className='text-gray-400 text-sm text-justify md:text-base font-medium'>{dis}</p>
        </div>
    )
}

export default EducationCard