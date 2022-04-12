import React from 'react'
import styles from './TestimonialContainer.module.scss'
import TextSlider from '../TextSlider/TextSlider'

const TestimonialContainer = () => {
  return (
    <div className={styles.testimonial__wrapper}>
        <div className={styles.testimonial__container}>
            <TextSlider/>
        </div>
    </div>
  )
}

export default TestimonialContainer