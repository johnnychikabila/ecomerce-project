function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;

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
