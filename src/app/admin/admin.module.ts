import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminMarketComponent } from './components/admin-market/admin-market.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminMarketComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[    AdminComponent,AdminMarketComponent  ]
})
export class AdminModule { }
