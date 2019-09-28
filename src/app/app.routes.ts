import { SHOPPING_CART_ROUTES } from './shopping-cart/shopping-cart.routes';

export const APP_ROUTES = [
  {
    path: 'shoppingcart',
    children: SHOPPING_CART_ROUTES,
  },
  {
    path: '',
    children: SHOPPING_CART_ROUTES,
  },
];
