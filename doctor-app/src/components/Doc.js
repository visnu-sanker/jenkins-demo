import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../img/bg.jpg';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Doc = () => {

    const location = useLocation();
  console.log(location.state.name)
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState()

  // useEffect(()=>{
  //   axios.get(`http://localhost:5003/appointments/${location.state.id}`).then((response)=>{
  //     console.log(response.data)
  //     setAppointments(response.data)
  //   })
  // },[])

  const list = () => {

    axios.get(`http://localhost:5003/appointments/${location.state.id}`).then((response)=>{
      console.log(response.data)
      setAppointments(response.data)
      //navigate('/docappoints',{state: {id: response.data.userDetails.id ,name: response.data.userDetails.name, spl:response.data.userDetails.spl}})
    })
    

  }


  return (
    <>
    <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    height:690,width:1300
    }}>
      <p>.</p>
      <div>
      <div className='container-app'>
       <Card className="text-center">
      <Card.Header>Logged in as Doctor</Card.Header>
      <Card.Body>
        <Card.Title>Hi, {location.state.name}!</Card.Title>
        <Card.Text>
          This is your profile dashboard. You can see your appointments below.
        </Card.Text>
        <Button variant="primary" onClick={list} >See appointments</Button>
      </Card.Body>
      <Card.Footer className="text-muted">You have appointments!</Card.Footer>
    </Card>
    </div>
        <div>{appointments&&appointments.map((value) => {
            return (
                <div className='container-table'>


<Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Reason</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
      {appointments&&appointments.map((value) => {
        return (
        <tr>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.age}</td>
          <td>{value.email}</td>
          <td>{value.contact}</td>
          <td>{value.address}</td>
          <td>{value.reason}</td>
          <td>{value.date}</td>
          <td>{value.time}</td>
        </tr>
        )
    })}
      </tbody>
    </Table>



                    {/* <div>{value.name}</div>
                    <div>{value.age}</div>
                    <div>{value.date}</div>
                     <td>{value.id}</td> */}
                </div>

            )
        })}
        </div>

    </div>

    </div>
   
    </>
  )
}

export default Doc