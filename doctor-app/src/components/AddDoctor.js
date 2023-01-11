import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useState } from "react"
import Modal from 'react-bootstrap/Modal';

const AddDoctor = () => {
 
    const [Name, setName] = useState('')
    const [Specialization, setSpl] = useState('')
    const [Experience, setExp] = useState('')
    const [Contact, setContact] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      if(Name && Experience && Contact && Email && Password && Specialization) {
        setShow(true);
        return
    }
      
    }
    const onSubmit = (e) => {
      e.preventDefault()

      if(!Name) {
          alert('Please add Name')
          return
      }

      if(!Email) {
        alert('Please add Place')
        return
    }
    
    if(!Specialization) {
      alert('Please add Specialization')
      return
  }

        //   axios.post("http://localhost:5003/doctors",e,{name: Name, spl: Specialization, exp: Experience, contact: Contact, email: Email, pass: Password} )

        axios.post("http://localhost:5003/doctors",e,{headers:{accessToken: sessionStorage.getItem("accessToken") }}).then((response)=>{
            console.log("Submitted")
            alert("Successfully Doctor Created!")
        })


        setName('')
        setExp('')
        setSpl('')
        setContact('')
        setEmail('')
        setPassword('')
        

        //alert('Doctor Added')
    }
    
    

    return (
        <>



<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>Look Doctor List page to see the update!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Awesome!
          </Button>
        </Modal.Footer>
      </Modal>

        <h2 className='add-doc-info'> Add Doctor info</h2>
        < div className="container-app">
          
          <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
            <Form.Control type="text" placeholder="Dr.Nick" value={Name} onChange={(e) => setName(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Specialization">
            <Form.Control type="text" placeholder="Pediatrics" value={Specialization} onChange={(e) => setSpl(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Experience">
            <Form.Control type="text" placeholder="Bangalore" value={Experience} onChange={(e) => setExp(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Contact">
            <Form.Control type="text" placeholder="9483756389" value={Contact} onChange={(e) => setContact(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Email">
            <Form.Control type="email" placeholder="doctor@gmail.com" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Password">
            <Form.Control type="password" placeholder="docpassword" value={Password} onChange={(e) => setPassword(e.target.value)} />
            <Form.Text className="text-muted">
             We'll never share your password with anyone else.
            </Form.Text>
          </FloatingLabel>


          <div className='sub'> <Button type="submit" onClick={onSubmit}>Add Doctor</Button> </div>
          {/* <div className='sub'> <Button type="submit" onClick={(e) => { onSubmit(e); handleShow(e);}}>Add Doctor</Button> </div> */}



        </div>
        </>
      );
    }
export default AddDoctor