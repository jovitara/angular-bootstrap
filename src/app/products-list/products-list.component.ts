import { Component, OnInit } from '@angular/core';

// 1. Importuojame duomenis is data.ts failo
import { ELEMENT_DATA, Product } from '../data';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  // 2. Komponento kintamajam products, priskiriame duomenis importuotus is duomenu failo
  products = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
