import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ELEMENT_DATA } from '../data';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product : any;
  id : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
    }

  ngOnInit(): void {
    // Gauname id parametra, kuris aprasytas src/app/app-routing.module.ts faile
    // is route'o : /products/:id
    this.id = this.route.snapshot.paramMap.get('id');

    /* Budas 2 - Surasti elementa pagal ID */
    // Ciklas pereiti per visus ELEMENT_DATA masyvo elementus
    for(let i = 0; i  < ELEMENT_DATA.length; i++) {
      //Konkreciam elementui, patikrininame objekto id reiksme
      // Ar ji sutampa su musu id reiksme gauta is route'o parametru
      if(ELEMENT_DATA[i].id == this.id) {
        this.product = ELEMENT_DATA[i];
        // Sustabome cikla rade ieskoma elementa
        break;
      }
    }




    /* BUDAS 1 */
    // Surandame elementa pagal masyvo eiles numeri. Tinka tik tada , kai ID sutampa su masyvo elementu kiekiu
    // Priskiriame komponento product kintamaji, is duomenu masyvo.
    // Nepamirsti parasyti virsuje import { ELEMENT_DATA } from '../data';
    // Arba bet koki kita kelia iki kintamojo
    this.product = ELEMENT_DATA[this.id - 1];
  }

}
