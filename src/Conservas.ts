import Item from './Item'

export default class Conservas extends Item {


    constructor(description: string, price: number){
        super("Conservas", description, price)
    }

    getTaxe(): number {
        return 20;
    }
}