import * as shoppingCartActions from '../actions/shopping-cart.actions';
import { createReducer, on } from '@ngrx/store';
import { ShoppingCartItem } from '../../models/shopping-cart-item';

export const shoppingCartFeatureKey = 'cartItems';

export interface State {
  loading: boolean;
  shoppingCartItems: ShoppingCartItem[];
  query: string;
}

export const initialState: State = {
  loading: false,
  shoppingCartItems: [],
  query: '',
};

const updateItem = (items: ShoppingCartItem[], item: ShoppingCartItem) =>
  items.map(x => {
    return x.product.name === item.product.name ? item : x;
  });

const addOrUpdateItem = (items: ShoppingCartItem[], item: ShoppingCartItem) => {
  const existingItem = items.find(x => x.product.name === item.product.name);
  if (existingItem) {
    const newItem = { ...existingItem, quantity: existingItem.quantity + item.quantity };
    return updateItem(items, newItem);
  } else {
    return [...items, item];
  }
};

export const reducer = createReducer(
  initialState,
  on(shoppingCartActions.AddItem, (state, { item }) => ({
    ...state,
    shoppingCartItems: addOrUpdateItem(state.shoppingCartItems, item),
  })),
  on(shoppingCartActions.EditItem, (state, { item }) => ({
    ...state,
    loading: false,
    shoppingCartItems: state.shoppingCartItems.map(x => {
      return x.product.name === item.product.name ? item : x;
    }),
  })),
  on(shoppingCartActions.DeleteItem, (state, { item }) => ({
    ...state,
    shoppingCartItems: state.shoppingCartItems.filter(x => x.product.name !== item.product.name),
  })),
  on(shoppingCartActions.SearchItem, (state, { query }) => ({
    ...state,
    query,
  })),
  on(shoppingCartActions.ClearSearch, state => ({
    ...state,
    query: '',
  }))
);

export const getShoppingCartItems = (state: State) => state.shoppingCartItems;
export const getQuery = (state: State) => state.query;
