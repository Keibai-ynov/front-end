import React from 'react'
import styles from './InfoBlock.module.scss'
const InfoBlock = (props) => {
  return (
    <div className={styles.infoblock__wrapper}>
      {props.label?(
        <label className={styles.infoblock__label}>{props.label}</label>
      ):""}
        <p className={props.label? styles.infoblock_labvalue :styles.infoblock__value}> {props.value}</p>
    </div>
  )
}

export default InfoBlock