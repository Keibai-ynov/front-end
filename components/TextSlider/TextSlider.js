import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './TextSlider.module.scss'

const TextSlider = (props) => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showIndicators={false} showThumbs={false} showStatus={false}>
        {/* {props.data.map(element => ( */}
            <div className={styles.text__container} >
                <h2>Customer Testimonial</h2>
                <p className={styles.text__title}>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                <div className={styles.text__profil}>
                    <h5>Nicolas Marin</h5>
                    <p>Auctioneer</p>
                </div>
            </div>
            <div className={styles.text__container} >
                <h2>Customer Testimonial</h2>
                <p>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                <div className={styles.text__profil}>
                    <h5>Nicolas Marin</h5>
                    <p>Auctioneer</p>
                </div>
            </div>
            <div className={styles.text__container} >
                <h2>Customer Testimonial</h2>
                <p>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                <div className={styles.text__profil}>
                    <h5>Nicolas Marin</h5>
                    <p>Auctioneer</p>
                </div>
            </div>
           
           

        {/* ))} */}
    </Carousel>
  )
}

export default TextSlider