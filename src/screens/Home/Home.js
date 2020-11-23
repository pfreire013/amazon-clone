import React from 'react'
import Product from '../../components/Product'
import './Home.css'

const mockProducts = {
  lineOne: [
    {
      id: 1,
      title: 'Macbook Pro',
      price: 1499.00,
      imageUrl: 'https://www.freepnglogos.com/uploads/macbook-png/macbook-cleanmymac-the-best-mac-cleanup-app-for-macos-get-32.png',
      rating: 5
    },
    {
      id: 2,
      title: 'Playstation 5',
      price: 499.99,
      imageUrl: 'https://super.abril.com.br/wp-content/uploads/2020/06/ps5png.png',
      rating: 5
    }
  ],
  lineTwo: [
    {
      id: 3,
      title: 'AirPods Pro de Apple',
      price: 199.00,
      imageUrl: 'https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY218_.jpg',
      rating: 5
    },
    {
      id: 4,
      title: 'Apple iPad Air',
      price: 599.00,
      imageUrl: 'https://m.media-amazon.com/images/I/71EvvFHgzzL._AC_UY218_.jpg',
      rating: 5
    },
    {
      id: 5,
      title: 'Bose Home Altavoz 500',
      price: 299.00,
      imageUrl: 'https://m.media-amazon.com/images/I/81NI0UFz4zL._AC_UY218_.jpg',
      rating: 5
    }
  ],
  lineThree: [
    {
      id: 6,
      title: 'Acer Predator X35 bmiphzx 1800R',
      price: '1,199,00',
      imageUrl: 'https://m.media-amazon.com/images/I/71qsbwwY-XL._AC_UY218_.jpg',
      rating: 5
    }
  ]
}

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGentlemen/GENTL_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB404268992_.jpg'
          alt=''
        />
        <div className='home__row'>
          {
            mockProducts.lineOne.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </div>

        <div className='home__row'>
          {
            mockProducts.lineTwo.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </div>

        <div className='home__row'>
          {
            mockProducts.lineThree.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
