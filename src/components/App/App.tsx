import React, { useState } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import ContactMe from '../ContactMe/ContactMe'

function App() {

  const [aboutMeTitle] = useState('About Me')
  const [contactMeTitle] = useState('Contact Me')

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <AboutMe aboutMeTitle={aboutMeTitle}/>
        </Route>
        <Route path='/contactMe'>
          <ContactMe contactMeTitle={contactMeTitle}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
