import {useState, useEffect} from 'react'
import styles from './MyAuctions.module.scss'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionLayout from '../../layout/SectionLayout/SectionLayout'
import Head from 'next/head'
import Modal from '../../components/Modal/Modal'
import AuctionForm from '../../components/AuctionForm/AuctionForm'
import { GetUserAuctions } from '../../lib/user.lib'
import jwtDecode from 'jwt-decode'
import ListElement from '../../components/ListElement/ListElement'
import AccountLayout from '../../layout/AccountLayout/AccountLayout'
const MyAuctions = () => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    const decodedToken = jwtDecode(token)
    GetUserAuctions(decodedToken.id).then(res => {
      if(res.success){
        const newData = []
        res.data.auctions.forEach(element => {
          newData.push(element.auction)
        })
        setData(newData)
      }
    })
  }, [])
  
  return (
    <div className={styles.auctions__wrapper}>
      <Head>
        <title>Keibai - My auctions</title>
        <meta name="description" content="User's auctions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountLayout index={2}>
        <h1 className={styles.auctions__title}>My auctions</h1>

        <div className={styles.auctions__btn}>
          <button onClick={() => setShowModal(true)}>Add auction <FontAwesomeIcon icon={faPlus}/></button>
        </div>
        <SectionLayout title="Current auctions">
          {data? (
            <ListElement data={data}/>
          ):""
          }
        </SectionLayout>
     
    </AccountLayout>
      {showModal?(
      <Modal title="Create an auction" setShowModal={setShowModal}>
        <AuctionForm data={data} setData={setData} setShowModal={setShowModal}/>
      </Modal>
      ) : ""
      }
    </div>
  )
}

export default MyAuctions