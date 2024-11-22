import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import MyAppointments from './pages/MyAppointments'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import Contact from './pages/Contact'
import Appointment from './Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/my-appointment' element={<MyAppointments/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
