import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Promo from '../Promo'
import HomeReturnBar from '../HomeReturnBar'

const Graphico = () => {

//   X-SOCIALPROFILE;https://www.facebook.com/conceptoaz;TYPE=facebook:https://www.facebook.com/conceptoaz
// X-SOCIALPROFILE;https://www.instagram.com/conceptograficoaz;TYPE=instagram:https://www.instagram.com/conceptograficoaz


  return (
    <div className='contact-card'>
      <Header/>
      <HomeReturnBar />
      <div className='contact-card'>
    <div className='logo-background'>
    <div className='logo-card'>
    <img src='/Concepto-AZ-Logo.png'style={{"height" : "100px", "width" : "250px"}} onClick={()=>window.open('www.conceptoaz.com', '_blank')}></img>
    </div> 
    </div>
    </div>
    
         <p style={{"marginTop" : "50px", "marginBottom" : "50px"}} ><em>THANKS FOR SCANNING ~ !</em></p>
    <a href='/graphico.vcf' download><button className='contact-btn'><b>Add to Contacts</b></button></a>
    <Footer/>

    </div>
  )
}

export default Graphico;
