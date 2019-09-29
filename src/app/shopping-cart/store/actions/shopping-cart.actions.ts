import { createAction, props } from '@ngrx/store';
import { ShoppingCartItem } from '../../models/shopping-cart-item';

export const AddItem = createAction('[ShoppingCart] Add Item', props<{ item: ShoppingCartItem }>());
export const EditItem = createAction('[ShoppingCart] Edit Item', props<{ item: ShoppingCartItem }>());
export const DeleteItem = createAction('[ShoppingCart] Delete Item', props<{ item: ShoppingCartItem }>());
