import React from 'react'

const NavBar = ({ links }) => {
  return (
    <nav className="navbar">
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.item}
        </a>
      ))}
    </nav>
  )
}

export default NavBar