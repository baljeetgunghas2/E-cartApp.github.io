import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import './App.css';
import Homepage from './Component/Homepage';
import DetailsPage from './Component/DetailsPage';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Profile from './Component/Profile';

function App() {

  return (
    <> 
    <BrowserRouter>
      <Routes>
          <Route path='/' element={ <Homepage />}/>
          <Route path='/product:id' element={<DetailsPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
