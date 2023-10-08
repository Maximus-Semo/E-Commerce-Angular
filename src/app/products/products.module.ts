import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetaisComponent } from './components/products-detais/products-detais.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetaisComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    AllProductsComponent,
    ProductsDetaisComponent
  ]
})
export class ProductsModule { }
