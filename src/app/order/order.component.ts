import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public paymentOptions: any[] = [{ label: "Dinheiro", value: "MON" }, { label: "Débito", value: "DEB" }];
  public delivery: number = 8;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  public itemsValue(): number {
    return this.orderService.itemsValue();
  }

  public cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  public increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  public decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  public remove(item: CartItem) {
    this.orderService.removeItem(item);
  }
}
