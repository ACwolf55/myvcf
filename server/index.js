const express = require('express')
const app = express()
const path =require('path')
const cors = require('cors')
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs')
require("dotenv").config(); 
const {MongoClient} = require('mongodb');
const { MongoURI } = process.env;
const client = new MongoClient(MongoURI,{ useNewUrlParser:true, useUnifiedTopology: true})
const {cloudinary} = require('./cloudinary')

const {PORT} = process.env
app.use(express.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({lmit:'50mb',extended:true}))
app.use(bodyParser.json())
// app.use(express.static('public'))
app.use(cors())
app.use(express.static(path.resolve(`${__dirname}/../build`))) 

app.listen(PORT, () => console.log(`Server runnning on port ${PORT}!`))

app.post('/picUpload/:organization', async (req,res)=>{     
    console.log(req.params.organization)
    const {organization} = req.params
    
    try {
      //upload pic to cloudinary
      const cloudRes = await cloudinary.uploader.
      upload(req.body.data, {
        upload_preset: 'overlap'
      })
      const pic_url =  cloudRes.public_id
      
       //insert pic_url into venders on mongoDB
      await client.connect()
      const filter = { organization: organization };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          pic_url: pic_url
        },
      };
      const dbRes = await client.db('quick-quotes').collection('vendors')
      .updateOne( filter, updateDoc,options)

      console.log(dbRes)
      
      res.send(pic_url)
    } catch (e){
        console.error(e)
    } finally {
      await client.close()
  }
})


app.post('/newCard',async(req,res)=>{
    const {organization,URL,
        city,address,state,zip,note,
        email,cellPhone, workPhone,
    } = req.body

    let vcf ={}

    if(workPhone==''){
        vcf={organization,URL,
            city,address,state,zip,note,
            mail,cellPhone
        } 
    }else{
       vcf={organization,URL,
            city,address,state,zip,note,
            mail,cellPhone, workPhone
        } 
    }
    console.log(req.body)
        //  const {organization,URL,
        // city,address,state,zip,note,email,cellPhone, workPhone,
        // logo,facebook,instagram} = req.body

        try {
            await client.connect()
      
            const cardRes = await client.db('quick-quotes').collection('vcards').insertOne(vcf)
            
            
            return res.send(cardRes)
            
          } catch (e){
              console.error(e)
          } finally {
              await client.close()
          }
})

app.get('/getCard/:organization',async(req,res)=>{
    
    const {organization} = req.params

    try {
        await client.connect()
        const card = await client.db('quick-quotes').collection('vendors').findOne( {organization:organization} )
        console.log(card)
        if(card==null){
          return res.status(409).send('no organization found')
        }else{
        
        return res.send({vcf:card.vcf,pic_url:card.pic_url})
        }
      } catch (e){
          console.error(e)
      } finally {
          await client.close()
      }
})


app.post('/registerVendor', async(req,res)=>{
    let newVendor = req.body;
    console.log(req.body)
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newVendor.password, salt);
    newVendor.password = hash
    try {
        await client.connect()
        const prevVendor = await client.db('quick-quotes').collection('vendors').findOne( {email:newVendor.email} )
        console.log(prevVendor)
        if(prevVendor!==null){
          return res.status(409).send('email already registered')
        }else{
        await client.db('quick-quotes').collection('vendors').insertOne(newVendor)
        const registeredVendor = await client.db('quick-quotes').collection('members').findOne( {email:newVendor.email} )
        
        return res.send(newVendor.email)
        }
      } catch (e){
          console.error(e)
      } finally {
          await client.close()
      }
})

app.post('/loginVendor', async(req,res)=>{
    let { email, password } = req.body;
  
    try {
      await client.connect()
  
    //   const user = await client.db('quick-quotes').collection('users').findOne() 
      const user = await client.db('quick-quotes').collection('vendors').findOne( {email:email} )
    //   const user = await cursor.toArray()
    //   user = user[0]
        if(!user){
          return res.status(401).send('Vendor not found')
        }
        let isAuth = bcrypt.compareSync(password, user.password);
        if (!isAuth) {
          return res.status(401).send("incorrect password");
        }
        return res.status(200).send(user);
      }
      catch (e){
        console.error(e)
    } finally {
        await client.close()
    }
  })
