import './AboutMe.css'
// import teachingVideo from '../../assets/teachingVideo'


const teachingVideo = require('../../assets/teachingVideo.gif')

function AboutMe() {


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
          <img className='teaching-video' src={teachingVideo}></img>
          <article className='details-1'>
            <h3>
              I have found myself my entire life chasing efforts in being great at anything I do. My greatest personal example of this is my Brazilian Jiu Jitsu training.
              With Jiu Jitsu, I fell in love with the process of learning complex techniques and being put under pressure in competition. What I love even more than that is my ability to then
              introduce and teach these aspects, especially to the younger generations so they can grow confidence, be proud of their achievements, and learn respect for others.
            </h3>
          </article>
        </div>
      </section>
    </div>
  )
}

export default AboutMe