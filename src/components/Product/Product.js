import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star'
import { useStateValue } from '../../StateProvider'

function Product({ product }) {
  const [{ basket }, dispatch] = useStateValue()

  console.log(basket)

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: product.id,
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        rating: product.rating
      }
    })
  }

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{product.title}</p>
        <p className='product__price'>
          <small>€</small>
          <strong>{product.price}</strong>
        </p>
        <div className='product__rating'>
          {
            Array(product.rating).fill().map((_, i) => (
              <StarIcon key={Math.random} />
            ))
          }
        </div>
      </div>

      <img
        src={product.imageUrl}
        alt=''
      />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
