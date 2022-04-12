import React from 'react'
import styles from './SectionLayout.module.scss'

const SectionLayout = ({children, title}) => {
  return (
    <section className={styles.section__wrapper}>
      <h2 className={styles.section__title}>{title}</h2>
        {children}
    </section>
      
  )
}

export default SectionLayout