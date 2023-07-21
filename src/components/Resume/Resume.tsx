import './Resume.css'
import React from 'react'
import Header from '../Header/Header';

interface ResumeProps {
  resumeTitle: string;
}

const Resume: React.FC<ResumeProps> = ({ resumeTitle }) => {

  return (
    <>
      <Header name={resumeTitle}/>
      <p>resume</p>
    
    </>
  )
}

export default Resume