class Device {
    model: string;
    screenSize: number;
    installedApps: number;
    os: string;
    manufacturer: Manufacturer;
    static counter = 0;
    constructor(model: string, screenSize: number, installedApps: number, os: string, manufacturer: Manufacturer) {
        this.model = model;
        this.screenSize = screenSize;
        this.installedApps = installedApps;
        this.os = os;
        this.manufacturer = manufacturer;
        Device.counter++; 
    }

    print() {
        return `model: ${this.model},
        screenSize: ${this.screenSize},
        installedApps: ${this.installedApps},
        os: ${this.os},
        manufacturer: ${this.manufacturer.print()}`;
    }
}

class Tablet extends Device {
    pro: boolean;
    constructor(model: string, screenSize: number, installedApps: number, os: string, manufacturer: Manufacturer, pro: boolean) {
        super(model, screenSize, installedApps, os, manufacturer);
        this.pro = pro;
    }

    print() {
        return `pro: ${this.pro}, ${super.print()}`;
    }
}

class CellPhone extends Device {
    simCompany: string;
    constructor(model: string, screenSize: number, installedApps: number, os: string, manufacturer: Manufacturer, simCompany: string) {
        super(model, screenSize, installedApps, os, manufacturer);
        this.simCompany = simCompany;
    }

    print() {
        return `simCompany: ${this.simCompany}, ${super.print()}`;
    }
}

class Manufacturer {
    country: string;
    yearFounded: number;
    serviceCoverage: string[];
    website: string;
    name: string;

    constructor(country: string, yearFounded: number, serviceCoverage: string[], website: string, name: string) {
        this.country = country;
        this.yearFounded = yearFounded;
        this.serviceCoverage = serviceCoverage;
        this.website = website;
        this.name = name;
    }

    print(): string {
        return `country: ${this.country}, 
        yearFounded: ${this.yearFounded},
        serviceCoverage: ${this.serviceCoverage},
        website: ${this.website},
        name: ${this.name}`;
    }
}
const m1 = new Manufacturer('USA', 1973, ['usa', 'israel'], 'apple.com', 'Apple Inc.');
const d1 = new CellPhone('xs', 6, 50, 'iOs', m1, 'Rami Levi');
const d2 = new CellPhone('xs', 6, 50, 'iOs', m1, 'Rami Levi');
const d3 = new CellPhone('xs', 6, 50, 'iOs', m1, 'Rami Levi');
const d4 = new CellPhone('xs', 6, 50, 'iOs', m1, 'Rami Levi');
const d5 = new CellPhone('xs', 6, 50, 'iOs', m1, 'Rami Levi');

console.log(d1.print());
console.log(Device.counter);