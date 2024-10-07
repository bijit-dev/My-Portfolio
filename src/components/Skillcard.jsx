import React from 'react'

const Skillcard = ({icon,level,text}) => {
    return (
        <div className='flex flex-col items-center'>
            <div className=' w-full flex flex-col items-center shadow-xl rounded-xl bg-slate-950 bg-opacity-50 py-7'>
                <icon className='text-white'>{icon}</icon>
                <h1 className='text-design text-4xl font-extrabold'>{level}</h1>
            </div>

            <h1 className='text-sky-100 uppercase mt-2 md:text-xl lg:text-2xl font-extrabold'>{text}</h1>

        </div>
    )
}

export default Skillcard