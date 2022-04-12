import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className={styles.searchbar__wrapper}>
        <input className={styles.searchbar__input} type="search" name="searchbar" id="SearchBar" placeholder='Search' />
        <button className={styles.searchbar__submit}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
  )
}

export default SearchBar