import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../landing';
import Login from '../login';
import Shops from '../app/shops';
import User from '../app/user'

//
// async function loginUser(credentials) {
//   return fetch('https://www.mecallapi.com/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }

const Main = () => {

return (  
//Routing for Elements       
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/shops' element={<Shops/>}></Route>
      <Route path='/user' element={<User tag={["Unverpackt", "Nachhaltig"]}/>}></Route>
    </Routes>
);
}
export default Main;