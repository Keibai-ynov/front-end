import React, { useEffect, useState } from 'react'
import styles from './AuctionCard.module.scss'
import Image from 'next/image'
import InfoBlock from '../InfoBlock/InfoBlock'
import BubbleCard from '../BubbleCard/BubbleCard'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { GetUserFavorites, addToFavorite as addFavorite } from '../../lib/user.lib'
import jwtDecode from 'jwt-decode'


const AuctionCard = (props) => {
    const [isFavorite, setIsFavorite] = useState(props.item.isFavorite? props.item.isFavorite :false)
    console.log(props)
    useEffect(() => {
        const token = localStorage.getItem('token')
        const decoded_token = jwtDecode(token)
        GetUserFavorites(decoded_token.id).then(res => {

            const dataIsFavorite = res.data.favorites.findIndex(element => element.favorite._id == props.item._id)
            if(dataIsFavorite != -1){
                setIsFavorite(true)
            }
        })
    }, [])

    const addToFavorite = (id_auction) =>{
        const token = localStorage.getItem('token')
        const decoded_token = jwtDecode(token)
        const body = {
            isFavorite: isFavorite,
            auction: id_auction
        }
        addFavorite(decoded_token.id, body).then(data => {
            if(data.success){
                setIsFavorite(!isFavorite)
            }else{
                console.log(data.errMessage)
            }
        })

    } 

    
    return (
        <div className={styles.item__wrapper}>
            { props.item ?(
                <>
                    <div className={styles.item__imgcontainer}>
                        <BubbleCard title="Ending date" text={moment(props.item.endDate).format('DD-MM-YYYY')}/>
                        <Image layout="fill" src={props.item.product.image} className={styles.item__img}/>
                    </div>
                    <div className={styles.item__infos}>
                        <h3 className={styles.item__title}>{props.item.product.title}</h3>
                        <div className={styles.item__infoscontainer}>
                            <div className={styles.item__infos}>
                                <InfoBlock value={props.item.product.description}/>
                                <InfoBlock label="Prix initial:" value={props.item.product.initialPrice.toFixed(2) + "€"}/>
                                <InfoBlock value={moment(props.item.startDate).format('DD-MM-YYYY')}/>
                                <div className={styles.item__infos_footer}>
                                    <div className={styles.item__infos_footer_left}>
                                        <InfoBlock value={`${props.item.owner.firstname} ${props.item.owner.lastname}`}/>
                                    </div>
                                    <div className={styles.item__infos_footer_right}>
                                        <Link href={`/auctions/${props.item._id}`}>
                                            <a className={styles.findOut}>More infos</a>
                                        </Link>
                                        <button className={styles.item__favorite_icon} onClick={() => addToFavorite(props.item._id)}>
                                            <FontAwesomeIcon  icon={isFavorite? solidHeart : faHeart}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ):""}
        </div>
        
    )
}

export default AuctionCard