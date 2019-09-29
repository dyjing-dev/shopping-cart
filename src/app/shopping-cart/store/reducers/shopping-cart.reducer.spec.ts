import { reducer } from './shopping-cart.reducer';

import * as shoppingCartActions from '../actions/shopping-cart.actions';
import { ShoppingCartItem, generateMockProducts } from '../../models';

import * as fromShoppingCart from './shopping-cart.reducer';

describe('Shopping Cart Reducer', () => {
  const products = generateMockProducts();
  const initialState: fromShoppingCart.State = {
    loading: false,
    shoppingCartItems: products.map(x => {
      return {
        product: x,
        quantity: 2,
      } as ShoppingCartItem;
    }),
  };

  describe('an unknown action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('add cart item', () => {
    it('should add cart item when no same product exists ', () => {
      const addItem: ShoppingCartItem = {
        product: {
          name: 'Bed',
          price: 100,
        },
        quantity: 1,
      };
      const action = shoppingCartActions.AddItem({ item: addItem });

      const result = reducer(initialState, action);

      expect(result.shoppingCartItems.length).toBe(6);
      expect(result.shoppingCartItems[5]).toEqual(addItem);
    });
    it('should update cart item quantity when same product exist in the cart', () => {
      const newItem: ShoppingCartItem = {
        product: products[0],
        quantity: 3,
      };
      const action = shoppingCartActions.AddItem({ item: newItem });

      const result = reducer(initialState, action);

      expect(result.shoppingCartItems[0].quantity).toBe(5);
    });
  });

  describe('edit cart item', () => {
    it('should edit cart item when pass new item ', () => {
      const newItem: ShoppingCartItem = {
        product: products[0],
        quantity: 3,
      };
      const action = shoppingCartActions.EditItem({ item: newItem });

      const result = reducer(initialState, action);

      expect(result.shoppingCartItems[0]).toEqual(newItem);
    });
  });
  describe('edit delete item', () => {
    it('should delete cart item with same product name ', () => {
      const newItem: ShoppingCartItem = {
        product: products[1],
        quantity: 3,
      };
      const action = shoppingCartActions.DeleteItem({ item: newItem });

      const result = reducer(initialState, action);

      expect(result.shoppingCartItems.length).toBe(4);
    });
  });
});
