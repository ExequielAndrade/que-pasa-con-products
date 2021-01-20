import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { environment} from '../../../../environments/environment';
describe('ProductsService', () => {
  let service: ProductsService;
  let httpClient: HttpClient;
  let httpTestinController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ProductsService);
    httpTestinController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();

  });

  describe('test for getAllProducts', () => {
    //arrange
    it('should return products[] :) ',() =>{ 

      const expectData = [
        {
          id: '321',
          title: 'Probando',
          price: 1212,
          description: 'jejjejje',
          image: 'images/perro.jpg',
        },
        {
          id: '123',
          title: 'Probando 2',
          price: 3333,
          description: 'jejjejje',
          image: 'images/perro.jpg',
        }
      ];
      //act
      let dataError;
      let dataResponse: any | undefined;
      service.getAllProducts()
      .subscribe(response => {
        dataResponse = response;
      }, (error => {
        dataError = error;
      }));
  
      const req = httpTestinController.expectOne(`${environment.url_api}/products`);
      req.flush(expectData);
      //assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
