import { Person } from "./person";
import { Item } from "./item";
import { ItemCategory } from "./itemcategory";

export class Shop {
    name : string;
    owner : Person;
    creationDate : Date;
    stock : Array<Item>; 
    sold : Array<number>;

    constructor() {
    }

    public addItem(item : Item) {
        this.stock.push(item);
    }

    public getItems() {
        return this.stock;
    }

    public getItemsOfCategory(category : ItemCategory) {
        return this.stock.filter(i => i.category === category);
    }

    public getItem(id : string) {
        return this.stock.filter(i => i.id === id);
    }

    


}