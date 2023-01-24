import { useReducer } from 'react';

import CartContext from './cart-content';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_CART_ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let updatedItems;
    if (existingItemIndex >= 0) {
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === 'REMOVE_CART_ITEM') {
    let updatedItems = [...state.items];
    let updatedTotalAmount = state.totalAmount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    if (existingItemIndex >= 0) {
      const existingItem = state.items[existingItemIndex];
      updatedTotalAmount = updatedTotalAmount - existingItem.price;
      if (existingItem.amount > 1) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = updatedItems.filter((item) => item.id !== action.id);
      }
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_CART_ITEM', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_CART_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
