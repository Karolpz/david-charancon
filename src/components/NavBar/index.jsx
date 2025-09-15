import { HashLink } from 'react-router-hash-link';

const NavBar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <HashLink smooth to={link.url}>{link.item}</HashLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default NavBar;