import React from 'react'
import './Home.css'
import Product from './Product' 

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Prime" />
                <div className="home__row">
                    <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" rating={5} />
                    <Product title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SL1500_.jpg" rating={5} />
                </div>
                <div className="home__row">
                <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg" rating={5} />
                <Product title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} image="https://images-na.ssl-images-amazon.com/images/I/91B%2BxrXdD%2BL._AC_SL1500_.jpg" rating={5} />
                <Product title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} image="https://images-na.ssl-images-amazon.com/images/I/81oFAZ9N6bL._SL1500_.jpg" rating={5} />
                </div>
                <div className="home__row">
                    <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
