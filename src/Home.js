import './Home.css';
import React from 'react'
import Product from './Product'

function Home() {
    return (
        <div className='home'>

           <div className='home__container'>
            <img className='home__image' src='https://m.media-amazon.com/images/I/615IKOC-QKL._SX3740_.jpg' alt=''>
            </img>   
           </div>

           <div className='home__row'>
               <Product />
           </div>

           <div className='home__row'>
             {/* product1 */}
             {/* product2 */}
             {/* product3 */}
           </div>

           <div className='home__row'>
              {/* product1 */}
           </div>

        </div>
    )
}

export default Home
