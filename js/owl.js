MAX_HEALTH = 2;
MAX_ENERGY = 6;
MAX_SPRITE_ID_OWL = 2;

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
        this.sprite_id = 0;
        this.health = MAX_HEALTH;
        this.energy = MAX_ENERGY;
    }

    /**
     * It updates the owl energy
     * @param {int} increment
     */
    updateEnergy(increment){
        this.energy += increment;
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
        this.health += increment;
        if(this.health > this.MAX_HEALTH){
            console.warn("Health has been set to " + this.health + " whereas the max is set at " + this.MAX_HEALTH + ".");
            this.health = this.MAX_HEALTH;
        }else if(this.health < 0){
            console.warn("Health has been set to " + this.health + " whereas the min is set at 0.");
            this.health = 0;
        }
    }

    /**
     * It draws the owl
     * @param {context} context 
     */
    draw(context){
        var sprite = new Image();
        sprite.src = "pictures/owl-" + this.sprite_id + ".png";
        context.drawImage(sprite, this.hitbox.x, this.hitbox.y);
        this.sprite_id = (this.sprite_id + 1) % (MAX_SPRITE_ID_OWL + 1);
    }
}