import './Portfolio.css'
import React from 'react'
import Header from '../Header/Header'


interface PortfolioProps {
  portfolioTitle: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioTitle }) => {
  
  return (
    <>
      <p>portfolio</p>
    </>
  )
}

export default Portfolio