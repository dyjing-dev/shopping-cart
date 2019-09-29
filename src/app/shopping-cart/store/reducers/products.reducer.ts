import * as productsActions from '../actions/products.actions';
import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Product } from '../../models/product';

export const productsFeatureKey = 'products';

export interface State extends EntityState<Product> {
  loading: boolean;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.name,
});

export const initialState: State = adapter.getInitialState({
  loading: false,
});

export const reducer = createReducer(
  initialState,
  on(productsActions.LoadProducts, state => ({
    ...state,
    loading: true,
  })),
  on(productsActions.LoadProductsSuccess, (state, { products }) =>
    adapter.addMany(products, { ...state, loading: false })
  ),
  on(productsActions.LoadProductsFail, state => ({
    ...state,
    loading: false,
  }))
);
