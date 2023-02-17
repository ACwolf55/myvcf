import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import Header from './Header'
import HomeReturnBar from './HomeReturnBar'

const Login = () => {

  const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible,setVisible] = useState(false)

    useEffect(()=>{
      let email = sessionStorage.getItem("email");
      // console.log(email)
      if(email!==null){
        navigate('/home')
      }
  
    },[])

    const togglePass=(e)=>{
      e.preventDefault()
      setVisible(prev=>!prev)
    }


    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
 
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
            sessionStorage.setItem("companyName", res.data.companyName);
            sessionStorage.setItem("about",res.data.about)
            sessionStorage.setItem("city",res.data.city)
            sessionStorage.setItem("isVendor", true);
            navigate('/home')
        }).catch((err)=> alert(err.response.request.response))}
    }



  return (
    <div>
      <Header/>
      <HomeReturnBar />
  <label>
    <h3>Email</h3>
          <input
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
       <button onClick={loginVendor} style={{boxShadow:'black 1px 1px 2px', marginRight:'5px',marginTop:'5px'}} id='contact-btn'>Login</button>
    </div>
  )
}

export default Login