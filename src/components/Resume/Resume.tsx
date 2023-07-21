import './Resume.css'
import React from 'react'
import Header from '../Header/Header';

interface ResumeProps {
  resumeTitle: string;
  resumeImage: string;
}

const Resume: React.FC<ResumeProps> = ({ resumeTitle, resumeImage }) => {

  return (
    <>
      <Header name={resumeTitle}/>
      <img src={resumeImage} className='resume-image' alt='my resume'></img>
    
    </>
  )
}

export default Resume