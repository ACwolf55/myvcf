import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Promo from '../Promo'
import HomeReturnBar from '../HomeReturnBar'

const SirensAndSprites = () => {



  return (
    <div className='contact-card'>
      <Header/>
      <HomeReturnBar />
   
       <div className='contact-card'>
    <div className='logo-background'>
    <div className='logo-card'>
    <img src='/SirensAndSpritesEdit.png' style={{"height" : "100px", "width" : "250px"}}></img>
    </div> 
    </div>
    </div>
    <h5>Custom Signs & Hand Lettering</h5>
    <h5>"instagram: @cardstockandchalk          Venmo: @kelsey-freese"</h5>

         <p style={{"marginTop" : "50px", "marginBottom" : "50px"}} ><em>THANKS FOR SCANNING ~ !</em></p>
    <a href='/SirensAndSprites.vcf' download><button id='contact-btn'><b>Add to Contacts</b></button></a>
    <Footer/>
    </div>
  )
}

export default SirensAndSprites