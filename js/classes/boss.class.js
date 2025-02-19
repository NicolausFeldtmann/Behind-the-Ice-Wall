class Boss extends MoveableObject {

    height = 500;
    width = 400;
    y = 35;

    IMAGE_WALKING = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_011.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_012.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_013.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_014.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_015.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_016.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle/0_Zombie_Villager_Idle_017.png',
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
        this.x = 5040;
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
        this.otherDirection = true;
        //this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.otherDirection = true;
            this.x -= this.speed;
        }, 1000 / 200);
    }
}