import {Component, Input, Output, 
  EventEmitter, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { Product } from 'src/app/core/models/product.model';


@Component({
selector: 'app-product',
templateUrl: './product.component.html',
styleUrls: ['./product.component.scss']

})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    
  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today =new Date();
  numero= 1;

  products: Product [] = [  

     {
      _id: '1',
      title: 'Lampara',
      price: 15000,
      description: 'Lampara clasica',
      image: 'https://www.ledstudio.cl/3867-thickbox_default/lampara-de-mesa-negra-60w-e27.jpg'
      
    },
/*
     {
    _id: '2',
    title: 'Mesa',
    price: 15000,
    description: 'Mesa simple',
    image: 'https://assets.tramontina.com.br/upload/tramon/imagens/BEL/10849076ANM001G.png'
    },

   / {
      _id: '3',
      title: 'Lampara',
      price: 15000,
      description: 'Lampara clasica',
      image: 'https://www.ledstudio.cl/3867-thickbox_default/lampara-de-mesa-negra-60w-e27.jpg'
      
    },

    {
    _id: '4',
    title: 'Mesa',
    price: 15000,
    description: 'Mesa simple',
    image: 'https://assets.tramontina.com.br/upload/tramon/imagens/BEL/10849076ANM001G.png'
    }, */

  ]

  clickProduct( _id: number){
    console.log('Id del producto = ',_id);

  }

  constructor(){
    console.log('1. constructor');
  }

  ngOnInit(){
    console.log('2. ngOnInit')
  }

  ngDoCheck () {
    console.log('3. ngDoCheck')
  }

  ngOnDestroy(){
    console.log('4. ngOnDestroy')
  }

  addToCarrito(){
    console.log('Producto añadido al carrito');

    this.productClicked.emit(this.product._id);
  }

 
}
