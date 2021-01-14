import { Component, OnInit} from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
    })
  }
  /* createProduct(){
    const newProduct: Product = {
      id: '7',
      title: 'nuevo',
      price: 3000,
      description: 'nuevo nuevo',
      image: 'https://www.ecestaticos.com/image/clipping/600/450/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg',
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product =>{
      console.log(product);
    });
  } */

  /*     getAllProducts(){
    return this.products;
  }

  getProduct(_id: string){
    return this.products.find(item=> _id === item._id)

  }  */

}
