export function reducer(state, {type, payload}) {
 
    switch (type) {
        case 'SET_GOODS': 
          return {
            ...state,
            goods: payload || [],
            loading: false,
          };
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(
              (orderItem) => orderItem.mainId === payload.mainId); //порівнюємо id які є в кошику з id які надходять до кошика
            
            let newOrder = null;
            if (itemIndex < 0) {
            const newItem = {
              ...payload,
              quantity: 1,
            };
            newOrder = [...state.order, newItem];
          } else {
            newOrder = state.order.map((orderItem, index) => {
              if (index === itemIndex) {
                return {
                  ...orderItem,
                  quantity: orderItem.quantity + 1
                }
              } else {
                return orderItem;
              }
            });
        
          }

          return {
              ...state,
              order: newOrder,
              alertName: payload.displayName,
          }
          }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(el => el.mainId !== payload.mainId),
            }
        case 'ITEM_QUANTITY': {

            const newOrder = state.order.map((item) => {
              if (item.mainId === payload.mainId && payload.param === '+') {
                return {
                  ...item,
                  quantity: item.quantity + 1
                }
              } else if (item.mainId === payload.mainId && payload.param === '-') {
                return {
                      ...item,
                      quantity: item.quantity - 1
                }
             } else {
                return item;
              }
            });
            
            return (
              payload.qua === 1 && payload.param === '-' ? {
                  ...state,
                  order: state.order.filter(el => el.mainId !== payload.mainId),
              } : {
                  ...state,
                  order: newOrder,
              }
            )
        
        }
            
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            }
        case 'BASKET_SHOW':
            return {
              ...state,
              isBasketShow: !state.isBasketShow,
            };
        default:
            return state;
    }
}
