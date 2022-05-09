import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";
import { Cart } from './Cart';
import { BasketList } from './BasketList'
import { Alert } from "./Alert";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId); //порівнюємо id які є в корзині з id які надходять до корзини

    if (itemIndex < 0) {
    const newItem = {
      ...item,
      quantity: 1,
    }
    setOrder([...order, newItem])
  } else {
    const newOrder = order.map((orderItem, index) => {
      if (index === itemIndex) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1
        }
      } else {
        return orderItem;
      }
    });

    setOrder(newOrder);
  }
  setAlertName(item.displayName);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.mainId !== itemId);
    setOrder(newOrder);
  }

  const itemQuantity = (itemId, qua, param) => {

      const newOrder = order.map((item) => {
        if (item.mainId === itemId && param === '+') {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        } else if (item.mainId === itemId && param === '-') {
          return {
                ...item,
                quantity: item.quantity - 1
          }
       } else {
          return item;
        }
      });

        qua == 1 && param == '-' ? removeFromBasket(itemId) : setOrder(newOrder);
      
          }

  const closeAlert = () => {
    setAlertName('');
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
        {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
        {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} /*itemIncrement={itemIncrement} itemDecrement={itemDecrement}*/ itemQuantity={itemQuantity}/>}
        {
          alertName && <Alert name={alertName} closeAlert={closeAlert}/>
        }
      </main>
  );
};
export { Shop };
