let canvas;
let ctx;
let char = new Image();


function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    char.src = '../img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Idle/0_Skeleton_Warrior_Idle_000.png';
    ctx.drawImage(char, 20, 20, 90, 150);
}