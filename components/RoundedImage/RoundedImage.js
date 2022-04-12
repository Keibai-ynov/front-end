import React from 'react'
import styles from './RoundedImage.module.scss'
import Image from 'next/image'

const RoundedImage = (props) => {
  return (
    <div className={styles.img__wrapper}>
        <Image className={styles.img__img} layout="fill" src={props.src}/>
    </div>
  )
}

export default RoundedImage