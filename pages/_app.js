import '../styles/globals.scss'
import KeibaiLyaout from '../layout/KeibailLayaout/KeibaiLayout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const Router = useRouter();
  if(Router.route == "/"){
    return  <Component {...pageProps} />
  }else{
    return (
    <KeibaiLyaout>
      <Component {...pageProps} />
    </KeibaiLyaout>
    )
    
  }
}

export default MyApp
