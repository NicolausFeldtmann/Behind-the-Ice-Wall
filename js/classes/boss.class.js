class Boss extends MoveableObject {

    IMAGE_WALKING = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Running/(0_Zombie_Villager_Running_011.png',
    ];

    constructor() {
        super().loadImage(this.IMAGE_WALKING[0]);
        this.loadImages(this.IMAGE_WALKING);

        this.x = 700;
    }
}