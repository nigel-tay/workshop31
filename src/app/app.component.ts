import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { Cart } from './cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  inventory: Item[] = [{name: 'laptop', description: 'its a laptop lmao', image: 'https://placehold.co/200'}];
  cart: Cart[] = [];

  ngOnInit(): void {
    this.inventory.push({name: 'mouse', description: 'its a mouse lmao', image: 'https://placehold.co/200'})
    this.inventory.push({name: 'screen', description: 'its a screen lmao', image: 'https://placehold.co/200'})
  }

  passItemToCart(item: Item) {
    let foundItem = this.cart.find((ele) => ele.name === item.name)
    if (typeof foundItem !== "undefined") {
      foundItem.quantity++;
    }
    else {
      this.cart.push({...item, quantity: 1});
    }
  }

  // DO REMOVE
  reduceItemCart(cartItem: Cart) {
    
  }


}
