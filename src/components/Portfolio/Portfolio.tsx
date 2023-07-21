import './Portfolio.css'
import React from 'react'
import Header from '../Header/Header'


interface PortfolioProps {
  portfolioTitle: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioTitle }) => {
  
  return (
    <>
      <Header name={portfolioTitle}/>
      <section className='info-container'>
        <div className='info-card-1'>
          {/* <img className='teaching-video' src={teachingVideo}></img> */}
          <article className='details-1'>
            <h3>
              
            </h3>
          </article>
        </div>
        <div className='info-card-2'>
          <article className='details-2'>
            <h3>
            </h3>
          </article>
          <div>
            {/* <img className='sparring-video' src={sparringVideo}></img> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio