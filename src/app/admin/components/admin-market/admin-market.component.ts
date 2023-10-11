import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/products/service/products.service';
import { ServiceAdmin } from '../../service/service.admin';

@Component({
  selector: 'app-admin-market',
  templateUrl: './admin-market.component.html',
  styleUrls: ['./admin-market.component.scss']
})
export class AdminMarketComponent implements OnInit{
  prodcuts:any=[];
  form!:FormGroup;
  base64Image!: string ;
  Categories:any=[];
  @ViewChild('myElement') myElement!: ElementRef;

  constructor(private Service:ProductsService, private serviceAd:ServiceAdmin,private build:FormBuilder,private elementRef:ElementRef){}

  ngOnInit(): void {
    this.getProdcuts();
    this.form = this.build.group({
      title:['',Validators.required],
      price:['',Validators.required],
      categories:['',Validators.required],
      image:['',Validators.required],
      description:['',Validators.required],
    });
    this.Service.getAllCategory().subscribe(res=>{
        this.Categories = res;
    });
    
  }
  getProdcuts(){
    this.Service.getAllProdacts().subscribe(res=>{
      this.prodcuts = res;
      console.log(this.prodcuts);
     },err=>{
      console.log(err);
     })
  }
  onFileSelected(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.base64Image = reader.result as string;
    };
    reader.readAsDataURL(file);
    console.log(this.base64Image);
  }
  selecte(event:any){
    this.form.get('categories')?.setValue(event.target.value);
    // console.log(this.form.get('categories')?.value);
  }
  createProdcut(){
    let model = this.form.value;
    this.serviceAd.createProdcut(model).subscribe(res=>{
      alert("data resend Success");
      this.form.reset();
    },err=>{
      console.log(err);
    })
  }

  update(item:any){
    console.log(item);
    this.form.patchValue({
      title:item.title,
      price:item.price,
      categories:item.category,
      // image:item.image,
      description:item.description,
    })
    this.base64Image = item.image;
    console.log(this.form.get("categories")?.value);
  }


}
