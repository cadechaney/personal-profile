import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {

  return (
      <header>
        <h1>{name}</h1>
        <section className='scroll-bar'>
          <Link to="/contactMe"> 
            <p className='option'>Contact Me</p> 
          </Link>
          <p className='option'>Resume</p>
          <Link to="/"> 
            <p className='option'>About Me</p> 
          </Link>
          <p className='option'>Portfolio</p>
        </section>
      </header>
  )
}

export default Header