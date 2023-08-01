import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  @Input() childInventory: Item[];
  @Output() addItemEvent = new EventEmitter;

  addItem(item: Item) {
    this.addItemEvent.emit(item);
  }
}
