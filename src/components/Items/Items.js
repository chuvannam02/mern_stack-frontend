import './Item.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import React from 'react';
function Items({id, title, image, price}) {

  const dispatch = useDispatch()

  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{title}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        src={image}
        alt="item"
      />
      <button 
        onClick={() => 
          dispatch(addToCart({
            id, title, image, price
          }))
        }>Thêm vào giỏ hàng
      </button>
    </div>
  )
}

export default Items;