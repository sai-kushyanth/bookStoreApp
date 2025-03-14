import React from 'react'
import Home from './home/Home';
import Courses from './courses/Temp';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Contacts from './contacts/Contacts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
