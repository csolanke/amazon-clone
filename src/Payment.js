import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import {useStateValue} from './StateProvider'
import {Link} from 'react-router-dom'

function Payment() {

    const [{basket,user}, dispatch]= useStateValue();
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
                       </div>
                 </div>

             </div>
        </div>
    )
}

export default Payment
