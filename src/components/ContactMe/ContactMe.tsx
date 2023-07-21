import './ContactMe.css'
import Header from '../Header/Header';

const denverBackground = require('../../assets/denver.jpg')

interface ContactMeProps {
  contactMeTitle: string;
}

const ContactMe: React.FC<ContactMeProps> = ({ contactMeTitle }) => {
  return (
    <div className='contact-me-container' style={{ backgroundImage: `url(${denverBackground})`}}>
      <Header name={contactMeTitle} style={{ color: 'black'}}/>
      <div className='contact-info'>
        <h2 className='info-detail'>Email: cadechaney@live.com</h2>
        <h2 className='info-detail'>Phone: (720)490-8630</h2>
        <h2 className='info-detail'>
          <a href="https://www.linkedin.com/in/jonathan-chaney-a333ba235/" className='linkedin-link'>LinkedIn</a>
        </h2>
        <h2 className='info-detail' id='inPerson'>I am in Denver and always available for in person interviews!</h2>
      </div>
    </div>
  )
}

export default ContactMe