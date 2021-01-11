import { Injectable } from '@angular/core';
import { Product} from './core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [

    {
      _id: '1',
      title: 'Lampara',
      price: 15000,
      description: 'Lampara clasica',
      image: 'https://www.ledstudio.cl/3867-thickbox_default/lampara-de-mesa-negra-60w-e27.jpg'
      
    },
    {
    _id: '2',
    title: 'Mesa',
    price: 15000,
    description: 'Mesa simple',
    image: 'https://assets.tramontina.com.br/upload/tramon/imagens/BEL/10849076ANM001G.png'
    },
  
    {
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
    },

  ];

  getAllProducts(){
    return this.products;
  }

  getProduct(_id: string){
    return this.products.find(item=> _id === item._id)

  }

  constructor() { }
}
