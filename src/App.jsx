import React from 'react'
import Navber from './Layouts/Navber'
import Banner from './Layouts/Banner'
import About from './Layouts/About'
import Skills from './Layouts/Skills'
import Project from './Layouts/Project'
import Education from './Layouts/Education'


const App = () => {
    return (
        <>
            <Navber/>
            <Banner />
            <About />
            <Skills />
            <Project/>
            <Education/>
        </>
    )
}

export default App