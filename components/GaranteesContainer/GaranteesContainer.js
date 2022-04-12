import React from 'react'
import styles from './GaranteesContainer.module.scss'
import { faTruck, faMoneyCheck, faMoneyBill1Wave, faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GaranteesCard from '../GaranteesCard/GaranteesCard'

const GaranteesContainer = () => {
    const garantees_data = [
        {id: 1, icon: <FontAwesomeIcon icon={faTruck}/>, title: "Fast and Free Delivery", text : "Free délivery for all orders"},
        {id: 2, icon: <FontAwesomeIcon icon={faMoneyCheck}/>, title: "Secure payement", text : "Free délivery for all orders"},
        {id: 3, icon: <FontAwesomeIcon icon={faMoneyBill1Wave}/>, title: "Money Back Guarantee", text : "Free délivery for all orders"},
        {id: 4, icon: <FontAwesomeIcon icon={faEarthEurope}/>, title: "Online support", text : "Free délivery for all orders"},
    ]
  return (
    <div className={styles.garantees__wrapper}>
        <ul className={styles.garantees__list}>
            {
                garantees_data.map(element => (
                    <li key={element.id}>
                        <GaranteesCard data={element}/>
                    </li>
                ))
            
            }
            
        </ul>
    </div>
  )
}

export default GaranteesContainer