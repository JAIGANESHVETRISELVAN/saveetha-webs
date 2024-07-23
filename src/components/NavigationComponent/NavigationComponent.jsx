import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomeComponent from '../HomeComponent/HomeComponent'
import AboutComponent from '../AboutComponent/AboutComponent'
import CourseComponent from '../CourseComponent/CourseComponent'
import EventComponent from '../EventComponent/EventComponent'

import './NavigationComponent.css'

const NavigationComponent = () => {
  return (
    <Router>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About US</Link></li>
                <li><Link to='/course'>Courses</Link></li>
                <li><Link to='/events'>Events</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path='/' element={<HomeComponent/>}/>
            <Route path='/about' element={<AboutComponent/>}/>
            <Route path='/course' element={<CourseComponent/>}/>
            <Route path='/events' element={<EventComponent/>}/>
        </Routes>
    </Router>
  )
}

export default NavigationComponent