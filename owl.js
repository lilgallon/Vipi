class Owl{
    MAX_HEALTH = 5.0;
    MAX_ENERGY = 10.0;

    constructor(x, y, health = this.MAX_HEALTH, energy = this.MAX_ENERGY){
        this.position = new Position(x, y);
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
    
    updateHealth(increment){
        this.health += this.health;
        if(this.health > this.MAX_HEALTH){
            console.warn("Health has been set to " + this.health + " whereas the max is set at " + this.MAX_HEALTH + ".");
            this.health = this.MAX_HEALTH;
        }else if(this.health < 0){
            console.warn("Health has been set to " + this.health + " whereas the min is set at 0.");
            this.health = 0;
        }
    }
    
    get position(){
        return this.position;
    }

    get health(){
        return this.health;
    }

    get energy(){
        return this.energy;
    }
}