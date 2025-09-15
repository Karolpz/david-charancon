import React from 'react'
import NavBar from '../../components/NavBar'
import Logo from '/images/logo-david-charancon.webp'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const links = [
    { item: 'Qui suis-je ?', url: '/#about' },
    { item: 'Mes projets', url: '/#projects' },
    { item: 'Mes inspirations', url: '/#inspirations' },
    { item: 'Me contacter', url: '/#contact' }
  ]

  return (
    <header className="header">
      <NavLink to='/'>
        <img src={Logo} alt="Logo de David Charancon" className="logo" />
      </NavLink>
      <NavBar links={links} />
    </header>
  )
}

export default Header