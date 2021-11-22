class Rectangle {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 1 + (Math.random() % 100 + 50);;
        this.height = 1 + (Math.random() % 100 + 50);
        this.color = "#" + Math.round(Math.random() * 16777215).toString(16);
    }


    draw() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect((this.width / 2),(this.height / 2),250,250);
        this.ctx.restore();
    }
}
export default Rectangle;