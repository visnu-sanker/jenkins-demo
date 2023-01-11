import React from 'react'
import * as Yup from "yup";
import axios from 'axios'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


const Add = () => {
    const navigate = useNavigate();

    const initialValues={
        name:"",
        spl:"",
        exp:"",
        contact:"",
        email:"",
        pass:""
    }

    const validationSchema = Yup.object().shape({
        name:Yup.string().required(),
        spl:Yup.string().required(),
        exp:Yup.string().required(),
        contact:Yup.string().required(),
        email:Yup.string().required(),
        pass:Yup.string().min(3).max(15).required()
      });

    const onSubmit = (data)=>{
        axios.post("http://localhost:5003/doctors",data,{headers:{accessToken: sessionStorage.getItem("accessToken") }}).then((response)=>{
            console.log("Submitted")
            navigate('/doctors')
            alert("Doctor has been Added!")
        })
        // console.log(data)
    }
    

  return (
    <div className='container-app'>
          
<h1 className='home-btn'>Add Doctor</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
             <div className="mb-3 home-btn">
              <label>Name </label>
              <ErrorMessage name="name" component="span" /><br></br>
              <Field id="inputRegisterDoctor" name="name" placeholder="Name"/>
              </div>

              <div className="mb-3 home-btn">
              <label>Specialization: </label>
              <ErrorMessage name="spl" component="span" /><br></br>
              <Field autocomplete="off" id="inputRegisterDoctor" name="spl" placeholder="Specialization"/>
              </div>

              <div className="mb-3 home-btn">
              <label>Experience: </label>
              <ErrorMessage name="exp" component="span" /><br></br>
              <Field autocomplete="off" id="inputRegisterDoctor" name="exp" placeholder="Experience"/>
              </div>

              <div className="mb-3 home-btn">
              <label>Contact: </label>
              <ErrorMessage name="contact" component="span" /><br></br>
              <Field autocomplete="off" id="inputRegisterDoctor" name="contact" placeholder="Contact"/>
              </div>

              <div className="mb-3 home-btn">
              <label>Email: </label>
              <ErrorMessage name="email" component="span" /><br></br>
              <Field autocomplete="off" type="email" id="inputRegisterDoctor" name="email" placeholder="example@gmail.com"/>
              </div>

              <div className="mb-3 home-btn">
              <label>Password: </label>
              <ErrorMessage name="pass" component="span" /><br></br> 
              <Field autocomplete="off" type="password" id="inputRegisterDoctor" name="pass" placeholder="Password"/>
              </div>
              <div className="mb-3 home-btn">
              <Button variant="contained" type="submit">Add Doctor</Button>
              </div>
              <br></br>
              {/* <div className="mb-3 home-btn">
              <Button color="secondary" variant="contained" type="reset">Reset</Button>
              </div> */}

            </Form>
          </Formik>

    </div>
  )
}

export default Add