import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
/* import { ProductComponent } from './products/components/product-card/product.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { HomeComponent } from './home/components/home/home.component'; 
import { DemoComponent } from './demo/components/demo/demo.component';
import { ProductsContainerComponent } from './products/components/products/products.container';

import { ProductDetailComponent } from './products/components/product-detail/product-detail.component'; */
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },

      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then (m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then (m => m.ProductsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then (m => m.ContactModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then (m => m.OrderModule),
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then (m => m.DemoModule)
      },


    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then (m => m.AdminModule)

  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then (m => m.AuthModule)

  },

  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
  preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
