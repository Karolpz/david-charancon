import React from 'react'
import Header from '../../layouts/Header'
import Hero from '../../layouts/Hero'
import Projects from '../../layouts/Projects'
import Quote from '../../layouts/Quote'
import Inspirations from '../../layouts/Inspirations'
import Form from '../../layouts/Form'

const Home = () => {
  return (
    <>
        <Header />
    <main>
        <Hero />
        <Projects />
        <Quote />
        <Inspirations />
        <Form />
    </main>
      </>
  )
}

export default Home