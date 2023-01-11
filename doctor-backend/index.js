const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require("./models");

//Routes
const doctorRoutes = require('./routes/docroute')
app.use('/doctors',doctorRoutes)

const patientRoutes = require('./routes/patientroute')
app.use('/patients',patientRoutes)

// const PatientRoutes = require('./routes/PatientRoute')
// app.use('/patients',PatientRoutes)

const AppointmentRoutes = require('./routes/appointroute')
app.use('/appointments',AppointmentRoutes)


db.sequelize.sync().then(() => {
    app.listen(5003,()=>{
        console.log("Server listening on 5003")
    })
});