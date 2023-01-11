import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Appoints = () => {

      const location = useLocation();
      console.log(location.state.name)
  
     const [appointments, setAppointments] = useState()
  
     useEffect(()=>{
      axios.get(`http://localhost:5003/appointments/${location.state.id}`).then((response)=>{
//         console.log(response.data)
         setAppointments(response.data)
      })
     },[])

  return (
    <div className='container-table'>



{/* <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> */}




<Table striped bordered hover>
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

    </div>
  )
}

export default Appoints