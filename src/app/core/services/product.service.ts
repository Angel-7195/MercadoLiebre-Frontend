import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {
  Product,
  CreateProduct,
  UpdateProduct
} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'http://127.0.0.1:8000/api/products';

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(
      this.apiUrl
    );

  }

  getMyProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(
      `${this.apiUrl}/my-products`
    );

  }

  getProduct(productId: string): Observable<Product> {

    return this.http.get<Product>(
      `${this.apiUrl}/${productId}`
    );

  }

  createProduct(
    product: CreateProduct
  ): Observable<Product> {

    return this.http.post<Product>(
      this.apiUrl,
      product
    );

  }

  updateProduct(
    productId: string,
    product: UpdateProduct
  ): Observable<Product> {

    return this.http.put<Product>(
      `${this.apiUrl}/${productId}`,
      product
    );

  }

  deleteProduct(
    productId: string
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${productId}`
    );

  }

}