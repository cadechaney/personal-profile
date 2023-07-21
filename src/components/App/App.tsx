import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import ContactMe from '../ContactMe/ContactMe'
import Resume from '../Resume/Resume'

function App() {

  const [aboutMeTitle] = useState('About Me')
  const [contactMeTitle] = useState('Contact Me')
  const [resumeTitle] = useState('My Resume')

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <AboutMe aboutMeTitle={aboutMeTitle}/>
        </Route>
        <Route path='/contactMe'>
          <ContactMe contactMeTitle={contactMeTitle}/>
        </Route>
        <Route path='/resume'>
          <Resume resumeTitle={resumeTitle}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
