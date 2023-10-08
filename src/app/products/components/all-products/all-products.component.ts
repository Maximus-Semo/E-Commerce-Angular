import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { prodacts } from '../../models/models';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  prodacts:prodacts[] = [];
  category:any[] = [];
  lood!: boolean;
  Cartprodacts:any[]=[];
  constructor(private service:ProductsService){}

  ngOnInit() {
    this.getAllProdacts();
    this.getAllCategory();
  }


  getAllProdacts(){
    this.lood = true;
    this.service.getAllProdacts().subscribe((res:any)=>{
      this.prodacts = res;
      this.lood = false;
    },(error)=>{
      alert("Error");
    })
  }
  getAllCategory(){
    this.lood = true;
    this.service.getAllCategory().subscribe((res:any)=>{
      this.category = res;
      this.lood = false;
    },(error)=>{
      alert("Error");
    })
  }
  changeOption(event:any){
    let value = event.target.value;
    this.lood = true;
    (value == "all") ? this.getAllProdacts() : this.service.getCategory(value).subscribe((res:any)=>{
      this.prodacts = res;
      this.lood = false;
    })
    }
    addCartLocalStorage(event:any){
      if("cart" in localStorage){
        this.Cartprodacts = JSON.parse(localStorage.getItem("cart")!);
        let exist = this.Cartprodacts.find(item=> item.item.id == event.item.id)
        if (exist) {
          alert("this prodact is enter before")
          return;
        }
        this.Cartprodacts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.Cartprodacts));
      } else {
        this.Cartprodacts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.Cartprodacts));
      }
    }

}
