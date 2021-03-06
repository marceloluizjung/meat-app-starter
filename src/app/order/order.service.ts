import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) {
    }

    public itemsValue(): number { 
        return this.cartService.total();
    }

    public cartItems(): CartItem[] {
        return this.cartService.items;
    }

    public increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    public decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    public removeItem(item: CartItem) { 
        this.cartService.removeItem(item);
    }
}