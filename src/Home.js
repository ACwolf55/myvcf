import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  const navigate = useNavigate()


  return (
    <div className='home'>
    <Header/>
    <br></br>
      <nav>
          <div className='nav-button' onClick={()=>navigate('/sign-up')}>SIGN-UP</div>
          <div className='nav-button' onClick={()=>navigate('/clients')}>FEATURED CLIENTS</div>
          <div className='nav-button' onClick={()=>navigate('/login')}>LOGIN</div>
      
      </nav>
      {/* <h1>Who Are We?</h1> */}
    <section>
      <div className='text-box'>
    <p>Sign-up and get QR Code where when scanned will take user to your company page to add your business to contacts</p>
      </div>
    </section>

      {/* <footer>

          <img src='/Overlap_logo.png' className='footer-logo' alt='logo'></img>
          <img src='/QRcode_logo.jpg' className='footer-logo' alt='logo'></img>
          <img src='/quick_quote-logo.jpg' className='footer-logo' alt='logo'></img>

      </footer> */}
      <Footer/>
    </div>
  )
}

export default Home
