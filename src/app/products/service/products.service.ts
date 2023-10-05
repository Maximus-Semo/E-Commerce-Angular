import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {}

  getAllProdacts(){
    return this.http.get(environment.apiUrl + 'products');
  }

  getAllCategory(){
    return this.http.get(environment.apiUrl + 'products/categories');
  }

  getCategory(keyWord:any){
    return this.http.get('https://fakestoreapi.com/products/category/' + keyWord);
  }
  getProdacts(id:any){
    return this.http.get(environment.apiUrl + 'products/' + id);
  }
}
