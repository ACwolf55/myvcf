import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import HomeReturnBar from './HomeReturnBar'

const ExistingClients = () => {


  return (
    <div className='clients'>
     <Header/>
     <HomeReturnBar />
    <h2><u>Existing Clients</u></h2>

<main>
      <Link to='/graphico' className='card-link-card'>
        <img src='/Concepto-AZ-Logo.png' className='small-logo'></img> 
        <h3>Concepto Grafico</h3>
    </Link>

  

    <Link to='/1800plumber' className='card-link-card'>  
    <img src='/plumberLogo.jpg' className='small-logo'></img>
       <h3>1-800-Plumber</h3> 
    </Link>
  

    <Link to='/pokedon' className='card-link-card'>
    <img src='/logo-pokedon.png' className='small-logo'></img> 
    <h3>Pokedon</h3>
    </Link> 

    <Link to='/frenchys' className='card-link-card'>
    <img src='/Frenchys.jpg' className='small-logo'></img> 
    <h3>Frenchys Cleaning Service</h3>
    </Link> 
    
    </main>
   </div>
  )
}

export default ExistingClients;
