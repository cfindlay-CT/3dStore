import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string;

  constructor(private client: HttpClient) {
    this.apiUrl = environment.serviceUrl;
   }

   getProducts() : Observable<Product[]> {
    return this.client.get<Product[]>(this.apiUrl + '/supabase/products');
   }

   getProductImages(productId: string): Observable<string[]> {
    return this.client.get<string[]>(`${this.apiUrl}/supabase/products/images`);
   }
}
