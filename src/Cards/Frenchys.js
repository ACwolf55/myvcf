import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Promo from '../Promo'
import HomeReturnBar from '../HomeReturnBar'

const Frenchys = () => {



  return (
    <div className='contact-card'>
      <Header/>
      <HomeReturnBar />
   
       <div className='contact-card'>
    <div className='logo-background'>
    <div className='logo-card'>
    <img src='/Frenchys.jpg'style={{"height" : "100px", "width" : "250px"}} onClick={()=>window.open('https://frenchyscleaningsvcs.com/', '_blank')}></img>
    </div> 
    </div>
    </div>


         <p style={{"marginTop" : "50px", "marginBottom" : "50px"}} ><em>THANKS FOR SCANNING ~ !</em></p>
    <a href='/Frenchys.vcf' download><button id='contact-btn'><b>Add to Contacts</b></button></a>
    <Footer/>
    </div>
  )
}

export default Frenchys;