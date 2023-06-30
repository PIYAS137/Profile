import React from 'react'
import LandSecOne from '../../Components/LandingPageSecOne/LandSecOne'
import {Container} from 'react-bootstrap'
import LandSecTwo from '../../Components/LandingPageSecTwo/LandSecTwo'
import LandSecThree from '../../Components/LandPageSecThree/LandSecThree'
import LandSecFour from '../../Components/LandingPageSecFour/LandSecFour'
import LandPageSecFive from '../../Components/LandPageSecFive/LandPageSecFive'
import './HomePage.css'
import { FaSpaceShuttle,FaGripfire } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <Container>
        <LandSecOne/>  
        <LandSecTwo/>
        <LandSecThree/>
        <LandSecFour/>
        <LandPageSecFive/>
      </Container>
      <div className="goUp">
        <a href="#"><FaSpaceShuttle className='rocket'/></a>
        <FaGripfire className='fire'/>
      </div>
    </>
  )
}

export default HomePage