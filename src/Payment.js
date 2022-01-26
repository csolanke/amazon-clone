import React ,{useState , useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import {useStateValue} from './StateProvider'
import {Link} from 'react-router-dom'
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat  from 'react-currency-format';
import {getBasketTotal} from './reducer'
import axios from 'axios';
import {useHistory} from 'react-router-dom'


function Payment() {

    const history = useHistory();

    const [{basket,user}, dispatch]= useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError]= useState(null);
    const [disabled,setDisabled]= useState(true);

    const [processing , setProcessing]=useState("");
    const [succeeded, setSucceessed]= useState(false);

    const [clientSecret, setClientSecret]= useState(true);

    useEffect(()=>{
            //generate special stripe client secret
            const getClientSecret = async ()=>{
                 const response = await axios({
                     method:'post',
                     url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                 })

                 setClientSecret(response.data.clientSecret);
            }
            getClientSecret();
    },[basket]);

    console.log('THE SECRET IS>>>',clientSecret)

    const handleSubmit=(event)=>{
       // do the stripe fancy stuff
         event.preventDefault();
         setProcessing(true);

         const payload= stripe.confirmAffirmPayment(clientSecret,{
             payment_method:{
                 card:elements.getElement(CardElement)
             }
         }).then(({paymentIntent})=>{
             //paymentIntent is nothing but payment confirmation.

             setSucceessed(true);
             setError(null);
             setProcessing(false);

             history.replace('/orders')
         })
    }

    const handleChange=event =>{
      //listen for changes in the card element and display any erros as customer types their card details.
      setDisabled(event.empty);
      setError(event.error? event.error.message : "");

    }

    return (
        <div className='payment'> 
             <div className='payment__container'>
                   
                 <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link> ) </h1>

                 <div className='payment__section'>
                      <div className='payment__title'>
                           <h3>Delivery Address</h3>
                      </div>
                       <div className='payment__address'> 
                           <p>{user?.email}</p>
                           <p>3409 Falling Acorn circle</p>
                           <p>Lake Mary FL 32746</p>
                       </div>
                 </div>

                 <div className='payment__section'>
                       <div className='payment__title'> 
                            <h3>Review Items and Delivery</h3>
                       </div>
                       <div className='payment__items'>
                            {basket.map(item =>
                                <CheckoutProduct
                                   id={item.id}
                                   title={item.title}
                                   price={item.price}
                                   imageSource={item.imageSource}
                                   rating={item.rating}
                                />
                            )}
                       </div>
                 </div>

                 <div className='payment__section'>
                       <div className='payment__title'>
                             <h3>Payment method</h3>
                       </div>
                       <div className='payment__details'>
                             {/* all stripe magic code will goes here */}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                 
                                 <div className='payment__priceContainer'>
                                   <CurrencyFormat
                                     renderText={(value)=>(
                                         <h3>Order Total: {value}</h3> 
                                         )
                                              }
                                             decimalScale={2}
                                             value={getBasketTotal(basket)}
                                             displayType={"text"}
                                             thousandSeparator={true}
                                             prefix={"$"}
                                     />

                                     <button disabled={processing|| disabled || succeeded}>
                                            <span>{processing ? <p>Processing</p>
                                            : "Buy Now"}</span>
                                     </button>
                                 </div>

                                  {error && <div>{error}</div>}

                            </form>

                       </div>
                 </div>

             </div>
        </div>
    )
}

export default Payment
