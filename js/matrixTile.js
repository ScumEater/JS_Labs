import Color_Utils from './color_utils.js';

class MatrixTile {
    constructor(ctx) {
        this.ctx = ctx;
        this.cw = canvas.width;
        this.ch = canvas.height;
        this.cols = 5;
        this.rows = 5;
        this.padding = 5;
        this.w = (this.cw - this.padding * this.cols) / this.cols;
        this.h = (this.ch - this.padding * this.rows) / this.rows;
    }


    draw() {
            let color = new Color_Utils();
            for (let y = 0; y < this.rows; y++) {
                for (let x = 0; x < this.cols; x++) {
                    this.ctx.fillStyle = color.generateColor();
                    this.ctx.fillRect(x * (this.w + this.padding), y * (this.h + this.padding), this.w, this.h);
                    this.ctx.rotate(0.001);
                }
            }
    }
}


export default MatrixTile;