import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';




const routes: Routes = [
  {
    path: 'home',
    component:  HomeComponent
  },

  {
    path: 'products',
    component: ProductComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path:'demo',
    component: DemoComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
