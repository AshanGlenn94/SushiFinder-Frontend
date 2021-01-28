import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating, restaurant }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item to the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        restaurant: restaurant,
      },
    });
  };

  return (
    <div className='product'>
      <img src={image} alt='' />
      <div className='product__info'>
        <p>{title}</p>
        <p>{restaurant}</p>

        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
