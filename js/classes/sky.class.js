class Sky extends MoveableObject {

    width = 720;
    height = 250;
    
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}