import TaxItem from './TaxItem'

export default class Conservas extends TaxItem {

    constructor(description: string, price: number){
        super("Conservas", description, price)
    }

    getTaxe(): number {
        return 20;
    }
}