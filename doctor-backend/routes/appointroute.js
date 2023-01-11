const express = require('express')
const router = express.Router()
const { doctors } = require('../models')
const { appointments } =require('../models')

router.get('/:doctorId',async (req, res)=>{
    const doctorId = req.params.doctorId
    const specificAppointment = await appointments.findAll({where:{ doctorId: doctorId}});
    res.json(specificAppointment)
  })

router.post('/', async(req, res)=>{
    const appointment = req.body
    await appointments.create(appointment)
    res.json(appointment)
})


module.exports = router
