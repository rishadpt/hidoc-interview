import React from 'react'
import Strip from './Strip/Strip'
import './Whatsmore.scss'

export default function Whatsmore() {
    return (
        <div className="whatsmore-container">
            <div className="whatsmore__head">
                <h3 className="whatsmore__head__news">What's more on Hidoc Dr.</h3>
            </div>
            <div className="whatsmore__content">
                <div className="whatsmore__blocks">
                    <h4>News</h4>
                    <p className="whatsmore__para">
                        urvived not he 1960s with the release of Letraset sheets ntly with  like Aldus PageMaker including versions of Lorem Ipsumonly five centuries,he 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                    </p>
                </div>
                <div className="whatsmore__blocks1">
                    <img className="whatsmore__image" src="/images/dr.jpeg" alt="" />

                </div>
                <div className="whatsmore__blocks2">
                    <Strip image="/images/question-mark.png" head="Quizzes" para="Play & Win hidoc points" />
                    <Strip image="/images/document.png" head="Surveys" para="Play & Win hidoc points" />
                    <Strip image="/images/calculator.png" head="Medical Calculators" para="Play & Win hidoc points" />
                </div>
              
            </div>
            <div className="whatsmore__visit">
                    <h2>Social Networks For Doctors - A special Feature on Hidoc Dr.</h2>
                    <button className="visit__button">Visit</button>
                    </div>
        </div>
    )
}
