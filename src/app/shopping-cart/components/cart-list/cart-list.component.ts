import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';
import { ShoppingCartItem } from '../../models/shopping-cart-item';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent implements OnInit, OnDestroy {
  // container (smart) component which talks to the store

  items$: Observable<ShoppingCartItem[]>;
  total$: Observable<number>;
  query$: Observable<string>;

  terms$ = new Subject<string>();
  subscription = new Subscription();

  constructor(private store: Store<fromStore.ShoppingCartState>) {}

  ngOnInit() {
    this.items$ = this.store.pipe(select(fromStore.getItems));
    this.total$ = this.store.pipe(select(fromStore.getTotal));
    this.query$ = this.store.pipe(select(fromStore.getSearchQuery));

    // dispatch action to update query in the store when typing in search box
    this.subscription = this.terms$.pipe(distinctUntilChanged()).subscribe(term => {
      this.store.dispatch(fromStore.SearchItem({ query: term }));
    });
  }

  edit(item: ShoppingCartItem, quantity: number) {
    const newItem = { ...item, quantity };
    this.store.dispatch(fromStore.EditItem({ item: newItem }));
  }

  delete(item: ShoppingCartItem) {
    this.store.dispatch(fromStore.DeleteItem({ item }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
