import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {

    constructor() { }

    public items: CartItem[] = [];

    public clear() {
        this.items = [];
    }

    public addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => {
            return mItem.menuItem.id === item.id;
        });

        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
    }

    public removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    public total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value + 0);
    }

    public increaseQty(item: CartItem) {
        item.quantity++;
    }

    public decreaseQty(item: CartItem) {
        item.quantity--;
        if (item.quantity == 0) {
            this.removeItem(item);
        }
    }
}