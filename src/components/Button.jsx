import React from 'react'

const Button = ({text,className}) => {
  return (
    
    <button className={`bg-transparent hover:bg-teal-900  duration-300 border-2 border-secondary py-2 px-12 rounded-[40px] text-base text-secondary font-pop font-meduim sm:text-lg md:text-lg font-bold ${className}`}>{text}</button>
    
  )
}

export default Button