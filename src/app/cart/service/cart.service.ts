import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  createPostCart(Model:any){
    return this.http.post(environment.apiUrl + "carts" , Model);  
  }

}
