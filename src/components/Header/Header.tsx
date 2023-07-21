import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  name: string;
  style: object;
}

const Header: React.FC<HeaderProps> = ({ name, style }) => {

  return (
      <header>
        <h1 style={style}>{name}</h1>
        <section className='scroll-bar'>
          <Link to="/contactMe" className='link'> 
            <p className='option'>Contact Me</p> 
          </Link>
          <Link to="/" className='link'>
            <p className='option'>Resume</p>
          </Link>
          <Link to="/aboutMe" className='link'> 
            <p className='option'>About Me</p> 
          </Link>
          <p className='option'>Portfolio</p>
        </section>
      </header>
  )
}

export default Header