import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { ProductsService} from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product?: Product ;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      const id = params.id;
      this.fetchProduct(id);
      console.log(this.product);
    });
  }
  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product =>{
      this.product = product;
      console.log(product);

    });
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

}
