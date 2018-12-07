class Food extends Entity{

    /**
     * It creates some food
     * @param {int} x position
     * @param {int} y position 
     * @param {int} w width
     * @param {int} h height 
     * @param {*} energy the energy that will be given to the owl if he eats it
     */
    constructor(x, y, w, h, energy){
        super(x, y, w, h);
        this.energy = energy;
    }

    /**
     * It gets eaten by an owl
     * @param {Owl} owl 
     */
    interactWith(owl){
        console.log("Owl has eaten some food ! +" + this.energy + " energy.");
        owl.updateEnergy(this.energy);
        console.log("Owl is now at " + owl.energy + " energy.");
    }

    /**
     * It draws the food
     * @param {context} context 
     */
    draw(context){
        context.beginPath();
        context.rect(this.hitbox.x, this.hitbox.y, this.hitbox.w, this.hitbox.h);
        context.fillStyle = "green";
        context.fill();
    }
}