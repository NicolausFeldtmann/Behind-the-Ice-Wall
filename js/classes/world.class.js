class World {
char = new Char();
level = level1;
canvas;
ctx;
keyboard;
camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld(); 
    }

    setWorld() {
        this.char.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        
        this.ctx.translate(this.camera_x, 0);

        this.addOjcToMap(this.level.sky);
        this.addOjcToMap(this.level.backgroundObjects);
        this.addToMap(this.char);
        this.addOjcToMap(this.level.clouds);
        this.addOjcToMap(this.level.walkers);
        this.addOjcToMap(this.level.walkers2);
        this.addOjcToMap(this.level.forntObjects);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addOjcToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        this.ctx.beginPath();
        this.ctx.lineWidth = "5";
        this.ctx.strokeStyle = "red";
        this.ctx.rect(mo.x, mo.y, mo.x + mo.width, mo.y + mo.heigth);
        this.ctx.stroke();

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}