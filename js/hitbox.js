class Hitbox{

    /**
     * 
     * @param {int} x position
     * @param {int} y position 
     * @param {int} w width
     * @param {int} h height 
     */
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
    }

    /**
     * 
     * @param {int} dx 
     * @param {int} dy 
     */
    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }

    isOver(hitbox){
        return (this.x < hitbox.x+hitbox.w && this.x+this.w > hitbox.x &&
            this.y < hitbox.y+hitbox.h && this.y+this.h > hitbox.y ) ;
    }
}