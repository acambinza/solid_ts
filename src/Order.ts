import Item from "./Item";
export default class Order {
    items: Item[];

    constructor () {
        this.items = [];
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }


    getTaxes() {
        let taxes  = 0;
        for(const item of this.items){
            if(item.category === "Frescos")
                taxes += (item.price * 10) / 100
            
            if(item.category === "Conservas")
                taxes += (item.price * 20) / 100
        }

        return taxes;
    }

   
}
