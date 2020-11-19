//namespacing for referencing, also called renaming
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

//global variables
var ball;
var engine, ground, world;

function setup() {
  createCanvas(400,400);
  //Engine means Matter.Engine
 engine= Engine.create();

 //within my own Physics engine, i am creating my world
 world= engine.world;

//passing options to create a static rectangle
var options= {
  isStatic: true
}

//including the options to the object
ground= Bodies.rectangle(200,390,400,20, options);
//all the bodies are added to the world
World.add(world, ground);

//restitution means bounciness of an object
var ballOptions={
restitution:1.0
} 
ball=Bodies.circle(200,100,20,ballOptions);
World.add(world,ball);
 console.log(ground);
 console.log(ground.type);
 console.log(ground.position.x);
 console.log(ground.position.y);
 
 
}

function draw() {
  background(0); 
  Engine.update(engine);

  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
 // console.log(message);
  drawSprites();
}

/*function supar(){
  //local variable
  var message= "this is a message";
}*/
