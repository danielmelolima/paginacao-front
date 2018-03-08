import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { Page } from '../models/models';

@Injectable()
export class ProductService {

  private headers: Headers
  
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getProductList(): Observable<any> {
    return this.http.get(`http://localhost:8080/product/all`).map(res => res.json());
  }

  getProductPage(page, size): Observable<Page> {
    return this.http.get(`http://localhost:8080/product?page=${page}&size=${size}`).map(res => res.json());
  }

}
