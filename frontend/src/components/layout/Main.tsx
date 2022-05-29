import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../landing';
import Login from '../login';
import Shop from '../app/shops';


const Main = () => {
return (  
//Routing for Elements       
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/shops' element={<Shop name='Test'/>}></Route>
    </Routes>
);
}
export default Main;