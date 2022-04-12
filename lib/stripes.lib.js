import {loadStripe} from '@stripe/stripe-js'
const API_ROOT = process.env.API_ROOT

const PUBLC_KEY = process.env.STRIPE_PK
const stripePromise = loadStripe(PUBLC_KEY);


export const CreateStripeSession = async (body) => {
    const stripe = await stripePromise;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type" , "application/json")
    const checkoutSession = await fetch(`${API_ROOT}create-session`, {
        method:"POST",
        body:JSON.stringify(body),
        headers:myHeaders
    });
    const resJson = await checkoutSession.json()

    const result = await stripe.redirectToCheckout({
        sessionId: resJson.id,
    });
    console.log(result)
    if (result.error) {
        alert(result.error.message);
      }
}
export const GetClientSecret = async (id) => {
    try{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type" , "application/json")
        const res = await fetch(`${API_ROOT}createIntent/${id}`)
        const resJson = await res.json();
        return resJson;

    }catch(err){
        console.log(err)
    }
}