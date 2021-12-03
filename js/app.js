import MatrixTile from './matrixTile.js';

class Application {
    constructor() {
        this.ctx = canvas.getContext('2d');
        this.matrixTile = new MatrixTile(this.ctx);
    }
    Run() {


        this.animate();
    }

    animate() {
        this.matrixTile.draw();
        requestAnimationFrame(this.animate.bind(this));
        }

}

new Application().Run();