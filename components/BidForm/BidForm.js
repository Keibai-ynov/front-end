import {useState} from 'react'
import styles from './styles.module.scss'
import {CreateStripeSession} from '../../lib/stripes.lib'
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

const BidForm = (props) => {
  const [boolErrMessage, setBoolErrMessage] = useState(false)
  const [bidValue,setBidValue] = useState(0)
  const [errMessage, setErrMessage] = useState("")
  const [pageIndex, setPageIndex] = useState(0)

  const stripe = useStripe()
  const elements = useElements()

  const handlePayement = async (e) => {
    e.preventDefault();

    const {error} = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/payement/confirmation?amount=' + bidValue + "&auction=" + props.auctionId,
      }
    });
    if (error) {
      console.log(error)
    }
  }

  const makeOffer =  (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    if(typeof props.lastbid == "string"){
      if(bidValue > props.initialPrice){
        setPageIndex(1)
      }else{
        setErrMessage("The offer must be higher than the initial price")
        setBoolErrMessage(true)
      }
    }else{
      if(bidValue > props.lastbid){
        setPageIndex(1)
      }else{
        setErrMessage("The offer must be higher than the current offer")
        setBoolErrMessage(true)
      }

    }
  }
  return (
      <>
        {pageIndex == 0? (
          <div className={styles.bid__infos_container}>
            <div className={styles.bid__infos_section}>
                <label className={styles.bid__infos_label}>Initial price:</label>
                <p className={styles.bid__infos_value}>{props.initialPrice.toFixed(2)}€</p>
            </div>
            <div className={styles.bid__infos_section}>
                <label className={styles.bid__infos_label}>Last offer:</label>
                <p className={styles.bid__infos_value}>{typeof props.lastbid == "string"?  props.lastbid : `${props.lastbid.toFixed(2)}€`} </p>
            </div>
          </div>

        ): (
          <div className={styles.bid__infos_container}>
            <div className={styles.bid__infos_section}>
                <label className={styles.bid__infos_label}>Your offer:</label>
                <p className={styles.bid__infos_value}>{bidValue}€</p>
            </div>
          </div>

        )}
        
        {pageIndex == 0?(
        <form className={styles.form__wrapper} onSubmit={makeOffer}>
            <input id='mountBid' onChange={(e) => setBidValue(e.target.value)} className={styles.form__input} placeholder="Mount" type="number" />
            {boolErrMessage?(
              <p className={styles.form__msg}>{errMessage}</p>
            ):""}
            <input className={styles.form__submit} type="submit" value="Validate" />
        </form>

        ):(
          <form className={styles.form__wrapper} onSubmit={handlePayement}>
              <PaymentElement/>
              <input className={styles.form__submit} type="submit" value="Validate" />
          </form>

        )}
      </>
  )
}

export default BidForm