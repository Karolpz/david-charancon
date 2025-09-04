import React from 'react'
import Header from '../../layouts/Header'
import Hero from '../../layouts/Hero'
import Projects from '../../layouts/Projects'
import Quote from '../../layouts/Quote'
import Inspirations from '../../layouts/Inspirations'

const Home = () => {
  return (
    <>
        <Header />
    <main>
        <Hero />
        <Projects />
        <Quote />
        <Inspirations />
    </main>
      </>
  )
}

export default Home