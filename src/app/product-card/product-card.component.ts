import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  // Kintamojo aprasymas, kurio duomenys bus paduodami is parent komponento
  @Input() product : any ;

  constructor() {

  }

  ngOnInit(): void {
    // Atspausdiname kintamojo reiksme i konsole
    console.log(this.product );
  }

}
