import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] =[
    'assets/images/banner1.png',
    'assets/images/banner2.png',
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
