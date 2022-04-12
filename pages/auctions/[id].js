import React, { useEffect , useState} from 'react'
import styles from './id.module.scss'
import { useRouter } from 'next/router';
import { getAuction } from '../../lib/auction.lib';
import Image from 'next/image';
import moment from 'moment';
import Head from 'next/head';
import Modal from '../../components/Modal/Modal';
import BidForm from '../../components/BidForm/BidForm';
import StripeWrapper from '../../components/StripeWrapper/StripeWrapper';

const Auction = () => {
    const Router = useRouter();
    const [auction, setAuction] = useState({})
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        if(!Router.isReady) return
        
            getAuction(Router.query.id).then(auction => {
                if(auction.success){
                    setAuction(auction.data)
                    console.log(auction.data)
    
                }else{
                    console.log(auction.message)
                }
            })
        
        
    }, [Router.isReady])

    const [dataTimer, setDataTimer] = useState({})
    
    const setTimer = () => {
            var timerInterval = setInterval(() => {
            const timestamp_start = Date.now()/1000
            const timestamp_end = moment(auction.endDate).unix()
            const difftime = Math.round(timestamp_end - timestamp_start)
            
            let duration = moment.duration(difftime, 'seconds')
            
            let timerObj = {
                days : duration.days(),
                hours:duration.hours(),
                minutes:duration.minutes(),
                secondes: duration.seconds()
                
            }
            setDataTimer(timerObj)
            if(difftime == 0 ){
                clearInterval(timerInterval)
            }
        }, 1000);
    }
    
    useEffect(() => {
        if(auction.endDate){
            setTimer()
        }
        
      return () => {
        
      }
    }, [auction.endDate])
    
    return (
        <div className={styles.auction__wrapper}>
            <Head>
                <title>Keiban - {auction.product? auction.product.title : "Product"}</title>
                <meta name="description" content="Section de gestion des catégories" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {auction.product?(
                <>
                    {auction.product.image?(
                        <div className={styles.auction__img}>
                            <div className={styles.auction__imgcontainer}>
                                <Image layout="fill" src={auction.product.image} className={styles.auction__img_content}/>
                            </div>
                        </div>        
                    ): ""}
                    <div className={styles.product__container}>
                            <h1 className={styles.product__title}>{auction.product.title}</h1>
                            <p className={styles.product__description}>{auction.product.description}</p>
                            <div className={styles.product_timer}>
                                <h2 className={styles.product__title_timer}>End in:</h2>
                                <p className={styles.product__timer}>{typeof dataTimer.days == "undefined"? "Chargement en cours ..." :  `${dataTimer.days}d ${dataTimer.hours}h ${dataTimer.minutes}m ${dataTimer.secondes}s`}</p>
                            </div>
                            <div className={styles.product__prices_container}>
                                <div className={styles.product__price_container}>
                                    <label className={styles.product__price_label}>Owner:</label>
                                    <p className={styles.product__price_value}>{`${auction.owner.firstname} ${auction.owner.lastname}`}</p>
                                </div>
                                <div className={styles.product__price_container}>
                                    <label className={styles.product__price_label}>Initial price:</label>
                                    <p className={styles.product__price_value}>{auction.product.initialPrice.toFixed(2)}€</p>
                                </div>
                                {auction.lastBid? (
                                    <>
                                        <div className={styles.product__price_container}>
                                            <label className={styles.product__price_label}>Last offre: </label>
                                            <p className={`${styles.product__price_value_important} ${styles.product__lastbid_mount}`}>{auction.lastBid.mount.toFixed(2)}€</p>
                                        </div>
                                        <div className={`${styles.product__price_container}`}>
                                            <label className={styles.product__price_label}>Offer made by: </label>
                                            <p className={`${styles.product__price_value}`}>{`${auction.lastBid.user.firstname} ${auction.lastBid.user.lastname}`}</p>
                                        </div>
                                    </>
                                ): (
                                    <>
                                        <div className={`${styles.product__price_container}`}>
                                                <label className={styles.product__price_label}>latest offer: </label>
                                                <p className={`${styles.product__price_value}`}>No offer</p>
                                        </div>
                                    </> 
                                )}
                            </div>
                            <div className={styles.auction__btn_container}>
                                <button onClick={() => setShowModal(true)} className={styles.auction__btn}>Make an offer</button>
                            </div>
                        </div>
                    </>
                ):""}
            {showModal? (
                <Modal setShowModal={setShowModal} title="Make an offer" >
                    <StripeWrapper>
                        <BidForm setShowModal={setShowModal} setAuction={setAuction} auctionTitle={auction.product.title} auctionId={auction._id} initialPrice={auction.product.initialPrice} lastbid={auction.lastBid? auction.lastBid.mount : "No offer"}/>
                    </StripeWrapper>
                </Modal>
            ): ""}
        </div>
    )
}

export default Auction