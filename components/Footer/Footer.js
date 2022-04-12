import React from 'react'
import styles from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer__wrapper}>
        <div className={styles.footer__newsletter}>
            <div className={styles.newsletter__left}>
                <h3>Subscribe Newsletter</h3>
                <p>Subscribe newsletter to get 5% on your first auction</p>
            </div>
            <div className={styles.newsletter__main}>
                <form className={styles.newsletter__form}> 
                    <input className={styles.newsletter__input} placeholder='Enter your email' />
                    <input className={styles.newsletter__submit} type="submit" value="Subscribe" />
                </form>
            </div>
            <div className={styles.newsletter__right}>
                <div className={styles.newsletter__social}>
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebook}/></li>
                        <li><FontAwesomeIcon icon={faInstagram}/></li>
                        <li><FontAwesomeIcon icon={faYoutube}/></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className={styles.footer__main}>
            <div className={styles.main__logo}>
                <h2>Keibai</h2>
            </div>
            <div className={styles.main__auction}>
                <h2>Auction</h2>
                <ul>
                    <li>
                        <Link href="/shop">
                            <a>Shop</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/my-auctions">
                            <a>My auction</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/auctions/favorite">
                            <a>Whishlist</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.main__account}>
                <h2>Account</h2>
                <ul>
                    <li>
                        <Link href="/account">
                            <a>Profile</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.main__quick}>
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>About us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Privacy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>FAQ</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <hr />
        <div className={styles.footer__copyright}>
            <p>right ©2022 All rights reserved to Nicolas Marin</p>
        </div>
    </div>
  )
}

export default Footer