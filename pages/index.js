import Head from 'next/head'
import styles from './index.module.scss'
import Image from 'next/image'
import homeImg from '../public/img/home-img.jpg'
import BlockTitle from '../components/BlockTitle/BlockTitle'
import AuthForm from '../components/AuthForm/AuthForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Keibai - Home</title>
        <meta name="description" content="Keibai - home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home__wrapper}>
        <div className={styles.container__left}>
            <AuthForm/>
        </div>
        <div className={styles.container__right}>
          <BlockTitle title="Welcome to Keibai" subtitle="The best online auction site"/>
          <div className={styles.container__right__img}>
            <Image 
              layout="responsive"
              src={homeImg}
              placeholder="blur"
            />
            </div>
        </div>
      </div>
    </>
  )
}
