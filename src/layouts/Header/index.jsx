import React from 'react'
import NavBar from '../../components/NavBar'
import Logo from '/images/logo-david-charancon.webp'

const Header = () => {
  const links = [
    { item: 'Qui suis-je ?', href: '#about' },
    { item: 'Mes projets', href: '#projects' },
    { item: 'Mes inspirations', href: '#inspirations' },
    { item: 'Me contacter', href: '#contact' }
  ]

  return (
    <header className="header">
      <img src= {Logo} alt="Logo de David Charancon" className="logo" />
      <NavBar links={links} />
    </header>
  )
}

export default Header