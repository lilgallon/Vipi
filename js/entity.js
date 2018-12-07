class Entity{
    /**
     * It creates an entity
     * @param {int} x x position
     * @param {int} y y position
     * @param {int} w width
     * @param {int} h height
     */
    constructor(x, y, w, h){
        this.hitbox = new Hitbox(x, y, w, h);
    }

    /**
     * Needs to be implemented in children
     * @param {Owl} owl 
     */
    interactWith(owl){}

    /**
     * Needs to be implemented in children
     * @param {context} context 
     */
    draw(context){}
}