import './Header.css'

function Header() {

  return (
      <header>
        <h1>About me</h1>
        <section className='scroll-bar'>
          <p className='option'>Contact Me</p>
          <p className='option'>Resume</p>
          <p className='option'>About this site</p>
          <p className='option'>Portfolio</p>
        </section>
      </header>
  )
}

export default Header