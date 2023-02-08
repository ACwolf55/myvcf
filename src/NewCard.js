import React,{useState} from 'react'
import Header from './Header'
import axios from 'axios'
import Footer from './Footer'
import HomeReturnBar from './HomeReturnBar'
import { useNavigate } from 'react-router-dom'

const NewCard = () => {

 const navigate = useNavigate()

  const [organization,setOrganization] = useState('')
  const [URL,setURL] = useState('')
  const [city,setCity] = useState('')
  const [address,setAddress] = useState('')
  const [state,setState] = useState('')
  const [zip,setZip] = useState('')
  const [note,setNote] = useState('')
  const [email,setEmail] = useState('')
  const [cellPhone,setCell] = useState('')
  const [workPhone,setWork] = useState('')
  const [logo,setLogo] = useState('')
  const [facebook,setFacebook] = useState('')
  const [instagram,setInstagram] = useState('')
 

    // const req = {organization,website,
    //   city,note,email,phone,
    //   logo,facebook,instagram}

    const submitNewCard =()=>{
      axios.post('/newCard',{organization,URL,city,address,state,zip,note,email,cellPhone,workPhone,logo,facebook,instagram}).then((res)=>{
        console.log(res.data)
        navigate(`/card/${organization}`)
      })
    }

   
  return (
    <div>
         <Header/>
         <HomeReturnBar />

         <p>Submit new card for your business!~</p>

        <h3>Organization</h3>
         <input onChange={(e)=>{setOrganization(e.target.value)}}></input>

         <h3>Website URL</h3>
         <input onChange={(e)=>{setURL(e.target.value)}}></input>

         <h3>City</h3>
         <input onChange={(e)=>{setCity(e.target.value)}}></input>

          <h3>Address</h3>
         <input onChange={(e)=>{setAddress(e.target.value)}}></input>

         <h3>State</h3>
         <input onChange={(e)=>{setState(e.target.value)}}></input>

         <h3>Zip</h3>
         <input onChange={(e)=>{setZip(e.target.value)}}></input>

         <h3>Email</h3>
         <input onChange={(e)=>{setEmail(e.target.value)}}></input>

         <h3>Cell Phone</h3>
         <input onChange={(e)=>{setCell(e.target.value)}}></input>

         <h3>Work Phone</h3>
         <input onChange={(e)=>{setWork(e.target.value)}}></input>

         <h3>Note</h3>
         <input onChange={(e)=>{setNote(e.target.value)}}></input>

         {/* <h3>Logo / Pic</h3>
         <input onChange={(e)=>{setLogo(e.target.value)}}></input>

         <h3>Instagram</h3>
         <input onChange={(e)=>{setInstagram(e.target.value)}}></input>

         <h3>Facebook</h3>
         <input onChange={(e)=>{setFacebook(e.target.value)}}></input> */}
        <br></br>
        <br></br>
         <button onClick={submitNewCard}> Submit </button>
         <br></br>
        <br></br>
        <Footer/>
        <br></br>
        <br></br>





    </div>
  )
}

export default NewCard