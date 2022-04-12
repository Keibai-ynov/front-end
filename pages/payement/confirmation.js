import {useEffect} from 'react'
import styles from './confirmation.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import jwtDecode from 'jwt-decode'
import { UpdateAuction } from '../../lib/auction.lib'
import {useStripe} from '@stripe/react-stripe-js';

const Confirmation = () => {
    // const stripe = useStripe();
    // const [message, setMessage] = useState(null);
    const Router = useRouter();
    useEffect(() => {
        if(Router.isReady){
            console.log(Router.query)
            const token = localStorage.getItem('token')
            const decoded_token = jwtDecode(token)
            const body={
                lastBid:{
                    mount: Router.query.amount,
                    user:decoded_token.id,
                    setup_intent_client_secret:Router.query.setup_intent_client_secret
                }
            } 
            UpdateAuction(Router.query.auction, body)
        }
      return () => {
        
      }
    }, [Router.isReady])
    
    return (
        <div className={styles.confirmation__wrapper}>
            {
                Router.isReady?(
                     <h1>Votre enchère d'un montant de {Router.query.amount} €, a bien été prise en compte</h1>
                ) :  <h1>Chargement en cours ...</h1>
            }
                <Link href="/auctions">
                    <a>Back to auctions</a>
                </Link>
        </div>
    )
}

export default Confirmation