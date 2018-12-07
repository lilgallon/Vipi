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
    score = 0;
    const SPEED = 3;
    game_running = true;

    // Entities ->
    var owl = new Owl(5, 5, 76, 97);
    var entities = [];

    // Events ->
    var timer = setInterval(generateEntities, 250); // ms

    function generateEntities(){
        if(random(0, 5) == 1)
            entities.push(new Food(width - 50, random(0, height - 50), 20, 20, 1));
        if(random(0, 5) == 1)
            entities.push(new Predator(width - 50, random(0, height - 50), 10, 10, 1));
        if(random(0, 8) == 1)
            owl.updateEnergy(-1);
    }

    var left = false;
    var right = false;
    var up = false;
    var down = false;

    window.addEventListener("keyup", function (event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
          }
        
          switch (event.key) {
            case "ArrowDown":
              down = false;
              break;
              case "ArrowUp":
              up = false;
              break;
            case "ArrowLeft":
             left = false;
              break;
            case "ArrowRight":
              right = false;
              break;
            default:
              return;
          }
        
          // Cancel the default action to avoid it being handled twice
          event.preventDefault();
    }, true);

    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return; // Do nothing if the event was already processed
        }
      
        switch (event.key) {
          case "ArrowDown":
            down = true;
            break;
        case "ArrowUp":
            up = true;
            break;
          case "ArrowLeft":
           left = true;
            break;
          case "ArrowRight":
            right = true;
            break;
          default:
            return;
        }
      
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
      }, true);
      // the last option dispatches the event to the listener first,
      // then dispatches event to window

    function update(){
        context.clearRect(0, 0, width, height)

        context.font = "25px Arial";
        context.fillText("Score: " + score, width / 3 + 100, 30);

        // UPDATE/MOVEMENT SECTION

        if(left){
            owl.hitbox.move(- owl.energy * 2, 0);
            score += owl.energy * 2;
        }
        if(right){
            owl.hitbox.move(owl.energy * 2, 0);
            score += owl.energy * 2;
        }
        if(up){
            owl.hitbox.move(0, - owl.energy * 2);
            score += owl.energy * 2;
        }
        if(down){
            owl.hitbox.move(0, owl.energy * 2);
            score += owl.energy * 2;
        }

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

        if(game_running){
            requestAnimationFrame(update);
        }else{
            clearInterval(timer);
            context.drawImage(health_hud, 100, 0);
        }
    }

    update();
}

function random(min, max){
    return Math.floor(Math.random() * max + min);
}