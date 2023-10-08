import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  CartProducts:any=[]=[];
  totalItem:number = 0;
  success:boolean = false;
  constructor(private service:CartService){}

  ngOnInit(): void {
   this.getListProducts();
  }

  getListProducts(){
    if("cart" in localStorage){
      this.CartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotoalItems();
  }
  getTotoalItems(){
    this.totalItem = 0;
    for(let x in this.CartProducts){
      this.totalItem += this.CartProducts[x].quantity * this.CartProducts[x].item.price;
    }
  }
  addAmount(index:number){
    this.CartProducts[index].quantity++;
    this.getTotoalItems();
    localStorage.setItem('cart',JSON.stringify(this.CartProducts));
  }
  detectAmount(){
    this.getTotoalItems();
    localStorage.setItem('cart',JSON.stringify(this.CartProducts));
  }
  minAmount(index:number){
    this.CartProducts[index].quantity--;
    this.getTotoalItems();
    localStorage.setItem('cart',JSON.stringify(this.CartProducts));
  }
  delateCard(index:number){
    this.CartProducts.splice(index,1);
    this.getTotoalItems();
    localStorage.setItem('cart',JSON.stringify(this.CartProducts));
  }
  clearCard(){
    this.CartProducts = [];
    this.getTotoalItems();
    localStorage.setItem('cart',JSON.stringify(this.CartProducts));
  }

  addCart(){
    let products = this.CartProducts.map((item:any)=>{
      return {productId:item.item.id, quantity:item.quantity}
    })

    let Model = {
      userId:55,
      date:new Date(),
      productId:products
    }
    this.service.createPostCart(Model).subscribe(res=>{
      this.success = true;
    })

  }
  
}// END
