class BackgrounObject extends MoveableObject {

    width = 720;
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}