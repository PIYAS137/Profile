import React from 'react'

const Skill = () => {
  return (
    <>
    <h1 style={{marginBottom:"1em",color:"white"}}>Skills</h1>
    <div className="Skillwrapper">
    <span className='level0'>00%</span>
    <span className='level10'>10%</span>
    <span className='level20'>20%</span>
    <span className='level30'>30%</span>
    <span className='level40'>40%</span>
    <span className='level50'>50%</span>
    <span className='level60'>60%</span>
    <span className='level70'>70%</span>
    <span className='level80'>80%</span>
    <span className='level90'>90%</span>
    <span className='level100'>100%</span>
    <div className="langWrapper">
      <div className="html lang"><p>HTML5</p></div>
      <div className="css lang"><p>CSS3</p></div>
      <div className="bootstrap lang"><p>Bootstrap5</p></div>
      <div className="javascript lang"><p>JavaScript</p></div>
      <div className="typescript lang"><p>TypeScript</p></div>
      <div className="react lang"><p>React</p></div>
    </div>
    </div>
    </>
  )
}

export default Skill