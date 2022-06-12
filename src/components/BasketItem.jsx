import { useContext } from 'react';
import { ShopContext } from '../context'


function BasketItem(props) {
    const {
        mainId,         
        displayName,                 
        price: { 
                regularPrice 
              },
        quantity,
    } = props;
    
    const { removeFromBasket, itemQuantity, } = useContext(ShopContext);

    return <li className="collection-item">
        {displayName} 
        <button id='btn-' className='item-qua-button' onClick={() => itemQuantity(mainId, quantity, '-')} >-</button> 
        x{quantity} 
        <button id='btn+' className='item-qua-button' onClick={() => itemQuantity(mainId, quantity, '+')}>+</button>
         = {regularPrice * quantity} грн.
    <span className="secondary-content item-delete" onClick={() => removeFromBasket(mainId)}>
        <i className="material-icons purple-text text-darken-4 delete-icon" >delete</i>
        </span>
    </li>
}
export {BasketItem}