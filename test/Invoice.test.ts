import Beer from "../src/Beer";
import Gin from "../src/Gin";
import Invoice from "../src/Invoice";
import Juice from "../src/Juice";
import Water from "../src/Water";
import Whisky from "../src/Whisky";

test("it should create an invoice and calculate tax", function () {
    const invoice = new Invoice();
    invoice.addItem(new Beer ("Heineken 600ml", 10)); 
    invoice.addItem(new Whisky ("Jack Daniels 1l", 100));
    invoice.addItem(new Water ("Crystal 500ml", 5));
    invoice.addItem(new Juice ("Laranja 300ml", 10));
    invoice.addItem(new Gin ("Shapire 1l", 200));
    const taxes = invoice.calculateTaxes();
    expect(taxes).toBe(61);
});

test("it should create an invoice and calculate total", function () {
    const invoice = new Invoice();
    invoice.addItem(new Beer ("Heineken 600ml", 10)); 
    invoice.addItem(new Whisky ("Jack Daniels 1l", 100));
    invoice.addItem(new Water ("Crystal", 5));
    const total = invoice.calculateTotal();
    expect(total).toBe(115);
});
