import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as productsActions from '../actions/products.actions';
import { ProductService } from '../../services/product.service';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.LoadProducts),
      switchMap(() => {
        return this.productService.getProducts().pipe(
          map(products => productsActions.LoadProductsSuccess({ products })),
          catchError(() => of(productsActions.LoadProductsFail()))
        );
      })
    )
  );
}
