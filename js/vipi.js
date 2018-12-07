$(document).ready(function() {
    execute()
});

function execute(){

    // SET UP EVERYTHING
    var header_height_str = $("#game-container").css("height");
    var header_width_str = $("#game-container").css("width");
    $("#game").css("height", header_height_str);
    $("#game").css("width", header_width_str);

    var header_height = header_height_str.replace("px", "");
    var header_width = header_width_str.replace("px", "");
    var canvas = document.getElementById("game");
    canvas.height = header_height;
    canvas.width = header_width;

    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;

    // Now that everything is set up, we can do the game-related stuff
    
    // Variables
    const SPEED = 3;
    game_running = true;

    // Entities ->
    var owl = new Owl(5, 5, 76, 97);
    var entities = [];

    // Events ->
    var timer = setInterval(generateEntities, 1000); // ms // clearInterval(timer) to stop timer

    function generateEntities(){
        if(random(0, 2) == 1)
            entities.push(new Food(width - 50, random(0, height - 50), 20, 20, 1));
        if(random(0, 2) == 1)
            entities.push(new Predator(width - 50, random(0, height - 50), 10, 10, 1));
    }

    function update(){
        context.clearRect(0, 0, width, height)

        // UPDATE/MOVEMENT SECTION

        for(var i = 0; i < entities.length; i ++){
            entities[i].hitbox.move(-SPEED, 0);
            if(entities[i].hitbox.x + entities[i].hitbox.w < 0)
                entities.splice(i, 1)
            if(owl.hitbox.isOver(entities[i].hitbox)){
                entities[i].interactWith(owl);
                entities.splice(i, 1)
            }
        }

        if(owl.health == 0)
            game_running = false;


        // DRAWING SECTION
       
        // Entities
        for(var entity of entities){
            entity.draw(context);
        }
        owl.draw(context);

        // HUD
        var energy_hud = new Image();
        energy_hud.src = "pictures/energy-" + owl.energy + ".png";
        context.drawImage(energy_hud, 10, 10);

        var health_hud = new Image();
        health_hud.src = "pictures/health-" + owl.health + ".png";
        context.drawImage(health_hud, 100, 0);

        if(game_running)
            requestAnimationFrame(update);
    }

    update();
}

function random(min, max){
    return Math.floor(Math.random() * max + min);
}