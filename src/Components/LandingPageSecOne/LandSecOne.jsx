import React from 'react'
import '../LandingPageSecOne/LandSecOne.css'
import Piyas from '../Images/Piyas.jpg'

const LandSecOne = () => {
    return (
        <div className="masterWrapper">
            <div className='LandPageSecOneWrapper'>
                <div className="LPSOLeftRightWrapper">
                    <div className="LPSOLeft">
                        <p>Hi I'm</p>
                        <h1>Piyas Mahamude Alif</h1>
                        <p>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button>Download my CV</button>
                    </div>
                    <div className="LPSORight">
                        <img src={Piyas} />
                    </div>
                </div>
                {/* <div className="LPSOBottom">
                    <p>Worked with</p>
                    <div className="LPSOBottomWrapper">
                        <div className="LPSOBBOX1 LPSOBBox">SpaceX</div>
                        <div className="LPSOBBOX2 LPSOBBox">Amazon</div>
                        <div className="LPSOBBOX3 LPSOBBox">Mircosoft</div>
                        <div className="LPSOBBOX4 LPSOBBox">Google</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default LandSecOne