import {useState} from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Navigation from '../Navigation/Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import HeadBand from '../Headband/Headband'
import { getFilteredAuctions } from '../../lib/auction.lib'
import { useRouter } from 'next/router'

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [searchValue, setSearchValue] = useState(false)

  const Router = useRouter()
  const handleSearch = (e) => {
      setSearchValue(e.target.value)
      if(e.target.value == ""){
        searchAuctions(e)
      }
  }
  const searchAuctions = (e) => {

    e.preventDefault();
    console.log(searchValue)
    Router.push('/auctions?search=' + searchValue)
   

    
  }

  return (
    <header className={showSearch? styles.header__wrapper_plus :styles.header__wrapper } >
        <div className={styles.header__top}>
          <div className={styles.header__top_left}>
            <ul>
              <li>
                <Link href='/home'>
                  <a>About us</a>
                </Link>
              </li>
              <li>
                <Link href='/home'>
                  <a>Privacy</a>
                </Link>
              </li>
              <li>
                <Link href='/home'>
                  <a>FAQ</a>
                </Link>
              </li>
      
            </ul>
          </div>
          <div className={styles.header__top_right}>
            <div className={styles.header__top_whishes}>
                <ul>
                  <li>
                    <Link href='/auctions/favorites'>
                      <a>My favorites</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/home'>
                      <a>Track Your Order</a>
                    </Link>
                  </li>
                </ul>
            </div>
            <div className={styles.header__top_social}>
              <ul>
                <li>
                  <Link href='/'>
                    <a><FontAwesomeIcon icon={faFacebook}/></a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <a><FontAwesomeIcon icon={faInstagram}/></a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  <a><FontAwesomeIcon icon={faTwitter}/></a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  <a><FontAwesomeIcon icon={faLinkedin}/></a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                  <a><FontAwesomeIcon icon={faYoutube}/></a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.header__bottom}>
          <Navigation showSearch={showSearch} setShowSearch={setShowSearch}/>
        </div>
        <HeadBand text="Welcome, lots of auctions are waiting for you !" link="/auctions" textLink="Shop now"/>
        {showSearch?(
          <div className={styles.header__search}>
            <form onSubmit={searchAuctions}>
              <input onChange={handleSearch} type="text" name="search" placeholder='Search'/>
              <button type='submit'><FontAwesomeIcon icon={faSearch}/></button>
            </form>
          </div>

        ):""}
    </header>
  )
}

export default Header