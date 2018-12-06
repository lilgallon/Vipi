class Food{

    constructor(x, y, energy){
        this.position = Position(x, y);
        this.energy = energy;
    }

    get energy(){
        return this.energy;
    }
}