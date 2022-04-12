import React from 'react'
import styles from './MessageSection.module.scss'
import RoundedImage from '../RoundedImage/RoundedImage'
const MessageSection = (props) => {
  return (
    <div className={styles.msg__wrapper}>
        <div className={styles.msg__container_left}>
            <RoundedImage src={props.message.img}/>
            <div className={styles.msg__container_infos}>
                <h3>{props.message.name}</h3>
                <p>last response at {props.message.last_response}</p>
            </div>
        </div>
        <div className={styles.msg__container_right}>
            <p>{props.message.last_message}</p>
        </div>
    </div>
  )
}

export default MessageSection