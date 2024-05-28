import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = PRODUCTS;
  }
}
