import { Component } from '@angular/core';
import { IAmazonProduct } from '../../Core/interfaces/IProduct';

@Component({
  selector: 'app-amazon-product',
  imports: [],
  templateUrl: './amazon-product.html',
  styleUrl: './amazon-product.scss',
})
export class AmazonProduct {
  amazonProducts: IAmazonProduct[] = [];
}
