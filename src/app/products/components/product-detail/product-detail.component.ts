import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../../core/models/product.model';
import { ProductsService} from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$?: Observable<Product> ;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.productsService.getProduct(params.id);
      })
    );
  }

  createProduct(){
    const newProduct: Product = {
      id: '18',
      title: 'Nunca haria esa pa ',
      price: 7000,
      description: ':c',
      image: 'https://img.bekianavidad.com/articulos/portada/78000/78196-h3.jpg',
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product =>{
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 99999,
      description: 'Perroo update',
    };
    this.productsService.updateProduct('88', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('88')
    .subscribe(rta => {
      console.log(rta);
    });
  }

  getRandomUsers(){
    this.productsService.getRandomUsers()
    .subscribe( (users) => { //bien
        console.log( users );
      },
      error => {
        console.error(error);
      }
    );
  }

  /* getFile() {
    this.productsService.getFile()
    .subscribe(content => {
      console.log(content);
    });
  } */


}
