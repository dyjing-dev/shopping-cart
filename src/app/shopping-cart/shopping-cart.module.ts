import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromStore.shoppingCartFeatureKey, fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
  ],
})
export class ShoppingCartModule {}
