import React from 'react'
import Container from '../components/Container'
import Skillcard from '../components/Skillcard'
import { FaHtml5, FaCss3Alt,FaBootstrap,FaGithub,FaPython } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { SiTailwindcss, SiVercel } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";

const Skills = () => {
    return (
        <section className='bg-cyan-800 py-28'>
            <Container>
                <div className='border-b border-white  text-center mb-6'>
                    <h1 className='text-5xl text-design mb-12 font-extrabold'>Skills</h1>
                    <p className='text-white pb-2 text-lg'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
                </div>
                <div className='grid grid-cols-5 gap-4'>
                    <Skillcard icon={<FaHtml5 size={80} />} level={'90%'} text={'HTML'}/>
                    <Skillcard icon={<FaCss3Alt size={80} />} level={'88%'} text={'CSS'}/>
                    <Skillcard icon={<MdJavascript size={80} />} level={'75%'} text={'JavaScript'}/>
                    <Skillcard icon={<FaBootstrap size={80} />} level={'90%'} text={'BootstrapCSS'}/>
                    <Skillcard icon={<SiTailwindcss size={80} />} level={'85%'} text={'TailwindCSS'}/>
                    <Skillcard icon={<RiReactjsFill size={80} />} level={'80%'} text={'React JS'}/>
                    <Skillcard icon={<SiVercel size={80} />} level={'80%'} text={'Vercel'}/>
                    <Skillcard icon={<FaGithub size={80} />} level={'85%'} text={'GIT&GITHUB'}/>
                    <Skillcard icon={<FaPython size={80} />} level={'60%'} text={'PYTHON'}/>
                    <Skillcard icon={<DiDjango size={80} />} level={'30%'} text={'DJANGO'}/>
                </div>
            </Container>
        </section>
    )
}

export default Skills