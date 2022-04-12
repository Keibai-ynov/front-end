import React from 'react'
import AuctionCard from '../AuctionCard/AuctionCard'
import styles from './ListElement.module.scss'

function ListElement(props) {
  return (
    <ul className={styles.list__wrapper}>
        {props.data && props.data.length > 0?(
            props.data.map((item) => (
               <li key={item._id} className={styles.list__item}>
                    <AuctionCard item={item}/>
               </li>
            ))

        ): <h1>No results found</h1>}
    </ul>
  )
}

export default ListElement