import Order from "./Order";
import Item from './Item';

test("Deve criar um pedido e calcular o total", function () {
    const order = new Order();
    order.addItem(new Item("Agua", "description agua",10));
    order.addItem(new Item("Leite", "description leite",10));
    order.addItem(new Item("Coffe", "description coffe",10));
   
    const total = order.getTotal();
    expect(total).toBe(30);
});

test("Deve criar um pedido e calcular os impostos", function(){
    const order = new Order();
    order.addItem(new Item('Frescos', 'Carapau',120))     // 10%
    order.addItem(new Item('Conservas', 'Salsicha',200)) // 20%

    const taxas = order.getTaxes();
    expect(taxas).toBe(52) 
})


