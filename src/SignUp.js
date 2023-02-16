import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import axios from 'axios'


const SignUp = () => {

  const navigate = useNavigate()

  const [visible,setVisible] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [companyName,setCompanyName] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
  const [city,setCity] = useState('')
  const [state,setState] = useState('')
  const [zip,setZip] = useState('')
  const [service,setService] = useState('')
  const [about,setAbout] = useState('')

  const [page,setPage] = useState(1)

  const togglePass=(e)=>{
    e.preventDefault()
    setVisible(prev=>!prev)
  }

  useEffect(() => {
    
    console.log(email)
 
  }, [])
  

  const validateEmail = (email) => {
    console.log(email)
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const register =(e)=>{
    e.preventDefault()
    const newVendor = {
      email,password,companyName,phone,address,city,state,zip,service
    }
    const test = validateEmail(newVendor.email)
    console.log(newVendor)
       if (email === "") {
           alert("Please enter email");
         } else if (password.length < 6) {
           alert("Please enter password");
         } else if (companyName=='') {
          alert("Please enter Company name"); 
         } else if (test){

           axios.post('/registerVendor',newVendor).then((res)=>{
             console.log(res.data)
             sessionStorage.setItem("email", res.data);
            //  sessionStorage.setItem("id", res.data.registeredVendor.id);
             navigate('/home')
           }).catch((err)=> alert(err.response.request.response))
         } else {
           alert("You have entered an invalid email address!")
     }
   }

   switch (page) {
    case 1:
        return (
    <div>
        <Header/>
        <Nav/>
        <ProfileBar/>
        <main>
        <div className='registration-form'>
        <p>*Page 1 required, other pages optional</p> 
        <h4>Vendor Registration {page}/4</h4> 
        <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} className='reg-input'></input>

        <div className='password-wrapper'>
          <input
            type={visible ? "text" : "password" }
            name="password"
            placeholder="password"
            className='reg-input'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='show-password-btn' onClick={togglePass}>
            { visible ? <AiOutlineEye/> : <AiOutlineEyeInvisible /> }
          </button>
          </div>

        <input placeholder='organization' onChange={(e)=>setCompanyName(e.target.value)} className='reg-input'></input>
        </div>
        </main>
             <footer>
            <div></div>
            <button onClick={()=>setPage(2)}>CONTINUE</button>
         </footer>
        </div>
        )
    case 2:
      return (
        <div>
            <Header/>
            <Nav/>
            <ProfileBar/>
            <main>
            <div className='registration-form'>
            <h4>Vendor Registration {page}/4</h4> 
            <input placeholder='Phone #' onChange={(e)=>setPhone(e.target.value)}className='reg-input'></input>
            </div>
            </main>
            <footer>
            <button onClick={()=>setPage(1)}>BACK</button>
           <button onClick={()=>setPage(3)}>CONTINUE</button>
          </footer>
            </div>)
    case 3:
      return (
        <div>
            <Header/>
            <Nav/>
            <ProfileBar/>
            <main>
            <div className='registration-form'>
            <h4>Vendor Registration {page}/4</h4> 
        
      <input placeholder='Address' onChange={(e)=>setAddress(e.target.value)} className='reg-input'></input>
         <div className='city-state-zip'>
        <input placeholder='city' onChange={(e)=>setCity(e.target.value)} classname='addr-input'></input>
        <input placeholder='state' onChange={(e)=>setState(e.target.value)} classname='addr-input'/>
        <input placeholder='zip' onChange={(e)=>setZip(e.target.value)} classname='addr-input'></input>
          
            </div>
            </div>
            </main>
            <footer>
            <button onClick={()=>setPage(2)}>BACK</button>
           <button onClick={()=>setPage(4)}>CONTINUE</button>
          </footer>
            </div>)
    case 4:
      return (
        <div>
            <Header/>
            <Nav/>
            <ProfileBar/>
            <main>
            <div className='registration-form'>
            <h4>Vendor Registration {page}/4</h4> 
  
 <select value={service} name="service" id="service" onChange={e=>setService(e.target.value)}>
   <option hidden>Select Service Type</option> 
   <option value="House Cleaning">House Cleaning</option>
   <option value="Painting">Painting</option>
   <option value="Yard Work">Yard Work</option>
   <option value="Electric">Electric</option>
  <option value="Home / General Contracting">Home / General Contracting</option>
   <option value="Music">Musician</option>
   <option value="Art">Artist</option>
   <option value="Photographer">Photographer</option>
   <option value="Video Editor">Video Editor</option>
   <option value="Marketing">Marketing</option>
  <option value="Writer">Writer</option>
   <option value="Developer / Programming">Developer / Programming</option>
 </select> 
      
        </div>

           

            </main>
            <footer>
            <button onClick={()=>setPage(3)}>SKIP</button>
           <button onClick={register}>REGISTER</button>
          </footer>
            </div>)
  }


  return (
    <div>SignUp</div>
  )
}

export default SignUp