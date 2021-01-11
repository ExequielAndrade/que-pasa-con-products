import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



const routes: Routes = [

 
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'home',
    component:  HomeComponent
  },

  {
    path: 'products',
    component: ProductsComponent
  },
  
  {
    path: 'product',
    component: ProductComponent
  },

  {
    path: 'products/:id',
    component: ProductDetailComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path:'demo',
    component: DemoComponent,
  },

  {
    path: '**',
    component: PageNotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
