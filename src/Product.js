import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className='product'>
              <div className='product__info'>
                   <p>The Psychology of money</p>
                  <p className='product__price'> 
                      <small>$</small>
                      <strong>20.00</strong>
                  </p>
             

                    <div className='product__rating'> 
                       <p>🌟🌟🌟🌟</p>
                    </div>
              </div>

                <img src='https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg'> 
                </img>

                <button>Add to Basket</button>
            
        </div>
    )
}

export default Product
