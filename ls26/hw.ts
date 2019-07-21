class Chair {
    public Material: string;
    private _color!: string;
    private _length!: number;

    set Color(c: string) {
        const allowedColors = ['Black', 'White', 'Red', 'Green', 'Blue'];
        const allowedColorsLowerCase = allowedColors.map(function(c) {
            return c.toLowerCase()
        });
        if (allowedColorsLowerCase.indexOf(c.toLowerCase()) > -1) {
            this._color = c;
        } else {
            throw "Color not listed";
        }
    }

    get Color(): string {
        return this._color;
    }

    set Length(x:number) {
        if (x > -1) { 
            this._length = x;
        } else {
            throw "Only positive";
        }
    }

    get Length(): number {
        return this._length;
    }
    
    Width: number;
    Height: number;

    constructor(Material: string, color: string, length: number, width: number, height: number) {
        this.Material = Material;
        this.Color = color;
        this.Length = length;
        this.Width = width;
        this.Height = height;
    }

    calcVolume(): number {
        return this.Height * this.Width * this.Length;
    }

    toString() {
        return `Color: ${this.Color}, Material: ${this.Material}, Volume: ${this.calcVolume()}`;
    }
}

try {
    const c1 = new Chair('s', 'Blue', 1, 1, 1);
    // c1._color = 'gg';
} catch(ex) {
    
}