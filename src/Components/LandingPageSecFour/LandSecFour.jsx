import React from 'react'
import '../LandingPageSecFour/LandSecFour.css'
import { FaLaugh, FaQuoteLeft } from "react-icons/fa";
import { InspireArr } from '../../Components/RecentWorkData'

const LandSecFour = () => {
    return (
        <>
            <h1 className='insTitle'>... Inspriation ...</h1>
            <div className='clientWrapper'>
                {InspireArr.map((one) => {
                    return (

                        <div className="box">
                            <FaQuoteLeft className='quote' />
                            <p>{one.desk}</p>
                            <div className="tempoClientWrapper">
                                <FaLaugh style={{ fontSize: "1.2rem", marginTop: "-.5em", marginRight: ".5em" }} />
                                <h5>{one.name}</h5>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default LandSecFour