import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { AddCartItemComponent } from './components/add-cart-item/add-cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingCartComponent, AddCartItemComponent, CartListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromStore.shoppingCartFeatureKey, fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
  ],
})
export class ShoppingCartModule {}
