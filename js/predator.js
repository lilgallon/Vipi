class Predator extends Entity{

    /**
     * It creates a predator
     * @param {int} x position
     * @param {int} y position 
     * @param {int} w width
     * @param {int} h height 
     * @param {*} damages the amount of damage that will be given to the owl if he encounters it
     */
    constructor(x, y, w, h, damages){
        super(x, y, w, h);
        this.damages = damages;
    }

    /**
     * It draws a predator
     * @param {context} context 
     */
    draw(context){
        context.beginPath();
        context.rect(this.hitbox.x, this.hitbox.y, this.hitbox.w, this.hitbox.h);
        context.fillStyle = "red";
        context.fill();
    }
}