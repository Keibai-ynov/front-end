import React from 'react'
import Link from 'next/link'
import styles from './NavList.module.scss'
import { useRouter } from 'next/router'
import { faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

const NavList = (props) => {
    const Router = useRouter()
  return (
    <ul className="list__wrapper">
        {
            props.data.map(item => (
                <li key={item.id} className={styles.item__list}>
                    <Link href={item.href}>
                        <a className={Router.route == item.href? styles.item__link_active :styles.item__link}>
                            <span className={styles.item__logo}>{item.logo}</span> {item.title}
                        </a>
                    </Link>
                </li>

            ))
            
        }
        {
            props.isAdmin?(
                <li className={styles.item__list}>
                    <Link href="/back-office">
                        <a className={Router.route == "/back-office"? styles.item__link_active :styles.item__link}>
                            <span className={styles.item__logo}>
                                <FontAwesomeIcon className={styles.sidebar__navicon} icon={faScrewdriverWrench}/>
                            </span> Back-office
                        </a>
                    </Link>
            </li>
            ):""
        }
       
    </ul>
  )
}

export default NavList