import {useEffect, useState} from 'react'
import Head from 'next/head'
import styles from './Favorites.module.scss'
import SectionLayout from '../../layout/SectionLayout/SectionLayout'
import ListElement from '../../components/ListElement/ListElement'
import { GetUserFavorites } from '../../lib/user.lib'
import jwtDecode from 'jwt-decode'
import AccountLayout from '../../layout/AccountLayout/AccountLayout'

const Favorites = () => {
  const [endedData, setEndedData] = useState([])
  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    const decoded_token = jwtDecode(token)
    GetUserFavorites(decoded_token.id).then(res => {
      let newEndedData = []
      let newCurrentData = []
      res.data.favorites.forEach(element => {
        if(Date.now() <  Math.round(new Date(element.favorite.endDate).getTime())){
          element.favorite.isFavorite = true;
          newCurrentData.push(element.favorite)
        }else{
          newEndedData.push(element.favorite)
        }
      });
      setCurrentData(newCurrentData)
      setEndedData(newEndedData)
      
    })
  }, [])
  
  return (
    <div className={styles.favorites__wrapper}>
      <Head>
        <title>Keiban - Favorites</title>
        <meta name="description" content="List of favorites, keiban, auctions"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountLayout index={3}>  
        <h1 className={styles.favorites__title}>Your favorites</h1>
        { currentData && currentData.length > 0? (
          <SectionLayout title="Current auctions">
            <ListElement data={currentData}/>
          </SectionLayout>
          ): (
            <SectionLayout title="Current auctions">
              <h3>No auctions have been added to favorites ...</h3>
            </SectionLayout>
          )
        }
        { endedData && endedData.length > 0? (
          <SectionLayout title="Ended auctions">
            
          </SectionLayout>
        ): ""

        }
      </AccountLayout>
     
    </div>
  )
}

export default Favorites