import React from 'react'
import styles from './UserInfos.module.scss'

const UserInfos = (props) => {
  return (
    <div className={styles.infos__wrapper}>
        {props.user._id?(
            <>
                <div className={styles.infos__row}>
                    <div className={styles.infos__group}>
                        <label htmlFor="">Firstname </label>
                        <p>{props.user.firstname}</p>
                    </div>
                    <div className={styles.infos__group}>
                        <label htmlFor="">Lastname </label>
                        <p>{props.user.lastname}</p>

                    </div>
                </div>
                <div className={styles.infos__row}>
                    <div className={styles.infos__group}>
                        <label htmlFor="">Email </label>
                        <p>{props.user.email}</p>
                    </div>
                    <div className={styles.infos__group}>
                        <label htmlFor="">Password </label>
                        <p>{props.user.password}</p>
                    </div>
                </div>
                <div className={styles.infos__row}>
                    <div className={styles.infos__group}>
                        <label htmlFor="">Full adress </label>
                        <p>{props.user.adress.fullAdress}</p>

                    </div>
                    <div className={styles.infos__group}>
                        <label htmlFor="">Zipcode </label>
                        <p>{props.user.adress.zipcode}</p>

                    </div>
                </div>
                <div className={styles.infos__row}>
                    <div className={styles.infos__group}>
                        <label htmlFor="">City </label>
                        <p>{props.user.adress.city}</p>

                    </div>
                    <div className={styles.infos__group}>
                        <label htmlFor="">Phone </label>
                        <p>{props.user.phoneNumber}</p>

                    </div>
                </div>

            </>
        ):<h1>Loading data ...</h1>}

      </div>
  )
}

export default UserInfos