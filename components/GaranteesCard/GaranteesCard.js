import React from 'react'
import styles from './GaranteesCard.module.scss'

const GaranteesCard = (props) => {
  return (
    <div className={styles.card__wrapper}>
        <div className={styles.card__section}>
            <p className={styles.card__icon}>
                {props.data.icon}
            </p>
        </div>
        <div className={styles.card__section}>
            <h5>{props.data.title}</h5>
            <p className={styles.card__text}>
                {props.data.text}
            </p>
        </div>
    </div>
  )
}

export default GaranteesCard