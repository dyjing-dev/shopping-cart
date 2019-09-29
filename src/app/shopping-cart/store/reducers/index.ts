import { createFeatureSelector, combineReducers, Action, createSelector } from '@ngrx/store';

import * as fromProducts from '../reducers/products.reducer';
import * as fromShoppingCart from '../reducers/shopping-cart.reducer';
import * as fromRoot from '../../../reducers';

export const shoppingCartFeatureKey = 'shoppingCart';

export interface ShoppingCartState {
  [fromProducts.productsFeatureKey]: fromProducts.State;
  [fromShoppingCart.shoppingCartFeatureKey]: fromShoppingCart.State;
}

export interface State extends fromRoot.State {
  [shoppingCartFeatureKey]: ShoppingCartState;
}

export function reducers(state: ShoppingCartState | undefined, action: Action) {
  return combineReducers({
    [fromProducts.productsFeatureKey]: fromProducts.reducer,
    [fromShoppingCart.shoppingCartFeatureKey]: fromShoppingCart.reducer,
  })(state, action);
}

export const getShoppingCartState = createFeatureSelector<ShoppingCartState>(shoppingCartFeatureKey);
