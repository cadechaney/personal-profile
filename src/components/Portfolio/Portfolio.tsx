import './Portfolio.css'
import React from 'react'
import Header from '../Header/Header'


interface PortfolioProps {
  portfolioTitle: string;
  disneyGif: string;
  flightLogGif: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioTitle, disneyGif, flightLogGif }) => {
  
  return (
    <>
      <Header name={portfolioTitle}/>
      <section className='portfolio-container'>
        <div className='portfolio-card-1'>
          <article className='details-section-1'>
            <h1>Flight Log</h1>
            <h4>
            {'\u25AA'}Full Stack Group Project | 75 Hours | GitHub Front End Repo | Deployed App
            </h4>
            <h5>
            {'\u25AA'}Front End Technology - React Native
            </h5>
            <h5>
              {'\u25AA'}Project Purpose:
            </h5>
            <h6>
              - Problem: User is a pilot that needs an efficient and easy way to log flight information
            </h6>
            <h6>
              - Answer: User now has a mobile application they can have on their phone to log flight info easily and reliably
            </h6>
            <h5>
              {'\u25AA'}Description:
            </h5>
            <h6>
              - With a Full Stack team having Front End building with React Native and Back End using Python, we created an app that pilots can use to log their flights 
              on their mobile device
            </h6>
          </article>
          <img className='flight-log-gif' src={flightLogGif}></img>
        </div>
        <div className='portfolio-card-2'>
        <img className='disney-gif' src={disneyGif}></img>
        <article className='details-section-2'>
            <h1>Disney Characters Discovery</h1>
            <h4>
            {'\u25AA'}Solo Project | 45 Hours | GitHub Front End Repo | Deployed App
            </h4>
            <h5>
            {'\u25AA'}Front End Technology - React
            </h5>
            <h5>
              {'\u25AA'}Project Purpose:
            </h5>
            <h6>
              - Problem: User is someone who is excited to learn about and discover new Disney characters
            </h6>
            <h6>
              - Answer: User now has a website that is responsive on any device to discover, favorite, and learn new characters
            </h6>
            <h5>
              {'\u25AA'}Description:
            </h5>
            <h6>
              As a solo project I created an app that takes in an api, and displays the data into character cards that the user can favorite/save
            </h6>
          </article>
        </div>
      </section>
    </>
  )
}

export default Portfolio