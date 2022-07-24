import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { newsServices } from '../../utils/Services'
import Header from '../Header/Header'
import NewsLayout from '../NewsLayout/NewsLayout'
import Footer from './Footer/Footer'
import './Landing.scss'
import Whatsmore from './Whatsmore/Whatsmore'

export default function Landing() {
  const [news, setNews] = useState([])
  const [latest, setLatest] = useState([])

  useEffect(() => {
    newsServices.getNews().then(
      data => {
        setNews(data.data.news)
        setLatest(data.data.latestArticle)
      }
    )
  }, [])

  console.log(latest)
  return (
    <div className="landing-container">
      <Header />     {/* header of Landing */}
      <div className="landing__main">   {/* news Starts from here */}
        <div className="landing__head">
          <h3 className="landing__head__news">News</h3>
        </div>
        {news && news.map((item, index) => (
          index === 1 &&
          <div className="landing__content">
            <img src={item.urlToImage} alt="" />
            <div className="landing__content__text">
              <h3>{item.title.replace(/^(.{60}[^\s]*).*/, "$1")}</h3>
              <p>{item.description}</p>
              <span className="landing__content__readmore">ReadMore</span>
            </div>
          </div>
        ))}
      </div>  {/* news Ends here */}

      <div className="news__grant__container"> {/* news Sections*/}
        <div className="news__container">
          <NewsLayout head="Latest News" >    {/* Using Section Layout */}
            {latest && latest.map((item, index) => (
              <Link className={"news__items__latest " + (index === 4 ? "news__items__latest__noborder" : null)} to={item.redirectLink} >
                {item.articleTitle}
              </Link>
            ))}

          </NewsLayout>
          <NewsLayout head="Trending News" >
            <img className="layout__image" src="/images/dr.jpeg" alt="" />
            <p className="news__items__latest">
              Lorem Ipsum is Lorem Ipsum, Lorem Ipsum
              dummy text of the printing and typesetting industry.
            </p>
            <div className="trending__image__content">
              <img className="trending__image" src="/images/dr.jpeg" alt="" />
              <p className="trending__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </NewsLayout>

          <div className="explore-container">
            <NewsLayout head="Explore More in News" >
              {[...Array(3)].map((i, index) => (<div>
                <p className="news__items__head">Lorem Ipsum is simply dummy text</p>
                <p className={"news__items__latest " + (index === 2 ? "news__items__latest__noborder" : null)}>
                  Lorem Ipsum is Lorem Ipsum, Lorem Ipsum
                  dummy text of the printing and typesetting industry.
                </p>
              </div>))}

            </NewsLayout>
            <div className="explore__button">
              <p>Explore Hidoc Dr.</p>
            </div>
          </div>
        </div>
      </div>
      <Whatsmore />
      <Footer />
    </div>
  )
}
