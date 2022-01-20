import Item from "./Item";


export default class Frescos extends Item {

    constructor(description: string, price: number){
        super("Frescos", description, price)
    }

    getTaxe() {
        return 10;
    }
}