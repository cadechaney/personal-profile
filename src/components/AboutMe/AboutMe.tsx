import './AboutMe.css'
import teachingVideo from '../../assets/teachingVideo'



function AboutMe() {

  const teachingVideo = require('../../assets/teachingVideo.gif')

  return (
    <div className='main'>
      <header>
        <h1>About me</h1>
        <section className='scroll-bar'>
          <p className='option'>Contact Me</p>
          <p className='option'>Resume</p>
          <p className='option'>About this site</p>
          <p className='option'>Portfolio</p>
        </section>
      </header>
      <section className='info-container'>
        <h2>Early Life</h2>
        <div className='info-card-1'>
         
        </div>
      </section>
    </div>
  )
}

export default AboutMe