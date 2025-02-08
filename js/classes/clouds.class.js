class Cloud extends MoveableObject {

    constructor() {
        super().loadImage('img/objects/clouds/PNG/Clouds_gray/Shape2/cloud_shape2_2.png');
        this.y = 10;
        this.x = Math.random() * 500;
        this.height = 50;
    }
}