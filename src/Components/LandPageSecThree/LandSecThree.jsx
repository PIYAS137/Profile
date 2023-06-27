import React, { useState } from 'react'
import './LandSecThree.css'
import ResumeSlider from './ResumeSlider'


const LandSecThree = () => {
    const [skill,setSkill]=useState(true)
    const [edu,setEdu]=useState(false)
    const [refe,setRefe]=useState(false)
    const handleClinkSkill=()=>{
        setSkill(true)
        setEdu(false)
        setRefe(false)
    }
    const handleClinkEdu=()=>{
        setSkill(false)
        setEdu(true)
        setRefe(false)
    }
    const handleClinkRefe=()=>{
        setSkill(false)
        setEdu(false)
        setRefe(true)
    }
  return (
    <div className='resumeWrapper'>
        <h1>... My Resume ...</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <button onClick={handleClinkSkill} className={`${skill?"activex":"nonactive"}`}>Skill</button>
        <button onClick={handleClinkEdu} className={`${edu?"activex":"nonactive"}`}>Education</button>
        <button onClick={handleClinkRefe} className={`${refe?"activex":"nonactive"}`}>References</button>
        <div className="wonderResume">
            <ResumeSlider data={{skill,edu,refe}}/>
        </div>
    </div>
  )
}

export default LandSecThree