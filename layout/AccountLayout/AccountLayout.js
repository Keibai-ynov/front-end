import React from 'react'
import styles from './AccountLayout.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'


const AccountLayout = ({children, ...pageProps}) => {
    const Router = useRouter()
    const account_links = [
        {id:1, link: "/account", text: "My Account" },
        {id:2, link: "/auctions/my-auctions", text: "My Auctions" },
        {id:3, link: "/auctions/favorites", text: "My Whishlist" },
    ]
    const logout = () => {
        localStorage.removeItem("token");
        Router.push('/')
    }
    return (
        <div className={styles.layout__wrapper}>
            <div className={styles.layout__menu}>
                <ul>
                    {account_links.map(element => (
                        <li key={element.id}>
                            <Link href={element.link}>
                                <a className={pageProps.index == element.id? styles.account__links_active:styles.account__links} href="">
                                    {element.text}
                                </a>
                            </Link>
                        </li>
                    ))}
                    <li >
                        <a className={styles.account__links_logout} onClick={() =>logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.layout__children}>{children}</div>
        </div>
    )
}

export default AccountLayout