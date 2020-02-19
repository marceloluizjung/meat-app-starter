import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html',
  styleUrls: ['./order-itens.component.css']
})
export class OrderItensComponent implements OnInit {

  @Input() itens: CartItem[]
  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreiaseQty (item: CartItem) {
    this.increaseQty.emit(item);
  }

  emitDecreiaseQty (item: CartItem) {
    this.decreaseQty.emit(item);
  }

  emitRemove (item: CartItem) {
    this.remove.emit(item);
  }

}
