import Tile from './tile.js';
import FPS from './fps.js';

class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
    }
    Run() {
        let tile = new Tile(this.ctx);
        tile.draw();

    }
}
const app = new Application();



requestAnimationFrame(Animation);


var fps = new FPS();
fps.start();

