class World {
    char = new Char();
    walkers = [
        new Walker(),
        new Walker(),
];
    walkers2 = [
        new Walker2(),
    ];
clouds = [
    new Cloud(),
    new Cloud(),
];
backgroundObjects = [
    new BackgrounObject('img/backgrounds/1/2.png', 0),
    new BackgrounObject('img/backgrounds/2/2.png', 0,),
    new BackgrounObject('img/backgrounds/1/2.png', 720),
    new BackgrounObject('img/backgrounds/2/2.png', 720,),
    new BackgrounObject('img/backgrounds/1/2.png', 1440),
    new BackgrounObject('img/backgrounds/2/2.png', 1440,),
    new BackgrounObject('img/backgrounds/1/2.png', 2160),
    new BackgrounObject('img/backgrounds/2/2.png', 2160,),
    new FrontaObjects('img/backgrounds/2/4.png', 1100),
    new FrontaObjects('img/backgrounds/2/4.png', 1900),
    
];
forntObjects =  [
    new FrontaObjects('img/backgrounds/3/9.png', 390),
    new FrontaObjects('img/backgrounds/3/9.png', 0),
    new FrontaObjects('img/backgrounds/3/9.png', 1400),
    new FrontaObjects('img/backgrounds/3/9.png', 1830),
    new FrontaObjects('img/backgrounds/3/9.png', 2000),

];
sky = [
    new Sky('img/objects/sky/1.png',0,0),
    new Sky('img/objects/sky/1.png',720,0),
    new Sky('img/objects/sky/1.png',1440,0),
    new Sky('img/objects/sky/1.png',2160,0),
];

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

        this.addOjcToMap(this.sky);
        this.addOjcToMap(this.backgroundObjects);
        this.addToMap(this.char);
        this.addOjcToMap(this.clouds);
        this.addOjcToMap(this.walkers);
        this.addOjcToMap(this.walkers2);
        this.addOjcToMap(this.forntObjects);

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
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}