import React from 'react'
import styles from './contactInfo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
const ContactInfo = () => {
  return (
        <div className={styles.contact__wrapper}>
            <div className={styles.contact__left}>
                <div className={styles.contact__section}>
                    <label htmlFor="">Adress:</label>
                    <p>183 rue saint charles, 75015, Paris</p>
                </div>
                <div className={styles.contact__section}>
                    <label htmlFor="">Phone:</label>
                    <p>06.67.09.68.50</p>
                </div>
                <div className={styles.contact__section}>
                    <label htmlFor="">E-mail:</label>
                    <p>contact@keibai.com</p>
                </div>
            </div>
            <div className={styles.contact__right}>
                <div className={styles.contact__section}>
                    <label htmlFor="">Social media:</label>
                    <ul>
                        <li><FontAwesomeIcon className={styles.contact__social} icon={faFacebook}/></li>
                        <li><FontAwesomeIcon className={styles.contact__social} icon={faTwitter}/></li>
                        <li><FontAwesomeIcon className={styles.contact__social} icon={faInstagram}/></li>
                        <li><FontAwesomeIcon className={styles.contact__social} icon={faLinkedin}/></li>
                        <li><FontAwesomeIcon className={styles.contact__social} icon={faYoutube}/></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default ContactInfo