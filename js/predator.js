class Predator extends Entity{

    /**
     * 
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

    draw(){
        // TODO
    }
}