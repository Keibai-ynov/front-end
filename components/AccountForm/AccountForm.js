import React from 'react'
import styles from './AccountForm.module.scss'
import SectionLayout from '../../layout/SectionLayout/SectionLayout'

const AccountForm = (props) => {
    const updateAccount = (e) => {
        e.preventDefault();
        props.setShowForm(false);
    }
  return (
    <form className={styles.form__wrapper} onSubmit={updateAccount}>
        <SectionLayout title="Account informations">
            <div className={styles.form__row}>
                <div className={styles.form__group}>
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" placeholder={props.user.email ? props.user.email: ""}/>
                </div>
                <div className={styles.form__group}>
                </div>
            </div>
            <div className={styles.form__row}>
                <div className={styles.form__group}>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder={props.user.password ? props.user.password: ""}/>
                </div>
                <div className={styles.form__group}>
                    <label htmlFor="">Confirm your password:</label>
                    <input type="password" name='valid_password' placeholder={props.user.password ? props.user.password: ""}/>
                </div>
            </div>
        </SectionLayout>
        <SectionLayout title="Personnal informations">
            <div className={styles.form__row}>
                <div className={styles.form__group}>
                    <label htmlFor="">Firstname:</label>
                    <input type="text" name="firstname" placeholder={props.user.firstname ? props.user.firstname: ""} />
                </div>
                <div className={styles.form__group}>
                    <label htmlFor="">Lastname:</label>
                    <input type="text" name='lastname' placeholder={props.user.lastname ? props.user.lastname: ""} />
                </div>

            </div>
            <div className={styles.form__row}>
                <div className={styles.form__group}>
                    <label htmlFor="">Full adress</label>
                    <input type="text" name="fullAdress" placeholder={props.user.adress.fullAdress ? props.user.adress.fullAdress: ""}/>
                </div>
                <div className={styles.form__group}>
                    <label htmlFor="">Zipcode</label>
                    <input type="text" name='zipcode' placeholder={props.user.adress.zipcode ? props.user.adress.zipcode: ""} />
                </div>
            </div>
            <div className={styles.form__row}>
                <div className={styles.form__group}>
                    <label htmlFor="">Phone number</label>
                    <input type="text" name='phoneNumber' placeholder={props.user.phoneNumber ? props.user.phoneNumber: ""}/>
                </div>
                <div className={styles.form__group}>
                   
                </div>
            </div>
        </SectionLayout>
        <div className={styles.form__submit}>
            <input className={styles.submit__btn} type="submit" value="Validate"/>
        </div>
    </form>
  )
}

export default AccountForm