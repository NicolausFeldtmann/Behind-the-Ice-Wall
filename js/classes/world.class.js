class World {
    char = new Char();
    walkers = [
        new Walker(),
        new Walker(),
        new Walker(),
];
clouds = [
    new Cloud(),
    new Cloud(),
]
backgroundObjects = [
    new BackgrounObject('img/backgrounds/1/2.png', 0, 330),
]

canvas;
ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        
        this.addToMap(this.char);
        this.addOjcToMap(this.clouds);
        this.addOjcToMap(this.walkers);
        this.addOjcToMap(this.backgroundObjects);

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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}