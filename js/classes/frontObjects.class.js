class FrontaObjects extends MoveableObject {

    width = 720;
    height = 400;

    constructor (imagePaht, x) {
        super().loadImage(imagePaht);
        this.x = x
        this.y = 480 - this.height;
        console.log(FrontaObjects);
        
    }
}