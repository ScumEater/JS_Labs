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

    RunAnimateTiles(ctx, canvas) {
        requestAnimationFrame(Animation);
        function Animation() {
            app.Run();
            requestAnimationFrame(Animation);
        }
    }

}
const app = new Application();
app.RunAnimateTiles();

var fps = new FPS();
fps.start();

