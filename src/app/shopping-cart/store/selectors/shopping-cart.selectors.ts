import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromShoppingCart from '../reducers/shopping-cart.reducer';

export const getCartItemsState = createSelector(
  fromFeature.getShoppingCartState,
  (state: fromFeature.ShoppingCartState) => state.cartItems
);

export const getSearchQuery = createSelector(
  getCartItemsState,
  fromShoppingCart.getQuery
);

export const getAllItems = createSelector(
  getCartItemsState,
  fromShoppingCart.getShoppingCartItems
);

// get items based on query term in the store
export const getItems = createSelector(
  getAllItems,
  getSearchQuery,
  (items, query) => {
    if (query && items) {
      return items.filter(i => i.product.name.toLowerCase().includes(query.toLowerCase()));
    } else {
      return items;
    }
  }
);

export const getTotal = createSelector(
  getItems,
  items => {
    return items && items.map(i => i.quantity * i.product.price).reduce((sum, current) => sum + current, 0);
  }
);
