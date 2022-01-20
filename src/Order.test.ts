import Order from "./Order";
import Item from './Item';
import Frescos from "./Frescos";
import Conservas from "./Conservas";


test("Deve criar um pedido e calcular o total", function () {
    const order = new Order();
    order.addItem(new Frescos("description agua",10));
    order.addItem(new Conservas("description leite",10));
   
    const total = order.getTotal();
    expect(total).toBe(20);
});


test("Deve criar um pedido e calcular os impostos", function() {
    const order = new Order();
    order.addItem(new Frescos("description agua",120));     // 10%
    order.addItem(new Conservas("description leite",200));  // 20%

    const taxas = order.getTaxes();
    expect(taxas).toBe(12) 
})


