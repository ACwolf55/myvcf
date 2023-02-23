import React,{useEffect,useState} from 'react'
import Header from './Header';
import HomeReturnBar from './HomeReturnBar';
import Footer from './Footer';
import FileSaver from "file-saver";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Card = () => {

  const navigate = useNavigate()

 const {organization} = useParams()
  
    const [webURL,setWebURL] = useState('')
    const [city,setCity] = useState('')
    const [address,setAddress] = useState('')
    const [state,setState] = useState('')
    const [zip,setZip] = useState('')
    const [note,setNote] = useState('')
    const [email,setEmail] = useState('')
    const [cellPhone,setCellPhone] = useState('')
    const [workPhone,setWorkPhone] = useState('')
    const [logo,setLogo] = useState('')
    const [facebook,setFacebook] = useState('')
    const [instagram,setInstagram] = useState('')
    

    useEffect(()=>{
        axios.get(`/getCard/${organization}`).then((res)=>{
            console.log(res.data)
            setWebURL(res.data.webURL)
            setCity(res.data.city)
            setAddress(res.data.address)
            setState(res.data.state)
            setEmail(res.data.email)
            setZip(res.data.zip)
            setNote(res.data.note)
            setEmail(res.data.email)
            setCellPhone(res.data.cellPhone)
            setWorkPhone(res.data.workPhone)
        })

    },[])

    const createVCard = (e)=> {
      e.preventDefault();
      // console.log(cellPhone)
      // let cell = parseInt(cellPhone)
      // let work = parseInt(workPhone)
      // console.log(cell)
      var file = new Blob(
        // ["\ufeff",
        [
  //         `BEGIN:VCARD
  // VERSION:3.0
  // ORG:${organization}
  // EMAIL;type=INTERNET;type=pref:${email}
  // TEL;type=MAIN:${workPhone}
  // TEL;type=CELL;type=VOICE;type=pref:${cellPhone}
  // ADR;;type=WORK;type=pref;;${address};${city};${city};${state};${zip};
  // URL;type=WORK;:${webURL}
  // NOTE;:${note}
  // END:VCARD
  // `
        `BEGIN:VCARD
VERSION:3.0
ORG:${organization}
EMAIL;type=INTERNET;type=pref:${email}
TEL;type=MAIN:${workPhone}
TEL;type=CELL;type=VOICE;type=pref:${cellPhone}
ADR;type=WORK;type=pref:;;${address};${city};${state};${zip};
URL;type=WORK;:${webURL}
NOTE;:${note}
END:VCARD
`
        ],
        { type: "text/vcard;charset=utf-8" }
      );
      let a = document.createElement("a");
      a.download = `${organization}.vcf`;
      a.href = URL.createObjectURL(file);
      var reader = new FileReader();
      if (navigator.userAgent.match("CriOS")) {
        reader.onloadend = e => {
          window.open(reader.result);
        };
        reader.readAsDataURL(file);
      } else if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
        reader.onload = e => {
          window.location.href = reader.result;
        };
        reader.readAsDataURL(file);
      } else {

        FileSaver.saveAs(
          file,
          `${organization}.vcf`,
          true
        );
      }
    }


  return (
    <>
    <Header/>
    <HomeReturnBar />

    {city=='' ? <h2> Loading data</h2> :
<div className='contact-card'>
    <div className='logo-background'>
    <div className='logo-card'>
    </div> 
    </div>

     <div style={{"height" : "100vh"}}>
     <p style={{"marginTop" : "10px", "marginBottom" : "20px"}} ><em>THANKS FOR SCANNING ~ !</em></p>
     <h5>{note}</h5>

     <div className='card-url-div'>
     <h4> Save / copy to share !</h4>
      <h4><em>{`https://myvcard.lol/#/card/${organization}`}</em></h4>
      <button onClick={() => {navigator.clipboard.writeText(`https://myvcard.lol/#/card/${organization}`)}}>Copy</button>
     </div>
     <h5>Please click the blue button to add us in your contacts !</h5>
   

    <a onClick={createVCard}>
       <button id='contact-btn'>ADD TO CONTACTS</button>
     </a>
     </div>

     </div>
}
     <Footer/>
 
     </>
  )
}

export default Card