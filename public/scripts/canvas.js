var CANVAS_WIDTH = 1280;
var CANVAS_HEIGHT = 1024;
var stage;

var canvas = {
    width: null,
    height: null,
      
    openCanvas: function () {
        canvas = document.createElement("canvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        var div = document.getElementById("game");
        console.log(div);
        div.appendChild(canvas);
        stage = new createjs.Stage(canvas);
    }
}