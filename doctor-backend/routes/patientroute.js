const express = require('express')
const router = express.Router()
const { patients } = require('../models')
const bcrypt = require('bcrypt')
// const {validateToken} = require('../middlewares/AuthMiddleware')
// const {sign, decode } = require('jsonwebtoken')

router.post("/", async (req, res) => {
    const {name, age, contact, email, pass} = req.body
    bcrypt.hash(pass,10).then((hash)=>{
      patients.create({
        name: name,
        age: age,
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

  module.exports = router