import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products-detais',
  templateUrl: './products-detais.component.html',
  styleUrls: ['./products-detais.component.scss']
})
export class ProductsDetaisComponent implements OnInit{
  id:any;
  data:any={};
  lood:boolean = false;
  constructor(private route:ActivatedRoute,private service:ProductsService){
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getSingleProdacts();
  }

  getSingleProdacts(){
    this.lood=true;
    this.service.getProdacts(this.id).subscribe((res)=>{
      this.lood = false;
      this.data = res;
    },error => {
      alert('error');
      this.lood = false;
    })
  }
}