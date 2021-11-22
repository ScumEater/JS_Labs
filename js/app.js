import Rectangle from './rectangle.js';

class Application {
    constructor() {
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 1000;
        this.canvas.height = 700;
        this.arr = [];
    }

    generateRectangles() {
        for (let squareCnt = 0; squareCnt < 25; squareCnt++) {
            let rectangle = new Rectangle(squareCnt);
            let rectangle_draw = new Rectangle(this.ctx);
            this.arr.push(rectangle);
            rectangle_draw.draw();
            console.log(rectangle);
        }
    }
}
const app = new Application()
app.generateRectangles();


