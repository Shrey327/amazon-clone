import React from 'react';
import Product from './Product'
import './Home.css';
function Homepg() {
  return (
    <div className='home'>
      <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/MFD/Mar/Prime-PC-3000._CB580118080_.jpg' alt='banner' />
      <div className='home__row'>
        <Product
          id="90210"
          title="The E-Myth Revisited : Why Most Small Businesses Don't Work and What to Do About It"
          price={10}
          rating={5}
          image="https://m.media-amazon.com/images/I/71vcyDag4AL._AC_AA220_.jpg"
        />
        <Product
          id="90210"
          title="The E-Myth Revisited : Why Most Small Businesses Don't Work and What to Do About It"
          price={10}
          rating={5}
          image="https://m.media-amazon.com/images/I/71vcyDag4AL._AC_AA220_.jpg"
        />
      </div>
      <div className='home__row'>
        <Product
          id="90210"
          title="The E-Myth Revisited : Why Most Small Businesses Don't Work and What to Do About It"
          price={10}
          rating={5}
          image="https://m.media-amazon.com/images/I/71vcyDag4AL._AC_AA220_.jpg"
        />
        <Product
          id="90210"
          title="The E-Myth Revisited : Why Most Small Businesses Don't Work and What to Do About It"
          price={10}
          rating={5}
          image="https://m.media-amazon.com/images/I/71vcyDag4AL._AC_AA220_.jpg"
        />
        <Product
          id="90210"
          title="The E-Myth Revisited : Why Most Small Businesses Don't Work and What to Do About It"
          price={10}
          rating={5}
          image="https://m.media-amazon.com/images/I/71vcyDag4AL._AC_AA220_.jpg"
        />
      </div>
      <div className='home__row'>
        <Product
          id="90210"
          title="The E-Myth Revisited : Why Most Small Businesses Don't Work and What to Do About It"
          price={10}
          rating={5}
          image="https://m.media-amazon.com/images/I/71vcyDag4AL._AC_AA220_.jpg"
        />

      </div>
    </div>
  )
}

export default Homepg
