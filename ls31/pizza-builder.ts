class Pizza {
    public size: number;
    public toppings: string[];

    constructor() {
        this.toppings = [];
    }
}

class PizzaOrderBuilder {
    private pizza: Pizza;

    constructor(size: number) {
        this.pizza = new Pizza();
        this.pizza.size = size;
    }

    addOlives() {
        this.pizza.toppings.push('olives');
    }

    addTomatos() {
        this.pizza.toppings.push('tomatos');
    }

    build() {
        return this.pizza;
    }
}

const p1 = new PizzaOrderBuilder(20);
p1.addOlives();
p1.addTomatos();

p1.build();
