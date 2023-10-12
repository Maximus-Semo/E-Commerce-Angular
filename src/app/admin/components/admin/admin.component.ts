import { Component, OnInit, ɵSSR_CONTENT_INTEGRITY_MARKER } from '@angular/core';
import { ServiceAdmin } from '../../service/service.admin';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/service/products.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  cartOrder:any = [];
  cartsView:any=[]=[];
  total:number = 0;
  detils:any;
  constructor(private service:ServiceAdmin,private ProductsSer:ProductsService,private build:FormBuilder){}
  form!:FormGroup;
  ngOnInit(): void {
    this.form = this.build.group({
      start:[''],
      end:['']
    })
    this.getProdcuts();
  }
  getProdcuts(){
    this.service.getProducts().subscribe((res:any)=>{
      this.cartOrder = res;
      // console.log("this all items" , res);
    })
  }
  applyFilter(){
    let data = this.form.value;
    this.service.getProducts(data).subscribe((res:any)=>{
       console.log("this all applyFilter date" , res);
    })
  }
  deleteItem(index:number){
    this.service.deleteProduct(index).subscribe((res)=>{
      this.getProdcuts();
      alert("Success deleted")
    })
  }
  view(id:number){
    this.cartsView = [];
    this.detils = this.cartOrder[id];
    for (let x in this.detils.products) {
      let item = this.detils.products[x].productId;
      let quantity = this.detils.products[x].quantity;
      this.ProductsSer.getProdacts(item).subscribe(res=>{
          this.cartsView.push({item:res , quantity:quantity});
      })
      // console.log(this.cartsView);
    }  
    
  }


}
