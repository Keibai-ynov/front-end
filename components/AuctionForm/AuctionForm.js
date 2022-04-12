import {useRef, useState} from 'react'
import styles from './AuctionForm.module.scss'
import jwtDecode from 'jwt-decode'
import { CreateAuction } from '../../lib/auction.lib'

const AuctionForm = (props) => {
    const auctionInput = useRef([])
    const [errMessage, setErrMessage] = useState("")
    const [boolMessage, setBoolMessage] = useState(false)

    const addAuctionsValue = el => {
        if(el && ! auctionInput.current.includes(el)){
            auctionInput.current.push(el)
        }
    }
    const addAuction = async (e) => {
        e.preventDefault();
        const auction = {product: {}}
        auctionInput.current.forEach(element => {
            if(element.name.indexOf("Date") !== -1){
                auction[element.name] = new Date(element.value);
            }else{
                auction.product[element.name] = element.value;
            }
        })
        const token = localStorage.getItem('token')
        const DecodedToken = jwtDecode(token)
        auction.owner = DecodedToken.id
        await CreateAuction(auction).then(res => {
            if(res.success){
                props.setData([...props.data, res.data])
                props.setShowModal(false)
            }else{
                setErrMessage(res.message)
                setBoolMessage(true)
            }
        })
    }
  return (
    <form className={styles.form__wrapper} onSubmit={addAuction}>
        <h3 className={styles.form__title}>Product</h3>
        <div className={styles.form__group}>
            <label htmlFor="">Title</label>
            <input ref={addAuctionsValue} name="title" type="text" required/>
        </div>
        <div className={styles.form__group}>
            <label htmlFor="">Description</label>
            <textarea ref={addAuctionsValue} name="description" required id="" cols="30" rows="10"></textarea>
        </div>
        <div className={styles.form__group}>
            <label htmlFor="">Initial price</label>
            <input ref={addAuctionsValue} name="initialPrice" required type="Number" />
        </div>
        <div className={styles.form__group}>
            <label htmlFor="">Image</label>
            <input ref={addAuctionsValue} name="image" required type="text" />
        </div>
        <h3 className={styles.form__title}>Dates</h3>
        <div className={styles.form__group}>
            <label htmlFor="">Start date</label>
            <input ref={addAuctionsValue} name="startDate" required type="date" />
        </div>
        <div className={styles.form__group}>
            <label htmlFor="">End date</label>
            <input ref={addAuctionsValue} name="endDate" required type="date" />
        </div>
        {
            boolMessage?(
                 <p className={styles.form__message}>{errMessage} *</p>
            ):""
        }
        <input className={styles.form__submit} type="submit" value="Validate" />
    </form>
  )
}

export default AuctionForm