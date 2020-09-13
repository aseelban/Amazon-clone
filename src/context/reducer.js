export const initialState = {
  basket: [],
  //user: null
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      // remove product by index, becuse if there is more item for one proudct then filter by id will delete them all
      // so to fix this problem we used index to remove items.
    case "REMOVE_FROM_BASKET":
      const get_index_product = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (get_index_product >= 0) {
        newBasket.splice(get_index_product, 1);
      } else {
        console.warn("Error");
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};
