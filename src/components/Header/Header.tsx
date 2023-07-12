import './Header.css'
import React from 'react'

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {

  return (
      <header>
        <h1>{name}</h1>
        <section className='scroll-bar'>
          <p className='option'>Contact Me</p>
          <p className='option'>Resume</p>
          <p className='option'>About this site</p>
          <p className='option'>Portfolio</p>
        </section>
      </header>
  )
}

export default Header