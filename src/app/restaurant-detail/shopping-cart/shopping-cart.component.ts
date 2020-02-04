import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  public items(): any[] {
    return this.shoppingCartService.items;
  }

  public total(): number {
    return this.shoppingCartService.total();
  }

  public clear() {
    this.shoppingCartService.clear();
  }

  public removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }

  public addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }
}
