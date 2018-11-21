import React, { Component } from 'react';
import logo from './logo.svg';
import { Helmet } from 'react-helmet'
import './App.css';
import Header from './Header'
import Footer from './Footer'
import WorkItem from './WorkItem'
import Hero from './Hero'

const App = () => {
  const workItems = [
    {
      title: '喜多方ラーメンアプリ',
      category: 'web - 2017',
    },
    {
      title: '農村web',
      category: 'web - 2018',
    }
  ]
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>いのまー ポートフォリオ</title>
        <meta name="discription" content="ポートフォリオサイト" />
      </Helmet>
      <Header />
      <Hero />
      <div>
        <section className="section" id="about">
          <h2 className="section-title">About</h2>
          <p className="aboutDescription">Ruby on Railsでの開発をメインでやっています。</p>
        </section>
        <section className="section" id="works">
          <h2 className="section-title">Works</h2>
          <ul>
            {
              workItems.map(workitem => {
                return (<WorkItem title={workitem.title} category={workitem.category} />)
              })
            }
          </ul>
        </section>
        <Footer />
      </div>
    </div>
  )
}
export default App;