import React from 'react'
import LandSecOne from '../../Components/LandingPageSecOne/LandSecOne'
import {Container} from 'react-bootstrap'
import LandSecTwo from '../../Components/LandingPageSecTwo/LandSecTwo'
import LandSecThree from '../../Components/LandPageSecThree/LandSecThree'

const HomePage = () => {
  return (
    <>
      <Container>
        <LandSecOne/>  
        <LandSecTwo/>
        <LandSecThree/>
      </Container>
    </>
  )
}

export default HomePage