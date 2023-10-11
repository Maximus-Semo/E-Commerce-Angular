import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdmin {

  constructor(private http:HttpClient) { }
  
  getProducts(param?:{start:any, end:any}) {
    let params = new HttpParams();
    params = params.append("startdate", param?.start).append("enddate", param?.end);
    if(param){
      return this.http.get(environment.apiUrl + "carts", { params });
    } else {
      return this.http.get(environment.apiUrl + "carts");
    }
  }
  deleteProduct(id:number){
    return this.http.delete(environment.apiUrl + "products/" + id);
  }
  createProdcut(Model:any){
    return this.http.post(environment.apiUrl + "products", Model);
  }
}
