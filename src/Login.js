import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import Header from './Header'
import HomeReturnBar from './HomeReturnBar'
import { useParams } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  

  const {organization} = useParams()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible,setVisible] = useState(false)

      const inputRef = useRef()

    useEffect(()=>{
      // console.log(email)
      inputRef.current.focus()
  
    },[])

    const togglePass=(e)=>{
      e.preventDefault()
      setVisible(prev=>!prev)
    }
 
    const loginVendor =(e)=>{
      e.preventDefault()
        if (email === "") {
            alert("Please enter email");
          } else if (password.length < 6) {
            alert("password must be atleast 6 characters");
          } else {
        axios.post('/loginVendor',{email,password}).then((res)=>{
          console.log(res.data)
            sessionStorage.setItem("email", res.data.email);
            sessionStorage.setItem("id", res.data._id);
            sessionStorage.setItem("service", res.data.service);
            sessionStorage.setItem("companyName", res.data.organization);
            sessionStorage.setItem("about",res.data.about)
            sessionStorage.setItem("city",res.data.city)
            sessionStorage.setItem("isVendor", true);
            navigate(`/card/${res.data.organization}`)
        }).catch((err)=> alert(err.response.request.response))}
    }



  return (
    <div>
      <Header/>
      <HomeReturnBar />
  <label>
    <h3>Email</h3>
          <input
          ref={inputRef}
            type="email"
            name="email"
            placeholder="email"
            className='email'
            onChange={(e) => setEmail(e.target.value)}
            style={{boxShadow:'black 0px 1px 2px'}}
          />
          <h3>Password</h3>
          <div className='password-wrapper'>
          <input
          ref={inputRef}
            type={visible ? "text" : "password" }
            name="password"
            placeholder="password"
            className='password'
            onChange={(e) => setPassword(e.target.value)}
            style={{boxShadow:'black 0px 1px 2px'}}
          />
          <button className='show-password-btn' onClick={togglePass}>
            { visible ? <AiOutlineEye/> : <AiOutlineEyeInvisible /> }
          </button>
          </div>
          </label>
       <br></br>
       <button onClick={loginVendor} style={{boxShadow:'black 1px 1px 2px', marginRight:'5px',marginTop:'5px'}} className='contact-btn'>Login</button>
    </div>
  )
}

export default Login