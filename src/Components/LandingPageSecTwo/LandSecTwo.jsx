import React from 'react'
import '../LandingPageSecTwo/LandSecTwo.css'
import { Container, Row } from 'react-bootstrap'
import { RecentWorkArr } from '../RecentWorkData'
import OneRecentWork from '../temporaryComponents/OneRecentWork'

const LandSecTwo = () => {
  return (
    <Container>
      <div className="masterWrapper2">
        <h1>... Recent Works ...</h1>
        <p>Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className="semiwrapper2">
          <Row>
          {RecentWorkArr.map((one)=>{
            return(
              <OneRecentWork key={one.id} datas={one}/>
            )
          })}
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default LandSecTwo