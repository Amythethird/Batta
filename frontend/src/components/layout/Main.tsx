import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../landing';
import Login from '../login';


const Main = () => {
return (  
//Routing for Elements       
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
);
}
export default Main;