import React from 'react'

const List = () => {
  return (
    <ul className='flex gap-x-6  text-lg font-medium font-pop'>
        <li className='text-primary duration-500 hover:text-white'>Home</li>
        <li className='text-primary duration-500 hover:text-white'>About</li>
        <li className='text-primary duration-500 hover:text-white'>Skills</li>
        <li className='text-primary duration-500 hover:text-white'>Project</li>
        <li className='text-primary duration-500 hover:text-white'>Education</li>
        <li className='text-primary duration-500 hover:text-white'>Blog</li>
        <li className='text-primary duration-500 hover:text-white'>Contact</li>
    </ul>
  )
}

export default List