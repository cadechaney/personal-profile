import './Resume.css'
import React from 'react'
import Header from '../Header/Header';

interface ResumeProps {
  resumeTitle: string;
  resumeImage: string;
}

const Resume: React.FC<ResumeProps> = ({ resumeTitle, resumeImage }) => {

  return (
    <div className='resume-background'>
      <Header name={resumeTitle} style={{ color: 'black'}}/>
      <div className='resume-container'>
        <img src={resumeImage} className='resume-image' alt='my resume'></img>  
      </div>
    </div>
  )
}

export default Resume