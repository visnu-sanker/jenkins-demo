const express = require('express')
const router = express.Router()
const { doctors } = require('../models')
const bcrypt = require('bcrypt')
const {validateToken} = require('../middlewares/AuthMiddleware')

const {sign, decode } = require('jsonwebtoken')

//Doctor
router.get("/", async(req, res)=>{
    const listOfDoctors = await doctors.findAll()
    res.json(listOfDoctors)
})

router.get('/byId/:docId',async (req, res)=>{
  const docId = req.params.docId
  const specificDoctor = await doctors.findByPk(docId);
  res.json(specificDoctor)
})

router.post("/", validateToken, async (req, res) => {
    const {name, spl, exp, contact, email, pass} = req.body
    bcrypt.hash(pass,10).then((hash)=>{
      doctors.create({
        name: name,
        spl: spl,
        exp: exp,
        contact: contact,
        email: email,
        pass: hash
      })
      res.json("Successfully Registered")
    })

    // const doctor = req.body;
    // await doctors.create(doctor);
    // res.json(doctor);
  });

router.post('/login', async(req, res)=>{
  
  const { email, pass} = req.body;
  const doctor = await doctors.findOne({where:{email: email}})
  // console.log(doctor)
  
  if(!doctor){
    res.json({error:"User Doesn't exist"});
  }else{
    bcrypt.compare(pass,doctor.pass).then(async(match)=>{
      if (!match){
        res.json({error: "Wrong Username and Password Combination"});
      } else{
        const userDetails = { id: doctor.id ,name: doctor.name, spl: doctor.spl, email: doctor.email}
        const accessToken = sign({email: doctor.email, id: doctor.id},
        "importantSecret");
        res.json({accessToken, userDetails})
      }
    })
  }

})

module.exports = router