import Order from "./Order";
import Item from './Item';
import Frescos from "./Frescos";
import Conservas from "./Conservas";
import Vestuarios from "./Vestuarios";
import MessageDataFile from "./MessageDataFIle";


test("Deve criar um pedido e calcular o total", function () {
    const order = new Order(new MessageDataFile());
    order.addItem(new Frescos("description agua",10));
    order.addItem(new Conservas("description leite",10));
   
    const total = order.getTotal();
    expect(total).toBe(20);
});


test("Deve criar um pedido e calcular os impostos", function() {
    const order = new Order(new MessageDataFile());
    order.addItem(new Frescos("description agua",120));     // 10%
    order.addItem(new Conservas("description leite",200));  // 20%
    order.addItem(new Vestuarios("description do vestuarios", 150)); // Isenta

    const taxas = order.getTaxes();
    expect(taxas).toBe(52) 
})

test("Deve criar um pedido e imprimir uma mensagem em portugues", async () => {
    const order = new Order(new MessageDataFile())
    order.addItem(new Vestuarios("description do vestuarios", 150));
    order.addItem(new Frescos("description agua",120));     // 10%
    order.addItem(new Conservas("description leite",200));  // 20%

    const sms = await order.resumeOrder('pt');
    expect(sms).toBe("O total foi de AOA 470, os impostos foram de AOA 52. Obrigado pelo seu pedido!")

});

test("Deve criar um pedido e imprimir uma mensagem em ingles", async () => {
    const order = new Order(new MessageDataFile())
    order.addItem(new Vestuarios("description do vestuarios", 150));
    order.addItem(new Frescos("description agua",120));     // 10%
    order.addItem(new Conservas("description leite",200));  // 20%

    const sms = await order.resumeOrder('en');
    expect(sms).toBe("The total was AOA 470, the taxes was AOA 52. Thanks for your order!")

});

