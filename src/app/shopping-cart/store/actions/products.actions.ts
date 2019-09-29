import { createAction, props } from '@ngrx/store';
import { Product } from '../../models';

export const LoadProducts = createAction('[ShoppingCart] Load Products');
export const LoadProductsSuccess = createAction(
  '[ShoppingCart] Load Products Success',
  props<{ products: Product[] }>()
);
export const LoadProductsFail = createAction('[ShoppingCart] Load Products Fail');
