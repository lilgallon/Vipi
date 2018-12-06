class Predator{

    constructor(x, y, damages){
        this.position = Position(x, y);
        this.damages = damages;
    }

    get damages(){
        return this.damages;
    }
}