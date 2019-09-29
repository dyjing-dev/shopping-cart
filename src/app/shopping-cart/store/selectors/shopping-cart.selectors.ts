import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromShoppingCart from '../reducers/shopping-cart.reducer';

export const getCartItemsState = createSelector(
  fromFeature.getShoppingCartState,
  (state: fromFeature.ShoppingCartState) => state.cartItems
);

export const getItems = createSelector(
  getCartItemsState,
  fromShoppingCart.getShoppingCartItems
);

export const getTotal = createSelector(
  getItems,
  items => {
    return items.map(i => i.quantity * i.product.price).reduce((sum, current) => sum + current, 0);
  }
);
