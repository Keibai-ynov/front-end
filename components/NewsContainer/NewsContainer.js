import React from 'react'
import styles from './NewsContainer.module.scss'
import NewsCard from '../NewsCard/NewsCard'

const NewsContainer = () => {
    const news_data = [
        {id:1, src:"https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", category: "Fashion Tips", title: "What Curling Irons Are The Best Ones", description :"Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus.."},
        {id:2, src:"https://images.pexels.com/photos/6932224/pexels-photo-6932224.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", category: "Fashion Tips", title: "Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes", description:"Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus.."},
        {id:3, src:"https://images.pexels.com/photos/6713747/pexels-photo-6713747.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", category: "Fashion Tips", title: "What Curling Irons Are The Best Ones", description: "Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus.."}
    ]
    return (
        <div className={styles.news__wrapper}>
            <h2>Latest News</h2>
            <div className={styles.news__container}>
                <ul>
                    {
                        news_data.map(element => (
                            <li key={element.id}>
                                <NewsCard data={element}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NewsContainer