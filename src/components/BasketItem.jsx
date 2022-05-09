function BasketItem(props) {
    const {
        mainId,         
        displayName,                 
        price: { 
                regularPrice 
              },
        quantity,
        removeFromBasket = Function.prototype,
        itemIncrement = Function.prototype,
        itemDecrement = Function.prototype,
        itemQuantity = Function.prototype,
    } = props;
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