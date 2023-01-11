import React from 'react'
import * as Yup from "yup";
import axios from 'axios'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {

  const navigate = useNavigate();

  const initialValues={
    name:"",
    age:"",
    contact:"",
    email:"",
    pass:""
}

const validationSchema = Yup.object().shape({
  name:Yup.string().required(),
  age:Yup.string().required(),
  contact:Yup.string().required(),
  email:Yup.string().required(),
  pass:Yup.string().min(3).max(15).required()
});

const onSubmit = (data)=>{
  axios.post("http://localhost:5003/patients",data).then((response)=>{
      console.log("Submitted")
      alert("Successfull Patient details registered!")
      navigate('/');
  })
  // console.log(data)
}


  return (
    
    <div>
      <h1>Register Patient</h1>
        <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
              <label>Patient Name: </label>
              <ErrorMessage name="patientName" component="span" />
              <Field id="inputRegisterPatient" name="name" placeholder="(Ex. John...)"/>

              <label>Age: </label>
              <ErrorMessage name="patientAge" component="span" />
              <Field autocomplete="off" id="inputRegisterPatient" name="age" placeholder="Age"/>

              <label>Address: </label>
              <ErrorMessage name="patientAddress" component="span" />
              <Field autocomplete="off" id="inputRegisterPatient" name="contact" placeholder="Address"/>

              <label>Email: </label>
              <ErrorMessage name="patientEmail" component="span" />
              <Field autocomplete="off" type="email" id="inputRegisterPatient" name="email" placeholder="example@gmail.com"/>

              <label>Password: </label>
              <ErrorMessage name="patientPassword" component="span" />
              <Field autocomplete="off" type="password" id="inputRegisterPatient" name="pass" placeholder="Password"/>
              
              <Button variant="contained" type="submit">Register</Button>
              <br></br>
              <Button color="secondary" variant="contained" type="reset">Reset</Button>
            </Form>
          </Formik>
        </div>
    </div>
  )
}

export default AddPatient