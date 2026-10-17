import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();
stage.add(layer);


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



const angularSpeed = 90;
const anim = new Konva.Animation(function(frame) {
const angleDiff = (frame.timeDiff * angularSpeed) / 1000;
lemon.rotate(angleDiff);
}, layer);

const scaleUp = new Konva.Tween({
    node: lemon, 
    duration: 2,
    scaleX: 1.5,
    scaleY: 1.5,
    easing: Konva.Easings.EaseInOut
});


lemon.on("mouseover", function(){
    stage.container().style.cursor = 'pointer';
    this.strokeWidth(8);
});

lemon.on('mouseleave', function () {
  stage.container().style.cursor = 'default';
  this.strokeWidth(4);
});


lemon.on('dragstart', function(){
    // anim.start();
});

lemon.on("mousedown", function(){
    scaleUp.play();
    // anim.start();
});

lemon.on('mouseup dragend', function(){
    scaleUp.reverse();
    
});




lemon.draggable(true);

// add the shape to the layer

// add the layer to the stage
layer.add(lemon)