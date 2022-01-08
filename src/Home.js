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
               <Product id={1} title='Rich Dad Poor Dad' price={30} rating={4}
               imageSource='https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY436_FMwebp_QL65_.jpg'/>
               <Product id={2} title='The Psychology of Money' price={20} rating={3}
               imageSource='https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg' />
              <Product id={3} title='The Intelligent Investor' price='45' rating={5}
              imageSource='https://m.media-amazon.com/images/I/919mmNCTaaL._AC_UY436_FMwebp_QL65_.jpg'/> 
           </div>

           <div className='home__row'>
           <Product id={4} title='You cant Hurt me' price='10' rating={5}
              imageSource='https://m.media-amazon.com/images/I/81hwCOQ1F0L._AC_UY436_FMwebp_QL65_.jpg'/> 
            <Product id={5} title='Two States' price='18' rating={3}
              imageSource='https://m.media-amazon.com/images/I/714GGM7WK7L._AC_UY436_FMwebp_QL65_.jpg'/> 
           </div>

           <div className='home__row'>
           <Product id={6} title='SAMSUNG 50-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50AU8000FXZA, 2021 Model)'
                     price={400} rating={7}
           imageSource='https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UY436_FMwebp_QL65_.jpg'/>
           </div>

        </div>
    )
}

export default Home
