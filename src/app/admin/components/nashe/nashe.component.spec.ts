import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasheComponent } from './nashe.component';

describe('NasheComponent', () => {
  let component: NasheComponent;
  let fixture: ComponentFixture<NasheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
