import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();

// create our shape

//Note : bezierCurveTo draw smooth curve line from curr point to new end point using 2 control points to decide curves
const lemon = new Konva.Shape({
    x : stage.width() / 2,
    y: stage.height() / 2,
    sceneFunc: function(context, shape){
        //Start 'pencil' 
        context.beginPath();
        context.moveTo(20, 100);
        context.bezierCurveTo(50, 20, 150, 20, 200, 100);
        context.bezierCurveTo(150, 180, 50, 180, 20, 100);
        context.closePath();   
        context.fillStrokeShape(shape);
    },
    fill: '#F9D342',
    stroke: '#030303',
    strokeWidth: 4,
});


lemon.on("mouseenter", function(e){
    document.body.style.cursor = 'pointer';
    this.strokeWidth(8);
});

lemon.on('mouseleave', function () {
  document.body.style.cursor = 'default';
  this.strokeWidth(4);
});

lemon.draggable(true);

// add the shape to the layer
layer.add(lemon)
// add the layer to the stage
stage.add(layer);
