import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ProductsService} from './../core/services/products/products.service';
import {MatTableModule} from '@angular/material/table';
//import { ProductsListComponent } from './components/products-list/products-list.component';
/* import { NasheComponent } from './components/nashe/nashe.component';
 */
@NgModule({
  declarations:[
    ProductFormComponent,
    NavComponent,
    DashboardComponent,
    //ProductsListComponent,


    //ProductsListComponent,

    /* ProductsService */
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTableModule
  ]
})
export class AdminModule { }
