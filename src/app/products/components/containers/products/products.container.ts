import { Component, OnInit} from '@angular/core';
import { Product } from '@core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ){ }

  ngOnInit(){
    this.fetchProducts();
  }

  clickProduct ( _id: number){
    console.log('Id del producto = ',_id);

  }

  fetchProducts (){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }
}