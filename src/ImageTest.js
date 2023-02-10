import React,{useState} from 'react'
import axios from 'axios'


 const ImageTest = () => {

    const [file, setfile] = useState()

    const upload =()=>{
        const data = new FormData();
        data.append("name",name);
        data.append("file",file)
        console.log(data)

        axios.post('/picUpload',data).then((res)=>{
            console.log(res.data)

            
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

    </div>
  )
}
export default ImageTest