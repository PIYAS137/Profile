import React from 'react'

const OneProjectWork = ({ data }) => {
    const { id, image, link, liteColor, name, tightColor, title } = data;
    if (id % 2 != 0) {
        return (
            <div className="oneProjectWrapper">
                <div className="left">
                    <button style={{cursor:"default", color: `${tightColor}`, backgroundColor: `${liteColor}` }}>Gintech</button>
                    <h2>{name}</h2>
                    <p>{title}</p>
                    <a style={{ backgroundColor: `${tightColor}` }} href={link}>View Project...</a>
                </div>
                <div className="right" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
        )
    } else {
        return (
            <div className="oneProjectWrapper">
                <div className="right" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="left" style={{paddingLeft:"3em"}}>
                    <button style={{cursor:"default", color: `${tightColor}`, backgroundColor: `${liteColor}` }}>Gintech</button>
                    <h2>{name}</h2>
                    <p style={{maxWidth:"100%"}}>{title}</p>
                    <a style={{ backgroundColor: `${tightColor}` }} href={link}>View Project...</a>
                </div>
            </div>
        )
    }
}

export default OneProjectWork