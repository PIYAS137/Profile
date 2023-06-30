import React from 'react'
import '../LandingPageSecOne/LandSecOne.css'
import Piyas from '../Images/Piyas.jpg'
import { FaAngleDoubleDown } from "react-icons/fa";

const LandSecOne = () => {
    return (
        <div className="masterWrapper">
            <div className='LandPageSecOneWrapper'>
                <div className="scrollIcons">
                    {/* <FaAngleDoubleDown className='scrollIcon' /> */}
                </div>
                <div className="LPSOLeftRightWrapper">
                    <div className="LPSOLeft">
                        <p>Hi I'm</p>
                        <h1 data-text="Piyas">Piyas Mahamude Alif</h1>
                        <p>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button className='downloadButton'>Download my CV</button>
                    </div>
                    <div className="LPSORight">
                        <img src={Piyas} />
                    </div>
                </div>



                <div className="heroFooter">
                    <div className="leftEx">
                        <h1 style={{fontSize:"3rem"}}>3+</h1><sub style={{marginLeft:".5em",marginTop:"1em"}}>Year Exp</sub>
                    </div>
                    <div className="midPro">
                        <h1 style={{fontSize:"3rem"}}>15+</h1><sub style={{marginLeft:".5em",marginTop:"1em"}}>Project</sub>
                    </div>
                    <div className="rightCom">
                        <div className="topCom">Work With : </div>
                        <div className="bottomCom">
                           <div className="companyEx">
                           <h5>Google</h5>
                            <h5>SpaceX</h5>
                            <h5>Nasa</h5>
                            <h5>Toyota</h5>
                            <h5>IASB</h5>
                           </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default LandSecOne