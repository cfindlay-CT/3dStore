import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card';

@Component({
  selector: 'app-product-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.sass'],
  imports: [ProductCardComponent, CommonModule]
})
export class ProductGridComponent {
  @Input() products: Product[] = [];
  @Input() columns: number = 4;
}
