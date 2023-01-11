import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const SpecDoc = () => {

  const [Name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [Email, setEmail] = useState('')
  const [Contact, setContact] = useState('')
  const [Address, setAddress] = useState('')
  const [Reason, setReason] = useState('')
  const [Date, setDate] = useState('')
  const [Time, setTime] = useState('')
  

    const navigate = useNavigate();
     let { docId } = useParams();
    const [specificDoctor, setSpecificDoctor] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:5003/doctors/byId/${docId}`).then((response)=>{
            setSpecificDoctor(response.data)
        })
      },[])

      const onSubmit = (data)=>{
        axios.post("http://localhost:5003/appointments",{name: Name, age: Age, email: Email, contact: Contact, address: Address, reason: Reason, date:Date, time:Time ,doctorId:docId }).then((response)=>{
            console.log("Submitted")
            alert("Your Appointment has been Booked!")
            navigate('/')
          })
      }
  return (
    <div>
            <>
{/* <div>
  <h1>Book your appointment with {specificDoctor.name}</h1>
</div> */}
{/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment has been Booked</Modal.Title>
        </Modal.Header>
        <Modal.Body>Be available on the Date</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Awesome!
          </Button>
        </Modal.Footer>
      </Modal> */}


        <h2 className='add-doc-info'> Book Appointment with {specificDoctor.name}</h2>

    <div className="container-app">
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
            <Form.Control type="text" placeholder="Dr.Nick" value={Name} onChange={(e) => setName(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Age">
            <Form.Control type="text" placeholder="Bangalore" value={Age} onChange={(e) => setAge(e.target.value)} />
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingInput" label="Email">
            <Form.Control type="email" placeholder="Bangalore" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </FloatingLabel>


          <FloatingLabel controlId="floatingInput" label="Contact">
            <Form.Control type="text" placeholder="Pediatrics" value={Contact} onChange={(e) => setContact(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Address">
            <Form.Control type="text" placeholder="Pediatrics" value={Address} onChange={(e) => setAddress(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Reason">
            <Form.Control type="text" placeholder="Pediatrics" value={Reason} onChange={(e) => setReason(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Date">
            <Form.Control type="date" placeholder="Pediatrics" value={Date} onChange={(e) => setDate(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Time">
            <Form.Control type="time" placeholder="Pediatrics" value={Time} onChange={(e) => setTime(e.target.value)} />
          </FloatingLabel>

          <Button type="submit" onClick={onSubmit}>Book Appointment</Button> 
        
          {/* <div className='sub'> <Button type="submit" onClick={(e) => { onSubmit(e); handleShow(e);}}>Book Appointment</Button> </div> */}
    </div>
    </>
    </div>
  )
}

export default SpecDoc