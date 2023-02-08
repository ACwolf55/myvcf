import React from 'react'
import { Link } from 'react-router-dom'

const HomeReturnBar = () => {

  return (
        <Link to='/'>
    <div className='HomeReturnBar'>
       <img src='/home.png' className='home-logo'></img>
       <p>return home</p>
    </div>
       </Link>
  )
}

export default HomeReturnBar