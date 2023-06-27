import React from 'react'
import './ProjectPage.css'
import { Container } from 'react-bootstrap'
import OneProjectWork from '../../Components/temporaryComponents/OneProjectWork'
import { ProjectArr } from '../../Components/ProjectArray'

const ProjectPage = () => {
  return (
    <Container>
      <div className="projectPageWrapper">
        <h1 className='projectHeading'>All Projects</h1>
        <p className='projectTitle'>The quick Brown fox jumps over the lazy dog. The quick Brown fox jumps over the lazy dog.</p>
        {ProjectArr.map((one) => {
          return (
            <OneProjectWork key={one.id} data={one} />
          )
        })}
      </div>
    </Container>
  )
}

export default ProjectPage