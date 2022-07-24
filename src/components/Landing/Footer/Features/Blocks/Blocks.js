import React from 'react'
import './Blocks.scss'
export default function Blocks({ image, head,bg,font}) {
    return (
        <div style={{background:`${bg}`}} className="blocks-container">
            <img src={image} alt="" />
            <p style={{color:`${font}`}} className="blocks__elements__head">{head}</p>
        </div>
    )
}
