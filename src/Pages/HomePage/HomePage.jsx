import React from 'react'
import LandSecOne from '../../Components/LandingPageSecOne/LandSecOne'
import {Container} from 'react-bootstrap'
import LandSecTwo from '../../Components/LandingPageSecTwo/LandSecTwo'
import LandSecThree from '../../Components/LandPageSecThree/LandSecThree'
import LandSecFour from '../../Components/LandingPageSecFour/LandSecFour'
import LandPageSecFive from '../../Components/LandPageSecFive/LandPageSecFive'

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
    </>
  )
}

export default HomePage