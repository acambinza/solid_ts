import TaxItem from './TaxItem';

export default class Frescos extends TaxItem {

    constructor(description: string, price: number){
        super("Frescos", description, price)
    }

    getTaxe() {
        return 10;
    }
}