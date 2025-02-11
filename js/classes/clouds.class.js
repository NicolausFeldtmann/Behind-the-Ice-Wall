class Cloud extends MoveableObject {

    constructor() {
        super().loadImage('img/objects/clouds/PNG/Clouds_white/Shape2/cloud_shape2_2.png');
        this.y = Math.random() * 30;
        this.x = Math.random() * 500;
        this.height = 50;
        this.moveCloud();
    }

    moveCloud() {
        setInterval( () =>{
            this.x -= 0.2;
        }, 1000 / 60);
    }
}