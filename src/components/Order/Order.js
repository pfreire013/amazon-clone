import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from '../CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order ({ order }) {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p>
        <small className='order__id'>{order.id}</small>
      </p>
      {
        order.data.basket?.map(item => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.imageUrl}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))
      }
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className='order__total'>Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType='text'
        thousandSeparator
        prefix='€'
      />
    </div>
  )
}

export default Order
