MAX_HEALTH = 2;
MAX_ENERGY = 6;

class Owl extends Entity{

    /**
     * 
     * @param {int} x position
     * @param {int} y position 
     * @param {int} w width
     * @param {int} h height 
     * @param {int} health from 0 to 2
     * @param {int} energy from 0 to 6
     */
    constructor(x, y, w, h, health = this.MAX_HEALTH, energy = this.MAX_ENERGY){
        super(x, y, w, h);
        this.health = health;
        this.energy = energy;
    }

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
    
    updateHealth(decrement){
        this.health -= this.health;
        if(this.health > this.MAX_HEALTH){
            console.warn("Health has been set to " + this.health + " whereas the max is set at " + this.MAX_HEALTH + ".");
            this.health = this.MAX_HEALTH;
        }else if(this.health < 0){
            console.warn("Health has been set to " + this.health + " whereas the min is set at 0.");
            this.health = 0;
        }
    }

    eat(food){
        this.updateEnergy(food.energy);
    }

    damage(predator){
        this.updateHealth(predator.damages);
    }

    draw(context){
        context.beginPath();
        context.rect(this.hitbox.x, this.hitbox.y, this.hitbox.w, this.hitbox.h);
        context.fillStyle = "pink";
        context.fill();
    }
}