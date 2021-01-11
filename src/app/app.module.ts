import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product-card/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ExppnentialPipe } from './shared/pipes/exponential/exppnential.pipe';
import { HighlightDirective } from './shared/directives/highlight/highlight.directive';

import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { ProductsComponent } from './products/components/products/products.component';
//import { HeaderComponent } from './shared/components/header/header.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './products/components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent,

    /* ExppnentialPipe,
    HighlightDirective, 
    HomeComponent, 
    HeaderComponent,
    FooterComponent, 
    BannerComponent, 
 */

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
