import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {

    items: CartItem[] = [];

    public clear() {
        this.items = [];
    }

    public addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => {
            return mItem.menuItem.id === item.id;
        });

        if (foundItem) {
            foundItem.quantity = foundItem.quantity + 1;
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
}