import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>

            <img className='header_logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />

            <div className='header_search'>
                <input className='header_search_input'
                type="text"
                />
            </div>
            
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_OptionLineOne'>
                      Hello CK
                    </span>
                    <span className='header_OptionLineTwo'>
                      Sign In
                    </span>
                </div>

                <div className='header_option'>
                <span className='header_OptionLineOne'>
                      Returns
                    </span>
                    <span className='header_OptionLineTwo'>
                      & Orders
                    </span>
                </div>    
                

                <div className='header_option'>
                <span className='header_OptionLineOne'>
                      Your
                    </span>
                    <span className='header_OptionLineTwo'>
                      Prime
                    </span>
                </div>

            </div>
            
        </div>
    )
}

export default Header
