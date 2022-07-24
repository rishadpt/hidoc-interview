import React from 'react'
import './NewsLayout.scss'
export default function NewsLayout({ children, head }) {
    return (
        <div className="news-layout-container">
            <div className="news-layout__head">
                <h3 className="news-layout__head__news">{head}</h3>
            </div>
            {children}
        </div>
    )
}
