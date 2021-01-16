import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyValidators } from 'src/app/utils/validators';
import { ProductsService } from './../../../core/services/products/products.service';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form!: FormGroup;
  /* image$!: Observable<any>; */

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage,
  ) {
    this.buildForm();
   }

  ngOnInit(){

  }

  saveProduct(event: Event){
    event.preventDefault();

    if (this.form){
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct)  =>{
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }

    console.log(this.form.value)
  }

  get priceField (){
    return this.form.get('price');
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title:['',[Validators.required]],
      price: [0,[Validators.required, MyValidators.isPriceValid]],
      image:[''],
      description:['',[Validators.required],]
    });
  }

}
  /* uploadFile( event){
    const file = event.target.files[0];
    const name = 'image.png';
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
      this.image$ = fileRef.getDownloadURL();
      this.image$.suscribe(url => {
        console.log(url);
        this.form.get('image').setValue(url);
      });
    })
    .subscribe();
  } */
