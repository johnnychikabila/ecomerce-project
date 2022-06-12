import { useContext } from 'react';
import { ShopContext } from '../context';
import { BasketItem } from "./BasketItem";


function BasketList(props) {
    const {
        order = [], 
        handleBasketShow = Function.prototype, 
    } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.regularPrice * el.quantity
    }, 0);

    return <ul className="collection basket-list">
      <li className="collection-item active purple darken-3">Корзина
      <span className="secondary-content">
        <i className="material-icons white-text text-white-4 basket-close" onClick={handleBasketShow}>close</i>
        </span>
      </li>
      {
          order.length ? order.map(item => (
            <BasketItem key={item.mainId} {...item} />
          )) : <li className="collection-item">Корзина пуста</li>
      }
      <li className="collection-item active brown lighten-5 offer">Общая стоимость: {totalPrice} грн. 
      <span className='button-offer-span'>
        <button className='waves-effect waves-light btn-small button-offer' >Оформить заказ</button></span></li>
    </ul>
  
}

export {BasketList};