import { useRef } from 'react'
import styles from './ContactForm.module.scss'
import { SendMessage } from '../../lib/mailer.lib'

const ContactForm = () => {
    const formInputs = useRef([])

    const handleForm = (element) => {
        if(element && ! formInputs.current.includes(element)){
            formInputs.current.push(element)
        }
    }

    const sendContactMessage = (e) => {
        e.preventDefault();
        const body={}
        formInputs.current.forEach(element => {
            body[element.name] = element.value
        });
        SendMessage(body).then(res => {
            console.log(res)
        })
    }
  return (
    <form onSubmit={sendContactMessage} className={styles.form__wrapper}>
        <div className={styles.form__section}>
            <div className={styles.form__group}>
                <label htmlFor="">Your name</label>
                <input ref={handleForm} required type="text" name="name" id="" />
            </div>
            <div className={styles.form__group}>
                <label htmlFor="">Mail</label>
                <input ref={handleForm} required type="email" name="mail" id="" />
            </div>
            <div className={styles.form__group}>
                <label htmlFor="">Phone</label>
                <input ref={handleForm} required type="text" name="phone" id="" />
            </div>
        </div>
        <div className={styles.form__section}>
            <div className={styles.form__message}>
                <label htmlFor="">Message</label>
                <textarea ref={handleForm} required name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <div className={styles.form__submit}>
                <input type="submit" value="Send your message" />
            </div>
        </div>
    </form>
  )
}

export default ContactForm