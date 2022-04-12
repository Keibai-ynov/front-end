import {useState} from 'react'
import { useRouter } from 'next/router'
import styles from './Navigation.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPowerOff, faSearch, faUser, faCommentDots, faBell,faHeart } from '@fortawesome/free-solid-svg-icons'


const Navigation = (props) => {
    const Router = useRouter()
    const nav_links = [
        {id:1, title: "Home", href:"/home"},
        {id:2, title: "Auctions", href:"/auctions"},
        {id:3, title: "Contact", href:"/contact"},
    ]
    const nav_icons= [
        {id:1, icon: faHeart, href:"/auctions/favorites"},
        {id:2, icon: faUser, href:"/account"},
        {id:3, icon: faCommentDots, href:"/message"},
        {id:4, icon: faBell, href:"/notification"},
        
    ]
    const logout = () => {
        localStorage.removeItem("token");
        Router.push('/')
    }
    return (
        <div className={styles.nav__wrapper}>
            <div className={styles.nav__logo}>
                Keibai
            </div>
            <nav className={styles.nav__container}>
                <ul>
                    {nav_links.map(element => (
                        <li key={element.id}>
                            <Link href={element.href}>
                                <a>{element.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.nav__account}>
                
                <ul>
                    <li>
                        <button onClick={() => props.setShowSearch(!props.showSearch)}>
                            <FontAwesomeIcon className={styles.nav__account_icon} icon={faSearch}/>
                        </button>
                    </li>
                    {nav_icons.map(element => (
                            <li key={element.id}>
                                <Link href={element.href}>
                                    <FontAwesomeIcon className={styles.nav__account_icon} icon={element.icon}/>
                                </Link>
                            </li>
                        )
                    )}
                    <li>
                        <button onClick={() => logout()}>
                            <FontAwesomeIcon className={styles.nav__account_logout} icon={faPowerOff}/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation