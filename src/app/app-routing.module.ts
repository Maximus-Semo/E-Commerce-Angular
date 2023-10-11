import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetaisComponent } from './products/components/products-detais/products-detais.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { AdminComponent } from './admin/components/admin/admin.component';
import { AdminMarketComponent } from './admin/components/admin-market/admin-market.component';

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetaisComponent},
  {path:"cart", component:CartComponent},
  {path:"admin", component:AdminComponent},
  {path:"admin/market", component:AdminMarketComponent},
  {path:"**", redirectTo:"admin/market",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
