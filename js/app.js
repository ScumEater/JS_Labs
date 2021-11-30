import Tile from './tile.js';
import FPS from './fps.js';

class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
    }
    Run() {
        let rectangle = new Rectangle();
        rectangle.draw(this.ctx);
    }
}

const app = new Application();
app.Run();

var fps = new FPS();
fps.start();