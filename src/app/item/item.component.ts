import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item?: Item;
  @Input() isInCart: boolean = false;

  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCartClicked() {
    console.log('add to cart clicked', this.item);
    this.addToCart.emit(this.item);
  }

  removeFromCartClicked(){
    this.removeFromCart.emit(this.item);
  }

}
