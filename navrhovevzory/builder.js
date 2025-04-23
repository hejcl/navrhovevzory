// Pizza builder – stavíme pizzu po krocích
class Pizza {
    constructor() { this.parts = []; }
    toString() { return this.parts.join(", "); }
}

class PizzaBuilder {
    constructor() { this.pizza = new Pizza(); }
    cheese() { this.pizza.parts.push("sýr"); return this; }
    tomato() { this.pizza.parts.push("rajče"); return this; }
    salami() { this.pizza.parts.push("salám"); return this; }
    build() { return this.pizza; }
}

// Ukázka:
const pizza = new PizzaBuilder().cheese().salami().build();
console.log(pizza.toString()); // sýr, salám
