import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Doctor = () => {
    useEffect(()=>{
        axios.get("http://localhost:5003/doctors").then((response)=>{
            setListOfDoctors(response.data)
        })
      },[])

      const [listOfDoctors, setListOfDoctors] = useState([]);
      const navigate = useNavigate();

  return (
    <div>
        {listOfDoctors.map((value,key)=>{

            return(
                <Card className='container-app' >
      <Card.Header as="h5">{value.name}</Card.Header>
      <Card.Body>
        <Card.Title>{value.name} is a {value.spl}</Card.Title>
        <Card.Text>
          {value.name} has {value.exp} years of Experience
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate(`/onedoc/${value.id}`)}} >Book Appointment</Button>
      </Card.Body>
    </Card>      


            //    <>
            //     <div>{value.name}</div>
            //     <button onClick={()=>{navigate(`/onedoc/${value.id}`)}}>Click</button>
            //     </>
            )
        })}

    </div>
  )
}

export default Doctor