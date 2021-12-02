class Tile {
    constructor(ctx) {
        this.ctx = ctx;
        this.cw = canvas.width;
        this.ch = canvas.height;
        this.cols = 10;
        this.rows = 10;
        this.padding = 10;
        this.w = (this.cw - this.padding * this.cols) / this.cols;
        this.h = (this.ch - this.padding * this.rows) / this.rows;

    }
    randomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    draw() {
        this.ctx.translate(-10, 10);
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.ctx.fillStyle = this.randomColor();
                this.ctx.fillRect(x * (this.w + this.padding), y * (this.h + this.padding), this.w, this.h);
                this.ctx.rotate(0.0001);
                this.ctx.clearRect(10,10,500,500);
            }
        }
    }
}


export default Tile;