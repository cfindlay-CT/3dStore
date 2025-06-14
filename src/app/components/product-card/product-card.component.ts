import { Component, Input } from '@angular/core';
import { Product } from '../../models';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'], 
  imports: [
    CarouselModule,
    CommonModule
  ]
})
export class ProductCardComponent {
  @Input() product!: Product;
}
