import React from 'react'
import styles from './BubbleCard.module.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useState, useEffect } from 'react'

const BubbleCard = (props) => {
    
    return (
        <div className={styles.bubblecard__wrapper}>
            <label className={styles.bubblecard__label}>{props.title}</label>
            <p className={styles.bubblecard__value}>{props.text}</p>
        </div>
    )
}

export default BubbleCard