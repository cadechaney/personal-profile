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
      <section className='portfolio-container'>
        <div className='portfolio-card-1'>
          {/* <img className='teaching-video' src={teachingVideo}></img> */}
          <article className='details-section-1'>
            <h1>Flight Log</h1>
            <h3>
              
            </h3>
          </article>
        </div>
        <div className='portfolio-card-2'>
          <article className='details-section-2'>
            <h1>Disney Character Discovery</h1>
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