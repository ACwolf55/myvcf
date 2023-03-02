import React,{useState} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'


 const LogoUpload = () => {
    const {organization} = useParams()
    const navigate = useNavigate()

  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
 

  const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      previewFile(file);
      setSelectedFile(file);
      setFileInputState(e.target.value);
  };

  const previewFile = (file) => { 
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setPreviewSource(reader.result);
      };
  };

  const handleSubmitFile = async (e) => {
      e.preventDefault();
      if (!selectedFile) return;
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
          uploadImage(reader.result);
      };
      reader.onerror = () => {
          console.error('AHHHHHHHH!!');
    
      };
  };

  const uploadImage = async (base64EncodedImage) => {
      try {
          await fetch(`/picUpload/${organization}`, {
              method: 'POST',
              body: JSON.stringify({ data: base64EncodedImage }),
              headers: { 'Content-Type': 'application/json' },
          });
          setFileInputState('');
          setPreviewSource('');
      } catch (err) {
          console.error(err);
      }
  };
  return (
      <div>
          <h1 className="title">Upload an Image</h1>

          <h3>Optional  -  Upload a logo </h3>
  
          <form onSubmit={handleSubmitFile} className="form">
              <input
                  id="fileInput"
                  type="file"
                  name="image"
                  onChange={handleFileInputChange}
                  value={fileInputState}
                  className="form-input"
              />
              <button className="btn" type="submit">
                  Upload logo
              </button>
          </form>
          {previewSource && (
              <img
                  src={previewSource}
                  alt="chosen"
                  style={{ height: '300px' }}
              />
          )}

<button onClick={()=>navigate(`/card/${organization}`)}>Go to My Page</button>
         
      </div>
  );
//     const [image,setImage] = useState()
//     const [name, setName] = useState('test')

//     const [fileInputState, setFileInputState] = useState('');
//     const [previewSource, setPreviewSource] = useState('');
//     const [selectedFile, setSelectedFile] = useState();
//     const [successMsg, setSuccessMsg] = useState('');
//     const [errMsg, setErrMsg] = useState('');

//     // const upload = event =>{

//     //     const data = new FormData();
//     //     data.append("name",name);
//     //     data.append("file",file)

//     //     axios.post('/picUpload',data).then((res)=>{
//     //         console.log(res)
            
//     //     }).then((err)=>console.log(err))
//     // }

//     const handleFileInputChange = (e) => {
//       const file = e.target.files[0];
//       previewFile(file);
//       setSelectedFile(file);
//       setFileInputState(e.target.value);
//   };

//   const previewFile = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//         setPreviewSource(reader.result);
//     };
// };

// const handleSubmitFile = (e) => {
//     e.preventDefault();
//     if (!selectedFile) return;
//     const reader = new FileReader();
//     reader.readAsDataURL(selectedFile);
//     reader.onloadend = () => {
//         uploadImage(reader.result);
//     };
//     reader.onerror = () => {
//         console.error('error');
//         setErrMsg('something went wrong!');
//     };
// };

// const uploadImage = async (base64EncodedImage) => {
//     try {
//         await fetch('/picUpload', {
//             method: 'POST',
//             body: JSON.stringify({ data: base64EncodedImage }),
//             headers: { 'Content-Type': 'application/json' },
//         });
//         setFileInputState('');
//         setPreviewSource('');
//         setSuccessMsg('Image uploaded successfully');
//     } catch (err) {
//         console.error(err);
//         setErrMsg('Something went wrong!');
//     }
// };

//   return (
//     <div>
//      <h1>ImageTest</h1>
//         <form action='#'>
//            <label htmlFor='name'>name here</label>
//            <input type='text'></input>

//            <label htmlFor='file'>File</label>
//            <input type='file' accept=".png, .jpg, .jpeg"
//             onChange={e=>{
//                 handleFileInputChange(e)
//             }}
//             />
//         </form>
//         <button onClick={uploadImage} type='button'>Uplaod</button>
//              <br></br>
//               <br></br>
//         {previewSource && (
//           <img src={previewSource} className='image-preview'/>
//         )}

//     </div>
//   )
          }
export default LogoUpload