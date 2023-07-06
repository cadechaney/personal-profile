import './AboutMe.css'
// import teachingVideo from '../../assets/teachingVideo'


const teachingVideo = require('../../assets/teachingVideo.gif')
const sparringVideo = require('../../assets/sparring.gif')
const youngSiblings = require('../../assets/youngSiblings.jpg')
const gymSiblings = require('../../assets/gymSiblings.jpg')

function AboutMe() {


  return (
    <div className='main'>
      <section className='info-container'>
        <div className='info-card-1'>
          <img className='teaching-video' src={teachingVideo}></img>
          <article className='details-1'>
            <h3>
              I have found myself my entire life chasing efforts in being great at anything I do. 
              My greatest personal example of this is my Brazilian Jiu Jitsu training.
              With Jiu Jitsu, I fell in love with the process of learning complex techniques and being put under pressure in competition. What I love even more than that is my ability to then
              introduce and teach these aspects, especially to the younger generations so they can grow confidence, be proud of their achievements, and learn respect for others.
            </h3>
          </article>
        </div>
        <div className='info-card-2'>
          <article className='details-2'>
            <h3>
              To the average person fighting may seem anger driven, but in reality with a good fighter every move is calm and calcalculated.
              Learning these techniques with sparring partners has built some of the best relationships in my life.
            </h3>
          </article>
          <div>
            <img className='sparring-video' src={sparringVideo}></img>
            <p>Sparring with a great friend of mine, Nick in Colorado Springs</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe