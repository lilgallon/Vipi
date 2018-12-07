$(document).ready(function() {
    execute()
});

function execute(){

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

    var owl = new Owl(5, 5, 50, 60, 2, 6);
    var entities = [];
    entities.push(owl);
    entities.push(new Food(15, 50, 20, 20, 1));
    entities.push(new Predator(50, 30, 10, 10, 1));

    function update(){
        context.clearRect(0, 0, width, height)
       
        // Entities
        for(var entity of entities){
            entity.draw(context);
        }

        // HUD
        var energy_hud = new Image();
        energy_hud.src = "pictures/energy-" + owl.energy + ".png";
        console.log(energy_hud.src);
        context.drawImage(energy_hud, 10, 10);

        var health_hud = new Image();
        health_hud.src = "pictures/health-" + owl.health + ".png";
        console.log(health_hud.src);
        context.drawImage(health_hud, 100, 0);
    }

    requestAnimationFrame(update);
}