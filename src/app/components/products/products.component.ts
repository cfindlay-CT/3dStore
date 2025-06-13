import { Component } from '@angular/core';
import { ProductGridComponent } from '../products-grid'; // adjust path as needed
import { CommonModule } from '@angular/common';
import { DataService } from '../../services';
import { Product } from '../../models';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ CommonModule, ProductGridComponent ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})

export class ProductsComponent {

  products: Array<Product> = [];

  getProducts(): Array<Product> {
    return this.products;
  }

  /**
   *
   */
  constructor(private dataServ: DataService) {    
  }

  ngOnInit(): void {
    this.getProductsFromServices();
  }


  getProductsFromServices() {
    var test = this.dataServ.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
 }
