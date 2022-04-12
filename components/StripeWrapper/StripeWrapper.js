import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const PUBLIC_KEY = process.env.STRIPE_PK
const stripePromise = loadStripe(PUBLIC_KEY);
import { GetClientSecret } from '../../lib/stripes.lib';
import jwtDecode from 'jwt-decode';
import { useState, useEffect } from 'react';

const StripeWrapper = ({children}) => {
    const [options, setOptions] = useState({clienSecretExist: false})
    // const options = {
    //     clientSecret:"seti_1KlwVnFqBxp3dUF02Bb7aFUf_secret_LSsGJTqwrHcTrKQzV4Mx2hSjhHvOq6w",
    // }
    useEffect(() => {
      const token = localStorage.getItem('token')
      const decoded_token = jwtDecode(token)

      GetClientSecret(decoded_token.id).then(data => {
        const newOptions = {
          options_stripe:{
            clientSecret: data.client_secret
          },
          clienSecretExist:true
        }
        setOptions(newOptions)
      })
    
      return () => {
        
      }
    }, [])
    
  return (
    <>
      {options.clienSecretExist?(
        <Elements stripe={stripePromise} options={options.options_stripe}>
            {children}
        </Elements>
  
      ): <h1>Chargement en cours ... </h1>}

    </>

  )
}

export default StripeWrapper