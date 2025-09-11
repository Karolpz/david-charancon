import React from 'react'

const NavBar = ({ links }) => {
  return (
    <nav className="navbar">
      {links.map((link, index) => (
        <a key={index} href={link.href} className='navbar__links'>
          {link.item}
        </a>
      ))}
    </nav>
  )
}

export default NavBar