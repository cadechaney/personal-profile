import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import ContactMe from '../ContactMe/ContactMe'
import Resume from '../Resume/Resume'
import Portfolio from '../Portfolio/Portfolio';

const resumeImage = require('../../assets/resumeImage.png')
const disneyGif = require('../../assets/disneyApp.gif')
const flightLogGif = require('../../assets/flightLog.gif')
const matrixGif = require('../../assets/matrix-code.gif')

function App() {

  const [aboutMeTitle] = useState('About Me')
  const [contactMeTitle] = useState('Contact Me')
  const [resumeTitle] = useState('My Resume')
  const [portfolioTitle] = useState('My Portfolio')

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Resume resumeTitle={resumeTitle} resumeImage={resumeImage}/>
        </Route>
        <Route path='/aboutMe'>
          <AboutMe aboutMeTitle={aboutMeTitle}/>
        </Route>
        <Route path='/contactMe'>
          <ContactMe contactMeTitle={contactMeTitle}/>
        </Route>
        <Route path='/portfolio'>
          <Portfolio 
            portfolioTitle={portfolioTitle} 
            disneyGif={disneyGif} 
            flightLogGif={flightLogGif} 
            matrixGif={matrixGif}
            />
        </Route>
      </Switch>
    </>
  );
}

export default App;
