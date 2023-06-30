import React from 'react'
import { Col } from 'react-bootstrap';
import { FaLink } from "react-icons/fa";

const OneRecentWork = ({ datas }) => {
    const { image, name, title } = datas;
    return (
        <Col lg>
            <div className="RecentOneWrapper">
                <div className="linked">
                    <img src={image} />
                    <a href="#" style={{textDecoration:"none",color:"white"}}>
                    <FaLink className='linkedIcon'/>
                    </a>
                    <h3>{name}</h3>
                    <p>{title}</p>
                    <a href='#' className='SeeDetails'>Visite Web..?</a>
                </div>
            </div>
        </Col>
    )
}

export default OneRecentWork