class Rectangle {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.color = "#" + Math.round(Math.random() * 16777215).toString(16);
    }


    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect((this.width / 2),(this.height / 2),150,150);
        this.ctx.restore();
    }
}
export default Rectangle;