import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import ErrorPage from '../Pages/Errorpage/ErrorPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import ProjectPage from '../Pages/Projectpage/ProjectPage';
import ResumePage from '../Pages/ResumePage/ResumePage';
import AppNavbar from '../Layout/AppNavbar';

const AppIndex = () => {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppIndex