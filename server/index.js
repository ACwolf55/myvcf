const express = require('express')
const app = express()
const path =require('path')
const cors = require('cors')
require("dotenv").config(); 
const {MongoClient} = require('mongodb');
const { MongoURI } = process.env;
const client = new MongoClient(MongoURI,{ useNewUrlParser:true, useUnifiedTopology: true})


const {PORT} = process.env
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// app.use(express.static('public'))
app.use(cors())
app.use(express.static(path.resolve(`${__dirname}/../build`))) 

app.listen(PORT, () => console.log(`Server runnning on port ${PORT}!`))


// app.post('/newCard',async(req,res)=>{
//     const {organization,URL,
//         city,address,state,zip,note,
//         mail,cellPhone, workPhone,
//     } = req.body
//     console.log(req.body)

//         //  const {organization,URL,
//         // city,address,state,zip,note,email,cellPhone, workPhone,
//         // logo,facebook,instagram} = req.body

//         console.log(req.body)

//         try {
//             await client.connect()
      
//             const cardRes = await client.db('quick-quotes').collection('vcards').insertOne(req.body)
            
            
//             return res.send(cardRes)
            
//           } catch (e){
//               console.error(e)
//           } finally {
//               await client.close()
//           }
// })

// app.get('/getCard/:organization',async(req,res)=>{
    
//     const {organization} = req.params

//     try {
//         await client.connect()
//         const card = await client.db('quick-quotes').collection('vcards').findOne( {organization:organization} )
//         console.log(card)
//         if(card==null){
//           return res.status(409).send('no organization found')
//         }else{
        
//         return res.send(card)
//         }
//       } catch (e){
//           console.error(e)
//       } finally {
//           await client.close()
//       }
// })


// app.post('/registerVendor', async(req,res)=>{
//     let newVendor = req.body;
//     console.log(req.body)
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(newVendor.password, salt);
//     newVendor.password = hash
//     try {
//         await client.connect()
//         const prevVendor = await client.db('quick-quotes').collection('vendors').findOne( {email:newVendor.email} )
//         console.log(prevVendor)
//         if(prevVendor!==null){
//           return res.status(409).send('email already registered')
//         }else{
//         await client.db('quick-quotes').collection('vendors').insertOne(newVendor)
//         const registeredVendor = await client.db('quick-quotes').collection('members').findOne( {email:newVendor.email} )
        
//         return res.send(newVendor.email)
//         }
//       } catch (e){
//           console.error(e)
//       } finally {
//           await client.close()
//       }
// })
