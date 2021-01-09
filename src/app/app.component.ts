import { Component } from '@angular/core';
import {Product} from './core/models/product.model';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {

  title = 'cursoAngular';

  items = ['exequiel','andrade','lol'];

  clickProduct(_id:number){
    console.log('Id del producto = ',_id);

  }

  addItem(){

    this.items.push('nuevo item ');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);

  }
 
}    
