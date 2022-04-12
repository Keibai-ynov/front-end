import React from 'react'
import styles from "./NewsCard.module.scss"
import Link from 'next/link'

const NewsCard = (props) => {
  return (
    <div className={styles.card__wrapper}>
        <div className={styles.card__img}>
            <img src={props.data.src}/>
        </div>
        <div className={styles.card__infos}>
            <p>{props.data.category}</p>
            <h5>
                <Link href={`blog/article/${props.data.id}`}>
                    <a>{props.data.title}</a>
                </Link>
            </h5>
            <p className={styles.card__description}>{props.data.description}</p>
            <Link href={`blog/article/${props.data.id}`}>
                <a>Read More</a>
            </Link>
        </div>
    </div>
  )
}

export default NewsCard