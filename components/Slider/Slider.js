import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './Slider.module.scss'

const Slider = (props) => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false} showStatus={false}>
        {props.data.map(element => (
            <div className={styles.img__container} key={element.id}>
                <img src={element.src} alt={element.alt}/>
            </div>

        ))}
    </Carousel>
  )
}

export default Slider