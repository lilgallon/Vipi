class Predator{

    /**
     * 
     * @param {int} x position
     * @param {int} y position 
     * @param {int} w width
     * @param {int} h height 
     * @param {*} damages the amount of damage that will be given to the owl if he encounters it
     */
    constructor(x, y, w, h, damages){
        this.hitbox = new Hitbox(x, y, w, h);
        this.damages = damages;
    }
}