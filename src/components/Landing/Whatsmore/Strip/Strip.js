import React from 'react'
import './Strip.scss'

export default function Strip({image,head,para}) {
  return (
    <div className={"strip-container " + ( head === 'Medical Calculators' ? "strip__no__border" : null)}>
        <img src={image} alt="" />
        <p className="strip__elements__head">{head}<span className="strip__elements__para"> : {para}</span></p>
    </div>
  )
}
