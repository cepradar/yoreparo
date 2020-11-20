import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  
})
export class HomeComponent{

  pantallas:any[]=[
    {
      titulo:'¿Qué necesitas?',
      img:'assets/images/1.jpg',
      desc:'Chatea rápidamente con profesionales de servicios para tu casa'
    },
    {
      titulo:'sdmngsno',
      img:'assets/images/2.jpg',
      desc:'sfngsdfnpñsdnsdfnnsnidñn'
    }
  ];

  constructor(private_config:NgbCarouselConfig) { }


}
