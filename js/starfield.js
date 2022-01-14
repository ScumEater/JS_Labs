import Star from "/js/star.js";

class Starfield {

    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 1920;
        this.canvas.height = 1080;
        this.numStars = 5700;
        this.pushingstar = this.pushingStar();
    }

    pushingStar() {
        let stars = [];
        for (let i = 0; i < this.numStars; i++) {
            stars[i] = new Star();
        }
        return stars;

    }
    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.numStars; i++) {
            this.pushingstar[i].show();
            this.pushingstar[i].move();
        }
    }

    animate() {
        this.draw();
        window.requestAnimationFrame(() => this.animate());
    }
    run(){
        this.animate();
    }
}


let starfield = new Starfield();
starfield.run();
