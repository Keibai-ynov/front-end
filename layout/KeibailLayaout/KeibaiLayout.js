import React from 'react'
import styles from './KeibaiLayout.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const KeibaiLayout = ({children}) => {
  return (
    <div className={styles.keibai__wrapper}>
      <Header/>
        <div className={styles.main__content}>
          <main>
            {children}
          </main>
        </div>
      <Footer/>
    </div>
  )
}

export default KeibaiLayout