import React from 'react'
import DIU from '../../Images/DIU.png'
import SPSC from '../../Images/spsc.png'
const Edu = () => {
  return (
    <>
    <div className="EduWrapper">

      <div className="uni">
          <div className="eduLeft" style={{backgroundImage:`url(${DIU})`}}></div>
          <div className="eduRight tempo">
            <p>2022-present</p>
            <h3>Daffodil International University</h3>
            <h5>BSc. in Computer Science and Engineering</h5>
            <p>Ashulia, Savar, Dhaka, Bangladesh</p>
          </div>
      </div>

      <div className="uni clg">
      <div className="eduRight">
            <p>2019-2021</p>
            <h3>Shaheed Police Smrity College</h3>
            <h5>Higher Secondary C. Cirtificate : Science</h5>
            <p>Mirpur, Dhaka, Bangladesh</p>
          </div>
          <div className="eduLeft">
            <img src={SPSC} alt="" />
          </div>
      </div>
    </div>
    </>
  )
}

export default Edu