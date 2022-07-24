import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { GiTrophyCup } from 'react-icons/gi'

export default function Header() {
  const head = [
    "Social Networks",
    "Drug Database",
    "Medical Calculator",
    "Articles",
    "News",
    "Quizzes",
    "Surveys",
    "Drug Interactions",
    "Disease Database",

  ]
  return (
    <div className="nav-container">
      <Link to='/'>
        <img src="/images/hdlogo.png" alt=""/>
         </Link>
      <div className="nav__items__container">
        {head && head.map((item, index) => (
          <Link key={index} style={{ border: index === 8 ? 'none' : null }} className={"nav__items " + (index === 4 ? "nav__items__news" : null)} to='/'>{item}</Link>))}
      </div>
      <div className="nav__items__profile">
        <p className="nav__items__profile__trophy">< GiTrophyCup style={{ color: '#000' }} /> 237</p>
        <p className="nav__items__profile__name">M</p>
      </div>
    </div>
  )
}
