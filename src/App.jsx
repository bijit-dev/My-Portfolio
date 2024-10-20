import React from 'react'
import Navber from './Layouts/Navber'
import Banner from './Layouts/Banner'
import About from './Layouts/About'
import Skills from './Layouts/Skills'
import Project from './Layouts/Project'
import Education from './Layouts/Education'
import Blog from './Layouts/Blog'
import Contact from './Layouts/Contact'
import Footer from './Layouts/Footer'


const App = () => {
    return (
        <>
            <Navber/>
            <Banner />
            <About />
            <Skills />
            <Project/>
            <Education />
            <Blog />
            <Contact />
            <Footer />
        </>
    )
}

export default App