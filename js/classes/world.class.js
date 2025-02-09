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
];
backgroundObjects = [
    new BackgrounObject('img/backgrounds/1/2.png', 0),
    new BackgrounObject('img/backgrounds/2/2.png', 0,),
];
forntObjects =  [
    new FrontaObjects('img/backgrounds/3/9.png', 390),
    new FrontaObjects('img/backgrounds/3/9.png', 0),
];
sky = [
    new Sky('img/objects/sky/1.png',0,0)
];

canvas;
ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        
        this.addOjcToMap(this.sky);
        this.addOjcToMap(this.backgroundObjects);
        this.addToMap(this.char);
        this.addOjcToMap(this.clouds);
        this.addOjcToMap(this.walkers);
        this.addOjcToMap(this.forntObjects);

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