import React from 'react'
import SectionLayout from '../../layout/SectionLayout/SectionLayout'
import styles from './Contact.module.scss'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
const Contact = () => {
  return (
    <div className={styles.contact__wrapper} >
      <SectionLayout title="Keep in touch">
        <ContactInfo/>
      </SectionLayout>
      <SectionLayout title="Contact Form">
        <ContactForm/>
      </SectionLayout>
    </div>
  )
}

export default Contact