import image from '../img/homebg.jpg'
import Button from 'react-bootstrap/Button';
// import { useEffect } from "react";
// import { ReactComponent as Svg } from "./logo.svg";
import doci from '../img/doc.jpg';

const Home = () => {
  
    return (
      <>
<div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:690,width:1300
    }}>
      <p>.</p>
      <h1 className='sub'>Application Home Page</h1>
      {/* <img src='../img/profile.png' alt='Loading...'></img> */}
      {/* <Button className='home-btn' variant="dark">Dark</Button> */}
      {/* <img src={`url(${image})`} alt='loading...'> </img> */}
      {/* <img src='doci' alt='loading...'> </img>  */}
    </div>
    </>
       )
}

export default Home