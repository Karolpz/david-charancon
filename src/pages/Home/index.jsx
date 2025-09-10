import React from 'react'
import Header from '../../layouts/Header'
import Hero from '../../layouts/Hero'
import Projects from '../../layouts/Projects'
import Quote from '../../layouts/Quote'
import Inspirations from '../../layouts/Inspirations'
import Form from '../../layouts/Form'
import Footer from '../../layouts/Footer'

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
      <Footer />
    </>
  )
}

export default Home