import React from 'react'
import Home from './home/Home';
import Courses from './courses/Temp';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Contacts from './contacts/Contacts';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';


function App() {

  const [authUser,setAuthuser]=useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
