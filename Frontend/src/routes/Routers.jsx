import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Doctors from '../pages/Doctors/Doctors'
import Home from '../pages/Home'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import MyAccount from '../Dashboard/user-account/MyAccount'
import DoctorAccount from '../Dashboard/doctor-account/DoctorAccount'
import ProtectedRoutes from './ProtectedRoutes'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors/:id" element={<DoctorDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/users/profile/me" element={<ProtectedRoutes allowedRoles={['patient']} ><MyAccount/></ProtectedRoutes>} />
        <Route path="/doctors/profile/me" element={<ProtectedRoutes allowedRoles={['doctor']}><DoctorAccount/></ProtectedRoutes>} />
    </Routes>
  )
}

export default Routers
