import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, generateMockProducts } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(generateMockProducts());

    // should get product list from back end api when it is ready
    //return this.http.get<Product[]>('/api/products');
  }
}
