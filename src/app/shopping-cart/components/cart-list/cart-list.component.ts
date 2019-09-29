import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';
import { ShoppingCartItem } from '../../models/shopping-cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnInit {
  // container (smart) component which talks to the store

  items$: Observable<ShoppingCartItem[]>;
  total$: Observable<number>;

  constructor(private store: Store<fromStore.ShoppingCartState>) {}

  ngOnInit() {
    this.items$ = this.store.pipe(select(fromStore.getItems));
    this.total$ = this.store.pipe(select(fromStore.getTotal));
  }

  edit(item: ShoppingCartItem, quantity: number) {
    const newItem = { ...item, quantity };
    this.store.dispatch(fromStore.EditItem({ item: newItem }));
  }

  delete(item: ShoppingCartItem) {
    this.store.dispatch(fromStore.DeleteItem({ item }));
  }
}
