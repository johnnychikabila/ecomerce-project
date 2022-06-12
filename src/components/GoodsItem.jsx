import { useContext } from 'react';
import { ShopContext } from '../context';

const GoodsItem = (props) => {

const { 
    mainId,         
    displayName,         
    displayDescription,         
    displayAssets: [             
        { background }             
    ],         
        price: { 
            regularPrice 
        }, 
        rarity: {
            name
        },
    } = props;
    
    const { addToBasket } = useContext(ShopContext);

  return (
        <div className="card">
          <div className="card-image">
            <img src={background} alt={displayName} />
          </div>
          <div className="card-content">
          <span className="card-title" style={{fontWeight: '400'}}>{displayName}</span>
            <p>{displayDescription}</p>
            <i style={{fontWeight: '200', fontSize: '13px'}}>{name}</i>
          </div>
          <div className="card-action">
            <button className="btn" onClick={() => addToBasket({
              mainId,         
              displayName,                 
              price: { 
                      regularPrice 
              }, 
            })}>Купить</button>
            <span className="right" style={{fontSize: '1.4rem'}}>{regularPrice} грн.</span>
          </div>
        </div>
      
    
  );
}

export default GoodsItem 