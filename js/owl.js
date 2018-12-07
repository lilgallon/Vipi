MAX_HEALTH = 2;
MAX_ENERGY = 6;

class Owl extends Entity{

    /**
     * It creates an owl
     * @param {int} x position
     * @param {int} y position 
     * @param {int} w width
     * @param {int} h height 
     */
    constructor(x, y, w, h){
        super(x, y, w, h);
        this.health = MAX_HEALTH;
        this.energy = MAX_ENERGY;
    }

    /**
     * It updates the owl energy
     * @param {int} increment
     */
    updateEnergy(increment){
        this.energy += this.energy;
        if(this.energy > this.MAX_ENERGY){
            console.warn("Energy has been set to " + this.energy + " whereas the max is set at " + this.MAX_ENERGY + ".");
            this.energy = this.MAX_ENERGY;
        }else if(this.energy < 0){
            console.warn("Energy has been set to " + this.energy + " whereas the min is set at 0.");
            this.energy = 0;
        }
    }
    
    /**
     * it updates the owl health
     * @param {int} increment 
     */
    updateHealth(increment){
        this.health -= this.health;
        if(this.health > this.MAX_HEALTH){
            console.warn("Health has been set to " + this.health + " whereas the max is set at " + this.MAX_HEALTH + ".");
            this.health = this.MAX_HEALTH;
        }else if(this.health < 0){
            console.warn("Health has been set to " + this.health + " whereas the min is set at 0.");
            this.health = 0;
        }
    }

    /**
     * The owl eats the food !
     * @param {Food} food 
     */
    eat(food){
        this.updateEnergy(food.energy);
    }

    /**
     * The owl is attacked by a predator !
     * @param {Predator} predator 
     */
    damage(predator){
        this.updateHealth(predator.damages);
    }

    /**
     * It draws the owl
     * @param {context} context 
     */
    draw(context){
        context.beginPath();
        context.rect(this.hitbox.x, this.hitbox.y, this.hitbox.w, this.hitbox.h);
        context.fillStyle = "pink";
        context.fill();
    }
}