class Char extends MoveableObject {

    y = 80;
    speed = 9;

    snow1 = new Audio('audio/snow1.mp3');
    snow2 = new Audio('audio/snow2.mp3');

    IMAGES_WALKING = [
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_000.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_001.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_002.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_003.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_004.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_005.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_006.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_007.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_008.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_009.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_010.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_011.png',
        
    ];

    IMAGES_JUMPING = [
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_000.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_001.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_002.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_003.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_004.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_005.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_000.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_001.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_002.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_003.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_004.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_005.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_000.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_001.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_002.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_003.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_004.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_005.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_000.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_001.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_002.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_003.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_004.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_005.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_000.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_001.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_002.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_003.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_004.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_005.png',

    ];

    IMAGES_SLASHING = [
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_000.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_001.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_002.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_003.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_004.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_005.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_006.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_007.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_008.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_009.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_010.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Slashing/0_Skeleton_Warrior_Slashing_011.png',
    ];

    world;


    constructor() {
        super().loadImage('img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity()
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.snow1.play();
                this.snow2.play();
            }

            if (this.world.keyboard.LEFT && this.x > 110) {
                this.moveLeft();
                this.otherDirection = true;
                this.snow1.play();
                this.snow2.play();
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 40);

        setInterval(() => {

            if(this.isAboveGround()) {
                this.animationFall(this.IMAGES_JUMPING);
            } else {
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
                if(this.world.keyboard.SLASH) {
                    this.animatioSlash(this.IMAGES_SLASHING);
                }
            } 
        }, 30);
    }
}