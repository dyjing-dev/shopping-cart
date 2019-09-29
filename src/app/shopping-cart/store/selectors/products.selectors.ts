import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromProducts from '../reducers/products.reducer';

export const getProductsState = createSelector(
  fromFeature.getShoppingCartState,
  (state: fromFeature.ShoppingCartState) => state.products
);

export const {
  selectEntities: getProductEntities,
  selectAll: getAllProducts,
  selectTotal: getTotalProducts,
} = fromProducts.adapter.getSelectors(getProductsState);
