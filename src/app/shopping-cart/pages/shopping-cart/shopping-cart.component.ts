import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Product, ShoppingCartItem } from '../../models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<fromStore.ShoppingCartState>) {}

  ngOnInit() {
    this.products$ = this.store.pipe(select(fromStore.getAllProducts));

    this.store.dispatch(fromStore.LoadProducts());
  }

  addItem(item: ShoppingCartItem) {
    this.store.dispatch(fromStore.AddItem({ item }));
    this.store.dispatch(fromStore.ClearSearch()); // clear any search when adding new item
  }

  delete(item: ShoppingCartItem) {
    this.store.dispatch(fromStore.DeleteItem({ item }));
  }
}
