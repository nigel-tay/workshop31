import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cart: Cart[];
  @Output() reduceCartItemEvent = new EventEmitter;
  
  reduceItemCart(cartItem: Cart) {
    this.reduceCartItemEvent.emit(cartItem);
  }


}
