import React from 'react'
import Blocks from './Blocks/Blocks'
import './Features.scss'

export default function Features() {
  return (
    <div className="features-container">
        <h4>HIDOC DR. FEATURES </h4>
        <div className="features__row">
        <Blocks image="/images/folder.png" head="Drug Database" bg="#d9f4ff" font="#7caefe" /> 
        <Blocks image="/images/folder.png" head="Social Network" bg="#fddad8" font="#f54337" /> 
        <Blocks image="/images/folder.png" head="Drug Interaction" bg="#ffeacd" font="#ff9801"/> 
        <Blocks image="/images/folder.png" head="Medical Calculator" bg="#dcefdc" font="#4cb050"/> 
        </div>
        <div className="features__row">
        <Blocks image="/images/folder.png" head="Articles" bg="#fff4e6" font="#ff9801"/> 
        <Blocks image="/images/folder.png" head="Quizzes" bg="#ecf2fe" font="#4489fe"/> 
        <Blocks image="/images/folder.png" head="Disease Database" bg="#d9f4ff" font="#7caefe"/> 
        <Blocks image="/images/folder.png" head="Surveys" bg="#ecf9ff" font="#f54337"/> 
            </div>
    </div>
  )
}
