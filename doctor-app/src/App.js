import Home from "./components/Home";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Doctor from "./components/Doctor";
import SpecDoc from "./components/SpecDoc";
import Doc from "./components/Doc";
import Login from "./components/Login";
import Appoints from "./components/Appoints";
// import AddDoctor from "./components/AddDoctor";
import Add from "./components/Add";
import AddPatient from "./components/AddPatient";
import PatApp from "./components/PatApp";
function App() {
  return (
    <>
    <Topbar/>
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/doctors' element={<Doctor/>}/>
            <Route path='/onedoc/:docId' element={<SpecDoc/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/doclogin'element={<Doc/>}/>
            <Route path='/docappoints'element={<Appoints/>}/>
            {/* <Route path='/add'element={<AddDoctor/>}/> */}
            <Route path='/addDoc'element={<Add/>}/>
            <Route path='/addPat'element={<AddPatient/>}/>
            {/* <Route path='/patapp'element={<PatApp/>}/> */}


              
        </Routes>
    </>
  );
}

export default App;
