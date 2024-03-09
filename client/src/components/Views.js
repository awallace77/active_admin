import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import SignUp from './login/SignUp'

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<Login />} /> 
    </Routes>

  ) 
}

export default Views