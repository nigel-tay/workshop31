import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/cart';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cart: Cart[];
  
  


}
