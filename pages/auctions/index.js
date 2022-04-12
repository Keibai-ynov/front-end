import React from 'react'
import styles from './index.module.scss'
import SearchBar from '../../components/SearchBar/SearchBar'
import SectionLayout from '../../layout/SectionLayout/SectionLayout'
import ListElement from '../../components/ListElement/ListElement'
import { useEffect, useState } from 'react'
import { getFilteredAuctions } from '../../lib/auction.lib'
import Head from 'next/head'
import jwtDecode from 'jwt-decode'
import { useRouter } from 'next/router'

const Auctions = () => {
  const [latestAuctions, setLatestAuctions] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const Router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    if(Router.query.search){
      const body ={
        filter:{
          owner: {$ne: decodedToken.id},
          $or: [
            {
              "product.title":{
                $regex: Router.query.search,
                $options: "i"
              }
            },
            {
              "product.description":{
                $regex: Router.query.search,
                $options: "i"
              }
            }
          ]
        }
      }
      getFilteredAuctions(body).then(data => {
        if(data.success){
          setLatestAuctions(data.data)
          setIsSearch(true)
        }else{
          console.log(data.errMessage)
        }
      })
    }else{
      setIsSearch(false)
      const filter ={
        filter: {
          owner: {$ne: decodedToken.id}
        }
      }
      getFilteredAuctions(filter).then((data) => {
        setLatestAuctions(data.data)
      })

    }
  },[Router.query])
  return (
    <div className={styles.home__wrapper}>
       <Head>
              <title>Keibai - List of auctions</title>
              <meta name="description" content="Section de gestion des catégories" />
              <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          {isSearch? (
            <SectionLayout title={`Results(${latestAuctions.length})`}>
              <ListElement data={latestAuctions}/>
            </SectionLayout>
          ):(
            <>
              <SectionLayout title="Latest auctions">
                <ListElement data={latestAuctions}/>
              </SectionLayout>
              <SectionLayout title="Most popular">
                <ListElement data={latestAuctions}/>
              </SectionLayout>
              {/* <SectionLayout title="Soon to be finished">
                <ListElement data={latestAuctions}/>
              </SectionLayout> */}
            </>
          )}
        </div>
    </div>
  )
}

export default Auctions