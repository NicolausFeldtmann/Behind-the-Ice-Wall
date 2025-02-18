class Boss extends MoveableObject {

    height = 500;
    width = 400;
    y = 35;

    IMAGE_WALKING = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_011.png',
    ];

    IMAGE_IDLE = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_011.png',
    ];

    constructor() {
        super().loadImage('img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_000.png');
        this.x = 700;
        this.loadImages(this.IMAGE_WALKING);
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGE_WALKING.length;
            let path = this.IMAGE_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 7)
        //this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.otherDirection = true;
            this.x -= this.speed;
        }, 1000 / 200);
    }
}