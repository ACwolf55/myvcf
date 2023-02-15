import React,{useState} from 'react'
import axios from 'axios'


 const ImageTest = () => {

    const [file, setfile] = useState()
    const [name,setName] = useState('test')

    const upload = event =>{

        const data = new FormData();
        data.append("name",name);
        data.append("file",file)

        axios.post('/picUpload',data).then((res)=>{
            console.log(res)

            res.send(req.body)
        }).then((err)=>console.log(err))
    }


  return (
    <div>
     <h1>ImageTest</h1>
        <form action='#'>
           <label htmlFor='name'>name here</label>
           <input type='text'></input>

           <label htmlFor='file'>File</label>
           <input type='file' accept=".png, .jpg, .jpeg"
            onChange={e=>{
                const file = e.target.files[0];
                setfile(file)
            }}
            />
        </form>
        <button onClick={upload}>Uplaod</button>

    </div>
  )
}
export default ImageTest