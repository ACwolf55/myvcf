import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Promo from '../Promo'
import HomeReturnBar from '../HomeReturnBar'

const Plumber = () => {
  return (
    <>
    <Header/>
    <HomeReturnBar />
{/* <Promo/> */}
<div className='contact-card'>
    <div className='logo-background'>
    <div className='logo-card'>
      <img src='/plumberLogo.jpg'style={{"height" : "80px", "width" : "200px"}} onClick={()=>window.open('https://1800plumber.com/locations/scottsdale-az', '_blank')}></img>
    </div> 
    </div>

     <div style={{"height" : "100vh"}}>
     <p style={{"marginTop" : "30px", "marginBottom" : "30px"}} ><em>THANKS FOR SCANNING ~ !</em></p>
     <h5>Hi there! We're you're locally owned and operated Plumbing and HVAC experts.</h5>
     <h6></h6>
     <button className='contact-btn' id='call-btn'><a href="tel:1-800-758-6237"><b>Call Us</b></a></button>
     <br/>
     <button className='contact-btn' id='chat-btn'><a href="https://1800plumber.com/locations/scottsdale-az/9168"><b>Chat Us</b></a></button>
  
          <h5>IF/WHEN - Feel free to send pictures/videos of issues via text or email!</h5>
     <a href='/1800plumber.vcf' download><button className='contact-btn'><b>Add to Contacts</b></button></a>
     </div>

     </div>
     <Footer/>
 
     </>
  )
}

export default Plumber;
