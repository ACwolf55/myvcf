import React from 'react'
import { useNavigate} from 'react-router-dom'


const Promo = () => {
    const navigate = useNavigate()

    return (
    <div className='promo' onClick={()=>navigate('/1800plumber')}>
      
        <img src='/Fire.png' className='fire'></img>
        <p>Promoted :&nbsp; &nbsp; &nbsp; </p>
        <img src='/plumberLogo.jpg'></img>
        <p>&nbsp; &nbsp; &nbsp; Most trusted Plumbers of Tempe/Scottsdale</p>
      
    </div>
  )
}

export default Promo