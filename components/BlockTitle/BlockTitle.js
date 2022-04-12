import React from 'react'
import styles from './BlockTitle.module.scss'

const BlockTitle = (props) => {
  return (
    <div className={styles.title__container}>
        <h1 className={styles.title__main}>{props.title}</h1>
        <p>{props.subtitle}</p>
    </div>
  )
}

export default BlockTitle