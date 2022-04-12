import React from 'react'
import MessageSection from '../MessageSection/MessageSection'
import styles from './ListMessages.module.scss'
const ListMessages = (props) => {
  return (
    <ul className={styles.liste__wrapper}>
        {
            props.data? props.data.map(element => (
                <li key={element.id}>
                    <MessageSection message={element}/>
                </li>
            )):""
        }
       
    </ul>
  )
}

export default ListMessages