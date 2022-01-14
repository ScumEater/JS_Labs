class Star {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.width;
        this.z = Math.random() * this.canvas.width;
        this.size = 5;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        this.speed = 7;
    }
    move() {
        this.z = this.z - this.speed;
        if (this.z <= 0) {
            this.z = this.canvas.width;
        }
    }

    show() {
        let x, y, s;
        x = (this.x - this.centerX) * (this.canvas.width / this.z);
        x = x + this.centerX;

        y = (this.y - this.centerY) * (this.canvas.width / this.z);
        y = y + this.centerY;

        s = this.size * (this.canvas.width / this.z);


        this.ctx.beginPath();
        this.ctx.fillStyle = "#00996699";
        this.ctx.shadowBlur = 15;
        this.ctx.shadowColor = "green";
        this.ctx.fillRect(x, y, s, s);
        this.ctx.fill();
    }

}

export default Star;