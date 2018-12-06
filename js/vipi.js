$(document).ready(function() {
    execute()
});

function execute(){

    var header_height_str = $("#header").css("height");
    var header_width_str = $("#header").css("width");
    $("#canvas").css("height", header_height_str);
    $("#canvas").css("width", header_width_str);

    var header_height = header_height_str.replace("px", "");
    var header_width = header_width_str.replace("px", "");
    var canvas=document.getElementById("canvas");
    canvas.height = header_height;
    canvas.width = header_width;

    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;

    var entities = [];
    // TODO: init all the stuff

    requestAnimationFrame(update);
}

function update(){
    
}