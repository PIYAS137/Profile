import React from 'react'
import LandSecOne from '../../Components/LandingPageSecOne/LandSecOne'
import {Container} from 'react-bootstrap'
import LandSecTwo from '../../Components/LandingPageSecTwo/LandSecTwo'

const HomePage = () => {
  return (
    <>
      <Container>
        <LandSecOne/>  
        {/* <LandSecTwo/> */}
      </Container>
    </>
  )
}

export default HomePage