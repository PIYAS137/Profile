import React from 'react'
import { Container } from 'react-bootstrap'
import Skill from '../../Components/LandPageSecThree/WonderBundle/Skill'
import Edu from '../../Components/LandPageSecThree/WonderBundle/Edu'
import './ResumePage.css'

const ResumePage = () => {
  return (
    <Container>
      <div className="resumePageWrapper">
        <div className="skillFromResumePage">
          <h1 className="resumePageTitle">... MY SKILLS ...</h1>
          <p className='resumePageDesk'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ratione!</p>
          <Skill />
        </div>
        <div className="eduFromEduPage">
          <h1 className='resumePageTitle'>... EDUCATION ...</h1>
          <p className='resumePageDesk'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ratione!</p>
          <Edu />
        </div>
      </div>
    </Container>
  )
}

export default ResumePage