import { getSupportedCodeFixes } from "typescript";
import Item from "./Item";

export default abstract class TaxItem extends Item {

    calcTaxes() {
        return (this.price * this.getTaxe())  / 100
    }

    abstract getTaxe(): number;

}