import React from 'react'
import CheckoutProduct from '../../components/CheckoutProduct'
import Subtotal from '../../components/Subtotal'
import { useStateValue } from '../../StateProvider'
import './Checkout.css'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()
  console.log(basket)
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://namastecar.com/wp-content/uploads/2019/04/Ex-showroom-price-is-the-on-road-price-of-Audi-A3-A4-A6.png'
          alt=''
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>Your shopping basket</h2>
          {
            basket?.map(item => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.imageUrl}
                price={item.price}
                rating={item.rating}
              />
            ))
          }
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
