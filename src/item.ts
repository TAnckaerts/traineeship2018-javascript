import { ItemCategory } from "./itemcategory";

export class Item {
    constructor( public id : string, public name : string, public price : number, 
        public purchasePrice : number, public category : ItemCategory ) {

    }
}