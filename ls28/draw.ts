interface IDrawable {
    draw();
}

class Square implements IDrawable {
    private x: number;
    private y: number;
    private color: string;
    private length: number;

    constructor(x: number, y: number, color: string, length: number) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.length = length;
    }

    print() {
        return ``;
    }

    AreaCalculation() {
        return Math.pow(this.length, 2);
    }

    PerimeterCalculation() {
        return 4 * this.length;
    }

    draw() {
        let _draw = '';
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length; j++) {
                if (i == 0 || i == this.length - 1) {
                    _draw += '*';
                }
                else if (j == 0 || j == this.length - 1) {
                    _draw += '*';
                } else {
                    _draw += ' ';
                }
            }
            _draw += '\n';
        }
        return _draw;
    }

}

const a1 = new Square(2, 2, 'blue', 10);
console.log(a1.draw());