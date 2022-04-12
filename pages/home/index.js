import React from 'react'
import Slider from '../../components/Slider/Slider'
import styles from './home.module.scss'
import GaranteesContainer from '../../components/GaranteesContainer/GaranteesContainer'
import NewsContainer from '../../components/NewsContainer/NewsContainer'
import TestimonialContainer from '../../components/TestimonialContainer/TestimonialContainer'

const Home = () => {
  const data_slider = [
      {id:1, src:"https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", alt: "auctions, art"},
      {id:2, src:"https://images.pexels.com/photos/6932224/pexels-photo-6932224.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", alt: "painting, art"},
      {id:3, src:"https://images.pexels.com/photos/6713747/pexels-photo-6713747.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", alt: "sculptur, art"}
  ]
  
  return (
    <div className={styles.home__wrapper}>
        <Slider data={data_slider}/>
        <TestimonialContainer/>
        <NewsContainer/>
        <GaranteesContainer/>

    </div>
  )
}

export default Home