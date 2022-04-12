import React from 'react'
import styles from './Headband.module.scss'
import Link from 'next/link'

const Headband = (props) => {
  return (
    <div className={styles.headband__wrapper}>
        <h2>{props.text}</h2>
        <Link className={styles.headband__link} href={props.link}> 
            <a>{props.textLink}</a>
        </Link>
    </div>
  )
}

export default Headband