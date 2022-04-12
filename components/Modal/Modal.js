import styles from './styles.module.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

export default function Modal(props) {
    return (
        <div className={styles.modal__overlay}>
            <div className={props.sizeModal == "xl"? styles.modal__container_xl :styles.modal__container}>
                <div className={styles.modal__header}>
                    <a onClick={()=> props.setShowModal(false)}><FontAwesomeIcon icon={faXmark}/></a>
                </div>
                <h3 className={styles.modal__title} >{props.title}</h3>
                <div className={styles.modal__body}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
