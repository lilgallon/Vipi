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
     * It attacks the owl
     * @param {Owl} owl 
     */
    interactWith(owl){
        console.log("He has " + owl.health + " health.");
        console.log("Owl attacked ! -" + this.damages + " health.");
        owl.updateHealth(-this.damages);
        console.log("He is now at " + owl.health + " health.");
    }

    /**
     * It draws a predator
     * @param {context} context 
     */
    draw(context){
        var sprite = new Image();
        sprite.src = "pictures/angry.png";
        context.drawImage(sprite, this.hitbox.x, this.hitbox.y);
    }
}