import Rectangle from './rectangle.js';

class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
    }
    generateRectangles() {
        let rectangle = new Rectangle();
        rectangle.draw();
    }

}

const app = new Application();
app.generateRectangles();
