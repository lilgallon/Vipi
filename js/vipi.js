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

    var entities = [];
    // TODO: init all the stuff

    function update(){
        context.clearRect(0, 0, width, height)
       
        for(entity in entities){
            entity.draw(context);
        }
    }

    requestAnimationFrame(update);
}