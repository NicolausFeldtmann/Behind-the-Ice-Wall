class MoveableObject {
    x = 120;
    y = 310;
    img;
    height = 150;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    speedY = 0;
    accel = 1; 
    otherDirection = false;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y  -= this.speedY;
                this.speedY -= this.accel;
            }
        }, 1000 / 25)
    }

    isAboveGround() {
        return this.y < 300;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    animationFall(images) { 
        let i = this.currentImage % this.IMAGES_JUMPING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    animatioSlash(images) {
        let i = this.currentImage % this.IMAGES_SLASHING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
        console.log('Moving right');
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 18;
    }
}