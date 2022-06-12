import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart(props) {
  const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);

  const quantity = order.length;

  return (
    <div className='cart purple darken-4 white-text'
    onClick={handleBasketShow}
    >
      <i className="material-icons basket-icon">shopping_cart</i>
      {quantity ? (
      <div className='cart-quantity'>{quantity}</div>
       ) : null }
    </div>
  );
}

export { Cart };
